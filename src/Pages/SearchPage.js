import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useDebounce } from "../useDebounce";
import { Book } from "../components/Book";
import * as BooksAPI from "../BooksAPI";


export const SearchPage = ({ bookShelf, onShelfChange }) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const debounceValue = useDebounce(searchValue, 400);

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchBooks = async (value) => {
    try {
      const books = await BooksAPI.search(value, 10);

      books.forEach((book) => {
        bookShelf.forEach((bookItem) => {
          if (bookItem.id === book.id) {
            book.shelf = bookItem.shelf;
          }
        });
      });
      setResults(books);
    } catch (error) {
      setResults([]);
      setError(error);
    }
  };

  useEffect(() => {
    if (!debounceValue) {
      setResults([]);
    } else {
      fetchBooks(debounceValue);
    }
    // eslint-disable-next-line
  }, [debounceValue]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchValue}
            placeholder="Search by title, author, or ISBN"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {error && <p>Error</p>}
          {!results.length
            ? ""
            : results.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  bookShelf={bookShelf}
                  onShelfChange={onShelfChange}
                />
              ))}
        </ol>
      </div>
    </div>
  );
};

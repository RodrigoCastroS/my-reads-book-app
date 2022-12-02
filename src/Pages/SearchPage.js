import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useDebounce } from "../useDebounce";
import { Book } from "../components/Book";
import * as BooksAPI from "../BooksAPI";


export const SearchPage = () => {

  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const debounceValue = useDebounce(searchValue, 400);

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  }

  const fetchBooks = async (value) => {

    try {
      const books = await BooksAPI.search(value, "5");
      setResults(books);

    } catch (error) {
      setResults(false);
      setError(error)
    }
  }

  const updateShelf = (book, shelfToUpdate) => {
    book.shelf = shelfToUpdate;
    BooksAPI.update(book, shelfToUpdate);
  };
 
  useEffect(() => {
    if(!debounceValue){
      setResults([]);
    } else {
      fetchBooks(debounceValue);
    }
  
     
  }, [debounceValue])

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
              {
                !results.length 
                        ? ""
                        : results.map(book => (
                          <Book key={book.id} book={book} onShelfChange={updateShelf}/>
                          ))
              }
              
            </ol>
          </div>
        </div>
  )
}

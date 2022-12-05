import { Link } from "react-router-dom";
import { BookShelf } from "../components/BookShelf";
import { shelves } from "../bookConfig";
import { Book } from "../components/Book";

export function HomePage({ books, onShelfChange }) {
  return (
    <div className="list-books app">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.keys(shelves).map((shelf) => {
            const booksOnThisShelf = books.filter(
              (book) => book.shelf === shelf && book.shelf !== "none"
            );
            return (
              <BookShelf key={shelf} shelfName={shelves[shelf]}>
                {booksOnThisShelf.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    onShelfChange={onShelfChange}
                  />
                ))}
              </BookShelf>
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

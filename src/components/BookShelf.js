import { Book } from "./Book"
import { toCamelCase } from "../utils";

export const BookShelf = ({ shelf, books, onShelfChange }) => {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books
              .filter(book => book.shelf === toCamelCase(shelf))
              .map(book => (
                <Book 
                  key={book.id} 
                  book={book}
                  onShelfChange={onShelfChange}/>
            )) }
          </ol>
        </div>
      </div>
    )
}
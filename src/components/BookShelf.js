import { Book } from "./Book"

export const BookShelf = ({ shelf, shelfName, books, onShelfChange }) => {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books
              .filter(book => book.shelf === shelf)
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
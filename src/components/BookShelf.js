// import { Book } from "./Book"

export const BookShelf = ({ children, shelfName }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{children}</ol>
      </div>
    </div>
  );
};

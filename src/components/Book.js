import { bookOptions } from "../bookConfig";

export const Book = ({ book, onShelfChange }) => {
  const handleChange = (e) => {
    onShelfChange(book, e.target.value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf ? book.shelf : "none"}
              onChange={handleChange}
            >
              <option value="move" disabled>
                "Move to..."
              </option>
              {Object.keys(bookOptions).map((option) => (
                <option key={bookOptions[option]} value={option}>
                  {bookOptions[option]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{book?.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(",") : ""}
        </div>
      </div>
    </li>
  );
};

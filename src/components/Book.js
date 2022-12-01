

export const Book = ({book, onShelfChange}) => {
  const bookOptions = {
    currentlyReading: "Currently Reading",
    wantToRead : "Want to Read",
    read: "Read"
  };

  const handleChange = (e) => {
    onShelfChange(book, e.target.value);
  }

  return (
      <li>
        <div className="book">
          <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage:
                    `url(${book?.imageLinks?.thumbnail})`,
                }}
              ></div>
            <div className="book-shelf-changer">
              <select value={book?.shelf} onChange={handleChange}>
                <option value="none" disabled>
                  Move to...
                </option>
                { Object.keys(bookOptions).map( option => (
                  <option key={bookOptions[option]} value={option}>
                      {bookOptions[option]}
                  </option>
                  )
                )}
              </select>
            </div>
          </div>
          <div className="book-title">{book?.title}</div>
          { 
              book?.authors
                .map(author => <div key={author} className="book-authors">{author}</div>)
          }
        </div>
      </li>
  )
}

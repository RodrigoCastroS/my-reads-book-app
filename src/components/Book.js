

export const Book = ({book, onShelfChange}) => {
  const bookOptions = ["Currently Reading", "Want to Read", "Read", "None"];

  const handleChange = (e) => {
    console.log(e.target.value);
    onShelfChange(book);
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
              <select value={book?.id} onChange={handleChange}>
                <option value="none" disabled>
                  Move to...
                </option>
                { bookOptions.map( option => (
                  <option key={option} value={option}>
                      {option}
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

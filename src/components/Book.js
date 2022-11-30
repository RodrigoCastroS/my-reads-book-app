

export const Book = ({book}) => {
  const bookOptions = ["Currently Reading", "Want to Read", "Read", "None"];

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
              <select>
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

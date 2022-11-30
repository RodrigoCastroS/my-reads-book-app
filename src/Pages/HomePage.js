import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";
import { BookShelf } from "../components/BookShelf";


export function HomePage() {
const [books, setBooks] = useState([]);

const shelves = ["Currently Reading", "Want to Read", "Read"];
  
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });    
  }, [])

  
  return (
      <div className="list-books app">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  shelves.map(shelf => (
                      <BookShelf key={shelf} shelf={shelf} books={books}/>
                  ))
                }
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
      </div>
  )
}

import { Link } from "react-router-dom";
import { BookShelf } from "../components/BookShelf";


export function HomePage({books, onShelfChange}) {
// const [books, setBooks] = useState([]);

const shelves = {
  currentlyReading: "Currently Reading",
  wantToRead : "Want to Read",
  read: "Read"
};
  
  // useEffect(() => {
  //   BooksAPI.getAll().then((books) => {
  //     setBooks(books);
  //   });    
  // }, [])

  // const updateShelf = (book, shelfToUpdate) => {
  //   const updatedBooks = books.filter(b => b.id !== book.id);
  //   book.shelf = shelfToUpdate;
    
  //   setBooks([...updatedBooks, book]);
  //   BooksAPI.update(book, shelfToUpdate);
  // };

  
  return (
      <div className="list-books app">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  Object.keys(shelves).map(shelf => (
                      <BookShelf 
                        key={shelf} 
                        shelf={shelf} 
                        shelfName={shelves[shelf]}
                        books={books}
                        onShelfChange={onShelfChange}/>
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

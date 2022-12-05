import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";



function App() {
  const [books, setBooks] = useState([]);

  const updateShelf = (book, shelfToUpdate) => {
    const updatedBooks = books.filter(b => b.id !== book.id);
    book.shelf = shelfToUpdate;
    
    setBooks([...updatedBooks, book]);
    BooksAPI.update(book, shelfToUpdate);
  };

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    })
    return (() => {
      setBooks([]);
    });    
  }, [])

  return (
    <Routes>
      <Route exact path="/" element={<HomePage books={books} onShelfChange={updateShelf} />} />
      <Route path="/search" element={<SearchPage bookShelf={books} onShelfChange={updateShelf} />} />
    </Routes>

  );
}

export default App;

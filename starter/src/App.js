import "./App.css";
import { useState } from "react";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";
import { Route, Routes } from "react-router-dom";


function App() {
  // const [showSearchPage, setShowSearchpage] = useState(true);

  return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

  );
}

export default App;

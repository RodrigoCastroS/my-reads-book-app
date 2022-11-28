import "./App.css";
import { useState } from "react";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";


function App() {
  const [showSearchPage, setShowSearchpage] = useState(true);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;

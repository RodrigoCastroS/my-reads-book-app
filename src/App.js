import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>

  );
}

export default App;

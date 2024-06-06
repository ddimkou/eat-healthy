import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Home from "./components/Home";
import About from "./components/About";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <Router>
      <div className="text-2xl text-red-400 font-montserrat bg-eggshell-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Introduction />} />
        </Routes>
        <NewsLetter />
      </div>
    </Router>
  );
};

export default App;

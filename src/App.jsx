import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Blog from "./pages/blog";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  );
}

export default App;

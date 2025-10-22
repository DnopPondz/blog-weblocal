import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          MyApp
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-600"
        >
          ☰
        </button>

        <ul
          className={`md:flex md:gap-6 absolute md:static bg-white left-0 w-full md:w-auto transition-all duration-300 ${
            open ? "top-12" : "top-[-400px]"
          }`}
        >
          <li>
            <Link
              to="/blog"
              className="block py-2 px-4 hover:text-blue-500 transition"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-4 hover:text-blue-500 transition"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-4 hover:text-blue-500 transition"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-forest-green font-bold flex items-center justify-between px-4 md:px-16 shadow-md">
      {/* logo */}
      <div className="bg-logobg bg-cover bg-center w-16 h-16 md:w-20 md:h-20"></div>
      {/* hamburger menu btn */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-forest-green focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* nav */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 cursor-pointer text-sm absolute md:relative top-16 md:top-0 right-0 md:left-auto bg-white md:bg-transparent py-4 md:py-0 px-5 md:px-0 shadow-md md:shadow-none z-10`}
      >
        <li
          onClick={handleMenuItemClick}
          className="hover:text-cranberry-red transition-colors duration-300"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={handleMenuItemClick}
          className="hover:text-cranberry-red transition-colors duration-300"
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={handleMenuItemClick}
          className="hover:text-cranberry-red transition-colors duration-300"
        >
          <Link to="/lifestyle">Lifestyle</Link>
        </li>
        <li
          onClick={handleMenuItemClick}
          className="hover:text-cranberry-red transition-colors duration-300"
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          onClick={handleMenuItemClick}
          className="hover:text-cranberry-red transition-colors duration-300"
        >
          <Link to="/introduction">Introduction</Link>
        </li>
        <li
          onClick={handleMenuItemClick}
          className="hover:text-cranberry-red transition-colors duration-300"
        >
          <Link to="/test">Test</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

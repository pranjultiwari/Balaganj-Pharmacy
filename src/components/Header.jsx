import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" text-white bg-black ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left side: Logo and Company Name */}
        <div className="flex items-center">
          <img
          
            src="public\Logo.png"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-lg font-bold text-[#5cb25d]">
          </span>
        </div>
        {/* Right side: Navigation Links */}
        <nav className={`hidden md:flex space-x-6 text-white`}>
          <Link to="/" className="hover:text-green-500">
            Home
          </Link>
          <Link to="/services" className="hover:text-green-500">
            Services
          </Link>
          <Link to="/contact" className="hover:text-green-500">
            Contact
          </Link>
          <Link to="/about" className="hover:text-green-500">
            About
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-[black] text-white`}
      >
        <nav className="flex flex-col space-y-2 px-6 pb-4">
          <Link to="/" className="hover:text-green-500">
            Home
          </Link>
          <Link to="/services" className="hover:text-green-500">
            Services
          </Link>
          <Link to="/contact" className="hover:text-green-500">
            Contact
          </Link>
          <Link to="/about" className="hover:text-green-500">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

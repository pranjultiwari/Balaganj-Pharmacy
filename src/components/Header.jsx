import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white bg-[#0B1F52]">
      {/* Mini Header */}
      <div className="bg-[#000000] text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-6 text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <a
                href="https://www.google.com/maps/place/Balaganj+Pharmacy/@26.8720663,80.8786663,17z/data=!3m1!4b1!4m6!3m5!1s0x399bffcd7ef6e469:0x6fb9b36ed3fc620d!8m2!3d26.8720663!4d80.8812412!16s%2Fg%2F11jpwznmcy?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-green-500"
              >
                <FontAwesomeIcon icon={faLocationDot} className="text-[#5cb25d]" />
                <span>Locate Balaganj Pharmacy</span>
              </a>
            </span>
            <span className="flex items-center space-x-2">
              <a href="tel:+01234567890" className="flex items-center space-x-2 hover:text-green-500">
                <FontAwesomeIcon icon={faPhone} className="text-[#5cb25d]" />
                <span>+01234567890</span>
              </a>
            </span>
            <span className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faClock} className="text-[#5cb25d]" />
              <span>Mon-Sat: 8:00am to 12:am</span>
            </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/99999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="hover:animate-bounce" />
            </a>
            <a href="#" className="hover:text-green-500">
              <FontAwesomeIcon icon={faFacebookF} className="hover:animate-bounce" />
            </a>
            <a href="#" className="hover:text-green-500">
              <FontAwesomeIcon icon={faInstagram} className="hover:animate-bounce" />
            </a>
            <a href="#" className="hover:text-green-500">
              <FontAwesomeIcon icon={faLinkedinIn} className="hover:animate-bounce" />
            </a>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left side: Logo and Company Name */}
        <Link to="/" className="flex items-center">
          <img
            src="src/assets/images/Logo.png"
            alt="Logo"
            className="h-15 w-60 mr-2"
          />
          <span className="text-lg font-bold text-[#5cb25d]"></span>
        </Link>
        {/* Right side: Navigation Links */}
        <nav className={`hidden md:flex space-x-6 text-white`}>
          <Link to="/" className="hover:text-green-500" >
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

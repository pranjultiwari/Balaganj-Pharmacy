import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Company Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Balaganj Pharmacy</h2>
            <p>Explore the <strong>widest range</strong> of <strong>Healthcare products</strong> from your <strong>trusted store</strong></p>
          </div>  
          {/* Useful Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Useful Links</h2>
            <ul>
              <li><Link to="/" className="hover:text-green-300">Home</Link></li>
              <li><Link to="/services" className="hover:text-green-300">Services</Link></li>
              <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
              <li><Link to="/about" className="hover:text-green-500">About</Link></li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul>
              <li className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m0 4v12m-3 0h6" />
                </svg>
                123 Medical St, Health City, IN
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m0 4v12m-3 0h6" />
                </svg>
                +91 98765 43210
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m0 4v12m-3 0h6" />
                </svg>
                info@balaganjpharmacy.com
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-green-400 mt-6 pt-4 text-center">
          &copy; {new Date().getFullYear()} Balaganj Pharmacy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

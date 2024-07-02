import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-black py-8 border border-e-2 border-t-green-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul className="mb-4">
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 mr-2" />
                <strong>544/012N, Balaganj Pharmacy, Campbell Rd, near NAYARA PETROL PUMP, Balaganj, Lucknow, Uttar Pradesh 226003</strong>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" />
                <a href="tel:+917905209159" target='_blank'>+91 7905209159</a>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2" />
                <a href="https://wa.me/7905209159"target='_blank'>WhatsApp</a>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 mr-2" />
                <a href="https://www.facebook.com"target='_blank'>Facebook</a>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 mr-2" />
                <a href="https://www.instagram.com/balaganj_pharmacy__/?hl=en" target='_blank'>Instagram</a>
              </li>
            </ul>
          </div>
          {/* Google Maps */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <iframe
              title="Google Maps"
              className="w-full h-80 rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9897666232346!2d80.8763702805208!3d26.872066216520267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bffcd7ef6e469%3A0x6fb9b36ed3fc620d!2sBalaganj%20Pharmacy!5e0!3m2!1sen!2sin!4v1719920856651!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
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

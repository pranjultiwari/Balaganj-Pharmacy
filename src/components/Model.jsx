import React from 'react';
import { AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>
        <div className="flex flex-col space-y-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
            <AiOutlinePhone />
            <span> <a href="tel:+917905209159" target='_blank'> Call Us </a></span>
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
            <AiOutlineWhatsApp />
            <span> <a href="https://wa.me/7905209159" target='_balnk'>Message Us on WhatsApp</a></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="min-h-screen bg-[#f0fdf4] flex flex-col justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-[#5cb25d]">404</h1>
        <h2 className="text-2xl font-semibold text-[#5cb25d] mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          className="px-4 py-2 bg-[#5cb25d] text-white rounded hover:bg-[#4aa04d] transition duration-300"
          to="/"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

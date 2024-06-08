import React, { useState } from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center mb-4 mt-5">
      <div className="flex items-center w-full max-w-md">
        <input
          type="text"
          className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg ml-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

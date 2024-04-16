// components/SearchBar.js
import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Call your API endpoint with the search term here
  };

  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search products and exporters"
        className="rounded-md p-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md">Search</button>
    </form>
  );
};

export default SearchBar;

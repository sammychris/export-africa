'use client'
import { useState, useEffect } from 'react'; 

const SearchAndFilterBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([]);
  const [productCategories, setProductCategories] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // TODO: Trigger search based on searchTerm
  };

  return (
    <div className="mb-6 flex items-center gap-6">
      <div className="flex-grow">
        <input 
          type="text"
          placeholder="Search by name, product, etc."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Filter Dropdowns */}
      <div className="flex gap-4">
        <select className="border border-gray-300 p-2 rounded-md">
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>

         {/* Add more dropdowns as needed (Location, Product Category, etc.) */}
         <select className="border border-gray-300 p-2 rounded-md">
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>

        <select className="border border-gray-300 p-2 rounded-md">
          <option value="">All Categories</option>
          {productCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilterBar;

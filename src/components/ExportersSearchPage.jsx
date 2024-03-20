// SearchFilters.jsx
import React from 'react';

const demoExporters = [
  {
    id: 1,
    name: 'ExportCo 1',
    productType: 'Textiles',
    location: 'Nigeria',
    certification: 'ISO 9001',
  },
  {
    id: 2,
    name: 'ExportCo 2',
    productType: 'Agricultural Products',
    location: 'South Africa',
    certification: 'Organic',
  },
  // Add more demo exporters as needed
];

const SearchFilters = () => {
  // State for managing filters and search results
  const [filters, setFilters] = React.useState({
    productType: '',
    location: '',
    certification: '',
  });

  // State for storing search results
  const [searchResults, setSearchResults] = React.useState([]);

  // Function to handle search based on current filters
  const handleSearch = () => {
    // Your search logic here
    const filteredResults = demoExporters.filter((exporter) => {
      return (
        (!filters.productType || exporter.productType.toLowerCase().includes(filters.productType.toLowerCase())) &&
        (!filters.location || exporter.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.certification || exporter.certification.toLowerCase().includes(filters.certification.toLowerCase()))
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-neutral">
      <h2 className="text-2xl font-bold mb-4 text-deep-blue">Search and Filters</h2>
      <div className="mb-4">
        <label htmlFor="productType" className="block text-sm font-medium text-deep-blue">
          Product Type
        </label>
        <input
          type="text"
          id="productType"
          onChange={(e) => setFilters({ ...filters, productType: e.target.value })}
          value={filters.productType}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-deep-blue"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-deep-blue">
          Location
        </label>
        <input
          type="text"
          id="location"
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          value={filters.location}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-deep-blue"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="certification" className="block text-sm font-medium text-deep-blue">
          Certification
        </label>
        <input
          type="text"
          id="certification"
          onChange={(e) => setFilters({ ...filters, certification: e.target.value })}
          value={filters.certification}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-deep-blue"
        />
      </div>

      <button
        type="button"
        onClick={handleSearch}
        className="bg-deep-blue text-white p-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring focus:border-deep-blue"
      >
        Search
      </button>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4 text-deep-blue">Search Results</h3>
        <ul>
          {searchResults.map((exporter) => (
            <li key={exporter.id} className="mb-2">
              {exporter.name} - {exporter.productType} - {exporter.location} - {exporter.certification}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilters;

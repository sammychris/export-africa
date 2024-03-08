'use client'
import { useState, useEffect } from 'react';
// Import components you might use for display:
// import SearchBar from './SearchBar';
// import FilterPanel from './FilterPanel'; 
// import ProductCard from './ProductCard'; //  Represent result display


const demoProducts = [
  { 
      id: 1, 
      name: "Robusta Coffee Beans", 
      exporter: "ABC Exports, Ghana", 
      certifications: ["Fair Trade", "Organic"],
      country: "Ghana"
  },
  { 
      id: 2, 
      name: "Premium Cotton T-Shirts", 
      exporter: "XYZ Manufacturing, Kenya", 
      certifications: ["Organic"],
      country: "Kenya"
  },
  // ... Add more sample products (ideally 10+) ...
];




export default function Screen3() {
  const [tutorialStep, setTutorialStep] = useState(1);
  // ... State to hold search term, filter settings
  const [searchTerm, setSearchTerm] = useState('');
const [selectedFilters, setSelectedFilters] = useState({
  certifications: [],
  country: null,
  // ... Add filters as needed
});

const [filteredProducts, setFilteredProducts] = useState(demoProducts); // Start with all

useEffect(() => {
  let updatedResults = demoProducts;

  if (searchTerm) { 
    updatedResults = updatedResults.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (selectedFilters.certifications.length > 0) {
    // ... Similar filtering logic based on certifications
  }

  // ... Filtering based on country and other selected filters 

  setFilteredProducts(updatedResults);
}, [searchTerm, selectedFilters]); 

  // Simulated Search Result Updates  - Adapt as needed
  const updateMockSearchResults = (searchTerm, filters) => {
    // Simulate a call to your search system updating based on  inputs
    console.log("Search Query:", searchTerm, filters); 
  };

  return (
    <div className="container mx-auto max-w-screen-md p-8">
      <h1 className="text-2xl font-bold mb-6">Learn to Refine Your Search</h1>

      {/* Tutorial Steps (conditionally render based on tutorialStep) */}
      {tutorialStep === 1 && (
        <div className="tutorial-step">
          {/* Explain basic search with SearchBar ... */}

          <SearchBar onSearchChange={setSearchTerm} />
        </div>
      )}

      {tutorialStep === 2 && (
        <div className="tutorial-step">
          <h2>Using Certifications</h2>
          <p>Let's find exporters of certified organic coffee.</p>
          <FilterPanel 
            showCertificationFilter={true}
            selectedFilters={selectedFilters} // Pass down for display, if needed
            onFilterChange={setSelectedFilters}  // Receive updates
            // Other props to manage state 
          />
          {/* Update search results on change: */}
          <button onClick={() => setTutorialStep(3)}>
            Apply
          </button>
        </div>
      )}

      {/* ... More steps as needed  ... */}

      {/* Search Results Area (adjust according to your product listing display) */}
      <div className="search-results">
        <p>Displaying results based on tutorial filters...</p>
        <div className="search-results">
          <p>Displaying {filteredProducts.length} results:</p> 
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} /> 
          ))}
        </div>
        {/* <ProductCard /> components -  Ideally tied to search state */} 
      </div>
    </div>
  );
}



// import { useState } from 'react';

function SearchBar({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearchChange) {
      onSearchChange(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for products..."
        className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
      />
    </form>
  );
}

// export default SearchBar;


// import { useState } from 'react';

function FilterPanel({ showCertificationFilter, onFilterChange }) {
  const [selectedCertifications, setSelectedCertifications] = useState([]);

  // ... Handle updates to selectedCertifications

  // Country selector (similar structure)
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Notify parent when updates occur (if using onFilterChange prop)
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({ 
         certifications: selectedCertifications,
         country: selectedCountry
      });
    }
  }, [selectedCertifications, selectedCountry]);

  return (
    <div>
      {showCertificationFilter && (
        <div className="mb-4">
          {/* Certification checkboxes or dropdown */}
          <label htmlFor="certifications" className="block text-gray-700 font-medium mb-2">
             Certifications
          </label>
          <div> 
             <label>
               <input type="checkbox" value="fairTrade" /* ... */ /> 
               Fair Trade
             </label>
              {/* ... More certification options */}
          </div>
        </div>
      )}

      {/* Country Filter  - Similar structure  */}
    </div>
  );
}

// export default FilterPanel;





function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 rounded-md p-4">
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p>Exporter: {product.exporter}</p>
      {product.certifications.length > 0 && (
        <div>
          Certifications: {product.certifications.join(', ')}
        </div>
      )}
    </div>
  );
}

// export default ProductCard;

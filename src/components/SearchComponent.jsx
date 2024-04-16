import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchComponent() {
  const [searchType, setSearchType] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = async (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // console.log()

    if (searchTerm.length > 0) {
      try {
        const {data} = await axios.get(`/api/${searchType}/search?query=${searchTerm}`);
        setSuggestions(data.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.companyName); // Or relevant field
    setShowDropdown(false);
    // (Optional) Trigger the full search here
  };

    return (
        <div className="max-w-[600px] mx-auto flex flex-col gap-4">
            <select className="border rounded-md p-3" onChange={e => setSearchType(e.target.value)}>
                <option value="products">Search Products</option>
                <option value="exporters">Search Exporters</option>
            </select>
            <div className="relative">
            <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)} 
            />

            {showDropdown && (
                <div className="absolute top-full w-full bg-white shadow-md rounded-md p-2 text-left">
                {suggestions.length > 0 ? (
                    <ul>
                    {suggestions.map((suggestion) => (
                        <li
                        key={suggestion._id}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSuggestionClick(suggestion)}
                        >
                        {suggestion.companyName} 
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p className="px-2">No suggestions found</p>
                )}
                </div>
            )}
            </div>
        </div>
    );
}

export default SearchComponent;

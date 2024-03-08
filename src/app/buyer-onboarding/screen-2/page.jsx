'use client'
import { useState } from 'react';
import Select from 'react-select'; 
import MapInput from '@/components/MapInput'; // Assuming a custom map component

function Screen2() {
  const [country, setCountry] = useState('');
  const [regions, setRegions] = useState([]); // For selected regions within a country
  const [mapSelection, setMapSelection] = useState(null); 

  // Fetch the options dynamically
  const countryOptions = [
    { value: 'NG', label: 'Nigeria' },
    { value: 'GH', label: 'Ghana' },
    { value: 'KE', label: 'Kenya' },
    // ... more options
  ];

  // ... Handle fetching & updating regions based on country

  return (
    <div className="container mx-auto max-w-screen-md p-8">
      <h1 className="text-2xl font-bold mb-6">Where Should We Look?</h1>

      <form className="bg-white p-6 rounded-lg shadow-md">
        {/* Country Selector */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
            Country
          </label>
          <Select
            options={countryOptions}
            value={country ? { value: country, label: country } : null} // Handle display
            onChange={(selectedOption) => setCountry(selectedOption.value)}
            placeholder="Select a country..."
          />
        </div>

        {/* Region Selector (Conditional display) */}
        {country && (
          <div className="mb-4">
            <label htmlFor="regions" className="block text-gray-700 font-medium mb-2">
              Regions/States
            </label>
            <Select
              options={regions} // Populate based on selected country
              isMulti
              // ... (Similar structure as before)
            />
          </div>
        )}

        {/* Map-based Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            (Optional) Select Areas on a Map
          </label>
          <MapInput onSelectionChange={setMapSelection} /> 
        </div>

        {/* ... Continue Button ... */}
      </form>
    </div>
  );
}

export default Screen2;

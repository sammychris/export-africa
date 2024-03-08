'use client'
import { useState } from 'react';
import Select from 'react-select'; // Or your dropdown library of choice

function Screen1() {
  const [mainCategories, setMainCategories] = useState([]);
  const [quickPick, setQuickPick] = useState('');

  //  Fetch from your data source
  const mainCategoryOptions = [
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'apparel', label: 'Apparel & Textiles' },
    { value: 'electronics', label: 'Electronics' },
    // ... more options
  ];

  // Quick Picks - Define based on your most common product types
  const quickPicks = ['Coffee Beans', 'T-Shirts', 'Mobile Phones', /* ... */];

  return (
    <div className="container mx-auto max-w-screen-md p-8">
      <h1 className="text-2xl font-bold mb-6">Let's Focus Your Search</h1>
      
      <OnboardingStart />

      <form className="bg-white p-6 rounded-lg shadow-md">
        {/* Main Category Selection */}
        <div className="mb-4">
          <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">
            Main Product Categories
          </label>
          <Select
            options={mainCategoryOptions}
            isMulti
            value={mainCategories}
            onChange={setMainCategories}
            placeholder="Select categories..."
          />
        </div>

        {/* Quick Picks */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Or select a common product:
          </label>
          <div className="flex flex-wrap gap-2">
            {quickPicks.map((pick) => (
              <button 
                key={pick}
                type="button"
                onClick={() => setQuickPick(pick)} 
                className={`
                    ${quickPick === pick ? 'bg-blue-500 text-white' : 'border border-gray-300 hover:bg-gray-100' } 
                    py-2 px-4 rounded-md`}
              >
                {pick}
              </button>
            ))}
          </div>
        </div>

        {/* ... Other preferences  ... */}
        {/* ... Continue Button ... */}
        {/* // ... (Previous 'Main Categories' and 'Quick Picks' sections) ... */}

{/* Other Preferences (Examples) */}
<div className="mb-4">
  <label htmlFor="certifications" className="block text-gray-700 font-medium mb-2">
    Important Certifications
  </label>
  <Select
    options={[
      { value: 'fairTrade', label: 'Fair Trade' },
      { value: 'organic', label: 'Organic' },
      // ... more certification options
    ]}
    isMulti
    // ... (Store selections of certifications)
  />
</div>

<div className="mb-4">
  <label htmlFor="minOrder" className="block text-gray-700 font-medium mb-2">
    Minimum Order Quantity Preference
  </label>
  <input 
    type="number" 
    id="minOrder" 
    // ... (Store the value)
    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
  />
</div>

{/* ... You can add more fields as needed ... */}

{/* Continue Button */}
<div className="mt-6">
  <button 
    type="submit" // Or adjust according to your navigation logic
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md"
  >
    Continue
  </button>
</div>

      </form>
    </div>
  );
}

export default Screen1;



// Buyer Onboarding Start Screen
function OnboardingStart() {
  return (
    <div>
       {/* ... Explanation of onboarding benefits ... */}
      <button 
        onClick={() => navigateTo('/product-search')} // Route to search area
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md"
      >
        Start Detailed Onboarding
      </button>

      <button 
        onClick={() => navigateTo('/product-search?quick=true')} // Special parameter
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md"          
      >
        Quick Start (Skip Onboarding)
      </button>
    </div>
  );
}

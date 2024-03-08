'use client'
import Header from '@/components/Header';
import { useState } from 'react';
import Select from 'react-select';

const buyer = {
  name: "Jane Williams",
  company: "Acme Imports",
  location: "Lagos, Nigeria",
  joinedDate: new Date('2023-02-15'), // Example format
  profilePhoto: "/profile-avatars/jane-williams.jpg", // Or placeholder

  // Preferences (Aligned with your onboarding elements)
  topCategories: ["Apparel & Textiles", "Processed Foods", "Electronics"],
  importantCertifications: ["Organic", "Fair Trade"],

  // Activity 
  savedSearches: [
     { query: "Cotton T-Shirts", timestamp: new Date('2023-03-05') },
     // ... More saved searches 
  ],
  recentFavorites: [
     { id: 'product-123', type: 'product' }, 
     { id: 'exporter-456', type: 'exporter' }
     // ... More if needed
  ]
};


buyer.savedSearches = [
  { query: "Organic Coffee Beans", timestamp: new Date('2023-03-06') },
  { query: "Fair Trade Jewelry", timestamp: new Date('2023-03-02') },
  // ... 
];

buyer.recentFavorites = [
  { id: 'product-123', type: 'product', name: "Cotton T-Shirts" }, //  More details if possible 
  { id: 'exporter-456', type: 'exporter', name: "XYZ Manufacturing" }
];


const recommendations = [
  { 
    type: "product",
    id: 'product-789', 
    name: "Handcrafted Wooden Bowls", 
    exporter: "Kenyan Crafts" 
  },
  {
    type: "exporter",
    id: 'exporter-321',
    name: "ABC Coffee Co.",
    country: "Ethiopia"
  },
  // ... Additional recommendations (ideally related to preferences)
];


const categoryOptions = [
  { value: 'apparel', label: 'Apparel & Textiles' },
  { value: 'processedFoods', label: 'Processed Foods' },
  { value: 'electronics', label: 'Electronics' },
  // ... more options
];


// ... Buyer data ...
buyer.topCategories = ["Apparel & Textiles", "Processed Foods"];
buyer.importantCertifications = ["Organic", "Fair Trade"]; 


function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options); // Adjust locale 
}


const handlePreferencesUpdate = () => {

}


const certificationOptions = [
  { value: 'fairTrade', label: 'Fair Trade' },
  { value: 'organic', label: 'Organic' },
  // ... more certification options
];


// ... Existing buyer data 
buyer.recentFavorites = [
  { 
    id: 'product-123', 
    type: 'product', 
    name: "Premium Cotton T-Shirts", 
    exporter: "XYZ Manufacturing" 
  },
  { 
    id: 'exporter-456', 
    type: 'exporter', 
    name: "ABC Coffee Co.",
    country: "Ethiopia"
  },
  // ... Add a few more favorites, if desired
];




function BuyerProfile() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-screen-lg p-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Sidebar (Conditional display for larger screens) */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="bg-white p-4 rounded-md shadow-md sticky top-20"> {/* Sticky for persistence */}
              {/* ... Sidebar Content: Photo, Name, Quick Actions  */}
              <div className="bg-white p-4 rounded-md shadow-md sticky top-20"> 
                    {/* Profile Photo */}
                    <div className="text-center mb-4">
                        <img 
                            src={buyer.profilePhoto || '/placeholder-profile.jpg'} 
                            alt={`${buyer.name}'s Avatar`}
                            className="w-24 h-24 rounded-full mx-auto"
                        />
                        {/* Add "Change Photo" link if you have upload functionality */}
                    </div>

                    {/* Buyer Name & Company */}
                    <h2 className="text-xl font-medium text-center mb-2">{buyer.name}</h2> 
                    {buyer.company && <p className="text-center text-gray-600">{buyer.company}</p>} 

                    {/* Location & Joined Date */}
                    <div className="text-center text-gray-600">
                      <p>{buyer.location}</p>
                      <p>Joined: {formatDate(buyer.joinedDate)}</p> 
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-6">
                        <button 
                            onClick={() => navigateTo('/product-search')}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md w-full"          
                        >
                          New Search
                        </button>
                        <button 
                            onClick={() => navigateTo('/messages')}  // Adjust if needed
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md w-full mt-3"
                        >
                          Messages
                        </button>
                    </div>
                </div>

            </div>
          </div>


      {/* Main Profile Content */}
      <div className="lg:w-3/4">
        <div className="bg-white p-4 rounded-md shadow-md">
          {/* Tab Navigation */}
          <ul className="flex border-b">
              <li onClick={() => setActiveTab('overview')} 
                  className={`
                      tab 
                      px-6 py-3 
                      border-b-2 
                      text-gray-700 hover:text-blue-600 focus:outline-none 
                      transition-colors  
                      cursor-pointer
                      ${activeTab === 'overview' ? 'border-blue-500 text-blue-600' : ''} 
                  `}> 
                  Overview
              </li>
              <li onClick={() => setActiveTab('preferences')} 
                  className={`
                      tab 
                      px-6 py-3 
                      border-b-2 
                      text-gray-700 hover:text-blue-600 focus:outline-none 
                      transition-colors  
                      cursor-pointer
                      ${activeTab === 'preferences' ? 'border-blue-500 text-blue-600' : ''} 
                  `}> 
                  Preferences
              </li>
              <li onClick={() => setActiveTab('activity')}
                  className={`
                      tab 
                      px-6 py-3 
                      border-b-2 
                      text-gray-700 hover:text-blue-600 focus:outline-none 
                      transition-colors
                      cursor-pointer
                      ${activeTab === 'activity' ? 'border-blue-500 text-blue-600' : ''} 
                  `}> 
                  Activity
              </li>
            {/* ... Add more tabs as needed */}
          </ul>

          {/* Tab Content - Conditionally Rendered */}
          {activeTab === 'overview' && (
            <div className="tab-content mt-4">
            {/* Saved Searches */}
            <h3 className="text-lg font-medium mb-3">Saved Searches</h3>
                {buyer.savedSearches.length > 0 ? (
                    <ul className="list-disc list-inside"> 
                        {buyer.savedSearches.map((search) => (
                            <li key={search.timestamp} className="py-2 border-b border-gray-200"> {/* Item Styling */}
                                <a href={`/product-search?q=${search.query}`} 
                                    className="text-blue-600 hover:underline"> {/* Link */}
                                    {search.query} 
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No saved searches yet.</p> 
                )}
            {/* ... Recommendations ... */} 
        </div>
        
          )}

          {activeTab === 'preferences' && (
            <div className="tab-content mt-4">
              <form onSubmit={handlePreferencesUpdate}>  
                  {/* Categories */}
                  <div className="mb-4">
                      <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">
                          Top Categories
                      </label>
                      <Select
                          options={categoryOptions}
                          isMulti 
                          value={buyer.topCategories}  
                          onChange={(selectedOptions) => updateBuyerTopCategories(selectedOptions)} 
                      />
                  </div>

                  {/* Certifications */} {/* Similar Structure */}
                  <div className="mb-4">
                      {/* ... (Certifications Select) ... */}
                      <div className="mb-4">
                        <label htmlFor="certifications" className="block text-gray-700 font-medium mb-2">Important Certifications</label>
                        <Select
                          options={certificationOptions} 
                          isMulti 
                          value={buyer.importantCertifications} // Assuming data alignment
                          onChange={(selectedOptions) => updateBuyerCertifications(selectedOptions)}
                        />
                      </div>
                  </div>

                  <button
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-blue-300"> 
                      Save Preferences
                  </button>
              </form>
          </div>

          )}

          {activeTab === 'activity' && (
            <div className="tab-content mt-4">
                <h3 className="text-lg font-medium mb-3">Recent Favorites</h3>
                {buyer.recentFavorites.length > 0 ? (
                  <ul> 
                    {buyer.recentFavorites.map((favorite) => (
                      <li key={favorite.id}> 
                        <a 
                          href={`/items/${favorite.type}/${favorite.id}`} //  Adjust your URLs
                          className="block py-2 hover:bg-gray-100"
                        >
                          {favorite.type === 'product' ? (
                            <> 
                            <span>{favorite.name}</span>
                            <span className="text-gray-600 text-sm"> by {favorite.exporter}</span>
                            </>
                          ) : (
                            <> 
                              <span>{favorite.name}</span> 
                              <span className="text-gray-600 text-sm"> ({favorite.country})</span>
                            </>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No recent favorites yet.</p>
                )}
              </div>
          )}
        </div>
      </div>

    {/* ... Right Sidebar  */}


          {/* ... Right Sidebar - If included ... */}


        </div>
      </div>
    </>
  );
}

export default BuyerProfile;

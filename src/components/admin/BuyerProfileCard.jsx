import { useState } from 'react';

const BuyerProfileCard = ({ userData }) => {
  // ... (useState for isEditing, if needed)

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Buyer Name, Contact Info */}
      <div className="flex items-center gap-4 mb-4">
        <img src={userData.avatar || '/default-avatar.png'} alt="Buyer Avatar" className="w-12 h-12 rounded-full" /> 
        <div>
          <h2 className="text-lg font-medium">{userData.name}</h2>
          <p className="text-gray-600">{userData.email}</p>
        </div>
      </div>

      {/* Location/Company */}
      <div className="mb-4">
        <h3 className="text-base font-semibold mb-2">Location</h3> 
         <p className="text-gray-600">
          {userData.location ? `${userData.city}, ${userData.country}` : 'Location not provided'}
        </p>
        {/* Add company if applicable */}
      </div>

      {/* Product Interests (Optional) */}
      {userData.productInterests && (
        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2">Product Interests</h3>
          {/* Display product interests (e.g., as a list or tags) */}
          <p className="text-gray-500"> 
            {userData.productInterests.join(', ')}
          </p>
        </div>
      )}

      {/* Connections/Requests (Optional) */}
      {/* ... If your marketplace facilitates connections between buyers and exporters */}

    </div>
  );
};

export default BuyerProfileCard;

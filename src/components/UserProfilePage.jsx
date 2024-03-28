import React, { useState } from 'react';

const UserProfilePage = () => {
  const [isEditing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    // Replace with your user data or fetch it from your backend
    profilePicture: 'path/to/profile-picture.jpg',
    fullName: 'John Doe',
    userType: 'Buyer',
    location: 'City, Country',
    company: 'ABC Corp',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    // ... other user information
  });

  const handleEditClick = () => {
    setEditing(true);
    // Additional logic for handling edit mode
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Additional logic for saving changes
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md max-w-[1128px] mx-auto">
      {/* Profile Picture and Name */}
      <div className="flex items-center mb-6">
        <img src={userInfo.profilePicture} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-2xl font-bold">{userInfo.fullName}</h2>
          <p className="text-gray-700">{userInfo.userType}</p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Overview</h3>
        <p className="text-gray-700">
          Location: {userInfo.location} <br />
          Company: {userInfo.company}
        </p>
      </div>

      {/* Navigation Menu */}
      {/* Add your navigation links/buttons here */}




      {/* Additional Sections (Optional) */}
      {/* Wishlist, Favorites, Verification Badge, Reviews, etc. */}

      {/* Edit and Save Buttons */}
      {isEditing ? (
        <button onClick={handleSaveClick} className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4">
          Save Changes
        </button>
      ) : (
        <button onClick={handleEditClick} className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4">
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default UserProfilePage;

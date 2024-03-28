// UserProfile.jsx
import React, { useState } from 'react';

const UserProfile = () => {
  const demoUser = {
    displayName: 'John Doe',
    profilePicture: 'https://via.placeholder.com/150',
    location: 'City, Country',
    userType: 'Buyer',
    contactInfo: 'john.doe@example.com',
    preferences: {
      searchResults: 'All',
      notifications: 'Email',
      communication: 'Chat',
    },
    privacyControls: {
      showDisplayName: true,
      showLocation: true,
      showContactInfo: false,
    },
  };

  const [isEditing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...demoUser });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // TODO: Implement logic to save edited user information
    setEditing(false);
  };

  const handleCancelClick = () => {
    // TODO: Implement logic to cancel the editing process
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md max-w-[1128px] mx-auto">
      <div className="flex items-center mb-4">
        {demoUser.profilePicture && (
          <img src={demoUser.profilePicture} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
        )}

        <div>
          <h2 className="text-2xl font-bold text-deep-blue">
            {isEditing ? 'Edit Profile' : demoUser.displayName}
          </h2>
          <p className="text-gray-700">{demoUser.location}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4">User Type: {demoUser.userType}</p>

      {isEditing ? (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Display Name:</label>
          <input
            type="text"
            name="displayName"
            value={editedUser.displayName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ) : (
        <button
          className="bg-deep-blue text-white py-2 px-4 rounded-md mb-4"
          onClick={handleEditClick}
        >
          Edit Profile
        </button>
      )}

      {/* Preferences */}
      {isEditing && (
        <div className="mb-4">
          <h3 className="text-lg font-bold text-deep-blue mb-2">Preferences</h3>
          {/* TODO: Add preference settings */}
        </div>
      )}

      {/* Privacy Controls */}
      {isEditing && (
        <div className="mb-4">
          <h3 className="text-lg font-bold text-deep-blue mb-2">Privacy Controls</h3>
          {/* TODO: Add privacy control settings */}
        </div>
      )}

      {/* Contact Information */}
      {isEditing ? (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Contact Information:</label>
          <input
            type="text"
            name="contactInfo"
            value={editedUser.contactInfo}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      ) : (
        <p className="text-gray-700 mb-4">Contact Information: {demoUser.contactInfo}</p>
      )}

      {/* Save/Cancel Buttons */}
      {isEditing && (
        <div className="flex">
          <button
            className="bg-deep-blue text-white py-2 px-4 rounded-md mr-2"
            onClick={handleSaveClick}
          >
            Save
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

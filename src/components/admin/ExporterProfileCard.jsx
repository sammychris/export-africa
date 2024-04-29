import { useState } from 'react';

const ExporterProfileCard = ({ userData }) => {
  const [isEditing, setIsEditing] = useState(false); 

  const handleApprove = () => {
    // TODO: Logic to update the exporter's status in your database
    console.log('Exporter approved:', userData.id);
  };

  const handleReject = () => {
    // TODO: Logic to update the exporter's status and potentially provide a reason
    console.log('Exporter rejected:', userData.id);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Exporter Name, Contact Info */}
      <div className="flex items-center gap-4 mb-4">
        <img src={userData.avatar || '/default-avatar.png'} alt="Exporter Avatar" className="w-12 h-12 rounded-full" /> 
        <div>
          <h2 className="text-lg font-medium">{userData.name}</h2>
          <p className="text-gray-600">{userData.email}</p>
        </div>
      </div>

      {/* Business Documents */}
      <div className="mb-4">
        <h3 className="text-base font-semibold mb-2">Business Documents</h3>
        {/* Replace with a list or display of documents fetched from userData */}
        <p className="text-gray-500">
          {userData.documents.length > 0 
            ? 'Documents uploaded' 
            : 'None uploaded yet'
          }
        </p>
      </div>

      {/* Product Listings */}
      <div className="mb-4">
        <h3 className="text-base font-semibold mb-2">Product Listings</h3>
        {/* Replace with display of products -  possibly a shortened list */}
        <p className="text-gray-500">
          {userData.products.length > 0 
            ? `${userData.products.length} active listings`
            : 'No listings yet'
          } 
        </p>
      </div>

      {/* Approve/Edit/Reject Buttons */}
      <div className="flex gap-2">
        <button 
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg"
          onClick={handleApprove}
        >
          Approve
        </button>
        <button 
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
          onClick={handleReject}
         >
          Reject
        </button>
        {!isEditing && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>

      {/* (Add an Edit form if isEditing is true) */}
    </div>
  );
};

export default ExporterProfileCard;

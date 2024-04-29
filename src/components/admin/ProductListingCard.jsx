import { useState } from 'react';

const ProductListingCard = ({ productData }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleApprove = () => {
    // TODO: Update product status in the backend 
    console.log('Product Approved:', productData.id); 
  };

  const handleReject = () => {
    // TODO: Update product status and potentially provide a reason 
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {!isEditing ? ( 
        //  VIEW MODE
        <>
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={productData.image || '/default-product.png'}  
              alt={productData.name} 
              className="w-20 h-20 object-cover rounded" 
            />
            <div>
              <h3 className="text-lg font-medium">{productData.name}</h3>
              <p className="text-gray-500">${productData.price}</p>
              <p className="text-gray-500">Category: {productData.category}</p>
              <p className={`text-gray-500 ${productData.status === 'approved' ? 'text-green-500' : 'text-red-500'}`}>Status: {productData.status}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={handleApprove} 
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Approve
            </button>
            <button 
              onClick={handleReject} 
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Reject
            </button>
            <button 
              onClick={() => setIsEditing(true)} 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Edit
            </button>
          </div>
        </>
      ) : (
        // EDIT MODE (Replace with an actual edit form, not implemented here)
        <div>
          Product Edit Form (Not Implemented) 
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductListingCard;

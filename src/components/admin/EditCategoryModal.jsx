import { useState } from 'react';

const EditCategoryModal = ({ node, onClose }) => {
  const [categoryName, setCategoryName] = useState(node.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... API call to update category (PUT request)
    // ... If successful, close the modal
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full ..."> {/* Modal Background */}
      <div className="bg-white p-6 rounded-md ..."> {/* Modal Content */}
        <h2 className="text-lg font-medium mb-4">Edit Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block ...">Category Name</label>
            <input 
              type="text"
              id="name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="border border-gray-300 ..." 
            />
          </div>
          <button type="submit" className="bg-blue-500 ...">Save Changes</button>
          <button type="button" onClick={onClose} className="bg-gray-500 ...">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;

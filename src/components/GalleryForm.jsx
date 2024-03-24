// pages/add-item.js
import { useState } from 'react';

const GalleryForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the new item to your data source (e.g., database)
    console.log('Item added:', { title, description, imageURL });
    // Clear the form after submission
    setTitle('');
    setDescription('');
    setImageURL('');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="imageURL" className="block text-sm font-medium text-gray-600">
            Image URL
          </label>
          <input
            type="url"
            id="imageURL"
            name="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default GalleryForm;

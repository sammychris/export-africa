import { useState } from 'react';
import axios from 'axios';

export default function CategoryForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    parent: '', // Assuming parent is a string, you may need to adjust based on your data structure
    image: '',
    metaKeywords: '',
    metaDescription: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/categories/create', formData);
      console.log('Category created:', response.data);
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
      console.error('Error creating category:', error.response.data);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="parent">
            Parent:
          </label>
          <input
            type="text"
            id="parent"
            name="parent"
            value={formData.parent}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="image">
            Image:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="metaKeywords">
            Meta Keywords:
          </label>
          <input
            type="text"
            id="metaKeywords"
            name="metaKeywords"
            value={formData.metaKeywords}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700" htmlFor="metaDescription">
            Meta Description:
          </label>
          <textarea
            id="metaDescription"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}



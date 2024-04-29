import { useState } from 'react';
import ProductListings from './ProductListings';
import CategoriesPage from './CategoriesPage';
import FeaturedProducts from './FeaturedProducts';

const ProductManagementLayout = () => {
  const [activeTab, setActiveTab] = useState('listings');

  return (
    <div className="flex-grow p-6">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <button
          onClick={() => setActiveTab('listings')}
          className={`py-2 px-4 border border-gray-300 rounded-md mr-3 
              ${activeTab === 'listings' ? 'bg-blue-500 text-white' : ''} 
          `}
        >
          Product Listings
        </button>
        <button 
          onClick={() => setActiveTab('categories')}
          className={`py-2 px-4 border border-gray-300 rounded-md mr-3 
              ${activeTab === 'categories' ? 'bg-blue-500 text-white' : ''} 
          `}
        >
          Categories
        </button>
        <button 
          onClick={() => setActiveTab('featured')}
          className={`py-2 px-4 border border-gray-300 rounded-md 
              ${activeTab === 'featured' ? 'bg-blue-500 text-white' : ''} 
          `}
        >
          Featured Products
        </button>
      </div>

      {/* Conditionally Render Components */}
      {activeTab === 'listings' && <ProductListings />}
      {activeTab === 'categories' && <CategoriesPage />}
      {activeTab === 'featured' && <FeaturedProducts />} 
    </div>
  );
};

export default ProductManagementLayout;

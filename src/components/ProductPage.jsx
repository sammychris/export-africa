// ProductPage.jsx
import React, { useState } from 'react';

const ProductPage = () => {
  // Demo data for products
  const productsData = [
    {
      id: 1,
      name: 'Product A',
      description: 'High-quality product with advanced features. Suitable for various applications.',
      price: 99.99,
      currency: 'USD',
      supplier: {
        name: 'Supplier X',
        location: 'City X, Country X',
        certifications: ['ISO 9001'],
        rating: 4.8,
      },
      image: '/uploads/2024-02-02/1706887295491-Add a heading.png',
      dataSheetUrl: 'url/to/dataSheetA.pdf',
      stockAvailability: 'In Stock',
      minimumOrderQuantity: 10,
    },
    {
      id: 2,
      name: 'Product B',
      description: 'Innovative product designed for efficiency and durability. Ideal for professional use.',
      price: 149.99,
      currency: 'EUR',
      supplier: {
        name: 'Supplier Y',
        location: 'City Y, Country Y',
        certifications: ['CE Certified'],
        rating: 4.5,
      },
      image: '/uploads/2024-02-02/1706887295491-Add a heading.png',
      dataSheetUrl: 'url/to/dataSheetB.pdf',
      stockAvailability: 'Out of Stock',
      minimumOrderQuantity: 20,
    },
    // Add more products as needed
  ];

  // State for view mode (grid or list)
  const [viewMode, setViewMode] = useState('grid');

  // State for selected product (for zoom functionality)
  const [selectedProduct, setSelectedProduct] = useState(null);

  // State for product specifications tab
  const [showSpecifications, setShowSpecifications] = useState(true);

  // State for product reviews tab
  const [showReviews, setShowReviews] = useState(false);

  // State for social media sharing
  const [socialMediaShareUrl, setSocialMediaShareUrl] = useState('');

  // Handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  // Handle product selection (for zoom functionality)
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  // Handle tab change (specifications, reviews)
  const handleTabChange = (tab) => {
    if (tab === 'specifications') {
      setShowSpecifications(true);
      setShowReviews(false);
    } else if (tab === 'reviews') {
      setShowSpecifications(false);
      setShowReviews(true);
    }
  };

  // Render product specifications
  const renderSpecifications = (product) => (
    <div>
      <h3 className="text-lg font-bold text-deep-blue mb-2">Product Specifications</h3>
      {/* Add a table or list for detailed product specifications */}
      <table className="table-auto mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Specification</th>
            <th className="border px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows for specifications */}
          <tr>
            <td className="border px-4 py-2">Dimension</td>
            <td className="border px-4 py-2">10 x 15 x 5 cm</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      {/* Add technical data sheets or brochures download links if available */}
      <a href={product.dataSheetUrl} target="_blank" rel="noopener noreferrer" className="text-deep-blue hover:underline">
        Download Technical Data Sheet
      </a>
    </div>
  );

  // Render product reviews
  const renderReviews = (product) => (
    <div>
      <h3 className="text-lg font-bold text-deep-blue mb-2">Reviews and Ratings</h3>
      {/* Add a section for displaying user reviews and ratings */}
      {/* Include options for filtering by date or rating */}
      <p>Currently, no reviews available for this product.</p>
    </div>
  );

  // Render stock availability and MOQ
  const renderStockAndMOQ = (product) => (
    <div>
      <p className="text-gray-700 mb-2">Stock Availability: {product.stockAvailability}</p>
      <p className="text-gray-700 mb-2">Minimum Order Quantity (MOQ): {product.minimumOrderQuantity}</p>
    </div>
  );

  // Render shipping information
  const renderShippingInformation = (product) => (
    <div>
      <h3 className="text-lg font-bold text-deep-blue mb-2">Shipping Information</h3>
      {/* Add a summary of shipping options and costs */}
      <p>Free standard shipping on orders over $100. Express shipping options available.</p>
    </div>
  );

  // Render social media sharing buttons
  const renderSocialMediaSharing = () => (
    <div>
      <h3 className="text-lg font-bold text-deep-blue mb-2">Share This Product</h3>
      {/* Add social media sharing buttons with appropriate links */}
      {/* Example: Twitter, Facebook, LinkedIn */}
      <div className="flex space-x-2">
        <a
          href={`https://twitter.com/intent/tweet?url=${socialMediaShareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-deep-blue hover:underline"
        >
          Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${socialMediaShareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-deep-blue hover:underline"
        >
          Facebook
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?url=${socialMediaShareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-deep-blue hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto mt-8 max-w-[1128px]">
      {/* View Mode Switch */}
      <div className="mb-4 flex justify-end">
        <button
          className={`mr-4 py-2 px-4 rounded-md ${viewMode === 'grid' ? 'bg-deep-blue text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleViewModeChange('grid')}
        >
          Grid View
        </button>
        <button
          className={`py-2 px-4 rounded-md ${viewMode === 'list' ? 'bg-deep-blue text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleViewModeChange('list')}
        >
          List View
        </button>
      </div>

      {/* Product List */}
      <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'mb-4'}`}>
        {productsData.map((product) => (
          <div
            key={product.id}
            className={`bg-white p-6 shadow-md rounded-md cursor-pointer ${viewMode === 'list' ? 'mb-4' : ''}`}
            onClick={() => handleProductSelect(product)}
          >
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4 rounded-md" />
            <h4 className="text-md font-bold mb-2">{product.name}</h4>
            <p className="text-sm text-gray-700">{product.description}</p>
            <p className="text-lg font-bold text-deep-blue mt-2">${product.price} {product.currency}</p>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      {selectedProduct && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedProduct(null)}
        >
          <img src={selectedProduct.image} alt={selectedProduct.name} className="max-w-full max-h-full" />
        </div>
      )}

      {/* Product Details Tabs */}
      <div className="mt-8">
        <div className="mb-4 flex">
          <button
            className={`mr-4 py-2 px-4 rounded-md ${showSpecifications ? 'bg-deep-blue text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleTabChange('specifications')}
          >
            Specifications
          </button>
          <button
            className={`py-2 px-4 rounded-md ${showReviews ? 'bg-deep-blue text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleTabChange('reviews')}
          >
            Reviews
          </button>
        </div>
        {/* Render the selected tab content */}
        {showSpecifications && selectedProduct && renderSpecifications(selectedProduct)}
        {showReviews && selectedProduct && renderReviews(selectedProduct)}
      </div>

      {/* Stock Availability, MOQ, and Shipping Information */}
      {selectedProduct && renderStockAndMOQ(selectedProduct)}
      {selectedProduct && renderShippingInformation(selectedProduct)}

      {/* Social Media Sharing */}
      {selectedProduct && renderSocialMediaSharing()}
    </div>
  );
};

export default ProductPage;

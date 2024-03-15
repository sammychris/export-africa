// ExporterDetailsPage.jsx
import React from 'react';

const ExporterDetailsPage = () => {
  // Demo data for exporter details (replace with dynamic data from API or state)
  const exporterDetails = {
    id: 1,
    companyName: 'Exporter A',
    logo: 'url/to/logo1.png',
    location: 'Nigeria',
    website: 'http://www.exportera.com',
    productCategories: ['Handmade Crafts', 'Textiles', 'Agricultural Products'],
    certifications: ['ISO 9001', 'Fair Trade'],
    rating: 2.5,
    reviews: [
      { id: 1, user: 'Customer1', rating: 5, comment: 'Excellent products and service!' },
      { id: 2, user: 'Customer2', rating: 4, comment: 'Good variety of handmade crafts.' },
      // Add more reviews as needed
    ],
  };

  return (
    <div className="container mx-auto mt-8">
      {/* Basic Information */}
      <div className="flex items-center mb-4">
        <img src={exporterDetails.logo} alt={exporterDetails.companyName} className="w-16 h-16 object-cover mr-4 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold text-deep-blue">{exporterDetails.companyName}</h2>
          <p className="text-gray-700">Location: {exporterDetails.location}</p>
          <a href={exporterDetails.website} target="_blank" rel="noopener noreferrer" className="text-deep-blue hover:underline">
            Visit Website
          </a>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Product Categories</h3>
        <ul className="list-disc pl-6">
          {exporterDetails.productCategories.map((category) => (
            <li key={category} className="text-gray-700">{category}</li>
          ))}
        </ul>
      </div>

      {/* Certification Badges */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Certifications</h3>
        <div className="flex space-x-2">
          {exporterDetails.certifications.map((certification) => (
            <div key={certification} className="bg-green-500 text-white px-2 py-1 rounded-md">
              {certification}
            </div>
          ))}
        </div>
      </div>

      {/* Rating and Reviews */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Rating and Reviews</h3>
        <div className="flex items-center">
          <p className="text-2xl font-bold text-deep-blue mr-2">{exporterDetails.rating.toFixed(1)}</p>
          {/* Add a star rating component (or use icons) */}
          <div className="text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={index < Math.floor(exporterDetails.rating) ? 'fas' : 'far'}>&#9733;</span>
            ))}
          </div>
        </div>
        <div className="mt-2">
          {exporterDetails.reviews.map((review) => (
            <div key={review.id} className="mb-2">
              <p className="font-bold text-gray-700">{review.user}</p>
              <p className="text-gray-700">Rating: {review.rating}/5</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div>
        <button className="bg-deep-blue text-white py-2 px-4 rounded-md mr-2">Contact Exporter</button>
        <a href={exporterDetails.website} target="_blank" rel="noopener noreferrer" className="bg-deep-blue text-white py-2 px-4 rounded-md">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default ExporterDetailsPage;

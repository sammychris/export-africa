// ExportersListPage.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import ExporterDetailsPage from './ExporterDetailsPage';

const ExportersListPage = () => {
  // Demo data for exporters
  const exportersData = [
    { id: 1, companyName: 'Exporter A', logo: '/uploads/2024-02-20/1708460655245-418T0ztvu4L.jpg', location: 'City A, Country A', website: 'http://www.exportera.com', productCategories: ['Electronics', 'Textiles'], certifications: ['ISO 9001'], rating: 3, reviews: 20 },
    { id: 2, companyName: 'Exporter B', logo: '/uploads/2024-02-20/1708460655245-418T0ztvu4L.jpg', location: 'City B, Country B', website: 'http://www.exporterb.com', productCategories: ['Agriculture', 'Handmade Crafts'], certifications: ['Fair Trade'], rating: 4.2, reviews: 15 },
    // Add more exporters as needed
    { id: 1, companyName: 'Exporter A', logo: '/uploads/2024-02-20/1708460655245-418T0ztvu4L.jpg', location: 'City A, Country A', website: 'http://www.exportera.com', productCategories: ['Electronics', 'Textiles'], certifications: ['ISO 9001'], rating: 4.5, reviews: 20 },
    { id: 2, companyName: 'Exporter B', logo: '/uploads/2024-02-20/1708460655245-418T0ztvu4L.jpg', location: 'City B, Country B', website: 'http://www.exporterb.com', productCategories: ['Agriculture', 'Handmade Crafts'], certifications: ['Fair Trade'], rating: 4.2, reviews: 15 },
  ];

  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // State for sorting option
  const [sortOption, setSortOption] = useState('relevance');

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Items per page
  const itemsPerPage = 10;

  // Filtered and sorted exporters based on search term and sort option
  const filteredExporters = exportersData.filter(exporter =>
    exporter.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exporter.productCategories.some(category => category.toLowerCase().includes(searchTerm.toLowerCase())) ||
    exporter.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exporter.certifications.some(certification => certification.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedExporters = [...filteredExporters];

  // Sort the exporters based on the selected option
  if (sortOption === 'relevance') {
    // Implement your relevance sorting logic if needed
  } else if (sortOption === 'rating') {
    sortedExporters.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === 'popularity') {
    // Implement your popularity sorting logic if needed
  }

  // Calculate total pages
  const totalPages = Math.ceil(sortedExporters.length / itemsPerPage);

  // Get the current page's exporters
  const currentExporters = sortedExporters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto mt-8 max-w-[1128px]">
      {/* Search Bar */}
      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search by product, country, certification, or keywords"
          className="py-2 px-4 border border-gray-300 rounded-md flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Add filters based on various criteria here */}
      </div>

      {/* Sorting Options */}
      <div className="mb-4">
        <label className="mr-2">Sort By:</label>
        <select
          className="py-2 px-4 border border-gray-300 rounded-md"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="rating">Rating</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>

      {/* Exporters List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentExporters.map(exporter => (
        //   <div key={exporter.id} className="bg-white p-6 rounded-md shadow-md">
        //     <img src={exporter.logo} alt={exporter.companyName} className="w-full h-24 object-cover mb-4 rounded-md" />
        //     <h3 className="text-lg font-bold mb-2">{exporter.companyName}</h3>
        //     <p className="text-gray-700 mb-2">{exporter.location}</p>
        //     <p className="text-gray-700 mb-2">Rating: {exporter.rating}</p>
        //     <p className="text-gray-700 mb-2">{exporter.reviews} Reviews</p>
        //     {/* Add other information like certifications, product categories, etc. */}
        //     {/* <p className="text-gray-700 mb-2">Product: {exporter.productCategories}</p> */}
        //     <p className="text-gray-700 mb-2">Certification: {exporter.certifications}</p>
        //     {/* <div className="flex justify-between">
        //       <button className="bg-deep-blue text-white py-2 px-4 rounded-md">Contact</button>
        //       <a href={exporter.website} target="_blank" rel="noopener noreferrer" className="text-deep-blue hover:underline">Visit Website</a>
        //     </div> */}
        //   </div>

        <Link key={exporter.id} href={`/exporters/${exporter.id}`} className="text-deep-blue hover:underline">
            {/* Wrap each exporter card with Link */}
            <div className="bg-white p-6 rounded-md shadow-md cursor-pointer">
                <img src={exporter.logo} alt={exporter.companyName} className="w-full h-24 object-cover mb-4 rounded-md" />
                <h3 className="text-lg font-bold mb-2">{exporter.companyName}</h3>
                <p className="text-gray-700 mb-2">{exporter.location}</p>
                <div className='flex'>
                    <p className="text-gray-700 mb-2">Rating: <span className='m-1 font-bold'>{exporter.rating}</span></p>
                    <div className="text-yellow-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className={index < Math.floor(exporter.rating) ? 'fas' : 'far'}>&#9733;</span>
                        ))}
                    </div>
                </div>
                <p className="text-gray-700 mb-2">{exporter.reviews} Reviews</p>
                
                
                <p className="text-gray-700 mb-2">Certification: {exporter.certifications}</p>
            {/* Add other information like certifications, product categories, etc. */}
            </div>
        </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-2 py-2 px-4 rounded-md ${currentPage === index + 1 ? 'bg-deep-blue text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <ExporterDetailsPage />
    </div>
  );
};

export default ExportersListPage;

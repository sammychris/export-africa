// pages/gallery.js
import { useState } from 'react';
import GalleryCard from './GalleryCard';

const GalleryList = () => {
  const [view, setView] = useState('grid'); // 'grid' or 'list' view
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample data
  const galleryItems = [
    { id: 1, title: 'Item 1', image: '/uploads/2024-02-02/1706887295491-Add a heading.png', description: 'Description 1' },
    { id: 2, title: 'Item 2', image: '/uploads/2024-02-02/1706887295491-Add a heading.png', description: 'Description 2' },
    // Add more items as needed
  ];

  const handleToggleView = () => {
    setView((prevView) => (prevView === 'grid' ? 'list' : 'grid'));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="container mx-auto p-4">
      {/* <div className="flex justify-end mb-4">
        <button
          onClick={handleToggleView}
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
        >
          {view === 'grid' ? 'Switch to List View' : 'Switch to Grid View'}
        </button>
      </div> */}

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${view === 'grid' ? '3' : '1'} gap-4`}>
        {galleryItems.map((item) => (
          <GalleryCard key={item.id} item={item} handleItemClick={handleItemClick}/>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="max-w-3xl w-full p-4">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-full object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryList;

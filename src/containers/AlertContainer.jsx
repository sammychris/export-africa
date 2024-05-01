import {useState, useEffect} from 'react';

export default function AlertContainer({ handleClose, type = 'info', children, isDismissible = false }) {

    useEffect(() => {
        const timer = setTimeout(() => handleClose(), 3000);
        return () => clearTimeout(timer);
    }, [handleClose])

    const baseClasses = 'bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative';

    const alertClasses = {
      info: baseClasses,
      success: 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative',
      warning: 'bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative',
      error: 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative',
    };
  
    function capitalizeFirstLetter(str) {
      return str.replace(/^./, (char) => char.toUpperCase());
    }
  
    return (
      <div className={alertClasses[type]} role="alert">
        <strong class="font-bold">{capitalizeFirstLetter(type)}!</strong>
        <span class="block sm:inline">{children}</span>
        {isDismissible && (
          <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-900" onClick={handleClose}>
            <span>&times;</span>
          </button>
        )}
      </div>
    );
  }
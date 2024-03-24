import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import EditDeleteOptions from './EditDeleteOptions';
import { SlOptions } from 'react-icons/sl';

const GalleryCard = ({item, handleItemClick}) => {
    const [isShowOptions, setIsShowOptions] = useState(false);
    useEffect(() => {
        window.addEventListener('click', showOption);
        return () => {
            window.removeEventListener('click', showOption);
        };
    }, []);
    const showOption = () => {
        setIsShowOptions(false);
    }
    return (
        // <div key={item.id} className="relative overflow-hidden rounded-md shadow-md">
        <div key={item.id} className="relative rounded-md shadow-md">
            {isShowOptions && (
                    <EditDeleteOptions
                        // handleEditCategory={handleEditCategory}
                        // handleDeleteCategory={handleDeleteCategory}
                        // category={product}
                        // handleGetCategory={handleGetCategory}
                    />
                )}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => handleItemClick(item)}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <span
                href=""
                title="Category Options"
                className="p-1 hover:text-gray-500 absolute bottom-1 right-3"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsShowOptions(!isShowOptions)
                }}
            >
                <SlOptions size={18} />
            </span>
        </div>
    )
}

export default GalleryCard;

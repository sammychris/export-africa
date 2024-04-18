import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import EditDeleteOptions from './EditDeleteOptions';
import { SlOptions } from 'react-icons/sl';

const ProductCard = ({ product, handleEditCategory, handleDeleteCategory, handleGetCategory }) => {
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
        <div className="bg-gray-100 p-4 rounded-md relative">
            {isShowOptions && (
                <EditDeleteOptions
                    handleEditCategory={handleEditCategory}
                    handleDeleteCategory={handleDeleteCategory}
                    category={product}
                    handleGetCategory={handleGetCategory}
                />
            )}
            <img src={'/uploads/2024-02-02/1706887295491-Add a heading.png'} alt={product.name} className="w-full h-32 object-cover mb-2 rounded-md" />
            <h4 className="text-md font-bold mb-2">{product.name}</h4>
            <p className="text-xs text-gray-600">{product.description}</p>
            <Link
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
            </Link>
        </div>
    );
};

export default ProductCard;

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SlOptions } from 'react-icons/sl';
import Option from './Option';


const ProductListItem = ({product, handleEditProduct, handleDeleteProduct}) => {
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
        <div className={`bg-white p-4 shadow-md rounded-md relative`}>
            <Link href={`/products/${product._id}`}
                key={product._id}
            >
                {isShowOptions && (
                    <div className="bg-white absolute right-[-60px] bottom-10 z-10 shadow-[2px_2px_7px_0px_#00000061] rounded-[5px]">
                        <ul>
                            <Option onClick={() => handleEditProduct(product)} title={'Edit'}/>
                            <Option onClick={() => handleDeleteProduct(product._id)} title={'Delete'}/>
                        </ul>
                    </div>
                )}

                <img src={product.featuredImage?.path} alt={product.name} className="w-full h-32 object-cover mb-4 rounded-md" />
                <h4 className="text-md font-bold mb-2">{product.name}</h4>
                <p className="text-sm text-gray-700">{product.description}</p>
                <p className="text-lg font-bold text-deep-blue mt-2">${product.price} {product.currency}</p>
            </Link>
            <span
                title="Product Options"
                className="p-1 hover:text-gray-500 absolute bottom-1 right-3 cursor-pointer"
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

export default ProductListItem;
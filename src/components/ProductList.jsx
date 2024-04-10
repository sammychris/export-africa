// ProductPage.jsx
import React, { useState, useEffect } from 'react';
import ProductListItem from './ProductListItem';
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

  {
      id: 3,
      name: 'Product C',
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
      id: 4,
      name: 'Product D',
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
  // Add more products as needed
];


const ProductList = ({products, handleEditProduct, handleDeleteProduct}) => {
  return (
    <div className="container mx-auto mt-8 max-w-[1128px]">
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} handleEditProduct={handleEditProduct} handleDeleteProduct={handleDeleteProduct}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

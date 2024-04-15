import React from 'react';
import ProductCard from './OldProductCard';


const ProductGallery = ({ products, handleEditCategory, handleDeleteCategory, handleGetCategory}) => {
    return (<div>
      <h3 className="text-lg font-bold text-deep-blue mb-2">Product Offerings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleEditCategory={handleEditCategory}
            handleDeleteCategory={handleDeleteCategory}
            handleGetCategory={handleGetCategory}
          />
        ))}
      </div>
    </div>)
  };


  export default ProductGallery;

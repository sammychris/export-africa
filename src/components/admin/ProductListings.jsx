import { useState, useEffect } from 'react';
import ProductListingCard from './ProductListingCard';
import SearchAndFilterBar from './SearchAndFilterBar';


const productListings = [
  {
    id: 1,
    name: "Premium Cocoa Beans",
    image: "/path/to/cocoa-beans.jpg",
    price: 12.5, 
    category: "Agriculture",
    status: "pending",
  },
  {
    id: 2,
    name: "Handcrafted Leather Sandals",
    image: "/path/to/sandals.jpg",
    price: 45, 
    category: "Fashion",
    status: "approved", 
  },
  {
    id: 3, 
    name: "Solar-Powered Water Pump",
    image: "/path/to/water-pump.jpg",
    price: 250, 
    category: "Technology",
    status: "rejected", 
  },
  // ... add more product objects
];

const ProductListings = () => {
  const [products, setProducts] = useState(productListings);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch('/api/products'); 
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch products'); 
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       setError(error);
  //       console.error('Error fetching products:', error); 
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Product Listings</h2>
      {isLoading && <p>Loading products...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {!isLoading && !error && (
        <>
          <SearchAndFilterBar />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductListingCard key={product.id} productData={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListings;

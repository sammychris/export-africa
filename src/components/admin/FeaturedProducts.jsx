import { useState, useEffect } from 'react';


const products = [
  { 
    _id: '1', // Assuming Mongoose ObjectIds
    name: 'Modern Sofa', 
    category: 'Furniture', 
    price: 399.99,  
    imageUrl: '/images/sofa.jpg', 
    description: 'Comfortable and stylish sofa...',
    isFeatured: false
  },
  { 
    _id: '2',
    name: 'Wireless Headphones', 
    category: 'Electronics', 
    price: 129.99, 
    imageUrl: '/images/headphones.jpg', 
    description: 'Noise-cancelling headphones...',
    isFeatured: true
  },
  // ... more product objects
];

const featuredProducts = products.filter(product => product.isFeatured); 


const FeaturedProducts = () => {
  // const [products, setProducts] = useState([]);
  // const [featuredProducts, setFeaturedProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch('/api/products'); // Replace with your endpoint
  //     const data = await res.json();
  //     setProducts(data);
  //   };

  //   const fetchFeatured = async () => {
  //     const res = await fetch('/api/featured-products'); // Replace with your endpoint
  //     const data = await res.json();
  //     setFeaturedProducts(data.productIds); // Assuming IDs are returned
  //   };

  //   fetchProducts();
  //   fetchFeatured();
  // }, []);

  const handleSelectProduct = (productId) => {
    const isFeatured = featuredProducts.includes(productId);

    if (isFeatured) {
      setFeaturedProducts(featuredProducts.filter((id) => id !== productId));
    } else {
      setFeaturedProducts([...featuredProducts, productId]);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Featured Products</h2>

      {/* Product Selection */}
      <div className="mb-4">
        {products.map((product) => (
          <div key={product.id}> 
            <input 
              type="checkbox"
              id={`featured-${product.id}`}
              checked={featuredProducts.includes(product.id)}
              onChange={() => handleSelectProduct(product.id)}
            />
            <label htmlFor={`featured-${product.id}`}> {product.name}</label>
          </div>
        ))}
      </div>

      {/* Featured Products Display */}
      <div>
        <h3>Currently Featured:</h3>
          {featuredProducts.length > 0 ? (
            <ul>
              {products
                .filter((product) => featuredProducts.includes(product.id))
                .map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
            </ul>
          ) : (
            <p>No products featured yet.</p>
          )}
      </div>
    </div>
  );
};

export default FeaturedProducts;

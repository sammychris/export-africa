// components/Product.js
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// components/ProductDemoData.js
const demoProduct = {
  featuredImage: '/uploads/2024-02-02/1706887295491-Add a heading.png',
  name: 'Example Product',
  price: 99.99,
  currency: '$',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  category: 'Electronics',
  user: {
    name: 'John Doe',
    email: 'john@example.com',
    contactEmail: 'support@example.com',
  },
  gallery: [
    '/uploads/2024-02-02/1706887295491-Add a heading.png',
    '/uploads/2024-02-02/1706887295491-Add a heading.png',
    '/uploads/2024-02-02/1706887295491-Add a heading.png',
    '/uploads/2024-02-02/1706903151658-image-2.jpg',
  ],
  averageRating: 4.5,
  reviews: [
    {
      title: 'Great Product!',
      author: 'Jane Doe',
      date: '2022-02-01',
      comment: 'I love this product. It exceeded my expectations!',
    },
    {
      title: 'Good Quality',
      author: 'Bob Smith',
      date: '2022-02-05',
      comment: 'The build quality is excellent. Highly recommended.',
    },
    // Add more reviews as needed
  ],
  relatedProducts: [
    {
      featuredImage: '/images/related-product-1.jpg',
      name: 'Related Product 1',
      price: 79.99,
    },
    {
      featuredImage: '/images/related-product-2.jpg',
      name: 'Related Product 2',
      price: 89.99,
    },
    // Add more related products as needed
  ],
};





const Product = ({ product }) => {
  // const { featuredImage, name, price, currency, description, category, user, averageRating } = demoProduct;
  const {
    featuredImage,
    name,
    price,
    currency,
    description,
    category,
    user,
    gallery,
    averageRating,
    reviews,
    relatedProducts
  } = demoProduct;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

    // Handle product selection (for zoom functionality)
    const handleProductSelect = (product) => {
      setSelectedProduct(product);
    };

  return (
    <div className="container mx-auto my-8 py-4 max-w-[1128px]">
        <div className="flex flex-col md:flex-row ">
          {/* Main Content Area */}
            <div className="w-full md:w-2/3 md:mr-8 bg-white p-6 shadow-md rounded-md">
              {/* Product Image and Information */}
              <div className="mb-8">
              {/* height: 510px; width: 610px; display: flex; justify-content: center; */}
                <div className='h-[510px] w-full flex justify-center'>
                  <Image
                    src={featuredImage}
                    alt={name}
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-5 mb-8 max-w-[600px] flex justify-center">
                  {/* <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2> */}
                  {/* <Slider {...sliderSettings}> */}
                  <div className="flex">
                    {gallery.map((image, index) => (
                      <div key={index} className="px-1 cursor-pointer h-20 flex" onClick={() => handleProductSelect(demoProduct)}>
                        <Image
                          key={index}
                          src={image}
                          alt={`${name} - Image ${index + 1}`}
                          width={70}
                          height={50}
                          className="rounded-lg"
                        />
                      </div>
                    ))}
                  {/* </Slider> */}
                  </div>
                </div>
                <div className="mb-6">
                  {/* {dummyArticle.multimedia.videoUrl && ( */}
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-deep-blue mb-2">Watch Video</h2>
                      <iframe
                        title="Article Video"
                        width="100%"
                        height="400"
                        // src={dummyArticle.multimedia.videoUrl}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  {/* )} */}
                  {/* {dummyArticle.multimedia.infographicUrl && ( */}
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-deep-blue mb-2">Infographic</h2>
                      <img
                        // src={`/${dummyArticle.multimedia.infographicUrl}`}
                        alt="Article Infographic"
                        className="w-full"
                      />
                  </div>
        {/* )} */}
                  </div>
              </div>        
            </div>
            <div className="w-full md:w-1/3 mt-8 md:mt-0">
              <div className="bg-white p-6 shadow-md rounded-md">
                  <div className="">
                    <h1 className="text-3xl font-bold mb-4 text-linkedin-blue">{name}</h1>
                    <p className="text-xl mb-4 text-linkedin-dark-blue">
                      {currency} {price}
                    </p>
                  </div>
                  {/* Detailed Product Description */}
                  <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4 text-linkedin-dark-blue">Product Description</h2>
                    <p className="text-gray-700">{description}</p>
                  </div>
                  {/* Category */}
                  <div className="my-4">
                    <h2 className="text-2xl font-semibold mb-2 text-linkedin-dark-blue">Category</h2>
                    <p>{category}</p>
                  </div>

                  {/* Seller Information */}
                  <div className="my-4">
                    <h2 className="text-2xl font-semibold mb-2 text-linkedin-dark-blue">Seller Information</h2>
                    <p className="text-linkedin-dark-blue">Seller: {user.name}</p>
                    <p className="text-linkedin-dark-blue">Email: {user.email}</p>
                    {/* Add more seller information as needed */}
                  </div>
              </div>


              <div className="mt-8 p-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
                  <div>
                    {relatedProducts.map((relatedProduct, index) => (
                      <div key={index} className="mb-4">
                        <Image
                          src={relatedProduct.featuredImage}
                          alt={relatedProduct.name}
                          width={80}
                          height={60}
                          className="rounded-lg mr-2"
                        />
                        <p className="text-sm">{relatedProduct.name}</p>
                      </div>
                    ))}
                  </div>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Customer Service</h2>
                <p>Contact us: {user.contactEmail}</p>
                <p>FAQs</p>
              </div>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src= '/uploads/2024-02-02/1706887295491-Add a heading.png' alt="Facebook" width={24} height={24} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image src= '/uploads/2024-02-02/1706887295491-Add a heading.png' alt="Twitter" width={24} height={24} />
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Newsletter Signup</h2>
                <form>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full border p-2 rounded-md mb-4"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>















































            </div>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className="w-full md:w-2/3 md:mr-8">
            <div>
              {/* Customer Reviews */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
                {/* Average Rating */}
                <div className="flex items-center mb-4">
                  <p className="text-lg font-semibold mr-2">{averageRating.toFixed(1)}</p>
                  {/* Star visualization component (you can replace this with your preferred method) */}
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        className={`h-6 w-6 fill-current ${
                          index < Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0l2.4 6.6h6.6l-5.4 4.8 2.4 6.6-6-5.4-6 5.4 2.4-6.6-5.4-4.8h6.6l2.4-6.6z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className='flex'>
                  {reviews.map((review, index) => (
                    <div key={index} className="mb-4 p-4">
                      <p className="text-lg font-semibold">{review.title}</p>
                      <p className="text-gray-600 mb-2">{review.author} - {review.date}</p>
                      <p>{review.comment}</p>
                      {/* Add more review details as needed */}
                    </div>
                  ))}
                </div>

                {/* Write a Review Option (if applicable) */}
                <div className="mt-4">
                  {/* Add your logic to conditionally render the option based on whether users can write reviews */}
                  {/* {userCanWriteReview && ( */}
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                      Write a Review
                    </button>
                  {/* )} */}
                </div>
                </div>
            </div>
          </div>
        </div>
        {/* Zoom Modal */}
        {selectedProduct && (
          <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setSelectedProduct(null)}
          >
            <img src='/uploads/2024-02-02/1706887295491-Add a heading.png' alt={selectedProduct.name} className="max-w-full max-h-full" />
          </div>
        )}                
    </div>
  );
};

export default Product;






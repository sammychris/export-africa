'use client'
import React, {useState } from 'react';
import Header from "@/components/Header";


const productDemo = {
    featuredImage: "https://picsum.photos/id/1018/600/400",  // Coffee-related from Lorem Picsum
    gallery: [
        "https://picsum.photos/id/1015/400/300", 
        "https://picsum.photos/id/1020/400/300",
        "https://picsum.photos/id/1020/400/300",
        "https://picsum.photos/id/1020/400/300",
    ],
    // video: "https://www.youtube.com/embed/y-4X9GK_xxc",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    name: "Single-Origin Organic Coffee Beans",
    description: "Ethically sourced, hand-roasted beans with rich chocolate and nutty notes.",
    category: "Processed Foods",
    price: 18.99,
    currency: "USD",
    measurementUnit: "lb", 
    rating: 3,
    reviews: [
        { buyerName: 'Jane W.', rating: 5, content: 'Amazing coffee! Smooth and flavorful.' },
        { buyerName: 'Mike L.', rating: 4, content: 'Great quality, would order again.' }
    ]
};


const relatedProducts = [
    { 
        id: 1, // Unique IDs are important 
        name: "Premium Roasted Coffee Beans", 
        shortDescription: "Dark roast, single-origin beans with bold flavor.",
        featuredImage: "https://picsum.photos/id/1021/400/300",
        category: "Processed Foods" // Assuming this matches the current product
    },
    { 
        id: 2, 
        name: "Artisan Coffee Blend", 
        shortDescription: "Medium roast with notes of chocolate and caramel.",
        featuredImage: "https://picsum.photos/id/1024/400/300",
        category: "Processed Foods" 
    },
    {
        id: 3,
        name: "Fair Trade Decaf Coffee",
        shortDescription: "Smooth and flavorful decaf, ethically sourced.",
        featuredImage: "https://picsum.photos/id/1019/400/300",
        category: "Processed Foods"
    },
    {
        id: 4,
        name: "Fair Trade Decaf Coffee",
        shortDescription: "Smooth and flavorful decaf, ethically sourced.",
        featuredImage: "https://picsum.photos/id/1019/400/300",
        category: "Processed Foods"
    } 
    //  Ideally more related products for variety...
];




const SampleProduct = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState(productDemo);

    const openVideoModal = (videoUrl) => {
        setIsOpen(true);
    }

    const updateFeaturedImage = (newImageUrl) => {
        // 1. Update Local Product Data
        setProduct((prevProduct) => ({
          ...prevProduct,
          featuredImage: newImageUrl,
        }));
    
      };
      
    return (
        <>
            <Header />
            <div className="container mx-auto max-w-screen-lg p-6"> 
                <div className="bg-white border rounded-lg p-4 mb-4 flex items-center">
                    <input 
                        type="text" 
                        placeholder="Search by product name"
                        // value={searchQuery}
                        // onChange={(e) => setSearchQuery(e.target.value)}
                        className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-blue-400" 
                    />
                    {/* Dropdown for category */}
                    <select
                        // value={categoryFilter}
                        //   onChange={(e) => setCategoryFilter(e.target.value)}
                        className="ml-4 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"
                        >
                        {/* {categories.map((category) => (
                            <option key={category.value} value={category.value}>
                            {category.label}
                            </option>
                        ))} */}
                    </select>
                    {/* Simple price range inputs */}

                    {/* // ... Inside your header area, after the category dropdown */}

                {/* Simple price range */}
                    <div className="ml-4 flex gap-2">
                        <input 
                            type="number" 
                            placeholder="Min Price"
                            // value={priceMin}
                            //   onChange={(e) => setPriceMin(e.target.value)}
                            className="border border-gray-300 rounded-md py-2 px-3 w-32 focus:outline-none focus:ring focus:ring-blue-400"
                        />
                        <input 
                            type="number" 
                            placeholder="Max Price"
                            // value={priceMax}
                            //   onChange={(e) => setPriceMax(e.target.value)}
                            className="border border-gray-300 rounded-md py-2 px-3 w-32 focus:outline-none focus:ring focus:ring-blue-400"
                        />
                    </div>

                </div>





                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

                    {/* Image/Media Column */}
                    <div> 
                        <div className="main-image-container"> 
                            <img src={product.featuredImage} alt={product.name} className="w-full h-96 object-cover" />
                        </div>
                        {/* If Gallery or Video */}
                        {/* <div className="grid grid-cols-3 gap-2 mt-4">  */}
                            {/* Thumbnails for gallery images */}
                            {/*  Video placeholder, if applicable */} 
                        {/* </div> */}
                        <div className="grid grid-cols-3 gap-2 mt-4"> 
                            {/* Gallery Thumbnails */}
                            {product.gallery && product.gallery.map((imageUrl, index) => (
                                <div key={index} className="cursor-pointer"> {/*  Clickable */}
                                    <img src={imageUrl} alt={`${product.name} Gallery ${index + 1}`} 
                                        className="w-full h-24 object-cover" 
                                        onClick={() => updateFeaturedImage(imageUrl)} // Hypothetical image swap
                                    />
                                </div>
                            ))}

                            {/* Video Placeholder */}
                             {product.video && (
                                <div className="bg-gray-200 h-24 flex items-center justify-center">
                                    <button onClick={() => openVideoModal(product.video)} className="hover:text-blue-500">
                                        {/* Replace with a 'Play' icon */}
                                        Play Video 
                                    </button> 
                                </div>
                            )} 
                            
                        </div>
                    </div>

                    {/*  Product Details Column */}
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <div className="flex items-center text-xl font-bold py-2">
                            {[...Array(5)].map((_, index) => (
                                <span key={index} style={{color: index < product.rating ? '#facc15' : '#d1d5db'}}>
                                    ★ 
                                </span>
                            ))}
                            {/* <span className="ml-2 text-gray-500">({product.reviewCount})</span>  */}
                            {/* <span className="ml-2 text-gray-500">({product.reviews.length})</span>  */}
                            <span  className="ml-1 text-lg font-normal">({product.reviews.length}) reviews</span>
                        </div>
                        {/* 'text-gray-300' */}
                        <div>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-gray-600">This exquisite, single-origin coffee boasts a symphony of flavors, 
                            with notes of rich dark chocolate, toasted hazelnut, and a hint of citrus. 
                            Grown at high altitudes in the fertile volcanic soil of [region], 
                            these beans are hand-picked for optimal ripeness and meticulously roasted to perfection.</p>

                            <ul>
                                <li><strong>Roast Level:</strong> Medium</li>
                                <li><strong>Certifications:</strong> Fair Trade, Rainforest Alliance</li>
                                <li><strong>Tasting Notes:</strong> Chocolate, Hazelnut, Citrus</li>
                            </ul>

                            <p className="text-gray-600">Elevate your coffee experience with these extraordinary beans. Whether you 
                            enjoy a classic drip brew or a decadent espresso,  this coffee promises an 
                            unforgettable flavor journey.</p>
                        </div>
                        {/* <p className="text-gray-600">{product.description}</p> */}

                        {/* Price and Measurement */}
                        <div className="mt-4 text-lg font-medium">
                            <span className="text-2xl font-bold">${product.price}</span> 
                            <span>/{product.measurementUnit} </span>
                            <span className="text-gray-600">({product.currency})</span> 
                        </div>

                        {/* Category, maybe tags? */}
                        <div className="mt-3">
                        <span className="inline-block bg-gray-200 px-3 py-1 rounded-md text-sm">
                                {product.category}
                        </span>
                        </div>

                        {/* Add to Cart /  Buy Functionality (Button) */}
                        ... 

                        {/* Contact Supplier Button */}
                        <div class="mt-6">
                            <button class="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-green-300">
                                Contact Supplier
                            </button>
                        </div>


                        {/* onSubmit={handleSubmit} */}
                        <form class="mt-6"> {/* Hypothetical submit */}
                            <h3 class="text-lg font-medium mb-3">Leave a Review</h3>

                            {/* Rating */}
                            <div class="mb-4">
                                <label htmlFor="rating" class="block text-gray-700 mb-1">Your Rating:</label>
                                {/* Star Rating Component (Replace with your implementation) */}
                                <div class="flex"> 
                                    {[...Array(5)].map((_, index) => (
                                        <label key={index} className="mr-2"> {/* Spacing */}
                                        <input 
                                            type="radio" 
                                            name="rating" 
                                            value={index + 1}
                                            id={`rating-${index + 1}`}
                                            className="hidden peer" 
                                            required // Ensure a  rating is selected 
                                        />
                                        <span className="peer-checked:text-yellow-400 text-gray-300 text-2xl">★</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Comment */}
                            <div class="mb-4">
                                <label htmlFor="review-text" class="block text-gray-700 mb-1">Your Review:</label>
                                <textarea id="review-text" rows="4" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"></textarea>
                            </div>

                            {/* Name (Optional) */}
                            <div class="mb-4">
                                <label htmlFor="reviewer-name" class="block text-gray-700 mb-1">Your Name (Optional):</label>
                                <input type="text" id="reviewer-name" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200" />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
                                Submit Review
                            </button>
                        </form>


                        {/* Reviews Section */}
                        <div class="mt-8"> 
                            <h2 class="text-2xl font-bold mb-4">Reviews</h2>

                            {/* Existing Reviews (Demo Structure) */}
                            <div class="border border-gray-200 rounded-md p-4 mb-4"> {/* One Review */}
                                <div class="flex items-center mb-2">
                                    <h3 class="text-lg font-medium">Jane W.</h3>
                                    <div class="ml-3">{/* Star Rating - Placeholder */}</div>
                                </div>
                                <p>Great product! Excellent communication with the supplier.</p>
                            </div>
                            {/* ... More reviews if fetched ... */}

                            {/* Add Review Button */}
                            <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md">
                                Add Review
                            </button>
                        </div>

            ...


                        {/* Reviews Section (Structure depends on how you display reviews) */} 
                    </div> 
                </div>
            {/* Related Products  */}
            <div class="mt-10">
                <h2 class="text-2xl font-bold">You Might Also Like</h2> 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4"> 
                    {/* Individual Product Cards */}
                    {relatedProducts.map((product) => (
                        <div key={product.id} className="bg-white border border-gray-200 rounded-md p-4 shadow-md">
                            <a href={`/product/${product.id}`}> {/* Product Link */}
                                <img src={product.featuredImage} alt={product.name} className="h-48 w-full object-cover" />
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium">{product.name}</h3> 
                                    <p className="text-gray-600 text-sm">{product.shortDescription}</p> 
                                    {/* Consider: Price if relevant - Adjust formatting  */}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
        </div>

        <VideoModal isOpen={isOpen} videoUrl={product.video} onClose={() => setIsOpen(false)} /> 
    </div> 
    </>

    )
}

export default SampleProduct;



const VideoModal = ({ isOpen, videoUrl, onClose }) => {
    return (
      isOpen && ( 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"> 
        {/* Outermost div: Modal Overlay */}
            <div className="bg-white p-6 rounded-md shadow-xl w-[500px] relative m-5"> 
                {/* Modal Content Area */}
                <button onClick={onClose} className="absolute top-[-25px] right-0 text-white font-bold">
                    Close
                </button> 

                <iframe 
                    src={videoUrl} 
                    height={300}
                    width={500}
                    // ... your iframe attributes ...
                    className="w-full aspect-w-16 aspect-h-9" // Maintain video aspect ratio
                ></iframe>

            </div>
        </div>
      )
    ); 
};
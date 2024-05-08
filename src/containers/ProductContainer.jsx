'use client'
import React, {useEffect, useState } from 'react';
import Link from 'next/link';
import ProductDetails from '@/components/ProductDetails';
import ReviewSection from '@/components/ReviewSection';
import ProductMedia from '@/components/ProductMedia';
import VideoModal from '@/components/VideoModal';
import Loading from '@/components/Loading';


const ProductContainer = ({productData, relatedProducts}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState(null);

    const openVideoModal = () => {
        setIsOpen(true);
    }
    useEffect(() => {
        setProduct(productData)
    }, [productData])

    const updateFeaturedImage = (newImage) => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          featuredImage: newImage,
        }));
    
    };

    console.log({product})
    

    if (!product) return <Loading /> 
    return (
            <div className="container mx-auto max-w-screen-lg p-6"> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
                    <ProductMedia product={product} updateFeaturedImage={updateFeaturedImage} openVideoModal={openVideoModal} />
                    <div>
                        <ProductDetails product={product} />
                        <div class="mt-6">
                            <Link href={`/exporters/${product.exporter}`} class="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-green-300">
                                Contact Supplier
                            </Link>
                        </div>
                        {/* Reviews Section */}
                        <ReviewSection />
                    </div> 
                </div>
            {/* Related Products  */}
            <div class="mt-10">
                <h2 class="text-2xl font-bold">You Might Also Like</h2> 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4"> 
                    {relatedProducts.map((product) => (
                        <div key={product._id} className="bg-white border border-gray-200 rounded-md p-4 shadow-md">
                            <Link href={`/products/${product._id}`}>
                                <img src={product.featuredImage.path} alt={product.name} className="h-48 w-full object-cover" />
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium">{product.name}</h3> 
                                    <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p> 
                                    {/* Consider: Price if relevant - Adjust formatting  */}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
        </div>

        <VideoModal isOpen={isOpen} videoUrl={product.videoUrl} onClose={() => setIsOpen(false)} /> 
    </div> 
    )
}

export default ProductContainer;

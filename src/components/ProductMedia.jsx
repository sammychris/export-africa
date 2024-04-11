

const ProductMedia = ({product, updateFeaturedImage, openVideoModal}) => {
    return (                    <div> 
        <div className="main-image-container"> 
            <img src={product.featuredImage.path} alt={product.name} className="w-full h-96 object-cover" />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4"> 
            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.map((img, index) => (
                <div key={index} className="cursor-pointer">
                    <img src={img.path} alt={`${product.name} Gallery ${index + 1}`} 
                        className="w-full h-24 object-cover" 
                        onClick={() => updateFeaturedImage(img)} // Hypothetical image swap
                    />
                </div>
            ))}

            {/* Video Placeholder */}
             {product.videoUrl && (
                <div className="bg-gray-200 h-24 flex items-center justify-center">
                    <button onClick={() => openVideoModal()} className="hover:text-blue-500">
                        {/* Replace with a 'Play' icon */}
                        Play Video 
                    </button> 
                </div>
            )} 
            
        </div>
    </div>)


}

export default ProductMedia;


const ProductDetails = ({product}) => {
    return (
        <>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center text-xl font-bold py-2">
                {[...Array(5)].map((_, index) => (
                    <span key={index} style={{color: index < product.rating ? '#facc15' : '#d1d5db'}}>
                        ★ 
                    </span>
                ))}
                {/* <span  className="ml-1 text-lg font-normal">({product.reviews.length}) reviews</span> */}
            </div>
            <div>
                <p className="text-gray-600">{product.description}</p>
            </div>

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
        </>
    )
}

export default ProductDetails;

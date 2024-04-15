// components/ProductCard.js
const ProductCard = ({ product }) => {
    return (
      <div className="flex flex-col gap-2 shadow-md rounded-md p-4">
        <img src={product.image} alt={product.name} className="w-full h-24 object-cover" />
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-gray-700">{product.description.substring(0, 60)}</p>
        <span className="font-bold text-green-500">{product.price}</span>
        <a href={`/products/${product.id}`} className="text-blue-500 underline">View Details</a>
      </div>
    );
  };
  
  export default ProductCard;
  
import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <Link href={`/products/${product._id}`}>
            <div className="bg-white border rounded-lg shadow-md p-4">
                <img src={product.featuredImage.path} alt={product.name} className="m-auto h-48 rounded-t-lg" />
                <div className="px-4 py-2">
                    <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between mt-2">
                        <span className="font-semibold text-gray-900">{`${product.price} ${product.currency}/${product.measurementUnit}`}</span>
                        <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full text-xs font-medium">Verified Exporter</span>
                    </div>
                </div>
            </div>
        </Link>

    );
}
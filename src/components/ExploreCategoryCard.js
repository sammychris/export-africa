import Link from 'next/link';

const ExploreCategoryCard = ({category}) => {
    return(
        <div key={category.id} className="bg-white p-4 rounded-md shadow-md">
            <img src={category.image.path} alt={category.name} className="w-full h-24 object-cover mb-2 rounded-md" />
            <h3 className="text-lg font-medium">{category.name}</h3>
            <Link className="text-gray-600 text-sm hover:underline" href={`/products/search?category=${category._id}`}>View More</Link>
        </div>
    )
}

export default ExploreCategoryCard;


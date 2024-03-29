


const ReviewForm = () => {
    return (
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
    )
}

export default ReviewForm;

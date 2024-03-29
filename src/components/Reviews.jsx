
const Reviews = ({ reviews }) => (
    <div>
      <h3 className="text-lg font-bold text-deep-blue mb-2">Customer Reviews</h3>
      {reviews.map((review) => (
        <div key={review.id} className="mb-2">
          <p className="font-bold text-gray-700 text-linkedin-blue text-sm">{review.user}</p>
          <p className="text-xs text-gray-600">Rating: {review.rating}/5</p>
          <p className="text-xs text-gray-600">{review.comment}</p>
        </div>
      ))}
    </div>
  );


  export default Reviews;
  
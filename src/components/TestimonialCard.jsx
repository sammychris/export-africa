import React from 'react';

function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-white rounded shadow p-6 text-center">
      <p className="text-gray-600 italic mb-4">{quote}</p> 
      <p className="font-medium">{author}</p>
    </div>
  );
}

export default TestimonialCard;

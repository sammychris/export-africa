import React from 'react';

const SocialProof = () => {
  // Dummy data for quote carousel
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis mauris vel ipsum consequat efficitur.",
      author: "John Doe, Developer"
    },
    {
      id: 2,
      text: "Sed et lacus euismod, consectetur elit at, consectetur turpis. Vestibulum nec mi odio.",
      author: "Jane Smith, Employer"
    }
  ];

  // Dummy data for trust badges
  const trustBadges = [
    {
      id: 1,
      logo: "company1_logo.png",
      alt: "Company 1"
    },
    {
      id: 2,
      logo: "company2_logo.png",
      alt: "Company 2"
    }
  ];

  return (
    <div className="py-8 text-center">
      {/* Quote Carousel */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">What People Say</h2>
        <div className="flex flex-col items-center">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-4 rounded shadow-md mb-4">
              <p className="text-gray-700">{testimonial.text}</p>
              <p className="text-gray-600 mt-2">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Trust Badges */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Trusted By</h2>
        <div className="flex justify-center items-center">
          {trustBadges.map(badge => (
            <img key={badge.id} src={badge.logo} alt={badge.alt} className="h-12 mx-4" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;

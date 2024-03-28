import React from 'react';
import TestimonialCard from './TestimonialCard';

function TestimonialsSection() {
  const testimonialsData = [
    {
      quote: "This platform has made it so much easier to connect with buyers across Africa. Highly recommended!",
      author: "Jane M., Cocoa Exporter, Ghana"
    },
    {
        quote: "This platform has made it so much easier to connect with buyers across Africa. Highly recommended!",
        author: "Jane M., Cocoa Exporter, Ghana"
      },
      {
        quote: "This platform has made it so much easier to connect with buyers across Africa. Highly recommended!",
        author: "Jane M., Cocoa Exporter, Ghana"
      },
    // Add more testimonial data objects as needed
  ];

  return (
    <section className="my-8 bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-medium text-center mb-6">What Our Exporters Say</h2>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} /> 
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

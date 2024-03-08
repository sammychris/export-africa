import React from 'react';

const HeroSection = () => {
  return (
    <div className="py-8 text-center">
      {/* Headline */}
      <h2 className="text-4xl font-bold">The Hub for Remote Web Developers & Open-Source Projects</h2>
      {/* Subheading */}
      <p className="text-lg mt-4">Showcase skills, build in the open, find top remote opportunities</p>
      {/* Search Bars */}
      <div className="mt-8">
        <input className="border border-gray-300 px-4 py-2 mr-4" type="text" placeholder="Search for jobs..." />
        <input className="border border-gray-300 px-4 py-2" type="text" placeholder="Search for projects..." />
      </div>
    </div>
  );
};

export default HeroSection;

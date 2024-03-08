import React from 'react';

const TopBanner = () => {
  return (
    <div className="bg-blue-500 text-white py-4 text-center">
      {/* Logo & Tagline */}
      <h1 className="text-4xl font-bold">Your Portal Name</h1>
      <p className="text-lg">Remote Web Dev Jobs + Open-Source Collaboration</p>
      {/* Primary CTAs */}
      <div className="mt-4">
        <button className="bg-white text-blue-500 px-4 py-2 rounded mr-4">Find Developer Talent</button>
        <button className="bg-white text-blue-500 px-4 py-2 rounded">Find Remote Jobs</button>
      </div>
    </div>
  );
};

export default TopBanner;

'use client'
import React, { useState } from 'react';

const LatestFeatured = () => {
  const [activeTab, setActiveTab] = useState('jobs'); // Default active tab is 'jobs'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-8">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <button
          className={`mr-4 py-2 px-4 focus:outline-none ${activeTab === 'jobs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleTabChange('jobs')}
        >
          Latest Jobs
        </button>
        <button
          className={`py-2 px-4 focus:outline-none ${activeTab === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleTabChange('projects')}
        >
          Featured Projects
        </button>
      </div>

      {/* Concise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activeTab === 'jobs' ? (
          // Demo content for Latest Jobs
          <>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
              <p className="text-gray-600 mb-2">Company Name</p>
              <p className="text-gray-700 mb-4">Skills: HTML, CSS, JavaScript</p>
              <p className="text-gray-700">Location: Remote</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
              <p className="text-gray-600 mb-2">Company Name</p>
              <p className="text-gray-700 mb-4">Skills: Node.js, MongoDB, Express.js</p>
              <p className="text-gray-700">Location: Remote</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Backend Developer</h3>
              <p className="text-gray-600 mb-2">Company Name</p>
              <p className="text-gray-700 mb-4">Skills: Node.js, MongoDB, Express.js</p>
              <p className="text-gray-700">Location: Remote</p>
            </div>
          </>
        ) : (
          // Demo content for Featured Projects
          <>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
              <p className="text-gray-600 mb-2">Tech Stack: React, Redux, Node.js, MongoDB</p>
              <p className="text-gray-700">
                A full-stack e-commerce website built with React and Node.js.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Blog Platform</h3>
              <p className="text-gray-600 mb-2">Tech Stack: Next.js, GraphQL, Prisma</p>
              <p className="text-gray-700">
                A blog platform with serverless architecture using Next.js and GraphQL.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Blog Platform</h3>
              <p className="text-gray-600 mb-2">Tech Stack: Next.js, GraphQL, Prisma</p>
              <p className="text-gray-700">
                A blog platform with serverless architecture using Next.js and GraphQL.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Prominent "View All" Buttons */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg focus:outline-none mr-4">
          View All Jobs
        </button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg focus:outline-none">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default LatestFeatured;

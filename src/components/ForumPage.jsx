import React, { useState } from 'react';

// Sample data for forum categories, topics, and user profiles (replace with your actual data)
const forumCategories = [
  { id: 1, name: 'General Discussion' },
  { id: 2, name: 'Product Categories' },
  { id: 3, name: 'Trade Finance' },
  { id: 4, name: 'Logistics' },
];

const forumTopics = [
  { id: 101, category: 1, title: 'Welcome to the Forum!', author: 'Admin', lastActivity: '2 hours ago', replies: 5, views: 100 },
  { id: 102, category: 2, title: 'Best Practices for Product Quality', author: 'User1', lastActivity: '1 day ago', replies: 8, views: 120 },
  { id: 103, category: 1, title: 'Introduce Yourself!', author: 'User2', lastActivity: '3 hours ago', replies: 12, views: 80 },
  { id: 104, category: 3, title: 'Financing Options for Small Businesses', author: 'User3', lastActivity: '1 week ago', replies: 15, views: 150 },
  // ... more topics
];

const userProfiles = [
  { id: 'User1', username: 'User1', badges: ['Contributor'], reputation: 150 },
  { id: 'User2', username: 'User2', badges: ['Moderator'], reputation: 300 },
  { id: 'User3', username: 'User3', badges: ['Top Contributor'], reputation: 500 },
  // ... more profiles
];

const ForumPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = forumTopics.filter(
    (topic) =>
      (!selectedCategory || topic.category === selectedCategory) &&
      (!searchQuery || topic.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = () => {
    // Implement search logic based on searchQuery
    // Update search results accordingly
  };

  return (
    <div className="container mx-auto p-6 max-w-[1128px]">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md ml-2">
          Search
        </button>
      </div>

      {/* Forum Categories */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Forum Categories</h2>
        <div className="flex space-x-4">
          {forumCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Topic Listing */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Topic Listing</h2>
        <ul>
          {filteredTopics.map((topic) => (
            <li key={topic.id} className="border-b py-2">
              <h3 className="text-lg font-bold mb-1">{topic.title}</h3>
              <p>
                Author: {topic.author}, Last Activity: {topic.lastActivity}, Replies: {topic.replies}, Views: {topic.views}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Posting Tools */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Posting Tools</h2>
        <p>Post new topics or reply to existing ones using the posting tools.</p>
        {/* Add posting tools UI elements (buttons, forms, etc.) */}
      </div>

      {/* User Profiles */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">User Profiles</h2>
        <ul>
          {userProfiles.map((profile) => (
            <li key={profile.id} className="border-b py-2">
              <h3 className="text-lg font-bold mb-1">{profile.username}</h3>
              <p>Badges: {profile.badges.join(', ')}, Reputation: {profile.reputation}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForumPage;

import React, { useState } from 'react';

const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [feedback, setFeedback] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Sample data for categories, FAQs, and tutorials (replace with your actual data)
  const categories = [
    { id: 1, name: 'Getting Started', icon: '🚀' },
    { id: 2, name: 'Account & Profile', icon: '👤' },
    { id: 3, name: 'Transactions', icon: '💸' },
    { id: 4, name: 'Shipping', icon: '🚚' },
  ];

  const faqs = [
    { id: 101, category: 1, question: 'How do I create an account?', answer: 'To create an account, ...' },
    { id: 102, category: 2, question: 'How can I reset my password?', answer: 'To reset your password, ...' },
    // ... more FAQs
  ];

  const tutorials = [
    { id: 201, category: 1, title: 'Getting Started with our App', format: 'Video', link: 'https://example.com/tutorial1' },
    { id: 202, category: 2, title: 'Managing Your Profile', format: 'Text', link: 'https://example.com/tutorial2' },
    // ... more tutorials
  ];

  const handleSearch = () => {
    // Implement search logic based on searchQuery
    // Update search results accordingly
  };

  const handleFeedback = (isHelpful) => {
    // Implement feedback submission logic
    // Track user feedback for analytics or improvement purposes
    setFeedback(isHelpful ? 'Helpful' : 'Not Helpful');
  };

  const handleCategorySelect = (categoryId) => {
    // Implement logic to filter FAQs and tutorials based on the selected category
    setSelectedCategory(categoryId);
  };

  return (
    <div className="container mx-auto p-6 max-w-[1128px]">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for answers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-md ml-2">
          Search
        </button>
      </div>

      {/* Categories */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Categories</h2>
        <div className="flex space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
        <ul>
          {faqs
            .filter((faq) => !selectedCategory || faq.category === selectedCategory)
            .map((faq) => (
              <li key={faq.id}>
                <h3 className="text-xl font-bold mb-1">{faq.question}</h3>
                <p>{faq.answer}</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Tutorials and Guides */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Tutorials and Guides</h2>
        <ul>
          {tutorials
            .filter((tutorial) => !selectedCategory || tutorial.category === selectedCategory)
            .map((tutorial) => (
              <li key={tutorial.id}>
                <h3 className="text-xl font-bold mb-1">{tutorial.title}</h3>
                <p>
                  Format: {tutorial.format}, Link: <a href={tutorial.link}>{tutorial.link}</a>
                </p>
              </li>
            ))}
        </ul>
      </div>

      {/* Contact Information */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
        <p>
          For further assistance, feel free to contact us at:
          <br />
          Email: support@example.com
          <br />
          Phone: +123 456 7890
        </p>
      </div>

      {/* Additional Features */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Additional Features</h2>

        {/* Related Articles */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Related Articles</h3>
          {/* Implement logic to display related articles based on the current page or search query */}
          <ul>
            {/* Display related articles */}
          </ul>
        </div>

        {/* Breadcrumbs */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Breadcrumbs</h3>
          {/* Implement breadcrumbs logic to display user's search history */}
          <ul>
            {/* Display breadcrumbs */}
          </ul>
        </div>

        {/* Feedback Mechanism */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Feedback Mechanism</h3>
          <p>Was this page helpful?</p>
          <div>
            <button onClick={() => handleFeedback(true)} className="bg-green-500 text-white p-2 rounded-md mr-2">
              Yes
            </button>
            <button onClick={() => handleFeedback(false)} className="bg-red-500 text-white p-2 rounded-md">
              No
            </button>
            {feedback && <p>Thank you for your feedback! ({feedback})</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;

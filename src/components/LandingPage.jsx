import React, {useState, useEffect} from 'react';

const LandingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulating a loading delay for demonstration purposes
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      // Clear the timeout on component unmount
      return () => clearTimeout(timeout);
    }, []);
  return (
    <div className="bg-white p-6 shadow-md rounded-md text-center">
      {/* App Logo */}
      <img
        src="/app-logo.png"  // Replace with the actual path to your app's logo
        alt="App Logo"
        className="w-16 h-16 mx-auto mb-4 rounded-full"
      />

      {/* App Name */}
      <h1 className="text-2xl font-bold text-deep-blue mb-2">Your App Name</h1>

      {/* Slogan or Value Proposition */}
      <p className="text-gray-700 mb-4">Connecting African Trade Globally</p>

      {/* Visually Compelling Image */}
      <img
        src="/app-image.jpg"  // Replace with the actual path to your app's visually compelling image
        alt="App Image"
        className="w-full h-48 object-cover mb-4 rounded-md"
      />

      {/* Progress Indicator (Optional) */}
      {/* Add a loading spinner, progress bar, or any animation to indicate loading progress */}
       {/* Loading Spinner */}
       {loading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full border-t-4 border-deep-blue border-solid h-8 w-8"></div>
        </div>
      )}

      {/* Additional content or call-to-action buttons can be added as needed */}
    </div>
  );
};

export default LandingPage;

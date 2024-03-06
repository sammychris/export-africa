import React, { useState } from 'react';

const AuthPage = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLoginSubmit}>
          {/* Login Form Fields */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-deep-blue"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-deep-blue"
                required
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          {/* Additional elements like "Remember Me" and "Forgot Password" can be added here */}
            {/* "Remember Me" Checkbox */}
            <div className="mb-4 flex items-center">
                <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-gray-600">Remember Me</label>
            </div>
            
            {/* "Forgot Password" Link */}
            <div className="mb-4 text-right">
                <a href="/forgot-password" className="text-deep-blue hover:underline">Forgot Password?</a>
            </div>

            <div className="mb-4 flex items-center">
                <button type="submit" className="bg-deep-blue text-white py-2 px-4 rounded-md">Login</button>
            </div>

             {/* Social Login Options */}
             <div className="mb-4">
                <p className="text-gray-700 mb-2">Login with:</p>
                <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Google</button>
                    <button className="bg-indigo-700 text-white py-2 px-4 rounded-md">Facebook</button>
                    {/* Add more social login buttons as needed */}
                </div>
            </div>
        </form>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
          {/* Signup Form Fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={signupData.name}
              onChange={handleSignupChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-deep-blue"
              required
            />
          </div>
          {/* Additional signup fields */}
          {/* ... */}

          {/* Signup Password Fields */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-deep-blue"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-deep-blue"
              required
            />
          </div>
          {/* Signup additional elements can be added here */}
          <div className="mb-4 flex items-center">
            <button type="submit" className="bg-deep-blue text-white py-2 px-4 rounded-md">Sign Up</button>
          </div>

           {/* Social Login Options */}
           <div className="mb-4">
                <p className="text-gray-700 mb-2">Login with:</p>
                <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Google</button>
                    <button className="bg-indigo-700 text-white py-2 px-4 rounded-md">Facebook</button>
                    {/* Add more social login buttons as needed */}
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;

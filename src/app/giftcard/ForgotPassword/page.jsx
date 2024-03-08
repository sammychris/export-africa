'use client'
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null); // To display status messages 

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... your logic to send a password reset request to the backend
    // ... handle success/error messages in setMessage
  }

  return (
    <div className="container mx-auto">
      {/* Your header, if applicable */}

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-medium mb-4">Reset Your Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border border-gray-300 p-2 w-full rounded" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Send Reset Link</button>
        </form>

        {/* Display Success/Error Messages */}
        {message && (
          <div className={`mt-3 p-3 rounded ${message.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}
      </section>
    </div>
  );
}

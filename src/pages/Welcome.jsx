import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <Link to="/signup">
          <button className="w-full py-3 rounded-md bg-purple-600 text-white font-medium mb-3">
            Create Account
          </button>
        </Link>
        
        <Link to="/login">
          <button className="w-full py-3 rounded-md bg-purple-200 text-purple-800 font-medium">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome; 
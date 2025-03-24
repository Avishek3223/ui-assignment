import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    company: '',
    isAgency: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? name === 'isAgency' ? value === 'yes' : value === 'no' : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create your PopX account</h1>
        
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-purple-600 text-sm mb-1" htmlFor="fullName">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-purple-600 text-sm mb-1" htmlFor="phoneNumber">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-purple-600 text-sm mb-1" htmlFor="email">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-purple-600 text-sm mb-1" htmlFor="password">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-5">
            <label className="block text-purple-600 text-sm mb-1" htmlFor="company">
              Company name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Marry Doe"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          
          <div className="mb-8">
            <p className="block text-sm mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex items-center">
              <div className="mr-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={formData.isAgency}
                    onChange={handleChange}
                    className="form-radio text-purple-600 w-5 h-5"
                  />
                  <span className="ml-2">Yes</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={!formData.isAgency}
                    onChange={handleChange}
                    className="form-radio text-purple-600 w-5 h-5"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-purple-600 text-white font-medium"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup; 
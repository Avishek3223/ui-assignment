import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputComponent from '../components/common/InputComponent';

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    company: '',
    isAgency: true
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? name === 'isAgency' ? value === 'yes' : value === 'no' : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to profile page with user data
    navigate('/profile', { 
      state: { 
        userData: {
          fullName: formData.fullName,
          email: formData.email
        } 
      } 
    });
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative w-full max-w-sm p-6 border h-[50rem]">
        <h1 className="text-3xl font-[600] w-[55%] text-gray-800 mb-2">Create your PopX account</h1>
        
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <InputComponent
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              width={100}
            />
          </div>
          
          <div className="mb-4">
            <InputComponent
              label="Phone number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              width={100}
            />
          </div>
          
          <div className="mb-4">
            <InputComponent
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              width={100}
            />
          </div>
          
          <div className="mb-4">
            <InputComponent
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              width={100}
            />
          </div>
          
          <div className="mb-5">
            <InputComponent
              label="Company name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              width={100}
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
            className="absolute bottom-3 left-4 w-[calc(100%-2rem)] py-3 rounded-md bg-[#6d29da] text-white font-medium"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup; 
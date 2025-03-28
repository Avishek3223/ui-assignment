import React, { useState } from 'react';
import InputComponent from '../components/common/InputComponent';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full border max-w-sm p-6 h-[50rem]">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 w-[60%]">Signin to your PopX account</h1>
        <p className="text-gray-400 mb-8 text-[1.2rem] font-[500]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <InputComponent
              label="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              width={100}
            />
          </div>
          
          <div className="mb-6">
            <InputComponent
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              width={100}
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gray-400 text-white font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 
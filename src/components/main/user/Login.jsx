import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-orange-500">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded-md"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-300 p-2 w-full rounded-md"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="mb-2 bg-orange-500 text-white p-2 rounded-md w-full hover:bg-orange-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
          <span >Don't have an account? </span><Link to="/user/register" className='text-orange-500 hover:text-orange-600'>Register here</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-green-800 mb-4">Vicky salon</h2>

        {/* Placeholder image */}
        <div className="w-full h-32 bg-gray-300 rounded-md mb-6 flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>

        <h3 className="text-xl font-semibold text-center text-green-900 mb-6">Login</h3>

        <form className="space-y-4">
          <div className="flex items-center border border-green-600 rounded-md px-3 py-2">
            <i className="ri-user-line text-green-700 mr-2"></i>
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center border border-green-600 rounded-md px-3 py-2">
            <i className="ri-lock-line text-green-700 mr-2"></i>
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="text-right text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition-shadow shadow-md"
          >
            Sign in
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-700">
          <a href="#" className="hover:underline">
            Create new account
          </a>
        </div>
      </div>
    </div>
  );
}

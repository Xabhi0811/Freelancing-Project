import React from 'react';

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-1">Vicky Salon</h2>

        {/* Profile section */}
        <div className="flex items-center justify-between mt-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <i className="ri-user-line text-gray-600 text-xl"></i>
            </div>
            <div>
              <p className="text-sm font-semibold">Client</p>
              <ul className="text-xs text-gray-600 list-disc ml-4">
                <li>Name</li>
                <li>Contact Info</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Edit Profile</button>
            <button className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Log out</button>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="text-center text-lg font-semibold text-gray-700 mb-4">Appointments Form</h3>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-200 flex items-center justify-center py-2 rounded">
            <i className="ri-user-line mr-2 text-gray-700"></i>
            <span className="text-sm text-gray-800">firstname</span>
          </div>
          <div className="bg-gray-200 flex items-center justify-center py-2 rounded">
            <span className="text-sm text-gray-800">lastname</span>
          </div>
        </div>

        <form className="space-y-3">
          <div className="flex items-center border border-green-600 rounded-md px-3 py-2">
            <i className="ri-mail-line text-green-700 mr-2"></i>
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center border border-green-600 rounded-md px-3 py-2">
            <i className="ri-phone-line text-green-700 mr-2"></i>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center border border-green-600 rounded-md px-3 py-2">
            <i className="ri-lock-line text-green-700 mr-2"></i>
            <input
              type="password"
              placeholder="password"
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700"
            >
              Conformation
            </button>
            <button
              type="button"
              className="bg-red-400 text-white px-6 py-2 rounded-md shadow-md hover:bg-red-500"
            >
              Cancel
            </button>
          </div>
        </form>

        <hr className="my-6" />

        <div className="flex justify-between text-sm text-gray-600">
          <a href="#" className="hover:underline">Help & Support</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
}

import React from 'react';


export default function UserAppointments() {
  return (
      
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-1">Vicky Salon</h2>

        {/* Profile section */}
        <div className="flex items-center gap-3 mt-4 mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <i className="ri-user-line text-green-800 text-xl"></i>
          </div>
          <div>
            <ul className="text-sm text-gray-700 list-disc ml-4">
              <li>Name</li>
              <li>Contact Info</li>
            </ul>
            <p className="text-xs text-gray-500">Client profile picture</p>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">On Going Appointments</h3>

        {/* Appointment Cards */}
        <div className="space-y-3 mb-5">
          <div className="bg-gray-200 p-3 rounded-md">
            <p className="text-sm font-semibold">March 2 - <span className="font-normal">12:00</span></p>
            <p className="text-sm text-gray-700">Hairstylist name: Vicky</p>
          </div>
        </div>

        <h3 className="text-center font-semibold text-gray-800 mb-3">User Appointment</h3>

        {/* Appointment ID box */}
        <div className="bg-gray-200 px-3 py-2 rounded mb-5">
          <p className="text-sm font-semibold text-gray-700">User appointment no: <span className="font-normal">#123456</span></p>
        </div>

        {/* Cancel Button */}
        <div className="flex justify-center">
          <button className="bg-green-600 text-white px-5 py-2 rounded shadow-md hover:bg-green-700 transition-all">
            Cancel Appointment
          </button>
        </div>

        <hr className="my-6" />

        <div className="flex justify-between text-sm text-gray-600">
          <a href="#" className="hover:underline">Help & Support</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
}

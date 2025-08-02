import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';







export default function Login() {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
   /* try {
      const res = await axios.post('http://localhost:5000/api/login', {
        name: number,
        password: password
      });
      console.log(res.data); // ✅ Login successful
    } catch (err) {
      console.error(err.response?.data?.msg || 'Server error');
    }*/

    console.log('Name:', number);
    console.log('Password:', password);
  
    Navigate('/appintment')
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-center text-2xl font-bold text-green-800 mb-4">Vicky salon</h2>

        {/* Placeholder image */}
        <div className="w-full h-32 bg-gray-300 rounded-md mb-6 flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>

        <h3 className="text-xl font-semibold text-center text-green-900 mb-6">Style With Us</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="flex items-center border border-green-600 rounded-md px-3 py-2">
            <i className="ri-user-line text-green-700 mr-2"></i>
            <input
            value={number}
            onChange={(e)=>{
              setNumber(e.target.value)
            }}
              type="Name"
              placeholder="Name"
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center border border-green-600 rounded-md px-3 py-2">
            <i className="ri-lock-line text-green-700 mr-2"></i>
            <input
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
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
            className=" block text-center w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition-shadow shadow-md"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-700">
      <div>
    <a href="#" className="hover:underline">
      Create new account
     </a>
     </div>
    <div className="mt-2">
     <button className="text-base font-semibold text-orange-600 hover:underline">
      Admin Only
       </button>
       </div>
          </div>

      </div>
    </div>
  );
}

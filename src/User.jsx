import React, { useState } from 'react';
import Diamond from './assets/Image.png';
import { Link } from 'react-router-dom';

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add further logic for form submission like sending data to backend
  };

  return (
    <div className='flex items-center justify-center h-screen bg-red-500'>
      <div className='bg-white rounded-lg p-8 w-11/12 max-w-md'>
        <h1 className='text-3xl font-bold text-center mb-4'>Registration</h1>
        <div className='flex items-center justify-center mb-6'>
          <img src={Diamond} alt="Profile" className='w-24 h-24 rounded-full mb-4' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className='w-full px-3 py-2 border border-gray-300 rounded-md'
            />
          </div>
          <Link to="/admin">
            <button type="submit" className='w-full bg-red-500 text-white py-2 rounded-md'>
                Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegistrationScreen;

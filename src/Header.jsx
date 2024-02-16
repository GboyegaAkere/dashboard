import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='bg-gray-300'>
             <nav className='bg-red-500 p-4 flex justify-between items-center'>
      <div>
        <Link to="/" className='text-white text-lg font-bold'>
          Home
        </Link>
      </div>
      <div className='hidden md:block'>
        <Link to="/register" className='text-white mx-4'>
          Register
        </Link>
        <Link to="/admin" className='text-white mx-4'>
          Dashboard
        </Link>
      </div>
      <div className='block md:hidden'>
        {/* Hamburger menu for mobile view */}
        <button className='text-white'>&#9776;</button>
      </div>
    </nav>
    </div>
   
  );
};

export default Header;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

import Diamond from './assets/Image.png';

const Admin = () => {
  // Dummy user data
  const userData = {
    name: 'Akira Haruto',
    loginTime: '2024-02-15 10:30 AM',
    giftReceived: 5,
    lastSeen: '2024-02-14',
    userDetails: {
      email: 'AkiraHaruto.com',
      role: '管理者',
      // Add more user details as needed
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-red-500'>
      <div className='bg-white rounded-lg p-8 w-11/12 max-w-md'>
        <h1 className='text-3xl font-bold text-center mb-4'>経営</h1>
        <div className='flex items-center justify-center mb-6'>
          <img src={Diamond} alt="Profile" className='w-24 h-24 rounded-full mb-4'/>
          <p className='text-xl font-bold'>{userData.name}</p>
        </div>
        <div className='mb-6'>
          <h2 className='text-lg font-bold mb-2'>ユーザー情報</h2>
          <p className='text-xl'>ログイン時間: {userData.loginTime}</p>
          <p className='text-xl'>受け取ったギフト: {userData.giftReceived}</p>
          <p className='text-xl'>最後に見たのは:{userData.lastSeen}</p>
        </div>
        <div className='mb-6'>
          <h2 className='text-lg font-bold mb-2'>ユーザーの詳細</h2>
          <p className='text-xl'>Eメール: {userData.userDetails.email}</p>
          <p className='text-xl'>役割:  {userData.userDetails.role}</p>
          {/* Add more user details here */}
        </div>
      </div>
    </div>
  );
};

export default Admin;


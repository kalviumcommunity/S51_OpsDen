import React from 'react';
import logo from '../assets/Logo-2.png';
import profile from '../assets/profile_pic.png';
import '../App.css'

export default function Navbar() {
  return (
    <nav id='color' className='flex justify-between items-center p-5 shadow-blue-700 shadow-xl'>
      <img className='h-14' src={logo} alt="logo" />
      <input id='searchBar' type="text" className='px-2 py-1 bg-transparent border rounded w-72' placeholder='Search 🔍'/>
      <div className='flex items-center justify-between'>
        <button className='text-white rounded h-7 border border-white text-xs px-3 m-7'>POST</button>
        <p className='text-white m-7'>Username</p>
        <img src={profile} alt="profile_pic" className='h-9 rounded-full' />
      </div>
    </nav>
  );
}

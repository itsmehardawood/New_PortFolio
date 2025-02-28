import Image from 'next/image';
import React from 'react';

function Navbar() {
  return (
    <div
      className='flex h-28 justify-around items-center px-6'
      style={{
        position: 'fixed', // Use fixed positioning to make it stay on top
        top: 0,            // Align to the top of the viewport
        left: 0,           // Align to the left of the viewport
        width: '100%',     // Full width
        zIndex: 1000,      // Ensure it renders above other content
         
      }}
    >
      <div className='w-1/2'>
        <Image
          className=''
          width="60"
          height="60"
          alt='This is the logo'
          src="/images/logo.png"
        />
      </div>
      <ul className='flex items-center space-x-12'>
        <a href="" className='hover:font-bold'><li>About me</li></a>
        <a href="" className='hover:font-bold'><li>Skills</li></a>
        <a href="" className='hover:font-bold'><li>Portfolio</li></a>
        <a href="" className='hover:bg-gray-200 px-5 text-black font-semibold bg-gray-100 rounded-full p-3'>
          <li>Contact me</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
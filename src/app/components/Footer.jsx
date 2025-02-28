'use client'
import React from 'react';

function Footer() {
  return (
    <footer className="w-full h-16 bg-black text-white flex justify-center items-center text-sm">
      <p>© {new Date().getFullYear()} Dawood Ayub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

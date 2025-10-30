'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed w-full py-5 px-6 md:px-20 flex justify-between items-center transition-all duration-500 ${
        scrolled ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'
      }`}
      style={{ top: 0, left: 0, zIndex: 1000 }}
    >
      {/* Logo */}
      <div>
        <Image width="50" height="60" alt="This is the logo" src="/images/logo.png" />
      </div>

      {/* Navbar Links - Desktop */}
      <ul className="hidden md:flex items-center space-x-8 lg:space-x-12">
        <Link to="about-me" smooth={true} duration={800} offset={-100} className="cursor-pointer">
          <motion.li whileHover={{ scale: 1.1 }} className={scrolled ? 'text-black' : 'text-white'}>
            About Me
          </motion.li>
        </Link>
        <Link to="skills" smooth={true} duration={800} offset={-100} className="cursor-pointer">
          <motion.li whileHover={{ scale: 1.1 }} className={scrolled ? 'text-black' : 'text-white'}>
            Skills
          </motion.li>
        </Link>
        <Link to="portfolio" smooth={true} duration={800} offset={-100} className="cursor-pointer">
          <motion.li whileHover={{ scale: 1.1 }} className={scrolled ? 'text-black' : 'text-white'}>
            Portfolio
          </motion.li>
        </Link>
        <Link to="contact" smooth={true} duration={800} offset={-100} className="cursor-pointer">
          <motion.li
            whileHover={{ scale: 1.1 }}
            className={`px-5 font-semibold rounded-full p-3 transition-all ${
              scrolled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            Contact Me
          </motion.li>
        </Link>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        {!menuOpen ? (
          <FaBars className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
        ) : (
          <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        )}
      </div>

      {/* Mobile Menu - Responsive */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 right-0 w-2/3 h-full bg-gray-900 text-white flex flex-col items-center justify-center md:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <Link to="about-me" smooth={true} duration={800} offset={-100} className="cursor-pointer py-4" onClick={() => setMenuOpen(false)}>
          About Me
        </Link>
        <Link to="skills" smooth={true} duration={800} offset={-100} className="cursor-pointer py-4" onClick={() => setMenuOpen(false)}>
          Skills
        </Link>
        <Link to="portfolio" smooth={true} duration={800} offset={-100} className="cursor-pointer py-4" onClick={() => setMenuOpen(false)}>
          Portfolio
        </Link>
        <Link to="contact" smooth={true} duration={800} offset={-100} className="cursor-pointer py-4" onClick={() => setMenuOpen(false)}>
          Contact Me
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;

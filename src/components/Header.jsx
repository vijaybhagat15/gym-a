import React from "react";
import { Link, useNavigate } from 'react-router-dom'; 
import {FaHome,FaBoxOpen,FaTimes,FaCartPlus,FaBars,FaUserCircle,FaHeart,FaBlog,FaCog,FaPhoneAlt,FaSignInAlt,FaInfoCircle} from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const isActive = (path) => window.location.pathname === path;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuthenticated = localStorage.getItem('auth');
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-br  from-[#283618] to-[#606c38] text-white sticky top-0 z-50 font-sans border-b-2 border-white">
      <div className="container mx-auto flex items-center sm:justify-between py-1 sm:px-6 px-3">
        <div id="auth" className="space-x-2 flex items-center justify-around px-1">
          <button
            className="md:hidden bg-orange-500 lg:text-base text-[12px]  py-1 px-2 rounded-md font-sans"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="rounded-3xl px-3 mr-auto">
          <div className="sm:text-3xl text-xl pr-3  hover:text-[#ded17e] text-white transition-colors duration-300 font-bold ">GymT1</div>
        </Link>

        {/* Navigation Links for Desktop and Larger Screens */}
        <nav className="hidden md:flex space-x-6  font-sans mx-auto text-sm lg:text-lg">
          <Link
            to="/"
            className={` hover:text-[#ded17e] transition-colors duration-300 ${isActive('/') ? ' text-[#fefae0] font-bold underline' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/About"
            className={`  hover:text-[#ded17e] transition-colors duration-300 ${isActive('/About') ? 'text-[#fefae0] font-bold underline' : ''}`}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className={` hover:text-[#ded17e] transition-colors duration-300 ${isActive('/products') ? 'text-[#fefae0] font-bold underline' : ''}`}
          >
            Products
          </Link>
          <Link
            to="/blog"
            className={` hover:text-[#ded17e] transition-colors duration-300 ${isActive('/blog') ? 'text-[#fefae0] font-bold underline' : ''}`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={` hover:text-[#ded17e] transition-colors duration-300 ${isActive('/contact') ? 'text-[#fefae0] font-bold underline' : ''}`}
          >
            Contact
          </Link>
          
        </nav>

        {/* Icons Section for Desktop and Larger Screens */}
        <div className="hidden md:flex items-center space-x-4">
          {!isAuthenticated && (
            <Link
              to="/login"
              className="relative group flex items-center justify-center w-20 h-10 bg-orange-500  rounded-lg hover:bg-sunset-orange transition-all font-sans ml-auto"
            >
              <FaSignInAlt className="transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
              <span className="absolute text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Login
              </span>
            </Link>
            
            
          )}
                    {!isAuthenticated && (

              <Link
                to="/cart"
                className={` text-lg  hover:text-[#ded17e] transition-colors duration-300 flex flex-col items-center leading-none font-sans ${isActive('/cart') ? 'text-[#fefae0] font-bold underline' : ''}`}
              >
                <FaCartPlus className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Cart</div>
              </Link>
          )}

          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-4 ml-6">
              <Link
                to="/cart"
                className={` text-lg  hover:text-[#ded17e] transition-colors duration-300 flex flex-col items-center leading-none font-sans ${isActive('/cart') ? 'text-[#fefae0] font-bold underline' : ''}`}
              >
                <FaCartPlus className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Cart</div>
              </Link>

              <Link
                to="/wishlist"
                className={` text-lg  hover:text-[#ded17e] transition-colors duration-300 flex flex-col items-center leading-none font-sans ${isActive('/wishlist') ? 'text-[#fefae0] font-bold underline' : ''}`}
              >
                <FaHeart className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Wishlist</div>
              </Link>

              <Link
                to="/profile"
                className={` text-lg  hover:text-[#ded17e] transition-colors duration-300 flex flex-col items-center leading-none font-sans ${isActive('/profile') ? 'text-[#fefae0] font-bold underline' : ''}`}
              >
                <FaUserCircle className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Profile</div>
              </Link>

              <Link
                to="/forgot-password"
                className={` text-lg  hover:text-[#ded17e] transition-colors duration-300 flex flex-col items-center leading-none font-sans ${isActive('/forgot-password') ? 'text-[#fefae0]font-bold underline' : ''}`}
              >
                <FaCog className="text-2xl" />
                <div className="text-sm text-center m-0 p-0">Settings</div>
              </Link>
              
            </div>
          )}
          
        </div>

        {/* Navigation Links for Mobile (visible on small screens) */}
        <Link
                to="/cart"
                className={` text-lg sm:hidden  hover:text-[#ded17e] transition-colors duration-300 flex flex-col items-center leading-none font-sans ${isActive('/cart') ? 'text-[#fefae0] font-bold underline' : ''}`}
              >
                <FaCartPlus className="text-lg"/>
                <div className="text-sm text-center m-0 p-0">Cart</div>
              </Link>

              {isSidebarOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
    <div className="bg-gradient-to-br from-[#283618] to-[#606c38] text-[#fefae0] w-3/4 md:w-1/3 fixed top-0 left-0 h-full shadow-lg rounded-r-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#212d13] text-[#fefae0]">
        <span className="font-semibold uppercase">Menu</span>
        <button
          className=" text-xl"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes />
        </button>
      </div>

      {/* Menu Items */}
      <div className="space-y-1 mt-1">
        <Link
          to="/"
          className={`flex justify-between items-center px-4 py-2 rounded-lg ${
            isActive('/')
              ? 'bg-[#606c38]'
              : ' hover:bg-[#606c38] text-[#fefae0]'
          }`}
        >
          <span className="text-base font-semibold flex gap-2">
            <FaHome size={24} />
            Home
          </span>
          <span className="text-lg">{'>'}</span>
        </Link>

        <Link
          to="/products"
          className={`flex justify-between items-center px-4 py-2 rounded-lg ${
            isActive('/products')
              ? 'bg-[#606c38]'
              : ' hover:bg-[#606c38] text-[#fefae0]'
          }`}
        >
          <span className="text-base font-semibold flex gap-2">
            <FaBoxOpen size={24} />
            Shop
          </span>
          <span className="text-lg">{'>'}</span>
        </Link>

        <Link
          to="/blog"
          className={`flex justify-between items-center px-4 py-2 rounded-lg ${
            isActive('/blog')
              ? 'bg-[#606c38]'
              : ' hover:bg-[#606c38] text-[#fefae0]'
          }`}
        >
          <span className="text-base font-semibold flex gap-2">
            <FaBlog size={24} />
            Blogs
          </span>
          <span className="text-lg">{'>'}</span>
        </Link>

        <Link
          to="/contact"
          className={`flex justify-between items-center px-4 py-2 rounded-lg ${
            isActive('/contact')
              ? 'bg-[#606c38]'
              : ' hover:bg-[#606c38] text-[#fefae0]'
          }`}
        >
          <span className="text-base font-semibold flex gap-2">
            <FaPhoneAlt size={24} />
            Contact
          </span>
          <span className="text-lg">{'>'}</span>
        </Link>
        <Link
          to="/About"
          className={`flex justify-between items-center px-4 py-2 rounded-lg ${
            isActive('/contact')
              ? 'bg-[#606c38]'
              : ' hover:bg-[#606c38] text-[#fefae0]'
          }`}
        >
          <span className="text-base font-semibold flex gap-2">
            <FaInfoCircle size={24} />
            About Us
          </span>
          <span className="text-lg">{'>'}</span>
        </Link>
      </div>

      {/* Divider */}
      <div className="divider my-2  "></div>
    </div>
  </div>
)}

      </div>
    </header>
  );
}

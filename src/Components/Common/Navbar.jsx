import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <header className="bg-[#121829] sticky top-0 z-50">
      <nav className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-4xl font-extrabold bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 bg-clip-text text-transparent tracking-wide">
          ऋण Samadhan
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-white font-medium text-lg items-center">
          <Link to="/" className="hover:text-yellow-300 transition-all duration-200">
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="hover:text-yellow-300 transition-all duration-200">
              Services
            </button>
            {showDropdown && (
              <div className="absolute left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 z-50">
                <Link to="/services/loan-consulting" className="block px-4 py-2 hover:bg-gray-100">
                  Home Loan
                </Link>
                <Link to="/services/documentation" className="block px-4 py-2 hover:bg-gray-100">
                  Car Loan
                </Link>
                <Link to="/services/financial-advisory" className="block px-4 py-2 hover:bg-gray-100">
                  Business Loan
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-yellow-300 transition-all duration-200">
            Contact
          </Link>
          <Link to="/blog" className="hover:text-yellow-300 transition-all duration-200">
            Blog
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-all duration-200">
            About
          </Link>
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button className="bg-yellow-400 hover:bg-yellow-500 border border-transparent hover:border-black text-black font-semibold px-5 py-2 rounded-lg shadow-md transition duration-300">
            Apply Loan
          </button>
        </div>

        {/* Hamburger - Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          onClick={closeMenu}
        >
          <div
            className={`fixed top-0 right-0 bg-indigo-500 w-full h-full p-6 z-50 transition-transform transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button
                className="text-white text-2xl"
                onClick={closeMenu}
              >
                &times;
              </button>
            </div>

            {/* Mobile Menu Links */}
            <ul className="flex flex-col space-y-4 text-white text-lg">
              <Link to="/" onClick={closeMenu} className="hover:text-yellow-300">Home</Link>

              <div>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="hover:text-yellow-300"
                >
                  Services
                </button>
                {showDropdown && (
                  <div className="mt-2 bg-white text-black rounded-lg shadow-lg w-full">
                    <Link to="/services/loan-consulting" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">
                      Home Loan
                    </Link>
                    <Link to="/services/documentation" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">
                      Car Loan
                    </Link>
                    <Link to="/services/financial-advisory" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-100">
                      Business Loan
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/contact" onClick={closeMenu} className="hover:text-yellow-300">Contact</Link>
              <Link to="/blog" onClick={closeMenu} className="hover:text-yellow-300">Blog</Link>
              <Link to="/about" onClick={closeMenu} className="hover:text-yellow-300">About</Link>

              <Link
                to="/apply"
                onClick={closeMenu}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg shadow-md transition duration-300"
              >
                Apply Loan
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`${
        isScrolled ? 'bg-[#1a252f] shadow-lg' : 'bg-[#2c3e50]'
      } text-white py-4 sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-5">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo text-2xl font-bold flex items-center">
            Biom <span className="text-[#3498db] ml-1">Business Consultants</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none space-x-5">
            <li>
              <a
                href="#home"
                className="text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#loan-categories"
                className="text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
              >
                Loan Products
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#calculator"
                className="text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
              >
                BI Rating
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-16 left-0 w-full bg-[#2c3e50] p-4 rounded-md md:hidden transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                className="block text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#loan-categories"
                className="block text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Loan Products
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="block text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#calculator"
                className="block text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BI Rating
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-white font-medium transition-colors duration-300 hover:text-[#3498db]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
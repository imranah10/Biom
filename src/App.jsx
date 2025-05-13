import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Common/Navbar';
import { Home } from './Components/Home';
import  Services  from './Services';
import Contact from './Components/Contact';
import About from './Components/About';
import Blog from './Components/Pages/Blog';
import Footer from './Components/Common/Footer';
import Loan from './Components/Loan';

export const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Loan />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

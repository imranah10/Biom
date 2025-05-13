import React from 'react'
import { Navbar } from './Components/Common/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Services } from './Services'
import Contact  from './Components/Contact'
import About from './Components/About'
import Blog from './Components/Pages/Blog'
import Footer from './Components/Common/Footer'

import LoanPage from './Components/LoanPage'
export const App = () => {
  return (
    <>
    
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/homeloan" element={<LoanPage/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path='/about' element={<About/>}/>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  </div>
   
    </>
  )
}

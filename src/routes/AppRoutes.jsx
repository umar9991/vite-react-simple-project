import { Routes, Route } from 'react-router-dom';
import Footer from '@/layout/Footer'
import MainLayout from '@/layout/MainLayout'
import About from '@/pages/About'
import Home from '@/pages/Home'
import More from '@/pages/More'
import React from 'react'
import ContactUs from '@/pages/ContactUs';

export default function AppRoutes() {
  return (
   <Routes>
      <Route element={<MainLayout />}>
       <Route index element={<Home />} />
       
        <Route path="home" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/more" element={<More />} />
          <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}

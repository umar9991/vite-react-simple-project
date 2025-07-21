import Home from '@/pages/Home'
import React from 'react'
import Header from './Header'
import About from '@/pages/About'
import More from '@/pages/More'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';
import ContactUs from '@/pages/ContactUs'

export default function MainLayout() {
  return (
    <>
   
    <Header />
     <section id="home"><Home /></section>
         {/* <Outlet/> */}
  <section id="about"><About /></section>
  <section id="more"><More /></section>
  <section id="contact"><ContactUs /></section>

      {/* <About/> */}
      {/* <More/> */}
          <Footer />
          
    
    </>
  )
}

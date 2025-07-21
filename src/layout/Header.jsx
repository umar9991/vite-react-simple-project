import React from 'react';
import logo from '../assets/afriva-logo.png'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
   <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img alt="content" class="w-30 h-10" src={logo} viewBox="0 0 24 24"/>
         </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
     <a className="mr-5 hover:text-white" href="#home">Home</a>
<a className="mr-5 hover:text-white" href="#about">About</a>
<a className="mr-5 hover:text-white" href="#more">More</a>
<a className="mr-5 hover:text-white" href="#contact">Contact Us</a>
    </nav>
   
  </div>
</header>

  );
}

import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone size={16} className="mr-1" /> (123) 456-7890</span>
            <span className="flex items-center"><Mail size={16} className="mr-1" /> info@fitnesspro.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition"><Instagram size={16} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition"><Twitter size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-0 right-0 bg-black bg-opacity-80 text-white z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-2xl font-bold">FitnessPro</a>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <a href="#" className="hover:text-blue-400 transition">Classes</a>
            <a href="#" className="hover:text-blue-400 transition">Trainers</a>
            <a href="#" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition">Classes</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition">Trainers</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Navigation = () => {
  return (
    <>
      <Header />
      <Navbar />
    </>
  );
};

export default Navigation;
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FitnessPro</h3>
            <p className="mb-4">Empowering you to reach your fitness goals and live a healthier life.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition"><Facebook /></a>
              <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition"><Instagram /></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition"><Twitter /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Classes</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Schedule</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Personal Training</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Group Classes</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Nutrition Planning</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Online Coaching</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">123 Fitness Street</p>
            <p className="mb-2">Healthy City, HC 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@fitnesspro.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 FitnessPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
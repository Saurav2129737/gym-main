import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-50 hidden md:block">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-2 text-sm">
//           <div className="flex items-center space-x-4">
//             <span className="flex items-center"><Phone size={16} className="mr-1" /> (123) 456-7890</span>
//             <span className="flex items-center"><Mail size={16} className="mr-1" /> info@fitnesspro.com</span>
//           </div>
//           <div className="flex items-center space-x-4">
//             <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition"><Facebook size={16} /></a>
//             <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition"><Instagram size={16} /></a>
//             <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition"><Twitter size={16} /></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "./workouts", label: "Workouts" },
    { to: "/pricing", label: "Pricing" },
    { to: "/bmi-calculator", label: "BMI Calculator" },
    { to: "/contact", label: "Contact" },
    { to: "/auth", label: "Login/Signup" },
    { to: "/admin", label: "Admin" },  // Add this line
  ];

  return (
    <nav className="fixed left-0 right-0 bg-black bg-opacity-80 text-white z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="text-2xl font-bold">GroundZero</a>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/gallery" className="hover:text-blue-400 transition">Gallery</Link>
            <Link to="./workouts" className="hover:text-blue-400 transition">Workouts</Link>
            <Link to="/pricing" className="hover:text-blue-400 transition">Pricing</Link>
            <Link to="/bmi-calculator" className="hover:text-blue-400 transition">BMI Calculator</Link>
            <Link to="/auth" className="hover:text-blue-400 transition">Register</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
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
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/gallery" className="hover:text-blue-400 transition">Gallery</Link>
            <Link to="./workouts" className="hover:text-blue-400 transition">Workouts</Link>
            <Link to="/pricing" className="hover:text-blue-400 transition">Pricing</Link>
            <Link to="/bmi-calculator" className="hover:text-blue-400 transition">BMI Calculator</Link>
            <Link to="/auth" className="hover:text-blue-400 transition">Register</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// const Navigation = () => {
//   return (
//     <>
//       <Header />
//       <Navbar />
//     </>
//   );
// };

export default Navbar;
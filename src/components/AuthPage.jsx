import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../public/img4.jpg'; // Make sure this path is correct
import { FcGoogle } from 'react-icons/fc'; // Make sure to install react-icons if not already installed
import { motion } from 'framer-motion'; // Make sure to install framer-motion if not already installed

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the authentication logic
    console.log(isLogin ? 'Logging in' : 'Signing up', { email, password, name });
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log('Google Sign-In');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gray-900 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div 
        className="bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-md backdrop-filter backdrop-blur-lg overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-center text-white overflow-hidden">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden">
          {!isLogin && (
            <motion.div variants={itemVariants} className='mb-4 p-1 overflow-hidden'>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </motion.div>
          )}
          <motion.div variants={itemVariants} className='mb-4 p-1 overflow-hidden'>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants} className='mb-4 p-1 overflow-hidden'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </motion.div>
          <motion.button
            variants={itemVariants}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </motion.button>
        </form>
        <motion.div variants={itemVariants} className="mt-6 flex items-center justify-between overflow-hidden">
          <hr className="w-full border-gray-600" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="w-full border-gray-600" />
        </motion.div>
        <motion.button
          variants={itemVariants}
          onClick={handleGoogleSignIn}
          className="w-full mt-6 bg-white text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
        >
          <FcGoogle className="mr-2" size={24} />
          Continue with Google
        </motion.button>
        <motion.div variants={itemVariants} className="mt-6 text-center overflow-hidden">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out"
          >
            {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
import { Check } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 5000,
      length: 3,
      features: [
        "Access to all gym equipment",
        "3 personal training sessions",
        "Nutrition consultation",
        "Locker access",
        "Towel service",
        "1 guest pass per month",
        "Access to online workout videos",
      ],
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF-YEARLY",
      price: 10000,
      length: 6,
      features: [
        "Access to all gym equipment",
        "6 personal training sessions",
        "Nutrition consultation",
        "Access to group classes",
        "Locker access",
        "Towel service",
        "2 guest passes per month",
        "Access to online workout videos",
        "Sauna and steam room access",
        "25% discount on supplements",
      ],
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 20000,
      length: 12,
      features: [
        "Access to all gym equipment",
        "12 personal training sessions",
        "Nutrition consultation",
        "Access to group classes",
        "Locker access",
        "Towel service",
        "Unlimited guest passes",
        "Access to online workout videos",
        "Sauna and steam room access",
        "50% discount on supplements",
        "Quarterly body composition analysis",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 "
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={titleVariants} className="text-center">
          <h2 className="text-base font-semibold text-blue-700 uppercase tracking-wide">Pricing Model</h2>
          <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl overflow-hidden">
            Find Your <span className="text-blue-700">Perfect</span> Plan
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="mt-16  space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 overflow-hidden"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative p-8 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 flex flex-col overflow-hidden`}
              onClick={() => setSelectedPlan(index)}
              style={{ 
                height: '750px', 
                backgroundColor: selectedPlan === index ? '#1d4ed8' : '#1f2937',
                position: 'relative',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-x-0 h-3 -top-3 transform-gpu -skew-y-6"></div>
              <div className="text-center mb-4 relative z-10">
                <h3 className="text-3xl font-bold">{plan.title}</h3>
                <p className="mt-2 text-5xl font-extrabold overflow-hidden">Rs {plan.price}<span className="text-xl font-medium">/ {plan.length} months</span></p>
              </div>
              <ul className="mt-4 space-y-4 text-left relative z-10 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-blue-400" />
                    </div>
                    <p className="ml-3 text-base">{feature}</p>
                  </li>
                ))}
              </ul>
              
              {selectedPlan === index ? (
                <motion.button 
                  className="absolute bottom-0 left-0 right-0 bg-white text-blue-700 flex items-center justify-center " 
                  style={{
                    height: '15%',
                    clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0% 100%)',
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-xl font-bold text-blue-700 z-10 rotate-[-10deg]">Add to Cart</span>
                </motion.button>
              ) : (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-blue-700 text-white flex items-center justify-center " 
                  style={{
                    height: '15%',
                    clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0% 100%)',
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-xl font-bold z-10 rotate-[-10deg]">Add to Cart</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pricing;
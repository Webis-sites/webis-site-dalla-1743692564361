'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaArrowLeft } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / 700, 0);
        heroRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-b from-primary to-primary-light overflow-hidden"
      dir="rtl"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-secondary/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              right: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-secondary text-primary rounded-full p-4 shadow-xl"
            >
              <FaDumbbell size={40} />
            </motion.div>
            <motion.h1 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mr-4"
            >
              dalla
            </motion.h1>
          </div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            מכון כושר מוביל בישראל
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl text-secondary-light max-w-2xl mx-auto mb-8"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 10, 
              delay: 1.2 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center group">
              <span className="text-lg">קבע תור עכשיו</span>
              <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <FaArrowLeft className="mr-2 group-hover:mr-4 transition-all duration-300" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>

        {/* Animated fitness equipment silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`equipment-${i}`}
              className="absolute bottom-0"
              style={{ left: `${i * 10}%` }}
              initial={{ y: 100 }}
              animate={{ y: [100, 80, 100] }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaDumbbell size={24 + i * 2} className="text-secondary" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-secondary rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
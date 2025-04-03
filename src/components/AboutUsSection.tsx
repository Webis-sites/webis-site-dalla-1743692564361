'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaDumbbell, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      }}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
    >
      <div className="text-4xl text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const AboutUsSection: React.FC = () => {
  const controls = useAnimation();
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (isHeadingInView) {
      controls.start('visible');
    }
  }, [controls, isHeadingInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-secondary/20 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.div
            ref={headingRef}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-primary relative inline-block"
            >
              אודות מכון הכושר דאלה
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                initial={{ width: 0 }}
                animate={isHeadingInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700"
            >
              אנחנו מכון כושר מוביל בתחום הקמעונאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="relative h-64 md:h-96 mb-16 overflow-hidden rounded-xl shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply z-10"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center animate-slow-zoom"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-3xl md:text-5xl font-bold tracking-wider text-shadow-lg">
                  דאלה פיטנס
                </h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<FaDumbbell className="text-primary" />} 
            title="ציוד מתקדם" 
            description="אנו מציעים את הציוד החדיש והמתקדם ביותר בתעשייה"
          />
          <FeatureCard 
            icon={<FaAward className="text-primary" />} 
            title="מדריכים מוסמכים" 
            description="צוות המדריכים שלנו מוסמך ובעל ניסיון רב בתחום"
          />
          <FeatureCard 
            icon={<FaUsers className="text-primary" />} 
            title="קהילה תומכת" 
            description="הצטרפו לקהילה שלנו ותיהנו מאווירה תומכת ומעודדת"
          />
          <FeatureCard 
            icon={<FaHandshake className="text-primary" />} 
            title="שירות אישי" 
            description="אנו מאמינים במתן שירות אישי ומותאם לכל מתאמן"
          />
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            צור קשר עכשיו
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
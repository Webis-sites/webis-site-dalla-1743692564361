'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaRunning, FaUsers, FaUserMd } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-full"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-4xl text-primary mb-4"
        whileHover={{ 
          rotate: [0, 10, -10, 10, 0],
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="bg-secondary text-primary font-bold py-2 px-4 rounded-full mt-2">
        {price}
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <FaDumbbell />,
      title: "אימון כוח מקצועי",
      description: "אימונים מותאמים אישית לבניית שרירים וחיזוק הגוף בהדרכת מאמנים מוסמכים",
      price: "₪250 / חודש"
    },
    {
      icon: <FaHeartbeat />,
      title: "אימון קרדיו",
      description: "שיפור סיבולת לב-ריאה עם תוכניות אימון מגוונות המותאמות לכל רמת כושר",
      price: "₪200 / חודש"
    },
    {
      icon: <FaAppleAlt />,
      title: "ייעוץ תזונה",
      description: "תוכניות תזונה מותאמות אישית מדיאטנים קליניים מוסמכים לתמיכה במטרות הכושר שלך",
      price: "₪350 / פגישה"
    },
    {
      icon: <FaRunning />,
      title: "אימון פונקציונלי",
      description: "אימונים המשלבים תנועות יומיומיות לשיפור כושר כללי, יציבה וחיזוק הליבה",
      price: "₪220 / חודש"
    },
    {
      icon: <FaUsers />,
      title: "אימונים קבוצתיים",
      description: "מגוון שיעורים קבוצתיים כולל יוגה, פילאטיס, זומבה ואימוני אינטרוול בעצימות גבוהה",
      price: "₪180 / חודש"
    },
    {
      icon: <FaUserMd />,
      title: "הערכת כושר מקצועית",
      description: "בדיקות מקיפות להערכת רמת הכושר הנוכחית שלך וקביעת יעדים מציאותיים",
      price: "₪300 / הערכה"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            whileInView={{ 
              scale: [1, 1.05, 1],
              transition: { duration: 1, times: [0, 0.5, 1] }
            }}
          >
            השירותים המקצועיים שלנו
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mb-6"
            whileInView={{ 
              width: ["0%", "100%"],
              transition: { duration: 1 }
            }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            במכון הכושר דאלה אנו מציעים מגוון רחב של שירותים מקצועיים המותאמים לצרכים האישיים שלך, 
            בהדרכת צוות מקצועי ומנוסה שמחויב להצלחתך
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.button 
            className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            הצטרפו עכשיו
          </motion.button>
          <p className="text-gray-500 mt-4">
            מחירים מיוחדים למנויים שנתיים ולקבוצות
          </p>
        </motion.div>
      </div>
    </section>
  );
}
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "מהם שעות הפעילות של מכון הכושר?",
      answer: "מכון הכושר 'דאלה' פתוח בימים א'-ה' משעה 06:00 עד 23:00, בימי שישי מ-08:00 עד 18:00, ובשבת מ-09:00 עד 20:00. שעות הפעילות עשויות להשתנות בחגים ובאירועים מיוחדים."
    },
    {
      question: "אילו סוגי מנויים זמינים?",
      answer: "אנו מציעים מגוון אפשרויות מנוי כולל: מנוי חודשי, רבעוני, חצי שנתי ושנתי. בנוסף, ישנם מנויים מיוחדים לסטודנטים, חיילים, ואזרחים ותיקים. כל המנויים כוללים גישה מלאה למתקנים ולשיעורים הקבוצתיים."
    },
    {
      question: "האם יש מאמנים אישיים זמינים?",
      answer: "כן, במכון 'דאלה' יש צוות מקצועי של מאמנים אישיים מוסמכים. ניתן לקבוע פגישת ייעוץ ראשונית ללא עלות כדי להתאים לך את המאמן המתאים ביותר לצרכים ולמטרות שלך."
    },
    {
      question: "מה לגבי שיעורים קבוצתיים?",
      answer: "אנו מציעים מגוון רחב של שיעורים קבוצתיים כולל יוגה, פילאטיס, ספינינג, זומבה, אימוני כוח, ועוד. לוח השיעורים המלא זמין באפליקציה שלנו ובלוח המודעות במכון. מומלץ להירשם מראש לשיעורים פופולריים."
    },
    {
      question: "האם ישנם מוצרי תזונה למכירה?",
      answer: "כן, אנו מציעים מגוון מוצרי תזונה איכותיים כולל אבקות חלבון, חטיפי אנרגיה, ויטמינים ותוספי תזונה. כל המוצרים נבחרו בקפידה על ידי צוות התזונאים שלנו כדי לתמוך במטרות הכושר והבריאות שלך."
    },
    {
      question: "האם יש שירותי ייעוץ תזונתי?",
      answer: "בהחלט! במכון 'דאלה' עובדים תזונאים קליניים מוסמכים המציעים ייעוץ תזונתי אישי. הם יכולים לעזור לך לבנות תוכנית תזונה מותאמת אישית שתתמוך במטרות הכושר שלך, בין אם מדובר בירידה במשקל, בניית שריר או שיפור הביצועים הספורטיביים."
    },
    {
      question: "אילו מתקנים יש במכון?",
      answer: "המכון שלנו מצויד במיטב הציוד החדיש ביותר, כולל אזור משקולות חופשיות, מכשירי כוח, ציוד קרדיו מתקדם, אולמות לשיעורים קבוצתיים, סאונה, ג'קוזי, ומלתחות מרווחות עם מקלחות ולוקרים. בנוסף, יש לנו בר מיצים טריים ואזור מנוחה."
    },
    {
      question: "האם יש חניה זמינה?",
      answer: "כן, לחברי המכון יש גישה לחניון תת-קרקעי ללא תשלום. בנוסף, ישנה חניה ציבורית בסביבה הקרובה."
    },
    {
      question: "מה מדיניות הביטול?",
      answer: "ניתן לבטל מנוי בהודעה מראש של 30 יום. במקרה של בעיות רפואיות, ניתן להקפיא את המנוי עם הצגת אישור רפואי מתאים. לפרטים נוספים, אנא פנו לצוות שירות הלקוחות שלנו."
    },
    {
      question: "האם ניתן להביא אורחים?",
      answer: "כן, כל חבר מכון רשאי להביא אורח פעם בחודש ללא תשלום. אורחים נוספים או ביקורים נוספים כרוכים בתשלום דמי כניסה חד-פעמיים. יש להודיע מראש על הבאת אורחים."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  return (
    <section className="py-16 bg-secondary-light rtl" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">שאלות נפוצות</h2>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300"
            >
              <button
                className="w-full text-right p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
                <motion.div
                  variants={iconVariants}
                  animate={activeIndex === index ? 'open' : 'closed'}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >
                  <FaChevronDown />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={accordionVariants}
                  >
                    <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
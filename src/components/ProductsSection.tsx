'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'fitness' | 'nutrition';
}

const ProductsSection: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "חלבון מי גבינה פרימיום",
      description: "חלבון איכותי לבניית שריר ולהתאוששות מהירה לאחר אימון",
      price: 149.99,
      image: "/images/products/protein.jpg",
      category: 'nutrition'
    },
    {
      id: 2,
      name: "כפפות אימון מקצועיות",
      description: "כפפות אימון באיכות גבוהה לאחיזה טובה ולהגנה על כפות הידיים",
      price: 89.99,
      image: "/images/products/gloves.jpg",
      category: 'fitness'
    },
    {
      id: 3,
      name: "חטיף חלבון",
      description: "חטיף עשיר בחלבון וטעים במיוחד לאכילה בין הארוחות",
      price: 12.99,
      image: "/images/products/protein-bar.jpg",
      category: 'nutrition'
    },
    {
      id: 4,
      name: "רצועות התנגדות",
      description: "סט רצועות התנגדות לאימון בכל מקום",
      price: 79.99,
      image: "/images/products/resistance-bands.jpg",
      category: 'fitness'
    },
    {
      id: 5,
      name: "קריאטין מונוהידראט",
      description: "תוסף לשיפור ביצועים וכוח בזמן אימון",
      price: 119.99,
      image: "/images/products/creatine.jpg",
      category: 'nutrition'
    },
    {
      id: 6,
      name: "בקבוק שייקר",
      description: "בקבוק שייקר איכותי לערבוב משקאות חלבון בקלות",
      price: 39.99,
      image: "/images/products/shaker.jpg",
      category: 'fitness'
    },
    {
      id: 7,
      name: "ויטמינים ומינרלים",
      description: "תוסף מולטי-ויטמין לתמיכה בבריאות כללית",
      price: 89.99,
      image: "/images/products/vitamins.jpg",
      category: 'nutrition'
    },
    {
      id: 8,
      name: "חגורת משקולות",
      description: "חגורת הרמת משקולות לתמיכה בגב התחתון",
      price: 129.99,
      image: "/images/products/lifting-belt.jpg",
      category: 'fitness'
    }
  ]);

  const [activeCategory, setActiveCategory] = useState<'all' | 'fitness' | 'nutrition'>('all');
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const filtered = activeCategory === 'all' 
      ? products 
      : products.filter(product => product.category === activeCategory);
    setVisibleProducts(filtered);
    setCurrentIndex(0);
  }, [activeCategory, products]);

  const nextSlide = () => {
    if (currentIndex < visibleProducts.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(visibleProducts.length - 4); // Loop to end
    }
  };

  const displayedProducts = visibleProducts.slice(currentIndex, currentIndex + 4);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 }
    },
    exit: { opacity: 0, y: -20 }
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-100 rtl-direction" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">המוצרים שלנו</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון רחב של מוצרי כושר ותזונה באיכות גבוהה כדי לעזור לך להשיג את המטרות שלך
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            הכל
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'fitness' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory('fitness')}
          >
            מוצרי כושר
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === 'nutrition' 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory('nutrition')}
          >
            תוספי תזונה
          </motion.button>
        </div>

        <div className="relative">
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10 bg-primary text-white p-3 rounded-full cursor-pointer shadow-lg"
            onClick={prevSlide}
          >
            <FaArrowRight className="text-xl" />
          </motion.div>

          <div className="overflow-hidden px-2" ref={carouselRef}>
            <div className="flex gap-6 transition-all duration-500 ease-in-out" 
                 style={{ transform: `translateX(${currentIndex * 25}%)` }}>
              <AnimatePresence>
                {displayedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={cardVariants}
                    transition={{ duration: 0.5 }}
                    whileHover="hover"
                    onHoverStart={() => setHoveredProduct(product.id)}
                    onHoverEnd={() => setHoveredProduct(null)}
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 ease-in-out"
                          style={{ 
                            transform: hoveredProduct === product.id ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        <div className={`absolute top-3 left-3 ${
                          product.category === 'nutrition' ? 'bg-secondary' : 'bg-primary'
                        } text-white px-3 py-1 rounded-full text-sm font-medium`}>
                          {product.category === 'nutrition' ? 'תזונה' : 'כושר'}
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-primary">₪{product.price}</span>
                          <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                          >
                            <FaShoppingCart />
                            <span>הוסף לסל</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10 bg-primary text-white p-3 rounded-full cursor-pointer shadow-lg"
            onClick={nextSlide}
          >
            <FaArrowLeft className="text-xl" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2"
          >
            <span>צפה בכל המוצרים</span>
            <FaArrowLeft />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// FAQ Item type definition
type FAQItem = {
  question: string;
  answer: string;
};

// Props for the FAQ component
interface FAQProps {
  faqs?: FAQItem[];
  textColor?: string;
}

const SimpleFAQ = ({ faqs = [], textColor = "text-orange-500" }: FAQProps) => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  // Toggle FAQ item open/closed
  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full">
      {faqs.map((item, index) => {
        const isOpen = !!openItems[index];
        
        return (
          <motion.div 
            key={index}
            className={`mb-5 bg-white dark:bg-grey-800 rounded-xl overflow-hidden shadow-lg border transition-all duration-300 ${
              isOpen 
                ? `shadow-xl ${textColor.replace('text-', 'border-')}` 
                : 'border-grey-100 dark:border-grey-700'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            layout
          >
            <motion.button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              aria-expanded={isOpen}
              whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.3)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-medium text-black dark:text-white">{item.question}</span>
              <motion.div 
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  isOpen 
                    ? textColor
                    : 'text-grey-500 dark:text-grey-400'
                }`}
                animate={{ rotate: isOpen ? 180 : 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.div 
                    className="px-6 pb-4 text-black dark:text-white border-t border-grey-100 dark:border-grey-700 pt-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="leading-relaxed">{item.answer}</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SimpleFAQ;

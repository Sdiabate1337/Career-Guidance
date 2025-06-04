"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TestimonialProps {
  testimonial: {
    image?: string;
    name: string;
    title: string;
    text: string;
  };
  color: string;
  index: number;
}

const Testimonial = ({ testimonial, color, index }: TestimonialProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-grey-800 rounded-2xl shadow-lg p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="mb-6 relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
            <Image 
              src={testimonial.image || "https://via.placeholder.com/100"} 
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-black dark:text-white">
              {testimonial.name}
            </h4>
            <p className={`text-sm text-${color}`}>
              {testimonial.title}
            </p>
          </div>
        </div>
        <div className="relative">
          <svg className={`w-10 h-10 absolute -top-4 -left-5 text-${color} opacity-20`} fill="currentColor" viewBox="0 0 32 32">
            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"/>
          </svg>
          <p className="text-grey-700 dark:text-grey-300 relative z-10">
            {testimonial.text}
          </p>
        </div>
      </div>
      
      <motion.div 
        className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-${color}/10 z-0`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Testimonial;
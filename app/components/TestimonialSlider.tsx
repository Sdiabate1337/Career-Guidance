import { useState, useEffect, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Testimonial = {
  avatarUrl: string;
  name: string;
  rating: number;
  testimonial: string;
  position: string;
  company?: string;
};

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  textColor: string;
}

const TestimonialSlider = ({ testimonials, textColor }: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials?.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials]);
  
  const goToTestimonial = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };
  
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-grey-800 p-8 md:p-12 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].avatarUrl} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className={`flex ${textColor} mb-4`}>
                  {[...Array(Math.floor(testimonials[currentIndex].rating))].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic text-black dark:text-white mb-6">
                  "{testimonials[currentIndex].testimonial}"
                </blockquote>
                
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-grey-600 dark:text-grey-400">
                    {testimonials[currentIndex].position}
                    {testimonials[currentIndex].company && ` @ ${testimonials[currentIndex].company}`}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? `${textColor} scale-125` 
                : 'bg-grey-300 dark:bg-grey-600 hover:bg-grey-400 dark:hover:bg-grey-500'
            }`}
            onClick={() => goToTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 w-10 h-10 rounded-full bg-white dark:bg-grey-800 shadow-lg flex items-center justify-center text-black dark:text-white"
        onClick={() => goToTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length)}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 w-10 h-10 rounded-full bg-white dark:bg-grey-800 shadow-lg flex items-center justify-center text-black dark:text-white"
        onClick={() => goToTestimonial((currentIndex + 1) % testimonials.length)}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialSlider;
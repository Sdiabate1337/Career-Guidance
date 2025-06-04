"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Animated counter component
type AnimatedCounterProps = {
  value: number;
  duration?: number;
  suffix?: string;
};

const AnimatedCounter = ({ value, duration = 2, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), value));
      
      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return (
    <motion.span className="font-bold tabular-nums">
      {count}{suffix}
    </motion.span>
  );
};

type ServiceFeature = {
  title: string;
};

type ServiceStat = {
  value: number;
  suffix?: string;
  label: string;
};

type ServiceType = {
  id: string | number;
  bgColor: string;
  textColor: string;
  borderColor: string;
  gradient: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  rating: number;
  stat1: ServiceStat;
  stat2: ServiceStat;
  features: ServiceFeature[];
  cta: string;
};

type ServiceCardProps = {
  service: ServiceType;
  isExpanded: boolean;
  onToggleExpand: () => void;
  language: string;
};

const ServiceCard = ({ service, isExpanded, onToggleExpand, language }: ServiceCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div 
      layout
      className="relative h-full"
      whileHover={{ y: -15, transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 15 } }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {/* Main Card */}
      <motion.div 
        layout
        className="relative z-10 h-full rounded-[30px] bg-white dark:bg-grey-800 shadow-xl overflow-hidden border border-grey-100 dark:border-grey-700"
        animate={{
          boxShadow: isHovering ? "0 30px 60px -15px rgba(0, 0, 0, 0.3)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Top colored strip with animation */}
        <motion.div 
          className={`h-2 w-full ${service.bgColor}`}
          animate={{
            height: isHovering ? "0.75rem" : "0.5rem",
          }}
          transition={{ duration: 0.3 }}
        />
        
        <div className="p-8 md:p-10 h-full flex flex-col">
          {/* Service Tag */}
          <div className="flex justify-between items-start mb-6">
            <motion.div 
              className={`px-3 py-1 rounded-full text-xs font-semibold ${service.textColor} bg-grey-100 dark:bg-grey-700`}
              whileHover={{ scale: 1.05, y: -2 }}
              animate={
                isHovering ? 
                { y: [-2, 2, -2], transition: { repeat: Infinity, duration: 1.5 } } : 
                { y: 0 }
              }
            >
              {language === 'en' ? 'Service' : 'Service'}
            </motion.div>
            <div className={`flex ${service.textColor}`}>
              {[...Array(5)].map((_, i) => {
                const filled = i < Math.floor(service.rating);
                return (
                  <motion.svg 
                    key={i} 
                    className="w-4 h-4" 
                    viewBox="0 0 20 20" 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <path 
                      fill={filled ? "currentColor" : "none"}
                      stroke={!filled ? "currentColor" : "none"}
                      strokeWidth={!filled ? "1.5" : "0"}
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                    />
                  </motion.svg>
                );
              })}
              <span className="ml-2 text-sm">{service.rating}</span>
            </div>
          </div>
          
          {/* Icon and Title */}
          <div className="flex items-start gap-5 mb-6">
            <motion.div 
              className={`w-16 h-16 flex-shrink-0 rounded-2xl ${service.bgColor} p-4 text-white shadow-lg`}
              whileHover={{ rotate: [0, -15, 15, 0], transition: { duration: 0.8 } }}
              animate={
                isHovering ? 
                { 
                  scale: [1, 1.2, 1], 
                  rotate: [0, 5, 0, -5, 0],
                  boxShadow: [
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  ]
                } : 
                { scale: 1, rotate: 0 }
              }
              transition={{ duration: 2, repeat: isHovering ? Infinity : 0 }}
            >
              {service.icon}
            </motion.div>
            
            <div>
              <motion.h3 
                className="text-2xl font-bold text-black dark:text-white mb-1"
                animate={
                  isHovering ? 
                  { scale: 1.02, transition: { duration: 0.3 } } : 
                  { scale: 1 }
                }
              >
                {service.title}
              </motion.h3>
              <div className={service.textColor}>
                {/* Animated indicator dots */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className={`w-1 h-1 rounded-full ${service.bgColor}`}
                      initial={{ opacity: 0.3 }}
                      animate={
                        isHovering ? 
                        { 
                          opacity: i === 0 ? 1 : 0.3,
                          scale: i === 0 ? 1.5 : 1,
                          y: i === 0 ? -1 : 0
                        } : 
                        { opacity: 0.3, scale: 1, y: 0 }
                      }
                      transition={{ 
                        duration: 0.3,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-black dark:text-white mb-6 flex-grow">
            {service.shortDescription}
          </p>
          
          {/* Stats Section with Enhanced Animations */}
          <div className="mb-6 grid grid-cols-2 gap-2">
            <motion.div 
              className="bg-grey-50 dark:bg-grey-700/50 rounded-xl p-3 text-center"
              whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              animate={
                isHovering ? 
                { y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" } : 
                { y: 0, boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }
              }
              transition={{ duration: 0.3 }}
            >
              <p className={`text-xl font-bold ${service.textColor}`}>
                <AnimatedCounter value={service.stat1.value} suffix={service.stat1.suffix} />
              </p>
              <p className="text-xs text-black dark:text-white">
                {service.stat1.label}
              </p>
            </motion.div>
            <motion.div 
              className="bg-grey-50 dark:bg-grey-700/50 rounded-xl p-3 text-center"
              whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              animate={
                isHovering ? 
                { y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" } : 
                { y: 0, boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }
              }
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className={`text-xl font-bold ${service.textColor}`}>
                <AnimatedCounter value={service.stat2.value} suffix={service.stat2.suffix} />
              </p>
              <p className="text-xs text-black dark:text-white">
                {service.stat2.label}
              </p>
            </motion.div>
          </div>
          
          {/* Features Preview */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-black dark:text-white mb-3">
              {language === 'en' ? 'Key Features:' : 'Caractéristiques Clés:'}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {service.features.slice(0, 4).map((feature, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className={`w-5 h-5 mr-2 rounded-full flex items-center justify-center ${service.bgColor}`}
                    animate={
                      isHovering ? 
                      { 
                        scale: [1, 1.2, 1],
                        transition: { 
                          duration: 1.5, 
                          repeat: Infinity,
                          delay: idx * 0.2
                        }
                      } : 
                      { scale: 1 }
                    }
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-sm text-black dark:text-white">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-auto flex flex-col gap-3">
            <motion.div
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <button 
                onClick={onToggleExpand}
                className={`w-full block text-center py-3.5 px-6 rounded-full ${isExpanded ? 'bg-black dark:bg-white text-white dark:text-black' : `${service.bgColor} text-white`} font-medium transition-all duration-300 hover:shadow-lg relative overflow-hidden group`}
              >
                <span className="relative z-10">
                  {isExpanded 
                    ? (language === 'en' ? 'Collapse Details' : 'Réduire les Détails') 
                    : (language === 'en' ? 'View Details' : 'Voir les Détails')}
                </span>
                
                {/* Button hover effect */}
                <motion.span 
                  className="absolute inset-0 bg-black/20 -z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.3 } 
                  }}
                />
                
                {/* Animated dots */}
                <motion.span 
                  className="absolute inset-0 pointer-events-none"
                  animate={
                    isHovering ? 
                    { opacity: 1 } : 
                    { opacity: 0 }
                  }
                >
                  <motion.span 
                    className="absolute top-1/2 right-5 w-1 h-1 bg-white/70 rounded-full" 
                    animate={{ x: [0, 8, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.span 
                    className="absolute top-1/2 right-5 w-1 h-1 bg-white/70 rounded-full" 
                    animate={{ x: [0, 8, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, delay: 0.3, repeat: Infinity }}
                  />
                  <motion.span 
                    className="absolute top-1/2 right-5 w-1 h-1 bg-white/70 rounded-full" 
                    animate={{ x: [0, 8, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, delay: 0.6, repeat: Infinity }}
                  />
                </motion.span>
              </button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                href={`/services/${service.id}/apply`}
                className={`w-full block text-center py-3 px-6 rounded-full bg-white dark:bg-grey-700 border ${service.borderColor} ${service.textColor} font-medium transition-all duration-300 hover:shadow-lg`}
              >
                {service.cta}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced Decorative Elements */}
      <motion.div 
        className={`absolute -inset-0.5 rounded-[35px] bg-gradient-to-r ${service.gradient} opacity-0 -z-10 blur-sm`}
        animate={{ 
          opacity: isHovering ? 0.8 : 0
        }}
        transition={{ duration: 0.4 }}
      />
      
      <motion.div 
        className="absolute -z-20 bottom-10 -right-10 w-32 h-32 rounded-full bg-grey-100 dark:bg-grey-700 opacity-0"
        animate={{ 
          opacity: isHovering ? 0.4 : 0,
          scale: isHovering ? [1, 1.3, 1] : 1,
        }}
        transition={{ duration: 2, repeat: isHovering ? Infinity : 0 }}
      />
      
      {/* Additional decorative elements */}
      <motion.div 
        className="absolute -z-20 top-5 -left-5 w-20 h-20 rounded-full bg-orange-500/10 opacity-0"
        animate={{ 
          opacity: isHovering ? 0.8 : 0,
          scale: isHovering ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 3, repeat: isHovering ? Infinity : 0, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default ServiceCard;
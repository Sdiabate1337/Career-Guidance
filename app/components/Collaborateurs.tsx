"use client";

import { useContext, useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';
import { LanguageContext } from '../contexts/LanguageContext';
import { useDebouncedCallback } from 'use-debounce';

// Collaborator type definition
type Collaborator = {
  id: string;
  name: string;
  role: {
    en: string;
    fr: string;
  };
  bio: {
    en: string;
    fr: string;
  };
  imageSrc: string;
  quote?: {
    en: string;
    fr: string;
  };
  expertise?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
};

// Custom hook for carousel management
const useCarousel = (itemsCount: number, itemsPerView: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev' | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const dragXMotionValue = useMotionValue(0);
  
  // Calculate total slides
  const totalSlides = Math.ceil(itemsCount / itemsPerView);
  
  // Handle transition end
  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
  }, []);
  
  // Slide with animation
  const slideWithAnimation = useCallback((direction: 'next' | 'prev') => {
    if (isAnimating || totalSlides <= 1) return;
    
    setIsAnimating(true);
    setSlideDirection(direction);
    
    if (direction === 'next') {
      setCurrentSlide(prev => prev < totalSlides - 1 ? prev + 1 : 0);
    } else {
      setCurrentSlide(prev => prev > 0 ? prev - 1 : totalSlides - 1);
    }
    
    // Reset animation state after the transition completes
    setTimeout(handleTransitionEnd, 600);
  }, [isAnimating, totalSlides, handleTransitionEnd]);
  
  // Go to specific slide
  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide || index >= totalSlides || index < 0) return;
    
    setHasInteracted(true);
    setIsAnimating(true);
    
    // Determine direction for animation
    const direction = index > currentSlide ? 'next' : 'prev';
    setSlideDirection(direction);
    
    // Change slide
    setCurrentSlide(index);
    
    // Reset animation state after transition completes
    setTimeout(handleTransitionEnd, 600);
  }, [currentSlide, isAnimating, totalSlides, handleTransitionEnd]);
  
  // Navigation functions
  const goToNextSlide = useCallback(() => {
    setHasInteracted(true);
    slideWithAnimation('next');
  }, [slideWithAnimation]);

  const goToPrevSlide = useCallback(() => {
    setHasInteracted(true);
    slideWithAnimation('prev');
  }, [slideWithAnimation]);
  
  return {
    currentSlide,
    totalSlides,
    isAnimating,
    dragStartX,
    dragOffset,
    isDragging,
    hasInteracted,
    slideDirection,
    touchStartXRef,
    dragXMotionValue,
    setDragStartX,
    setDragOffset,
    setIsDragging,
    setHasInteracted,
    goToNextSlide,
    goToPrevSlide,
    goToSlide,
    slideWithAnimation,
    handleTransitionEnd
  };
};

// Memoized Tag Component for better performance
const ExpertiseTag = memo(({ expertise, index }: { expertise: string, index: number }) => {
  // Get tag color based on index
  const getTagColor = (idx: number) => {
    const colors = [
      'bg-blue-100 text-blue-800 border-blue-200',
      'bg-green-100 text-green-800 border-green-200',
      'bg-yellow-100 text-yellow-800 border-yellow-200',
      'bg-purple-100 text-purple-800 border-purple-200',
      'bg-pink-100 text-pink-800 border-pink-200',
      'bg-indigo-100 text-indigo-800 border-indigo-200',
    ];
    return colors[idx % colors.length];
  };
  
  return (
    <motion.span 
      className={`${getTagColor(index)} text-xs font-medium px-2.5 py-1 rounded-full border transform transition-all duration-200 inline-flex items-center gap-1`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      {expertise}
    </motion.span>
  );
});

ExpertiseTag.displayName = 'ExpertiseTag';

// Memoized SocialLink Component
const SocialLink = memo(({ 
  type, 
  url, 
  ariaLabel 
}: { 
  type: 'linkedin' | 'twitter' | 'website', 
  url: string, 
  ariaLabel: string 
}) => {
  const icons = {
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
      </svg>
    ),
    website: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  };
  
  const colors = {
    linkedin: "text-blue-600 hover:text-white hover:bg-blue-600",
    twitter: "text-blue-400 hover:text-white hover:bg-blue-400",
    website: "text-grey-600 hover:text-white hover:bg-grey-600"
  };
  
  return (
    <motion.a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`${colors[type]} transition-all duration-300 p-2 rounded-full flex items-center justify-center`}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icons[type]}
    </motion.a>
  );
});

SocialLink.displayName = 'SocialLink';

// Collaborator Card Component
const CollaboratorCard = memo(({ 
  collaborator, 
  language, 
  onClick,
  isVisible,
  index,
  isActive,
  slideDirection
}: { 
  collaborator: Collaborator, 
  language: string,
  onClick: () => void,
  isVisible: boolean,
  index: number,
  isActive: boolean,
  slideDirection: 'next' | 'prev' | null
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <motion.div 
      ref={ref}
      className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
        transition: { 
          duration: 0.5, 
          delay: index * 0.1,
          ease: "easeOut"
        }
      }}
    >
      <motion.div 
        className={`group bg-white rounded-[30px] overflow-hidden shadow-xl border-2 border-grey-100 transition-all duration-500 h-full flex flex-col`}
        whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        animate={isActive ? { 
          scale: slideDirection ? [1, 0.98, 1] : 1,
          transition: { duration: 0.5, ease: "easeOut" }
        } : { scale: 1 }}
      >
        {/* Image Container with Overlay Effect */}
        <div className="relative h-72 overflow-hidden">
          {/* Gradient overlay with subtle pulse animation */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-orange-500/80 to-orange-700/80 mix-blend-multiply z-10"
            animate={{ opacity: [0.9, 0.8, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-grey-200 to-grey-300 flex items-center justify-center overflow-hidden">
            {/* Placeholder image with parallax effect */}
            <motion.div 
              className="text-grey-400 text-7xl"
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            >
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
          
          {/* Name Overlay */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6 z-20"
            initial={{ y: 10, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-bold text-white mb-1 drop-shadow-md">{collaborator.name}</h4>
            <p className="text-white/90 font-medium drop-shadow-md">{collaborator.role[language === 'en' ? 'en' : 'fr']}</p>
          </motion.div>
          
          {/* Quote Overlay - Only shown on hover with backdrop blur */}
          {collaborator.quote && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ opacity: 1, scale: 1 }}
            >
              <motion.div 
                className="bg-black/60 backdrop-blur-sm p-6 m-5 rounded-xl"
                whileHover={{ rotate: ["-1deg", "1deg", "-1deg"], transition: { duration: 2, repeat: Infinity } }}
              >
                <p className="text-white text-base italic font-medium text-center">
                  "{collaborator.quote[language === 'en' ? 'en' : 'fr']}"
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
        
        {/* Content Container */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Expertise Tags */}
          {collaborator.expertise && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {collaborator.expertise.slice(0, 3).map((skill, idx) => (
                <ExpertiseTag key={idx} expertise={skill} index={idx} />
              ))}
              {collaborator.expertise.length > 3 && (
                <motion.span 
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-grey-100 text-grey-800 hover:bg-grey-200 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +{collaborator.expertise.length - 3}
                </motion.span>
              )}
            </div>
          )}
          
          <motion.p 
            className="text-black text-sm leading-relaxed line-clamp-3 flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            {collaborator.bio[language === 'en' ? 'en' : 'fr']}
          </motion.p>
          
          {/* Actions Row */}
          <motion.div 
            className="flex items-center justify-between mt-4 pt-4 border-t border-grey-100"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
            transition={{ delay: 0.5 }}
          >
            {/* Social Links */}
            <div className="flex space-x-2">
              {collaborator.socialLinks?.linkedin && (
                <SocialLink 
                  type="linkedin" 
                  url={collaborator.socialLinks.linkedin} 
                  ariaLabel="LinkedIn profile" 
                />
              )}
              {collaborator.socialLinks?.twitter && (
                <SocialLink 
                  type="twitter" 
                  url={collaborator.socialLinks.twitter} 
                  ariaLabel="Twitter profile" 
                />
              )}
              {collaborator.socialLinks?.website && (
                <SocialLink 
                  type="website" 
                  url={collaborator.socialLinks.website} 
                  ariaLabel="Personal website" 
                />
              )}
            </div>
            
            {/* View Details Button with hover effect */}
            <motion.button 
              onClick={onClick}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-medium"
              whileHover={{ 
                backgroundColor: "rgb(254, 215, 170)", 
                scale: 1.05,
                paddingRight: "1.25rem" 
              }}
              whileTap={{ scale: 0.95 }}
              aria-label={language === 'en' ? `View details for ${collaborator.name}` : `Voir les détails pour ${collaborator.name}`}
            >
              {language === 'en' ? 'View Details' : 'Voir Détails'}
              <motion.svg 
                className="ml-1 w-3.5 h-3.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
});

CollaboratorCard.displayName = 'CollaboratorCard';

// Modal Details Component
const CollaboratorModal = memo(({ 
  collaborator, 
  language, 
  onClose,
  modalRef 
}: { 
  collaborator: Collaborator, 
  language: string,
  onClose: () => void,
  modalRef: React.RefObject<HTMLDivElement | null>
}) => {
  // Get random color for expertise tags
  const getTagColor = (index: number) => {
    const colors = [
      'bg-blue-100 text-blue-800 border-blue-200',
      'bg-green-100 text-green-800 border-green-200',
      'bg-yellow-100 text-yellow-800 border-yellow-200',
      'bg-purple-100 text-purple-800 border-purple-200',
      'bg-pink-100 text-pink-800 border-pink-200',
      'bg-indigo-100 text-indigo-800 border-indigo-200',
    ];
    return colors[index % colors.length];
  };
  
  useEffect(() => {
    // Focus trap for accessibility
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;
    
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscapeKey);
    
    // Focus first element
    firstElement?.focus();
    
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = '';
    };
  }, [modalRef, onClose]);
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div 
        ref={modalRef}
        className="bg-white rounded-[30px] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className="relative">
          {/* Modal Header with Image Background and parallax effect */}
          <motion.div 
            className="h-52 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-[30px] flex items-end relative overflow-hidden modal-header"
            whileHover={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <motion.button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 text-white flex items-center justify-center"
              whileHover={{ 
                backgroundColor: "rgba(0,0,0,0.4)", 
                scale: 1.1,
                rotate: [0, 10, -10, 0]
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={language === 'en' ? 'Close details' : 'Fermer les détails'}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            {/* Profile Image with hover effect */}
            <motion.div 
              className="absolute bottom-0 left-8 transform translate-y-1/2 w-36 h-36 rounded-full border-4 border-white shadow-xl bg-white"
              whileHover={{ scale: 1.05, y: "40%" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-grey-200 to-grey-300 flex items-center justify-center">
                <motion.div 
                  className="text-grey-400"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
                >
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Modal Content with smooth reveal animations */}
          <div className="pt-24 px-10 pb-10">
            <motion.div 
              className="flex flex-wrap items-start justify-between mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-black">{collaborator.name}</h3>
                <p className="text-orange-600 font-medium text-lg">{collaborator.role[language === 'en' ? 'en' : 'fr']}</p>
              </div>
              
              {/* Social Links with enhanced hover effects */}
              <div className="flex space-x-3 mt-2">
                {collaborator.socialLinks?.linkedin && (
                  <motion.a 
                    href={collaborator.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white bg-blue-600 p-2.5 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#0A66C2" }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="LinkedIn profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                )}
                {collaborator.socialLinks?.twitter && (
                  <motion.a 
                    href={collaborator.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white bg-blue-400 p-2.5 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#1DA1F2" }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Twitter profile"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                    </svg>
                  </motion.a>
                )}
                {collaborator.socialLinks?.website && (
                  <motion.a 
                    href={collaborator.socialLinks.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white bg-grey-600 p-2.5 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#4B5563" }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Personal website"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
            
            {/* Quote if available with enhanced styling */}
            {collaborator.quote && (
              <motion.div 
                className="mb-8 bg-gradient-to-r from-orange-50 to-orange-100/50 p-7 rounded-2xl shadow-inner"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <svg className="absolute top-0 left-0 w-8 h-8 text-orange-300 transform -translate-x-4 -translate-y-4 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <motion.blockquote 
                    className="text-black font-serif text-lg italic"
                    animate={{ scale: [1, 1.01, 1] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                  >
                    "{collaborator.quote[language === 'en' ? 'en' : 'fr']}"
                  </motion.blockquote>
                </div>
              </motion.div>
            )}
            
            {/* Expertise Tags with enhanced interactions */}
            {collaborator.expertise && (
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-sm font-bold text-grey-500 uppercase mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {language === 'en' ? 'Areas of Expertise' : 'Domaines d\'Expertise'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {collaborator.expertise.map((skill, idx) => (
                    <motion.span 
                      key={idx} 
                      className={`${getTagColor(idx)} text-xs font-medium px-2.5 py-1 rounded-full border`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Bio */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-sm font-bold text-grey-500 uppercase mb-3 flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {language === 'en' ? 'Biography' : 'Biographie'}
              </h4>
              <p className="text-black leading-relaxed">
                {collaborator.bio[language === 'en' ? 'en' : 'fr']}
              </p>
            </motion.div>
            
            {/* Actions */}
            <motion.div 
              className="flex flex-wrap justify-between items-center pt-6 border-t border-grey-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Contact Button */}
              <motion.button 
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "#F97316" }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'Contact Collaborator' : 'Contacter le Collaborateur'}
              </motion.button>
              
              {/* Share Button */}
              <motion.button 
                className="px-6 py-3 bg-grey-100 text-black font-medium rounded-full flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                {language === 'en' ? 'Share Profile' : 'Partager le Profil'}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

CollaboratorModal.displayName = 'CollaboratorModal';

// Counter Animation Component
const CounterAnimation = ({ target, label }: { target: string | number, label: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target.toString().replace(/[^0-9]/g, ''), 10);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.min(Math.floor(start), end));
        
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [inView, target]);
  
  // Format the number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const displayValue = target.toString().includes('+') ? `${formattedCount}+` : formattedCount;
  
  return (
    <motion.div 
      ref={ref}
      className="text-center transform hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-3xl font-bold text-orange-600 mb-1 counter-anim">{displayValue}</p>
      <p className="text-black font-medium">{label}</p>
    </motion.div>
  );
};

const Collaborateurs = () => {
  // Context and state
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const modalRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Current user and timestamp
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-05-27 17:34:38";
  
  // Sample collaborator data - In production, this would come from an API or CMS
  const collaborators: Collaborator[] = [
    {
      id: "collab-1",
      name: "Dr. Amadou Diallo",
      role: {
        en: "Education Specialist",
        fr: "Spécialiste en Éducation"
      },
      bio: {
        en: "With 15+ years of experience in educational reform across West Africa, Dr. Diallo has helped transform curriculum development in multiple countries. He specializes in creating educational programs that bridge traditional knowledge with modern skills.",
        fr: "Avec plus de 15 ans d'expérience dans la réforme éducative en Afrique de l'Ouest, Dr. Diallo a contribué à transformer le développement des programmes scolaires dans plusieurs pays. Il est spécialisé dans la création de programmes éducatifs qui associent les connaissances traditionnelles aux compétences modernes."
      },
      quote: {
        en: "Education is the most powerful tool we can use to reshape Africa's future.",
        fr: "L'éducation est l'outil le plus puissant que nous puissions utiliser pour remodeler l'avenir de l'Afrique."
      },
      imageSrc: "/images/collaborators/amadou-diallo.jpg",
      expertise: ["Curriculum Development", "Educational Policy", "Teacher Training"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/amadou-diallo",
        twitter: "https://twitter.com/amadoudiallo"
      }
    },
    {
      id: "collab-2",
      name: "Fatima N'Diaye",
      role: {
        en: "Tech Entrepreneur",
        fr: "Entrepreneure Tech"
      },
      bio: {
        en: "Founder of three successful tech startups, Fatima is passionate about bringing digital innovation to rural communities. Her work focuses on mobile solutions for agriculture and healthcare, empowering young Africans to solve local challenges with technology.",
        fr: "Fondatrice de trois startups technologiques prospères, Fatima est passionnée par l'innovation numérique dans les communautés rurales. Son travail se concentre sur les solutions mobiles pour l'agriculture et la santé, permettant aux jeunes Africains de résoudre les défis locaux grâce à la technologie."
      },
      quote: {
        en: "The future of Africa will be built by young innovators who dare to solve local problems with global solutions.",
        fr: "L'avenir de l'Afrique sera construit par de jeunes innovateurs qui osent résoudre les problèmes locaux avec des solutions globales."
      },
      imageSrc: "/images/collaborators/fatima-ndiaye.jpg",
      expertise: ["Mobile Technology", "AgriTech", "Startup Incubation"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/fatima-ndiaye",
        website: "https://fatimandiaye.com"
      }
    },
    {
      id: "collab-3",
      name: "Prof. Jean-Pierre Koffi",
      role: {
        en: "Economics Researcher",
        fr: "Chercheur en Économie"
      },
      bio: {
        en: "As a leading economist specializing in African development, Prof. Koffi has advised governments and international organizations on sustainable economic policies. He is dedicated to mentoring young economists and policy makers across the continent.",
        fr: "En tant qu'économiste de premier plan spécialisé dans le développement africain, Prof. Koffi a conseillé des gouvernements et des organisations internationales sur des politiques économiques durables. Il se consacre au mentorat de jeunes économistes et décideurs politiques à travers le continent."
      },
      imageSrc: "/images/collaborators/jean-pierre-koffi.jpg",
      expertise: ["Economic Policy", "Sustainable Development", "Fiscal Analysis"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/jeanpierre-koffi",
        twitter: "https://twitter.com/jpkoffi"
      }
    },
    {
      id: "collab-4",
      name: "Aisha Mensah",
      role: {
        en: "Youth Leadership Coach",
        fr: "Coach en Leadership des Jeunes"
      },
      bio: {
        en: "Through her innovative coaching programs, Aisha has empowered over 5,000 young Africans to develop their leadership skills and create positive change in their communities. Her approach combines traditional African wisdom with contemporary leadership principles.",
        fr: "Grâce à ses programmes de coaching innovants, Aisha a permis à plus de 5 000 jeunes Africains de développer leurs compétences en leadership et de créer des changements positifs dans leurs communautés. Son approche combine la sagesse africaine traditionnelle et les principes de leadership contemporains."
      },
      quote: {
        en: "Leadership is not about position, but about influence and the ability to inspire positive change.",
        fr: "Le leadership ne concerne pas la position, mais l'influence et la capacité à inspirer un changement positif."
      },
      imageSrc: "/images/collaborators/aisha-mensah.jpg",
      expertise: ["Youth Empowerment", "Leadership Development", "Community Building"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/aisha-mensah",
        website: "https://aishamensah.org"
      }
    },
    {
      id: "collab-5",
      name: "Dr. Kwame Osei",
      role: {
        en: "Healthcare Innovation Expert",
        fr: "Expert en Innovation Médicale"
      },
      bio: {
        en: "Dr. Osei has pioneered telemedicine solutions that bring quality healthcare to remote areas across Africa. His work focuses on training young medical professionals to leverage technology in addressing the continent's healthcare challenges.",
        fr: "Dr. Osei a été pionnier dans les solutions de télémédecine qui apportent des soins de santé de qualité dans les zones reculées d'Afrique. Son travail se concentre sur la formation de jeunes professionnels de la santé à l'utilisation de la technologie pour relever les défis de santé du continent."
      },
      imageSrc: "/images/collaborators/kwame-osei.jpg",
      expertise: ["Telemedicine", "Medical Education", "Healthcare Technology"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/kwame-osei",
        twitter: "https://twitter.com/drkwameosei"
      }
    },
    {
      id: "collab-6",
      name: "Mariama Bah",
      role: {
        en: "Cultural Heritage Advocate",
        fr: "Défenseure du Patrimoine Culturel"
      },
      bio: {
        en: "Mariama works at the intersection of cultural preservation and sustainable tourism. Her initiatives have created economic opportunities for young people while safeguarding traditional knowledge and practices across West African communities.",
        fr: "Mariama travaille à l'intersection de la préservation culturelle et du tourisme durable. Ses initiatives ont créé des opportunités économiques pour les jeunes tout en sauvegardant les connaissances et pratiques traditionnelles dans les communautés d'Afrique de l'Ouest."
      },
      quote: {
        en: "Our cultural heritage is not just our past; it's the foundation for our innovative future.",
        fr: "Notre patrimoine culturel n'est pas seulement notre passé; c'est le fondement de notre avenir innovant."
      },
      imageSrc: "/images/collaborators/mariama-bah.jpg",
      expertise: ["Cultural Preservation", "Sustainable Tourism", "Traditional Crafts"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/mariama-bah",
        website: "https://culturalheritage-africa.org"
      }
    }
  ];

  // Filter collaborators based on search term with debounce
  const debouncedSetSearchTerm = useDebouncedCallback((value: string) => {
    setSearchTerm(value);
  }, 300);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearchTerm(e.target.value);
  };
  
  // Memoized filtered collaborators to prevent unnecessary re-renders
  const filteredCollaborators = useMemo(() => {
    return collaborators.filter(c => 
      !searchTerm || 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.bio[language === 'en' ? 'en' : 'fr'].toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.expertise && c.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase())))
    );
  }, [collaborators, searchTerm, language]);
  
  // Initialize carousel with custom hook
  const {
    currentSlide,
    totalSlides,
    isAnimating,
    dragStartX,
    dragOffset,
    isDragging,
    hasInteracted,
    slideDirection,
    touchStartXRef,
    dragXMotionValue,
    setDragStartX,
    setDragOffset,
    setIsDragging,
    setHasInteracted,
    goToNextSlide,
    goToPrevSlide,
    goToSlide,
    slideWithAnimation
  } = useCarousel(filteredCollaborators.length, cardsPerView);
  
  // Animation controls for the carousel
  const controls = useAnimation();
  
  // Effect for controlling the drag animation
  useEffect(() => {
    // When drag offset changes, update the animation
    dragXMotionValue.set(dragOffset);
  }, [dragOffset, dragXMotionValue]);
  
  // This effect handles the position calculation of the slider based on current slide
  useEffect(() => {
    if (!isAnimating) {
      controls.start({
        x: -currentSlide * 100 * (carouselRef.current?.clientWidth || 1) / 100 + dragOffset
      });
    }
  }, [currentSlide, controls, dragOffset, isAnimating]);
  
  // Update cards per view based on window size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => {
      window.removeEventListener('resize', updateCardsPerView);
    };
  }, []);
  
  // Simulate loading state with progress animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Extended loading time for better effect
    
    return () => clearTimeout(timer);
  }, []);
  
  // Initial animations and event listeners
  useEffect(() => {
    setIsVisible(true);
    
    // Close modal when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedCollaborator(null);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);
  
  // Autoplay functionality
  useEffect(() => {
    if (autoplay && !hasInteracted && totalSlides > 1 && !isAnimating) {
      const timer = setInterval(() => {
        slideWithAnimation('next');
      }, 5000);
      
      return () => clearInterval(timer);
    }
  }, [autoplay, totalSlides, hasInteracted, isAnimating, slideWithAnimation]);
  
  // Get collaborators for current slide
  const currentCollaborators = useMemo(() => {
    return filteredCollaborators.slice(
      currentSlide * cardsPerView, 
      (currentSlide * cardsPerView) + cardsPerView
    );
  }, [filteredCollaborators, currentSlide, cardsPerView]);
  
  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimating) return;
    
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
    e.preventDefault();
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isAnimating) return;
    
    const currentX = e.clientX;
    let newOffset = currentX - dragStartX;
    
    // Add resistance at the edges
    if ((currentSlide === 0 && newOffset > 0) || (currentSlide === totalSlides - 1 && newOffset < 0)) {
      newOffset = (currentX - dragStartX) / 3; // Add resistance
    }
    
    setDragOffset(newOffset);
  };
  
  const handleMouseUp = () => {
    if (!isDragging || isAnimating) return;
    
    if (dragOffset > 100) {
      slideWithAnimation('prev');
    } else if (dragOffset < -100) {
      slideWithAnimation('next');
    } else {
      // Spring back if drag wasn't strong enough
      setDragOffset(0);
    }
    
    setIsDragging(false);
    setHasInteracted(true);
  };
  
  const handleMouseLeave = () => {
    if (isDragging) {
      setDragOffset(0);
      setIsDragging(false);
    }
  };
  
  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    touchStartXRef.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || isAnimating) return;
    
    const touchCurrentX = e.touches[0].clientX;
    const diff = touchStartXRef.current - touchCurrentX;
    
    // Add resistance at the edges for a more natural feel
    let newOffset = -diff;
    if ((currentSlide === 0 && diff < 0) || (currentSlide === totalSlides - 1 && diff > 0)) {
      newOffset = -diff / 3; // Add resistance
    }
    
    setDragOffset(newOffset);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || isAnimating) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    
    // Swipe threshold detection with enhanced feedback
    if (diff > 80) {
      slideWithAnimation('next');
    } else if (diff < -80) {
      slideWithAnimation('prev');
    } else {
      // Spring back to original position if swipe wasn't strong enough
      setDragOffset(0);
    }
    
    touchStartXRef.current = null;
    setHasInteracted(true);
  };
  
  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  const scrollYMotionValue = useMotionValue(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      scrollYMotionValue.set(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYMotionValue]);
  
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: sectionInViewRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  // Merge refs for the section
  const setSectionRefs = useCallback(
    (node: HTMLElement | null) => {
      sectionRef.current = node;
      sectionInViewRef(node);
    },
    [sectionInViewRef]
  );
  
  return (
    <motion.section 
      ref={setSectionRefs}
      className="py-28 lg:py-32 relative overflow-hidden bg-gradient-to-br from-grey-50 via-grey-100 to-grey-50 dark:from-grey-900 dark:via-grey-800 dark:to-grey-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Enhanced Background Elements with Parallax */}
      <motion.div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-orange-100/40 to-orange-200/40 dark:from-orange-900/15 dark:to-orange-800/15 blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.5, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{ y: scrollY * -0.1 }}
        />
        <motion.div 
          className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-100/40 to-blue-200/40 dark:from-blue-900/15 dark:to-blue-800/15 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 5 }}
          style={{ y: scrollY * 0.1 }}
        />
        
        {/* Enhanced Grid Pattern with Parallax */}
        <div className="absolute inset-0 bg-grid-pattern opacity-7 dark:opacity-7" style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}></div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header with Animation */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div 
                        className="flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="w-12 h-1 bg-orange-300 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.div 
              className="w-3 h-3 bg-orange-500 rounded-full mx-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 180 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.div 
              className="w-12 h-1 bg-orange-300 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.7, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-grey-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="relative inline-block">
              <motion.span 
                className="relative z-10"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.4 }}
              >
                {language === 'en' ? 'Our Collaborators' : 'Nos Collaborateurs'}
              </motion.span>
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-4 bg-orange-200/50 dark:bg-orange-800/50 -z-10 transform -rotate-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              ></motion.span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-grey-800 dark:text-grey-200 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {language === 'en' 
              ? 'Meet the exceptional individuals sharing their experiences and knowledge with African youth'
              : 'Découvrez les personnes exceptionnelles qui partagent leurs expériences et connaissances avec la jeunesse africaine'}
          </motion.p>
          
          {/* Enhanced Search Bar with Animation */}
          <motion.div 
            className="mt-12 flex flex-col md:flex-row items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="relative w-full max-w-md group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <input
                type="text"
                onChange={handleSearchChange}
                placeholder={language === 'en' ? "Search by name or expertise..." : "Rechercher par nom ou expertise..."}
                className="w-full py-3.5 px-5 pl-14 rounded-full bg-white text-black border-2 border-grey-100 shadow-lg focus:outline-none focus:ring-3 focus:ring-orange-500/30 focus:border-orange-400 transition-all duration-300 group-hover:shadow-xl"
                aria-label={language === 'en' ? "Search collaborators" : "Rechercher des collaborateurs"}
              />
              <motion.svg 
                className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-grey-400 group-hover:text-orange-500 transition-colors duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </motion.svg>
              
              {/* Clear search button with animation */}
              <AnimatePresence>
                {searchTerm && (
                  <motion.button 
                    onClick={() => {
                      setSearchTerm('');
                      const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                      if (input) input.value = '';
                    }}
                    className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-grey-100 text-grey-500 hover:bg-grey-200 hover:text-grey-700 flex items-center justify-center"
                    aria-label={language === 'en' ? "Clear search" : "Effacer la recherche"}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
            
            {/* Autoplay toggle with enhanced interaction */}
            <motion.button 
              onClick={() => setAutoplay(!autoplay)}
              className={`mt-4 md:mt-0 md:ml-4 flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                autoplay 
                  ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' 
                  : 'bg-grey-100 text-grey-600 hover:bg-grey-200 hover:text-grey-800'
              }`}
              aria-pressed={autoplay}
              aria-label={autoplay ? (language === 'en' ? "Disable autoplay" : "Désactiver la lecture automatique") : (language === 'en' ? "Enable autoplay" : "Activer la lecture automatique")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.svg 
                  key={autoplay ? 'pause' : 'play'}
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {autoplay ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  )}
                </motion.svg>
              </AnimatePresence>
              <span className="text-sm font-medium">
                {autoplay 
                  ? (language === 'en' ? 'Pause' : 'Pause') 
                  : (language === 'en' ? 'Autoplay' : 'Lecture auto')}
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* No Results Message with Animation */}
        <AnimatePresence>
          {filteredCollaborators.length === 0 && (
            <motion.div 
              className="text-center py-16 bg-white rounded-[30px] shadow-xl border-2 border-grey-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <motion.svg 
                className="w-16 h-16 mx-auto text-grey-300 mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </motion.svg>
              <motion.h4 
                className="text-xl font-bold text-black mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {language === 'en' ? 'No collaborators found' : 'Aucun collaborateur trouvé'}
              </motion.h4>
              <motion.p 
                className="text-grey-600 max-w-md mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {language === 'en' 
                  ? 'Try adjusting your search criteria to find collaborators.' 
                  : 'Essayez d\'ajuster vos critères de recherche pour trouver des collaborateurs.'}
              </motion.p>
              <motion.button 
                onClick={() => {
                  setSearchTerm('');
                  const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                  if (input) input.value = '';
                }}
                className="mt-6 inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium text-sm transition-all duration-300 hover:bg-orange-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <svg className="mr-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>{language === 'en' ? 'Reset search' : 'Réinitialiser la recherche'}</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Carousel Container */}
        <AnimatePresence>
          {filteredCollaborators.length > 0 && (
            <motion.div 
              className="relative px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Loading Skeleton with Animation */}
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(cardsPerView)].map((_, index) => (
                    <motion.div 
                      key={index} 
                      className="animate-pulse bg-white rounded-[30px] overflow-hidden shadow-xl border-2 border-grey-100 h-[570px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.1 }
                      }}
                    >
                      <div className="h-72 bg-grey-200 dark:bg-grey-700">
                        <motion.div 
                          className="w-full h-full bg-gradient-to-r from-grey-200 to-grey-300 dark:from-grey-700 dark:to-grey-600"
                          animate={{ 
                            x: ['-100%', '100%'],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.5,
                            ease: "linear"
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <motion.div 
                          className="h-6 bg-grey-200 dark:bg-grey-700 rounded w-3/4 mb-4"
                          animate={{ opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        />
                        <motion.div 
                          className="h-4 bg-grey-200 dark:bg-grey-700 rounded w-1/2 mb-6"
                          animate={{ opacity: [0.5, 0.7, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
                        />
                        <div className="flex gap-2 mb-4">
                          <motion.div 
                            className="h-6 bg-grey-200 dark:bg-grey-700 rounded-full w-16"
                            animate={{ opacity: [0.5, 0.7, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
                          />
                          <motion.div 
                            className="h-6 bg-grey-200 dark:bg-grey-700 rounded-full w-20"
                            animate={{ opacity: [0.5, 0.7, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
                          />
                        </div>
                        <div className="space-y-2">
                          <motion.div 
                            className="h-3 bg-grey-200 dark:bg-grey-700 rounded w-full"
                            animate={{ opacity: [0.5, 0.7, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                          />
                          <motion.div 
                            className="h-3 bg-grey-200 dark:bg-grey-700 rounded w-full"
                            animate={{ opacity: [0.5, 0.7, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
                          />
                          <motion.div 
                            className="h-3 bg-grey-200 dark:bg-grey-700 rounded w-3/4"
                            animate={{ opacity: [0.5, 0.7, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Navigation Arrows with Enhanced Animation */}
                  <motion.button 
                    onClick={goToPrevSlide} 
                    disabled={isAnimating}
                    className={`absolute top-1/2 -left-4 md:-left-10 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-grey-700 focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label={language === 'en' ? 'Previous slide' : 'Diapositive précédente'}
                    whileHover={!isAnimating ? { scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.95)", x: -5 } : {}}
                    whileTap={!isAnimating ? { scale: 0.9 } : {}}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.svg 
                      className={`w-6 h-6 mx-auto ${slideDirection === 'prev' ? 'text-orange-500' : 'text-grey-700'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={!isAnimating && slideDirection === 'prev' ? 
                        { x: [-4, 0, -4], transition: { duration: 0.6, repeat: 3, repeatType: "reverse" } } : 
                        { x: 0 }
                      }
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </motion.svg>
                    <span className="sr-only">{language === 'en' ? 'Previous' : 'Précédent'}</span>
                  </motion.button>
                  
                  {/* Carousel Slides with Enhanced Animation */}
                  <motion.div 
                    ref={carouselRef} 
                    className="overflow-hidden carousel-perspective"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    <motion.div 
                      className="flex"
                      animate={controls}
                      style={{ x: dragXMotionValue }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {filteredCollaborators.map((collaborator, index) => (
                        <CollaboratorCard
                          key={collaborator.id}
                          collaborator={collaborator}
                          language={language}
                          onClick={() => setSelectedCollaborator(collaborator)}
                          isVisible={isVisible}
                          index={index}
                          isActive={
                            index >= currentSlide * cardsPerView && 
                            index < (currentSlide + 1) * cardsPerView
                          }
                          slideDirection={slideDirection}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                  
                  <motion.button 
                    onClick={goToNextSlide} 
                    disabled={isAnimating}
                    className={`absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-grey-700 focus:outline-none focus:ring-4 focus:ring-orange-500/30 ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
                    aria-label={language === 'en' ? 'Next slide' : 'Diapositive suivante'}
                    whileHover={!isAnimating ? { scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.95)", x: 5 } : {}}
                    whileTap={!isAnimating ? { scale: 0.9 } : {}}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.svg 
                      className={`w-6 h-6 mx-auto ${slideDirection === 'next' ? 'text-orange-500' : 'text-grey-700'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={!isAnimating && slideDirection === 'next' ? 
                        { x: [4, 0, 4], transition: { duration: 0.6, repeat: 3, repeatType: "reverse" } } : 
                        { x: 0 }
                      }
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </motion.svg>
                    <span className="sr-only">{language === 'en' ? 'Next' : 'Suivant'}</span>
                  </motion.button>
                  
                  {/* Enhanced Pagination Dots */}
                  {totalSlides > 1 && (
                    <div className="flex justify-center mt-10 space-x-2">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            if (!isAnimating) goToSlide(index);
                          }}
                          className={`transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 rounded-full ${
                            currentSlide === index 
                              ? 'bg-orange-500 h-3' 
                              : 'bg-grey-300 h-3 hover:bg-grey-400'
                          }`}
                          aria-label={`${language === 'en' ? 'Go to slide' : 'Aller à la diapositive'} ${index + 1}`}
                          aria-current={currentSlide === index ? 'true' : 'false'}
                          disabled={isAnimating}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            width: currentSlide === index ? 40 : 12
                          }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.1 + (index * 0.05) 
                          }}
                          whileHover={!isAnimating && currentSlide !== index ? { scale: 1.2 } : {}}
                          whileTap={!isAnimating ? { scale: 0.9 } : {}}
                        />
                      ))}
                    </div>
                  )}
                  
                  {/* Slide Counter with Animation */}
                  <motion.div 
                    className={`absolute bottom-0 right-0 bg-white/80 backdrop-blur-sm rounded-tl-lg rounded-br-3xl px-3 py-1 text-xs font-medium text-grey-600`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${currentSlide}-${totalSlides}`}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {currentSlide + 1} / {totalSlides}
                      </motion.span>
                    </AnimatePresence>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Enhanced Call to Action with Interaction */}
        <motion.div 
          className="mt-24 max-w-4xl mx-auto bg-white rounded-[32px] p-10 md:p-14 shadow-2xl border-2 border-orange-100 dark:border-orange-800/20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Decorative Elements with Animations */}
          <motion.div 
            className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full opacity-70"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-50 rounded-full opacity-70"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
          
          {/* Content with Staggered Animation */}
          <div className="relative z-10">
            <motion.div 
              className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl rotate-12 flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20"
              initial={{ rotate: 45, scale: 0.8 }}
              whileInView={{ rotate: 12, scale: 1 }}
              whileHover={{ rotate: 0, scale: 1.1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              viewport={{ once: true }}
            >
              <motion.svg 
                className="w-10 h-10 text-white -rotate-12" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ rotate: [-12, -5, -12] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </motion.svg>
            </motion.div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-serif font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {language === 'en' ? 'Join Our Collaborator Network' : 'Rejoignez Notre Réseau de Collaborateurs'}
            </motion.h3>
            
            <motion.p 
              className="text-lg text-black font-medium mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {language === 'en' 
                ? 'Are you passionate about sharing your expertise and experiences with African youth? We\'re always looking for new collaborators to join our mission.'
                : 'Êtes-vous passionné par le partage de votre expertise et de vos expériences avec la jeunesse africaine ? Nous recherchons toujours de nouveaux collaborateurs pour rejoindre notre mission.'}
            </motion.p>
            
            <motion.button 
              className="group relative inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              viewport={{ once: true }}
            >
              <span className="relative z-10">
                {language === 'en' ? 'Apply to Become a Collaborator' : 'Postuler pour Devenir Collaborateur'}
              </span>
              <motion.svg 
                className="ml-2 w-6 h-6 relative z-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 -z-10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            
            {/* Statistical Highlights with Animated Counters */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 pt-10 border-t border-grey-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <CounterAnimation target={collaborators.length} label={language === 'en' ? 'Active Collaborators' : 'Collaborateurs Actifs'} />
              <CounterAnimation target={12} label={language === 'en' ? 'Countries Represented' : 'Pays Représentés'} />
              <CounterAnimation target="5,000+" label={language === 'en' ? 'Youth Impacted' : 'Jeunes Impactés'} />
            </motion.div>
          </div>
        </motion.div>
        
      </div>
      
      {/* Collaborator Detail Modal with Animations */}
      <AnimatePresence>
        {selectedCollaborator && (
          <CollaboratorModal
            collaborator={selectedCollaborator}
            language={language}
            onClose={() => setSelectedCollaborator(null)}
            modalRef={modalRef}
          />
        )}
      </AnimatePresence>
      
      {/* Add global style for accessibility and animations */}
      <style jsx global>{`
        @keyframes scale-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        
        @keyframes arrow-left {
          0% { transform: translateX(0); }
          50% { transform: translateX(-4px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes arrow-right {
          0% { transform: translateX(0); }
          50% { transform: translateX(4px); }
          100% { transform: translateX(0); }
        }
        
        @keyframes modal-in {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        @keyframes card-enter-right {
          0% { opacity: 0.5; transform: translateX(40px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        
        @keyframes card-exit-left {
          0% { opacity: 1; transform: translateX(0) scale(1); }
          100% { opacity: 0.5; transform: translateX(-40px) scale(0.95); }
        }
        
        @keyframes card-enter-left {
          0% { opacity: 0.5; transform: translateX(-40px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        
        @keyframes card-exit-right {
          0% { opacity: 1; transform: translateX(0) scale(1); }
          100% { opacity: 0.5; transform: translateX(40px) scale(0.95); }
        }
        
        .carousel-perspective {
          perspective: 1200px;
        }
        
        .modal-header {
          background-size: 400% 400%;
          background-position: 0% 0%;
          animation: gradient-shift 15s ease infinite;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        /* Focus styles for accessibility */
        button:focus-visible, a:focus-visible {
          outline: 2px solid rgb(249, 115, 22);
          outline-offset: 2px;
        }
        
        /* Enhanced scrollbar for the modal */
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }
        
        .modal-content::-webkit-scrollbar-track {
          background: rgba(243, 244, 246, 0.5);
          border-radius: 10px;
        }
        
        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.5);
          border-radius: 10px;
        }
        
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.7);
        }
      `}</style>
    </motion.section>
  );
};

export default Collaborateurs;
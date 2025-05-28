"use client";

import { useContext, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from '../contexts/LanguageContext';

// Animated counter component
const AnimatedCounter = ({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  
  useEffect(() => {
    if (!inView) return;
    
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
  }, [inView, value, duration]);
  
  return (
    <motion.span ref={ref} className="font-bold tabular-nums">
      {count}{suffix}
    </motion.span>
  );
};

const ServicesPreview = () => {
  const { language } = useContext(LanguageContext);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation controls and refs
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const controls = useAnimation();
  
  // Initialize animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Current user and timestamp - updated with the latest values
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-05-28 11:33:58";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Service data with enhanced fields
  const services = [
    {
      id: 'linkedin',
      title: language === 'en' ? 'LinkedIn Profile Management' : 'Gestion de Profil LinkedIn',
      description: language === 'en' 
        ? 'Optimize your professional presence with expert profile reviews, content strategy, and network growth tactics.'
        : 'Optimisez votre présence professionnelle avec des revues de profil expertes, une stratégie de contenu et des tactiques de croissance de réseau.',
      features: language === 'en' ? 
        ["Profile optimization", "Content strategy", "Network growth", "Engagement boost"] :
        ["Optimisation de profil", "Stratégie de contenu", "Croissance du réseau", "Boost d'engagement"],
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      stat1: { value: 3, label: language === 'en' ? 'Increased visibility' : 'Visibilité accrue', suffix: 'x' },
      stat2: { value: 70, label: language === 'en' ? 'More connections' : 'Plus de connexions', suffix: '%' },
      rating: 4.9,
      reviewCount: 240,
      cta: language === 'en' ? 'Boost Your Profile' : 'Boostez Votre Profil',
      color: "#0077B5",
      gradient: "from-[#0077B5]/90 to-[#0077B5]/70",
      textColor: "text-[#0077B5]",
      borderColor: "border-[#0077B5]",
      bgColor: "bg-[#0077B5]",
      lightBg: "bg-white dark:bg-grey-800"
    },
    {
      id: 'coaching',
      title: language === 'en' ? 'Career Coaching' : 'Coaching de Carrière',
      description: language === 'en' 
        ? 'Personalized guidance to help you navigate career transitions, salary negotiations, and professional development.'
        : 'Des conseils personnalisés pour vous aider à naviguer les transitions de carrière, les négociations salariales et le développement professionnel.',
      features: language === 'en' ? 
        ["1-on-1 sessions", "Career planning", "Salary negotiation", "Interview prep"] :
        ["Sessions individuelles", "Planification de carrière", "Négociation salariale", "Préparation d'entretien"],
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      stat1: { value: 85, label: language === 'en' ? 'Career satisfaction' : 'Satisfaction de carrière', suffix: '%' },
      stat2: { value: 25, label: language === 'en' ? 'Salary increase' : 'Augmentation de salaire', suffix: '%' },
      rating: 4.8,
      reviewCount: 189,
      cta: language === 'en' ? 'Start Coaching' : 'Commencer le Coaching',
      color: "#FF5722",
      gradient: "from-[#FF5722]/90 to-[#FF5722]/70",
      textColor: "text-[#FF5722]",
      borderColor: "border-[#FF5722]",
      bgColor: "bg-[#FF5722]",
      lightBg: "bg-white dark:bg-grey-800"
    },
    {
      id: 'training',
      title: language === 'en' ? 'Certified Training Programs' : 'Programmes de Formation Certifiés',
      description: language === 'en' 
        ? 'Industry-recognized certification courses to enhance your skills and boost your resume with in-demand qualifications.'
        : 'Des cours de certification reconnus par l\'industrie pour améliorer vos compétences et valoriser votre CV avec des qualifications recherchées.',
      features: language === 'en' ? 
        ["Industry certifications", "Expert instructors", "Flexible schedule", "Hands-on projects"] :
        ["Certifications industrie", "Instructeurs experts", "Horaires flexibles", "Projets pratiques"],
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      stat1: { value: 94, label: language === 'en' ? 'Completion rate' : 'Taux d\'achèvement', suffix: '%' },
      stat2: { value: 92, label: language === 'en' ? 'Employment rate' : 'Taux d\'emploi', suffix: '%' },
      rating: 4.7,
      reviewCount: 315,
      cta: language === 'en' ? 'Get Certified' : 'Obtenez une Certification',
      color: "#4CAF50",
      gradient: "from-[#4CAF50]/90 to-[#4CAF50]/70",
      textColor: "text-[#4CAF50]",
      borderColor: "border-[#4CAF50]",
      bgColor: "bg-[#4CAF50]",
      lightBg: "bg-white dark:bg-grey-800"
    },
    {
      id: 'school',
      title: language === 'en' ? 'School Search & Enrollment' : 'Recherche & Inscription Scolaire',
      description: language === 'en' 
        ? 'Comprehensive support for finding and applying to educational programs that align with your career goals and aspirations.'
        : 'Un soutien complet pour trouver et postuler à des programmes éducatifs qui correspondent à vos objectifs de carrière et à vos aspirations.',
      features: language === 'en' ? 
        ["School matching", "Application guidance", "Visa support", "Scholarship assistance"] :
        ["Correspondance d'écoles", "Guide de candidature", "Soutien aux visas", "Assistance aux bourses"],
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v7" />
        </svg>
      ),
      stat1: { value: 95, label: language === 'en' ? 'Acceptance rate' : 'Taux d\'acceptation', suffix: '%' },
      stat2: { value: 40, label: language === 'en' ? 'Scholarship recipients' : 'Bénéficiaires de bourses', suffix: '%' },
      rating: 4.8,
      reviewCount: 178,
      cta: language === 'en' ? 'Find Your School' : 'Trouvez Votre École',
      color: "#9C27B0",
      gradient: "from-[#9C27B0]/90 to-[#9C27B0]/70",
      textColor: "text-[#9C27B0]",
      borderColor: "border-[#9C27B0]",
      bgColor: "bg-[#9C27B0]",
      lightBg: "bg-white dark:bg-grey-800"
    }
  ];

  // Function to render star rating with animation
  const renderStarRating = (rating: number, color: string) => {
    return (
      <div className="flex items-center gap-2">
        <div className={`flex ${color}`}>
          {[...Array(5)].map((_, i) => {
            const filled = i < Math.floor(rating);
            const partialFill = i === Math.floor(rating) && rating % 1 > 0;
            const emptyFill = i > Math.floor(rating) || (i === Math.floor(rating) && rating % 1 === 0);
            
            return (
              <motion.svg 
                key={i} 
                className="w-4 h-4" 
                viewBox="0 0 20 20" 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {filled && (
                  <path 
                    fill="currentColor" 
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                  />
                )}
                {partialFill && (
                  <>
                    <defs>
                      <linearGradient id={`star-gradient-${i}`}>
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <path 
                      fill={`url(#star-gradient-${i})`} 
                      stroke="currentColor"
                      strokeWidth="0.5"
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                    />
                  </>
                )}
                {emptyFill && (
                  <path 
                    fill="none" 
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                  />
                )}
              </motion.svg>
            );
          })}
        </div>
        <motion.span 
          className="text-sm font-medium text-black dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {rating} ({services[isHovering || 0].reviewCount})
        </motion.span>
      </div>
    );
  };

  return (
    <motion.section 
      ref={containerRef}
      className="py-28 lg:py-32 relative overflow-hidden bg-gradient-to-br from-grey-50 via-grey-100 to-grey-50 dark:from-grey-900 dark:via-grey-800 dark:to-grey-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: scrollY * -0.1 }}
      >
        <motion.div 
          className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-orange-100/30 to-orange-200/30 dark:from-orange-900/10 dark:to-orange-800/10 blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-100/30 to-blue-200/30 dark:from-blue-900/10 dark:to-blue-800/10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 5 }}
        />
        
        {/* Enhanced Grid Pattern with Parallax */}
        <div className="absolute inset-0 bg-grid-pattern opacity-7 dark:opacity-7" style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}></div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header with Animations */}
        <motion.div 
          ref={ref}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="max-w-xl"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center mb-4"
              variants={itemVariants}
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
              variants={itemVariants}
            >
              <span className="relative inline-block">
                <motion.span 
                  className="relative z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.4 }}
                >
                  {language === 'en' ? 'Our Services' : 'Nos Services'}
                </motion.span>
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-4 bg-orange-200/50 dark:bg-orange-800/50 -z-10 transform -rotate-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl text-black dark:text-white max-w-3xl"
              variants={itemVariants}
            >
              {language === 'en' 
                ? 'Comprehensive career development solutions tailored to your professional journey'
                : 'Des solutions complètes de développement de carrière adaptées à votre parcours professionnel'}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mt-8 md:mt-0"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/services" 
                className="group inline-flex items-center px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                <span className="relative z-10">
                  {language === 'en' ? 'View all services' : 'Voir tous les services'}
                </span>
                <motion.svg 
                  className="ml-2 w-5 h-5 relative z-10" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
                
                {/* Button background animation */}
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 -z-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ 
                    x: 0,
                    opacity: 1
                  }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Grid View - Enhanced Services Showcase with Improved Hover Effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 xl:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div 
              key={`grid-${service.id}`}
              className="relative h-full"
              variants={itemVariants}
              whileHover={{ y: -15, transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 15 } }}
              onHoverStart={() => setIsHovering(index)}
              onHoverEnd={() => setIsHovering(null)}
            >
              {/* Main Card */}
              <motion.div 
                className="relative z-10 h-full rounded-[30px] bg-white dark:bg-grey-800 shadow-xl overflow-hidden border border-grey-100 dark:border-grey-700"
                animate={{
                  boxShadow: isHovering === index ? "0 30px 60px -15px rgba(0, 0, 0, 0.3)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Top colored strip with animation */}
                <motion.div 
                  className={`h-2 w-full ${service.bgColor}`}
                  animate={{
                    height: isHovering === index ? "0.75rem" : "0.5rem",
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
                        isHovering === index ? 
                        { y: [-2, 2, -2], transition: { repeat: Infinity, duration: 1.5 } } : 
                        { y: 0 }
                      }
                    >
                      {language === 'en' ? 'Service' : 'Service'} {(index + 1).toString().padStart(2, '0')}
                    </motion.div>
                    {renderStarRating(service.rating, service.textColor)}
                  </div>
                  
                  {/* Icon and Title */}
                  <div className="flex items-start gap-5 mb-6">
                    <motion.div 
                      className={`w-16 h-16 flex-shrink-0 rounded-2xl ${service.bgColor} p-4 text-white shadow-lg`}
                      whileHover={{ rotate: [0, -15, 15, 0], transition: { duration: 0.8 } }}
                      animate={
                        isHovering === index ? 
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
                      transition={{ duration: 2, repeat: isHovering === index ? Infinity : 0 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-black dark:{service.textColor} mb-1"
                        animate={
                          isHovering === index ? 
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
                                isHovering === index ? 
                                { 
                                  opacity: i === index % 5 ? 1 : 0.3,
                                  scale: i === index % 5 ? 1.5 : 1,
                                  y: i === index % 5 ? -1 : 0
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
                  <p className="text-black dark:text-black mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Stats Section with Enhanced Animations */}
                  <div className="mb-6 grid grid-cols-2 gap-2">
                    <motion.div 
                      className="bg-grey-50 dark:bg-grey-700/50 rounded-xl p-3 text-center"
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      animate={
                        isHovering === index ? 
                        { y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" } : 
                        { y: 0, boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <p className={`text-xl font-bold ${service.textColor}`}>
                        <AnimatedCounter value={service.stat1.value} suffix={service.stat1.suffix} />
                      </p>
                      <p className="text-xs text-black dark:text-black">
                        {service.stat1.label}
                      </p>
                    </motion.div>
                    <motion.div 
                      className="bg-grey-50 dark:bg-grey-700/50 rounded-xl p-3 text-center"
                      whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      animate={
                        isHovering === index ? 
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
                  
                  {/* Features with Enhanced Animations */}
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-black dark:text-black mb-3">
                      {language === 'en' ? 'Key Features:' : 'Caractéristiques Clés:'}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
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
                              isHovering === index ? 
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
                          <span className="text-sm text-black dark:text-black">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button with Enhanced Hover Effect */}
                  <div className="mt-auto">
                    <motion.div
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link 
                        href={`/services/${service.id}`}
                        className={`w-full block text-center py-3.5 px-6 rounded-full ${service.bgColor} text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-${service.color}/20 relative overflow-hidden group`}
                      >
                        <span className="relative z-10">{service.cta}</span>
                        
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
                            isHovering === index ? 
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
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced Decorative Elements */}
              <motion.div 
                className={`absolute -inset-0.5 rounded-[35px] bg-gradient-to-r ${service.gradient} opacity-0 -z-10 blur-sm`}
                animate={{ 
                  opacity: isHovering === index ? 0.8 : 0
                }}
                transition={{ duration: 0.4 }}
              />
              
              <motion.div 
                className="absolute -z-20 bottom-10 -right-10 w-32 h-32 rounded-full bg-grey-100 dark:bg-grey-700 opacity-0"
                animate={{ 
                  opacity: isHovering === index ? 0.4 : 0,
                  scale: isHovering === index ? [1, 1.3, 1] : 1,
                }}
                transition={{ duration: 2, repeat: isHovering === index ? Infinity : 0 }}
              />
              
              {/* Additional decorative elements */}
              <motion.div 
                className={`absolute -z-20 top-5 -left-5 w-20 h-20 rounded-full bg-${service.color}/10 opacity-0`}
                animate={{ 
                  opacity: isHovering === index ? 0.8 : 0,
                  scale: isHovering === index ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 3, repeat: isHovering === index ? Infinity : 0, delay: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile Exploration Button */}
        <motion.div 
          className="mt-20 md:mt-24 text-center sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center w-full max-w-md px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xl font-medium shadow-xl transition-all duration-300"
            >
              <span>
                {language === 'en' ? 'Explore All Services' : 'Explorer Tous Les Services'}
              </span>
              <motion.svg 
                className="ml-3 w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
        
      </div>
      
      {/* Add global styles for animations and effects */}
      <style jsx global>{`
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
        
        /* Enhanced scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(243, 244, 246, 0.5);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.5);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.7);
        }
      `}</style>
    </motion.section>
  );
};

export default ServicesPreview;
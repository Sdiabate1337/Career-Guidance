"use client";

import { useContext, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const CallToAction = () => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  type Particle = { top: string; left: string; duration: number; delay: number };
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  
  // Calculate dynamic limited time offer date (14 days from now)
  const [limitedTimeDate, setLimitedTimeDate] = useState("");
  
  // Function to format date based on language
  const formatDate = (date: Date, lang: string) => {
    if (lang === 'en') {
      // Format as YYYY-MM-DD in English
      return date.toISOString().split('T')[0];
    } else {
      // Format as DD/MM/YYYY in French
      return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    }
  };
  
  // Set the limited time offer date and generate particles
  useEffect(() => {
    setIsVisible(true);
    setIsMounted(true);
    
    // Calculate date 14 days from now
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 14);
    setLimitedTimeDate(formatDate(futureDate, language));
    
    // Generate particles only on the client side
    const newParticles = Array(8).fill(0).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5
    }));
    
    setParticles(newParticles);
  }, [language]);
  
  // Handle navigation to services page
  const handleServicesClick = () => {
    router.push('/services');
  };

  // Current user and timestamp - updated
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-05-27 18:38:31";

  return (
    <motion.section 
      className="py-28 lg:py-32 relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-orange-500 dark:from-orange-900 dark:via-orange-800 dark:to-orange-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-full h-full bg-pattern-hexagons opacity-5"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-yellow-300/30 to-yellow-400/20 dark:from-yellow-500/20 dark:to-yellow-600/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-red-400/20 to-red-500/10 dark:from-red-700/20 dark:to-red-800/10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: 5
          }}
        />
        
        {/* Animated particles - Only rendered after component mounts */}
        <AnimatePresence>
          {isMounted && (
            <div className="hidden md:block absolute inset-0">
              {particles.map((particle, i) => (
                <motion.div 
                  key={i}
                  className="absolute w-4 h-4 bg-white/20 rounded-full"
                  initial={{ 
                    opacity: 0,
                    scale: 0.5
                  }}
                  animate={{ 
                    opacity: [0.2, 0.7, 0.2],
                    scale: [0.8, 1.2, 0.8],
                    y: [0, -30, 0],
                    x: [0, i % 2 === 0 ? 20 : -20, 0]
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: particle.delay
                  }}
                  style={{
                    top: particle.top,
                    left: particle.left,
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          {/* Top Accent */}
          <motion.div 
            className="w-24 h-1 bg-white/40 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          {/* Call to Action Content */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
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
                  {language === 'en' 
                    ? 'Ready to Transform Your Career?' 
                    : 'Prêt à Transformer Votre Carrière?'}
                </motion.span>
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 h-3 bg-white/20 -z-10 transform -rotate-1"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-white/90 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {language === 'en' 
                ? 'Our expert career advisors are ready to help you take the next step in your professional journey. Schedule a consultation today and start building the future you deserve.'
                : 'Nos conseillers en carrière experts sont prêts à vous aider à franchir la prochaine étape de votre parcours professionnel. Planifiez une consultation aujourd\'hui et commencez à construire l\'avenir que vous méritez.'}
            </motion.p>
            
            {/* CTA Buttons - Primary and Secondary - FIXED HOVER EFFECT */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
           <motion.a 
                href="https://calendly.com/careerguidance212/echange-avec-career-guidance?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 rounded-full bg-white text-orange-600 text-lg font-medium shadow-xl hover:shadow-2xl hover:shadow-orange-900/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-orange-500 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  {language === 'en' 
                    ? 'Schedule a Free Consultation' 
                    : 'Planifier une Consultation Gratuite'}
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-grey-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </motion.a>
              
              {/* Services button */}
              <motion.a
                href="/services"
                className="group relative px-8 py-3 rounded-full bg-transparent text-white border-2 border-white/30 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  borderColor: "rgba(255, 255, 255, 0.6)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  {language === 'en' ? 'Explore Our Services' : 'Explorer Nos Services'}
                </span>
                <motion.svg 
                  className="ml-2 w-5 h-5 inline-block relative z-10"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Bottom Info Card with Dynamic Date */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mt-16 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div className="text-left">
                <p className="text-white/80 text-sm">
                  {language === 'en' ? 'Limited Time Offer' : 'Offre à Durée Limitée'}
                </p>
                <motion.p 
                  className="text-white font-semibold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {language === 'en' ? 'Valid until' : 'Valable jusqu\'au'} {limitedTimeDate}
                </motion.p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <div className="text-left">
                <p className="text-white/80 text-sm">
                  {language === 'en' ? 'Trusted by' : 'Fait confiance par'}
                </p>
                <motion.p 
                  className="text-white font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  >
                    1200+
                  </motion.span>{' '}
                  {language === 'en' ? 'Successful Clients' : 'Clients Satisfaits'}
                </motion.p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-white/20 hidden md:block"></div>
            
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
              <div className="text-left">
                <p className="text-white/80 text-sm">
                  {language === 'en' ? 'Secure Booking' : 'Réservation Sécurisée'}
                </p>
                <p className="text-white font-semibold">
                  100% {language === 'en' ? 'Satisfaction Guarantee' : 'Garantie Satisfaction'}
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        .bg-pattern-hexagons {
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M12 0L4 7l8 10 8-10-8-7zm0 24l4-7-8-10-8 10 8 7z'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 24px 24px;
        }
      `}</style>
    </motion.section>
  );
};

export default CallToAction;
"use client";

import { useContext, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  
  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscriptionStatus('submitting');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Here you would implement newsletter subscription logic
      console.log(`Subscribing email: ${email}`);
      
      // Show success message
      setSubscriptionStatus('success');
      
      // Reset form after delay
      setTimeout(() => {
        setEmail('');
        setSubscriptionStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscriptionStatus('error');
      
      // Reset error state after delay
      setTimeout(() => {
        setSubscriptionStatus('idle');
      }, 3000);
    }
  };

  // Track scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();
  const currentDateTime = "2025-06-04 17:06:38";
  const currentUser = "Sdiabate1337";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-br from-[#f8f9fa] to-[#edf1f7] dark:from-[#1a1c2e] dark:to-[#111827] pt-20 pb-10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-[#ffebd9]/20 dark:bg-[#ff914d]/5 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-[#e0f2fe]/30 dark:bg-[#0ea5e9]/5 blur-3xl"></div>
        <div className="absolute top-[40%] right-[10%] w-2 h-2 bg-[#ff914d]/50 rounded-full shadow-[0_0_40px_12px_rgba(255,145,77,0.3)] dark:shadow-[0_0_40px_12px_rgba(255,145,77,0.15)]"></div>
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[#0ea5e9]/50 rounded-full shadow-[0_0_40px_12px_rgba(14,165,233,0.3)] dark:shadow-[0_0_40px_12px_rgba(14,165,233,0.15)]"></div>
        <div className="absolute top-[70%] left-[50%] w-1 h-1 bg-[#22c55e]/50 rounded-full shadow-[0_0_30px_10px_rgba(34,197,94,0.3)] dark:shadow-[0_0_30px_10px_rgba(34,197,94,0.15)]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-3"></div>
      </div>
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#ff914d] dark:bg-[#ff914d]/90 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white dark:border-[#1f2937] hover:bg-[#ff8133] focus:outline-none focus:ring-2 focus:ring-[#ff914d]/50"
            onClick={scrollToTop}
            aria-label={language === 'en' ? 'Back to top' : 'Retour en haut'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Information */}
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff914d] to-[#ff8133] flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-serif font-bold text-xl">CG</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#545454] dark:text-white">
                Career Guidance
              </h2>
            </div>
            
            <p className="text-[#545454] dark:text-[#e5e7eb] mb-6 leading-relaxed max-w-md">
              {language === 'en' 
                ? 'Empowering professionals to reach their career goals through expert guidance, coaching, and personalized strategies tailored to your unique journey.'
                : 'Aidons les professionnels à atteindre leurs objectifs de carrière grâce à des conseils d\'experts, du coaching et des stratégies personnalisées adaptées à votre parcours unique.'}
            </p>
            
            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-sm font-bold text-[#545454] dark:text-white uppercase tracking-wider mb-4 flex items-center">
                <motion.span 
                  className="inline-block mr-2 w-6 h-[2px] bg-[#ff914d]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                ></motion.span>
                {language === 'en' ? 'Contact Us' : 'Contactez-nous'}
              </h3>
              
              <div className="space-y-3 text-[#545454] dark:text-[#e5e7eb]">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fff8f3] dark:bg-[#1f2937] flex items-center justify-center mr-3 group-hover:bg-[#ffebd9] dark:group-hover:bg-[#374151] transition-colors duration-300">
                    <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#545454] dark:text-white mb-1">{language === 'en' ? 'Our Office' : 'Notre Bureau'}</p>
                    <p className="text-sm">123 Career Street, Suite 101<br />Montreal, QC H3Z 2Y7</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fff8f3] dark:bg-[#1f2937] flex items-center justify-center mr-3 group-hover:bg-[#ffebd9] dark:group-hover:bg-[#374151] transition-colors duration-300">
                    <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#545454] dark:text-white mb-1">{language === 'en' ? 'Call Us' : 'Appelez-nous'}</p>
                    <p className="text-sm">+1 (514) 555-0123</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#fff8f3] dark:bg-[#1f2937] flex items-center justify-center mr-3 group-hover:bg-[#ffebd9] dark:group-hover:bg-[#374151] transition-colors duration-300">
                    <svg className="h-5 w-5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#545454] dark:text-white mb-1">{language === 'en' ? 'Email Us' : 'Écrivez-nous'}</p>
                    <p className="text-sm">info@careerguidance.com</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h3 className="text-sm font-bold text-[#545454] dark:text-white uppercase tracking-wider mb-4 flex items-center">
                <motion.span 
                  className="inline-block mr-2 w-6 h-[2px] bg-[#ff914d]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                ></motion.span>
                {language === 'en' ? 'Follow Us' : 'Suivez-nous'}
              </h3>
              
              <div className="flex space-x-3">
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn" 
                  className="w-10 h-10 rounded-full bg-white dark:bg-[#1f2937] shadow-md hover:shadow-lg flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white dark:text-[#e5e7eb] transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  className="w-10 h-10 rounded-full bg-white dark:bg-[#1f2937] shadow-md hover:shadow-lg flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white dark:text-[#e5e7eb] transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram" 
                  className="w-10 h-10 rounded-full bg-white dark:bg-[#1f2937] shadow-md hover:shadow-lg flex items-center justify-center text-[#E4405F] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white dark:text-[#e5e7eb] transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="TikTok" 
                  className="w-10 h-10 rounded-full bg-white dark:bg-[#1f2937] shadow-md hover:shadow-lg flex items-center justify-center text-[#000000] hover:bg-black hover:text-white dark:text-[#e5e7eb] transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="YouTube" 
                  className="w-10 h-10 rounded-full bg-white dark:bg-[#1f2937] shadow-md hover:shadow-lg flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white dark:text-[#e5e7eb] transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Services Links */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h3 className="text-sm font-bold text-[#545454] dark:text-white uppercase tracking-wider mb-6 flex items-center">
              <motion.span 
                className="inline-block mr-2 w-6 h-[2px] bg-[#ff914d]"
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              ></motion.span>
              {language === 'en' ? 'Services' : 'Services'}
            </h3>
            
            <ul className="space-y-4">
              {[
                { href: "/services/career-coaching", en: 'Career Coaching', fr: 'Coaching de Carrière' },
                { href: "/services/resume-optimization", en: 'Resume Optimization', fr: 'Optimisation de CV' },
                { href: "/services/linkedin-profile", en: 'LinkedIn Profile', fr: 'Profil LinkedIn' },
                { href: "/services/interview-preparation", en: 'Interview Preparation', fr: 'Préparation aux Entretiens' },
                { href: "/services/career-transition", en: 'Career Transition', fr: 'Transition de Carrière' }
              ].map((item, index) => (
                <motion.li key={item.href} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link href={item.href} className="group flex items-center">
                    <motion.span 
                      className="w-0 h-[2px] bg-[#ff914d] mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"
                      whileHover={{ width: 12, marginRight: 8 }}
                    ></motion.span>
                    <span className="text-[#545454] dark:text-[#d1d5db] group-hover:text-[#ff914d] transition-colors duration-300">
                      {language === 'en' ? item.en : item.fr}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* About & Resources Links */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h3 className="text-sm font-bold text-[#545454] dark:text-white uppercase tracking-wider mb-6 flex items-center">
              <motion.span 
                className="inline-block mr-2 w-6 h-[2px] bg-[#ff914d]"
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              ></motion.span>
              {language === 'en' ? 'About Us' : 'À propos'}
            </h3>
            
            <ul className="space-y-4 mb-8">
              {[
                { href: "/about", en: 'Our Story', fr: 'Notre Histoire' },
                { href: "/about/team", en: 'Our Team', fr: 'Notre Équipe' },
                { href: "/about/testimonials", en: 'Testimonials', fr: 'Témoignages' }
              ].map((item, index) => (
                <motion.li key={item.href} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link href={item.href} className="group flex items-center">
                    <motion.span 
                      className="w-0 h-[2px] bg-[#ff914d] mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"
                      whileHover={{ width: 12, marginRight: 8 }}
                    ></motion.span>
                    <span className="text-[#545454] dark:text-[#d1d5db] group-hover:text-[#ff914d] transition-colors duration-300">
                      {language === 'en' ? item.en : item.fr}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <h3 className="text-sm font-bold text-[#545454] dark:text-white uppercase tracking-wider mb-6 flex items-center">
              <motion.span 
                className="inline-block mr-2 w-6 h-[2px] bg-[#ff914d]"
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              ></motion.span>
              {language === 'en' ? 'Resources' : 'Ressources'}
            </h3>
            
            <ul className="space-y-4">
              {[
                { href: "/blog", en: 'Blog', fr: 'Blog' },
                { href: "/resources/guides", en: 'Career Guides', fr: 'Guides de Carrière' },
                { href: "/resources/tools", en: 'Free Tools', fr: 'Outils Gratuits' }
              ].map((item, index) => (
                <motion.li key={item.href} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link href={item.href} className="group flex items-center">
                    <motion.span 
                      className="w-0 h-[2px] bg-[#ff914d] mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"
                      whileHover={{ width: 12, marginRight: 8 }}
                    ></motion.span>
                    <span className="text-[#545454] dark:text-[#d1d5db] group-hover:text-[#ff914d] transition-colors duration-300">
                      {language === 'en' ? item.en : item.fr}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter & Legal */}
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <div className="bg-white dark:bg-[#1f2937] rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-[#545454] dark:text-white mb-4">
                {language === 'en' ? 'Stay Updated' : 'Restez Informé'}
              </h3>
              
              <p className="text-[#545454] dark:text-[#d1d5db] mb-6 text-sm leading-relaxed">
                {language === 'en' 
                  ? 'Subscribe to our newsletter for career tips, industry insights, and exclusive offers.'
                  : 'Abonnez-vous à notre newsletter pour des conseils de carrière, des informations sur l\'industrie et des offres exclusives.'}
              </p>
              
              <form onSubmit={handleSubscribe} className="mb-6">
                <div className="flex flex-col space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={subscriptionStatus === 'submitting'}
                      placeholder={language === 'en' ? 'Your email address' : 'Votre adresse e-mail'}
                      className="w-full bg-[#f3f4f6] dark:bg-[#374151] text-[#545454] dark:text-white border border-[#e5e7eb] dark:border-[#4b5563] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff914d] focus:border-transparent placeholder-[#9ca3af] disabled:opacity-60"
                    />
                    
                    {subscriptionStatus === 'submitting' && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg className="animate-spin h-5 w-5 text-[#ff914d]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={subscriptionStatus === 'submitting'}
                    className="w-full bg-[#ff914d] hover:bg-[#ff8133] text-white font-medium px-4 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:hover:bg-[#ff914d]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {subscriptionStatus === 'submitting'
                      ? (language === 'en' ? 'Subscribing...' : 'Abonnement...')
                      : (language === 'en' ? 'Subscribe' : 'S\'abonner')
                    }
                  </motion.button>
                  
                  {/* Subscription status messages */}
                  <AnimatePresence>
                    {subscriptionStatus === 'success' && (
                      <motion.div 
                        className="bg-green-100 border border-green-200 text-green-800 text-sm rounded-lg p-3 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {language === 'en' ? 'Successfully subscribed!' : 'Abonnement réussi !'}
                      </motion.div>
                    )}
                    
                    {subscriptionStatus === 'error' && (
                      <motion.div 
                        className="bg-red-100 border border-red-200 text-red-800 text-sm rounded-lg p-3 flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <svg className="w-5 h-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {language === 'en' ? 'Something went wrong. Please try again.' : 'Une erreur est survenue. Veuillez réessayer.'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
              
              <div className="text-xs text-[#6b7280] dark:text-[#9ca3af]">
                {language === 'en' 
                  ? 'By subscribing you agree to our Privacy Policy and consent to receive updates from our company.'
                  : 'En vous abonnant, vous acceptez notre Politique de Confidentialité et consentez à recevoir des mises à jour de notre entreprise.'}
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-[#545454] dark:text-white uppercase tracking-wider mb-6 flex items-center">
                <motion.span 
                  className="inline-block mr-2 w-6 h-[2px] bg-[#ff914d]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 24 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                ></motion.span>
                {language === 'en' ? 'Legal' : 'Mentions Légales'}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {[
                  { href: "/privacy-policy", en: 'Privacy Policy', fr: 'Politique de Confidentialité' },
                  { href: "/terms", en: 'Terms of Service', fr: 'Conditions d\'Utilisation' },
                  { href: "/accessibility", en: 'Accessibility', fr: 'Accessibilité' },
                  { href: "/cookies", en: 'Cookie Policy', fr: 'Politique de Cookies' }
                ].map((item, index) => (
                  <motion.div 
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className="text-sm text-[#545454] dark:text-[#9ca3af] hover:text-[#ff914d] dark:hover:text-[#ff914d] transition-colors duration-300"
                    >
                      {language === 'en' ? item.en : item.fr}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Divider */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-[#e5e7eb] dark:via-[#374151] to-transparent my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
          <p className="text-[#6b7280] dark:text-[#9ca3af] text-sm text-center md:text-left">
            © {currentYear} <span className="font-medium text-[#545454] dark:text-white">Career Guidance</span>. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
          
          <div className="flex items-center text-sm text-[#6b7280] dark:text-[#9ca3af]">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
              </svg>
              {language === 'en' ? 'Secure & Trusted' : 'Sécurisé et Fiable'}
            </span>
            <span className="mx-3">•</span>
            <span>
              {language === 'en' ? 'Made with ❤️ in Montreal' : 'Créé avec ❤️ à Montréal'}
            </span>
          </div>
        </div>
      </div>
      
      {/* Add global style for animations and grid patterns */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-spin, .animate-pulse, .animate-bounce {
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
"use client";

import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { LanguageContext } from '../contexts/LanguageContext';
import Image from "next/image";
import { motion } from 'framer-motion';
const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const router = useRouter();
  const pathname = usePathname();
  
  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Add a slight body scroll lock when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  // Toggle language between English and French with animation
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };
  
  // Enhanced scroll tracking with threshold
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set active navigation item based on current path
  useEffect(() => {
    if (pathname) {
      setActiveItem(pathname);
    }
  }, [pathname]);

// Function to scroll to services section with exact positioning
const scrollToServicesSection = () => {
  // Find the services section using ID (most precise method), then fallbacks
  const servicesSection = document.getElementById('services-preview') || 
                         document.querySelector('.services-preview-section') || 
                         document.querySelector('section:nth-of-type(3)');
  
  if (servicesSection) {
    // Get header height to offset scroll
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80; // Default to 80px if not found
    
    // Calculate the exact position to scroll to (element position - header height)
    const elementPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight - 20; // Additional 20px offset for better visibility
    
    // Perform the scroll
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    setActiveItem('/services');
  } else {
    // Fallback if section not found
    console.warn('Services section not found');
  }
};

  // Handle service link click with smooth scroll
  const handleServiceClick = (e: React.MouseEvent) => {
    // Check if we're on the homepage
    if (pathname === '/') {
      e.preventDefault();
      scrollToServicesSection();
    } else {
      // If not on homepage, navigate to homepage first, then scroll to services
      router.push('/?scrollToServices=true');
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };
  
  // Effect to handle scrolling to services when landing on homepage with query param
  useEffect(() => {
    // Check if URL has the scrollToServices parameter
    if (typeof window !== 'undefined' && window.location.search.includes('scrollToServices=true')) {
      // Small timeout to ensure DOM is fully loaded
      const timer = setTimeout(() => {
        scrollToServicesSection();
        
        // Clean up URL without reloading page
        window.history.replaceState({}, document.title, '/');
      }, 800); // Increased timeout to ensure page is fully loaded
      
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Navigation items with icons
  const navItems = [
    { name: language === 'en' ? 'Home' : 'Accueil', href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: language === 'en' ? 'Services' : 'Services', href: '/services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', isService: true },
    { name: language === 'en' ? 'About' : 'À propos', href: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: language === 'en' ? 'Contact' : 'Contact', href: '/contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];
  
  // Updated timestamp and user - LATEST VALUES
  const currentDateTime = "2025-06-04 19:34:55";
  const currentUser = "Sdiabate1337";
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        hasScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-[#f0f0f0]' 
          : 'bg-white/85 backdrop-blur-md'
      }`}
      data-last-updated={`Last updated: ${currentDateTime} by ${currentUser}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {hasScrolled && (
          <div className="absolute inset-0 bg-grid-pattern opacity-3 transition-opacity duration-700"></div>
        )}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
        {/* Enhanced Logo with Animation */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group" onClick={() => setActiveItem('/')}> 
              {/* Use next/image for your logo */}
              <Image
                src="/logo.png"
                alt="Career Guidance Logo"
                width={320}
                height={32}
                className="object-contain relative z-10"
                priority
              />
          </Link>
        </div>
          
          {/* Enhanced Desktop Navigation with Active States */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={(e) => item.isService ? handleServiceClick(e) : setActiveItem(item.href)}
                className={`relative text-[#545454] hover:text-[#ff914d] transition-colors py-2 group font-medium flex items-center ${
                  activeItem === item.href ? 'text-[#ff914d]' : ''
                }`}
              >
                <span className="hidden lg:block">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 mr-1.5 transition-opacity duration-300 ${
                      activeItem === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </span>
                <span>{item.name}</span>
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#ff914d] transition-all duration-300 ease-out ${
                    activeItem === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>
          
          {/* Enhanced Language Switcher and CTA Button */}
          <div className="hidden md:flex items-center space-x-5">
            <button 
              onClick={toggleLanguage} 
              className="group px-4 py-1.5 rounded-lg text-[#545454] bg-white/90 backdrop-blur-sm hover:bg-[#f8f8f8] border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all shadow-sm hover:shadow font-medium relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {language === 'en' ? 'FR' : 'EN'}
              </span>
              <span className="absolute inset-0 bg-[#f0f0f0] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </button>
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
          </div>
          
          {/* Enhanced Mobile Menu Button with Animation */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleLanguage} 
              className="group mr-4 px-3 py-1.5 rounded-lg text-sm text-[#545454] bg-white/90 backdrop-blur-sm border border-[#545454]/10 transition-all shadow-sm hover:border-[#ff914d]/30 font-medium relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {language === 'en' ? 'FR' : 'EN'}
              </span>
              <span className="absolute inset-0 bg-[#f0f0f0] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </button>
            <button 
              onClick={toggleMenu} 
              className={`p-2 rounded-lg focus:outline-none bg-white/90 backdrop-blur-sm border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 relative ${isMenuOpen ? 'text-[#ff914d]' : 'text-[#545454] hover:text-[#ff914d]'}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 rounded-full bg-current transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Mobile Menu with Animations and Better UX */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-[#545454]/5 shadow-2xl animate-fade-in-down max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-6 pb-8 space-y-4">
            {navItems.map((item, index) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center space-x-3 group ${
                  activeItem === item.href 
                    ? 'bg-[#fff8f3] text-[#ff914d] shadow-sm' 
                    : 'text-[#545454] hover:bg-[#f8f8f8] hover:text-[#ff914d]'
                }`}
                onClick={(e) => {
                  if (item.isService) {
                    handleServiceClick(e);
                  } else {
                    setIsMenuOpen(false);
                    setActiveItem(item.href);
                    document.body.style.overflow = 'auto';
                  }
                }}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: `translateY(${isMenuOpen ? '0' : '10px'})`,
                  opacity: isMenuOpen ? 1 : 0,
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  activeItem === item.href ? 'bg-[#ff914d]/10' : 'bg-[#f8f8f8] group-hover:bg-[#ff914d]/5'
                } transition-colors duration-300`}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <span>{item.name}</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${
                    activeItem === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  } transition-opacity`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
            <div className="pt-3 px-4">
              <div className="h-px w-full bg-gradient-to-r from-[#f0f0f0] via-[#ff914d]/10 to-[#f0f0f0] my-2"></div>
            </div>
            <div className="px-4">
              <a
                href="https://calendly.com/careerguidance212/echange-avec-career-guidance?month=2025-06"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full px-4 py-3.5 rounded-xl text-base font-medium text-white bg-gradient-to-r from-[#ff914d] to-[#ff8133] hover:from-[#ff8133] hover:to-[#ff914d] shadow-md transition-all text-center flex items-center justify-center relative overflow-hidden"
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
                style={{ 
                  animationDelay: `${navItems.length * 50}ms`,
                  transform: `translateY(${isMenuOpen ? '0' : '10px'})`,
                  opacity: isMenuOpen ? 1 : 0,
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  transitionDelay: `${navItems.length * 50}ms`
                }}
              >
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {language === 'en' ? 'Book Appointment' : 'Prendre Rendez-vous'}
                </span>
                <div className="absolute -inset-full w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-15 group-hover:animate-shine"></div>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
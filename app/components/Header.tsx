"use client";

import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Toggle language between English and French
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };
  
  // Track scroll position to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { name: language === 'en' ? 'Home' : 'Accueil', href: '/' },
    { name: language === 'en' ? 'Services' : 'Services', href: '/services' },
    { name: language === 'en' ? 'About' : 'À propos', href: '/about' },
    { name: language === 'en' ? 'Blog' : 'Blog', href: '/blog' },
    { name: language === 'en' ? 'Contact' : 'Contact', href: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-grey-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-grey-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {hasScrolled && (
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        )}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mr-3 shadow-md transition-all duration-300 group-hover:shadow-orange-800/30">
                <span className="text-white font-serif font-bold text-lg">CG</span>
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-grey-300">Career Guidance</h1>
                <p className="text-xs text-grey-400">
                  <span className="relative">
                    {language === 'en' ? 'Guiding you, our duty' : 'Vous guider, notre devoir'}
                    <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-orange-500 transition-all duration-300"></span>
                  </span>
                </p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="relative text-grey-300 hover:text-orange-400 transition-colors py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
          
          {/* Language Switcher and CTA Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleLanguage} 
              className="px-4 py-1.5 rounded-lg text-grey-300 bg-grey-800/80 backdrop-blur-sm hover:bg-grey-800 border border-grey-700 hover:border-orange-700 transition-all shadow-sm hover:shadow"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <Link 
              href="/appointment" 
              className="group px-6 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:shadow-lg hover:shadow-orange-900/30 transition-all relative overflow-hidden"
            >
              <span className="relative z-10">{language === 'en' ? 'Book Appointment' : 'Prendre Rendez-vous'}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleLanguage} 
              className="mr-4 px-3 py-1.5 rounded-lg text-sm text-grey-300 bg-grey-800/80 backdrop-blur-sm border border-grey-700 transition-all shadow-sm"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg text-grey-300 hover:text-orange-400 focus:outline-none bg-grey-800/80 backdrop-blur-sm border border-grey-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-grey-900/95 backdrop-blur-md border-t border-grey-800 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="block px-4 py-3 rounded-xl text-base font-medium text-grey-300 hover:bg-grey-800/50 hover:text-orange-400 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link 
                href="/appointment" 
                className="block w-full px-4 py-3 rounded-xl text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'en' ? 'Book Appointment' : 'Prendre Rendez-vous'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("en"); // "en" for English, "fr" for French

  // Handle scroll event for sticky header with shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-grey-800 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
              <span className="text-white font-serif text-xl font-bold">CG</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold">Career Guidance</h1>
              <p className="text-xs italic text-grey-600 dark:text-grey-400">
                {language === "en" ? "Your guidance, our duty" : "Vous guider, notre devoir"}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link href="#services" className="hover:text-orange-500 transition-colors">
                {language === "en" ? "Services" : "Services"}
              </Link>
              <Link href="#about" className="hover:text-orange-500 transition-colors">
                {language === "en" ? "About" : "À propos"}
              </Link>
              <Link href="#testimonials" className="hover:text-orange-500 transition-colors">
                {language === "en" ? "Testimonials" : "Témoignages"}
              </Link>
              <Link href="#contact" className="hover:text-orange-500 transition-colors">
                {language === "en" ? "Contact" : "Contact"}
              </Link>
            </nav>

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-sm border border-grey-200 dark:border-grey-700 rounded-full px-3 py-1 hover:bg-grey-100 dark:hover:bg-grey-700 transition-colors"
            >
              <span className={`mr-1 ${language === "en" ? "font-bold" : ""}`}>EN</span>
              <span className="mx-1 text-grey-400">|</span>
              <span className={`ml-1 ${language === "fr" ? "font-bold" : ""}`}>FR</span>
            </button>

            {/* CTA Button */}
            <Link 
              href="/book-appointment"
              className="bg-orange-500 text-white rounded-full px-5 py-2 font-medium hover:bg-orange-600 transition-colors"
            >
              {language === "en" ? "Book Appointment" : "Prendre Rendez-vous"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Language Switcher - Mobile */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-sm border border-grey-200 dark:border-grey-700 rounded-full px-2 py-1"
            >
              <span className={language === "en" ? "font-bold" : ""}>EN</span>
              <span className="mx-1 text-grey-400">|</span>
              <span className={language === "fr" ? "font-bold" : ""}>FR</span>
            </button>
            
            {/* Hamburger */}
            <button
              className="outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#services" 
              className="hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {language === "en" ? "Services" : "Services"}
            </Link>
            <Link 
              href="#about" 
              className="hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {language === "en" ? "About" : "À propos"}
            </Link>
            <Link 
              href="#testimonials" 
              className="hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {language === "en" ? "Testimonials" : "Témoignages"}
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {language === "en" ? "Contact" : "Contact"}
            </Link>
            
            {/* CTA Button - Mobile */}
            <Link 
              href="/book-appointment"
              className="bg-orange-500 text-white rounded-full px-5 py-2 text-center font-medium hover:bg-orange-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {language === "en" ? "Book Appointment" : "Prendre Rendez-vous"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 
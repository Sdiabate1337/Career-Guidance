"use client";

import { useState, useEffect, useContext, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { language } = useContext(LanguageContext);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // Current timestamp and user
  const currentDateTime = "2025-06-04 20:36:50";
  const currentUser = "Sdiabate1337";
  
  // Intersection observers for animations
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const { ref: mapRef, inView: mapInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  // Subject options
  const subjectOptions = language === 'en' 
    ? [
        { value: '', label: 'Select a topic' },
        { value: 'linkedin', label: 'LinkedIn Profile Management' },
        { value: 'coaching', label: 'Career Coaching' },
        { value: 'training', label: 'Certified Training Programs' },
        { value: 'school', label: 'School Search & Enrollment' },
        { value: 'other', label: 'Other Inquiry' },
      ]
    : [
        { value: '', label: 'Sélectionner un sujet' },
        { value: 'linkedin', label: 'Gestion de Profil LinkedIn' },
        { value: 'coaching', label: 'Coaching de Carrière' },
        { value: 'training', label: 'Programmes de Formation Certifiés' },
        { value: 'school', label: 'Recherche & Inscription Scolaire' },
        { value: 'other', label: 'Autre Demande' },
      ];
  
  // Office locations
  const offices = [
    {
      city: language === 'en' ? 'Paris Headquarters' : 'Siège de Paris',
      address: '15 Rue de Rivoli, 75004 Paris, France',
      phone: '+33 1 42 68 53 09',
      email: 'paris@careerguidance.com',
      hours: language === 'en' ? 'Mon-Fri: 9AM-6PM' : 'Lun-Ven: 9h-18h',
      coordinates: { lat: 48.856614, lng: 2.352222 },
      primary: true
    },
    {
      city: language === 'en' ? 'London Office' : 'Bureau de Londres',
      address: '120 Oxford Street, London W1D 1LT, UK',
      phone: '+44 20 7123 4567',
      email: 'london@careerguidance.com',
      hours: language === 'en' ? 'Mon-Fri: 9AM-5:30PM' : 'Lun-Ven: 9h-17h30',
      coordinates: { lat: 51.5074, lng: -0.1278 },
      primary: false
    },
    {
      city: language === 'en' ? 'New York Office' : 'Bureau de New York',
      address: '350 Fifth Avenue, New York, NY 10118, USA',
      phone: '+1 212-736-3100',
      email: 'nyc@careerguidance.com',
      hours: language === 'en' ? 'Mon-Fri: 8:30AM-5PM' : 'Lun-Ven: 8h30-17h',
      coordinates: { lat: 40.7128, lng: -74.006 },
      primary: false
    }
  ];
  
  // Social media links
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/career-guidance', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ) },
    { name: 'Twitter', url: 'https://twitter.com/careerguidance', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ) },
    { name: 'Facebook', url: 'https://facebook.com/careerguidance', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ) },
    { name: 'Instagram', url: 'https://instagram.com/careerguidance', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ) }
  ];
  
  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      setFormError(true);
      setIsLoading(false);
      return;
    }
    
    // Simulate API call with timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormSubmitted(true);
      setFormError(false);
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch (error) {
      setFormError(true);
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fcfcfc]">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff8f3] to-white opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fff8f3] via-[#fff4eb] to-transparent opacity-60"></div>
        <div className="absolute -top-[20%] -left-[5%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#ff914d]/5 via-[#ff914d]/10 to-[#ff914d]/5 blur-3xl animate-blob"></div>
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#ff914d]/5 via-[#ff914d]/8 to-[#ff914d]/3 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-60"></div>
      </div>
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block">
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
                {language === 'en' ? 'Get In Touch' : 'Contactez-Nous'}
              </motion.span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-[#545454]">
                {language === 'en' ? 'Contact ' : 'Contact '}
              </span>
              <span className="text-[#ff914d] relative">
                {language === 'en' ? 'Us' : 'Nous'}
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
                  <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#ff914d]/50" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-[#545454]/80 max-w-3xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {language === 'en' 
                ? 'Have questions or ready to start your career journey? We\'re here to help. Reach out to our team of experts today.'
                : 'Vous avez des questions ou êtes prêt à commencer votre parcours professionnel? Nous sommes là pour vous aider. Contactez notre équipe d\'experts dès aujourd\'hui.'}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#contact-form" 
                className="group px-8 py-3.5 bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#ff914d]/20 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {language === 'en' ? 'Send a Message' : 'Envoyer un Message'}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff8133] to-[#ff914d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </a>
              
              <a 
                href="#office-locations" 
                className="group px-8 py-3.5 bg-white text-[#545454] rounded-xl text-lg font-medium transition-all duration-300 border border-[#545454]/10 hover:border-[#ff914d]/30 hover:shadow-lg hover:text-[#ff914d]"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {language === 'en' ? 'Office Locations' : 'Nos Bureaux'}
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form and Info Section */}
      <section id="contact-form" ref={formRef} className="py-20 relative z-10 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: formInView ? 1 : 0, x: formInView ? 0 : -30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-[#545454]/10 overflow-hidden h-full">
                <div className="h-2 bg-gradient-to-r from-[#ff914d] to-[#ff8133] w-full"></div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-[#545454] mb-6">
                    {language === 'en' ? 'Contact Information' : 'Informations de Contact'}
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Main Office */}
                    <div>
                      <div className="flex items-start mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3 mt-1">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#545454]">{language === 'en' ? 'Main Office' : 'Bureau Principal'}</h3>
                          <p className="text-[#545454]/70 mt-1">15 Rue de Rivoli, 75004 Paris, France</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <div className="flex items-start mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3 mt-1">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#545454]">{language === 'en' ? 'Phone' : 'Téléphone'}</h3>
                          <p className="text-[#545454]/70 mt-1">+33 1 42 68 53 09</p>
                          <p className="text-[#545454]/70 mt-1">{language === 'en' ? 'Mon-Fri: 9AM-6PM' : 'Lun-Ven: 9h-18h'}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div>
                      <div className="flex items-start mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3 mt-1">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#545454]">Email</h3>
                          <p className="text-[#545454]/70 mt-1">
                            <a href="mailto:info@careerguidance.com" className="hover:text-[#ff914d] transition-colors">
                              info@careerguidance.com
                            </a>
                          </p>
                          <p className="text-[#545454]/70 mt-1">
                            <a href="mailto:support@careerguidance.com" className="hover:text-[#ff914d] transition-colors">
                              support@careerguidance.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Social Media */}
                    <div>
                      <h3 className="font-bold text-[#545454] mb-3">{language === 'en' ? 'Follow Us' : 'Suivez-Nous'}</h3>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, idx) => (
                          <a 
                            key={idx}
                            href={social.url}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] hover:bg-[#ff914d] hover:text-white transition-all duration-300"
                            aria-label={social.name}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: formInView ? 1 : 0, x: formInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-[#545454]/10 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#ff914d] to-[#ff8133] w-full"></div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-[#545454] mb-6">
                    {language === 'en' ? 'Send Us a Message' : 'Envoyez-Nous un Message'}
                  </h2>
                  
                  {formSubmitted ? (
                    <motion.div 
                      className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-500 mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        {language === 'en' ? 'Message Sent Successfully!' : 'Message Envoyé avec Succès!'}
                      </h3>
                      <p className="text-green-700 mb-4">
                        {language === 'en' 
                          ? 'Thank you for reaching out. Our team will get back to you shortly.'
                          : 'Merci de nous avoir contacté. Notre équipe vous répondra dans les plus brefs délais.'}
                      </p>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        {language === 'en' ? 'Send Another Message' : 'Envoyer un Autre Message'}
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {formError && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-red-800">
                                {language === 'en' ? 'Please complete all required fields' : 'Veuillez remplir tous les champs obligatoires'}
                              </h3>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[#545454] mb-1">
                            {language === 'en' ? 'Name' : 'Nom'} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-[#545454]/20 focus:border-[#ff914d]/50 focus:ring focus:ring-[#ff914d]/20 transition-all duration-300 bg-white/50"
                            placeholder={language === 'en' ? 'Your full name' : 'Votre nom complet'}
                          />
                        </div>
                        
                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[#545454] mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-[#545454]/20 focus:border-[#ff914d]/50 focus:ring focus:ring-[#ff914d]/20 transition-all duration-300 bg-white/50"
                            placeholder={language === 'en' ? 'Your email address' : 'Votre adresse email'}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Phone Field */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-[#545454] mb-1">
                            {language === 'en' ? 'Phone (Optional)' : 'Téléphone (Optionnel)'}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-[#545454]/20 focus:border-[#ff914d]/50 focus:ring focus:ring-[#ff914d]/20 transition-all duration-300 bg-white/50"
                            placeholder={language === 'en' ? 'Your phone number' : 'Votre numéro de téléphone'}
                          />
                        </div>
                        
                        {/* Subject Field */}
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-[#545454] mb-1">
                            {language === 'en' ? 'Subject' : 'Sujet'} <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-[#545454]/20 focus:border-[#ff914d]/50 focus:ring focus:ring-[#ff914d]/20 transition-all duration-300 bg-white/50"
                          >
                            {subjectOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#545454] mb-1">
                          {language === 'en' ? 'Message' : 'Message'} <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-[#545454]/20 focus:border-[#ff914d]/50 focus:ring focus:ring-[#ff914d]/20 transition-all duration-300 bg-white/50"
                          placeholder={language === 'en' ? 'Your message...' : 'Votre message...'}
                        ></textarea>
                      </div>
                      
                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`group px-8 py-3.5 bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#ff914d]/20 relative overflow-hidden ${
                            isLoading ? 'opacity-80 cursor-not-allowed' : ''
                          }`}
                        >
                          <span className="relative z-10 flex items-center">
                            {isLoading ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {language === 'en' ? 'Sending...' : 'Envoi en cours...'}
                              </>
                            ) : (
                              <>
                                {language === 'en' ? 'Send Message' : 'Envoyer le Message'}
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </>
                            )}
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-[#ff8133] to-[#ff914d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map and Office Locations Section */}
      <section id="office-locations" ref={mapRef} className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mapInView ? 1 : 0, y: mapInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: mapInView ? 1 : 0, scale: mapInView ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
                {language === 'en' ? 'Our Locations' : 'Nos Emplacements'}
              </motion.span>
            </div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mapInView ? 1 : 0, y: mapInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {language === 'en' ? 'Visit Our Offices' : 'Visitez Nos Bureaux'}
              <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-[#545454]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mapInView ? 1 : 0, y: mapInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {language === 'en' 
                ? 'With offices in key global locations, we\'re ready to assist you wherever you are.'
                : 'Avec des bureaux dans des emplacements clés à travers le monde, nous sommes prêts à vous aider où que vous soyez.'}
            </motion.p>
          </motion.div>
          
          {/* Map */}
          <motion.div 
            className="mb-16 rounded-2xl overflow-hidden shadow-xl border border-[#545454]/10 h-96 bg-white relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: mapInView ? 1 : 0, y: mapInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Placeholder for the Google Map (would be replaced with actual Google Maps component) */}
            <div className="absolute inset-0 bg-[url('/images/contact/world-map.jpg')] bg-cover bg-center opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/50"></div>
            
            {/* Location Pins */}
            <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-4 h-4 bg-[#ff914d] rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-[#ff914d] rounded-full relative z-10"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white py-1 px-3 rounded-full shadow-md text-xs font-medium whitespace-nowrap">
                  Paris HQ
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/3 left-1/5 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-3 h-3 bg-[#ff914d] rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-3 h-3 bg-[#ff914d] rounded-full relative z-10"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white py-1 px-3 rounded-full shadow-md text-xs font-medium whitespace-nowrap">
                  London
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-3 h-3 bg-[#ff914d] rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-3 h-3 bg-[#ff914d] rounded-full relative z-10"></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white py-1 px-3 rounded-full shadow-md text-xs font-medium whitespace-nowrap">
                  New York
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-sm text-[#545454] font-medium">
                {language === 'en' 
                  ? 'We have offices in major cities across Europe and North America to serve you better.'
                  : 'Nous disposons de bureaux dans les principales villes d\'Europe et d\'Amérique du Nord pour mieux vous servir.'}
              </p>
            </div>
          </motion.div>
          
          {/* Office Locations Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <motion.div 
                key={idx}
                className={`bg-white rounded-xl shadow-lg border ${
                  office.primary ? 'border-[#ff914d]/30' : 'border-[#545454]/10'
                } overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: mapInView ? 1 : 0, y: mapInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.3 + (idx * 0.1) }}
              >
                <div className={`h-2 bg-gradient-to-r ${
                  office.primary ? 'from-[#ff914d] to-[#ff8133]' : 'from-[#545454]/20 to-[#545454]/30'
                } w-full`}></div>
                
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className={`w-10 h-10 rounded-lg ${
                      office.primary ? 'bg-[#ff914d]/10 text-[#ff914d]' : 'bg-[#545454]/10 text-[#545454]'
                    } flex items-center justify-center mr-3 mt-1`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`font-bold ${office.primary ? 'text-[#ff914d]' : 'text-[#545454]'}`}>
                        {office.city}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-[#545454]/80 text-sm">
                      {office.address}
                    </p>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#545454]/70 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-[#545454]/80 text-sm">{office.phone}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#545454]/70 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-[#545454]/80 text-sm">
                        <a href={`mailto:${office.email}`} className="hover:text-[#ff914d] transition-colors">
                          {office.email}
                        </a>
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-[#545454]/70 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-[#545454]/80 text-sm">{office.hours}</p>
                    </div>
                  </div>
                  
                  <a
                    href={`https://www.google.com/maps?q=${office.coordinates.lat},${office.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 block w-full py-2.5 rounded-lg font-medium text-center transition-all duration-300 text-sm ${
                      office.primary 
                        ? 'bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white hover:shadow-lg hover:shadow-[#ff914d]/20' 
                        : 'bg-[#545454]/10 text-[#545454] hover:bg-[#545454]/20'
                    }`}
                  >
                    {language === 'en' ? 'Get Directions' : 'Obtenir l\'Itinéraire'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 relative z-10 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-[#ff914d] to-[#ff8133] rounded-3xl overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <motion.h3 
                  className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {language === 'en' ? 'Ready To Get Started?' : 'Prêt à Commencer?'}
                </motion.h3>
                
                <motion.p 
                  className="text-white/90 text-lg md:text-xl mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {language === 'en' 
                    ? 'Book a free consultation with our experts today or explore our services to see how we can help advance your career.'
                    : 'Réservez une consultation gratuite avec nos experts aujourd\'hui ou explorez nos services pour voir comment nous pouvons vous aider à faire avancer votre carrière.'}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link 
                    href="/appointment" 
                    className="group px-6 py-3 bg-white text-[#ff914d] rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-black/5 flex items-center"
                  >
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {language === 'en' ? 'Book Free Consultation' : 'Réserver Consultation Gratuite'}
                    </span>
                  </Link>
                  
                  <Link 
                    href="/services" 
                    className="group px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10 flex items-center"
                  >
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      {language === 'en' ? 'Explore Our Services' : 'Explorer Nos Services'}
                    </span>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                className="md:w-1/3 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping-slow opacity-60"></div>
                  <div className="absolute inset-2 bg-white/30 rounded-full animate-ping-slow opacity-60 animation-delay-500"></div>
                  <div className="absolute inset-4 bg-white/40 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Last Updated Info */}
      <div className="text-center text-sm text-[#545454]/70 pb-10">
        <span className="inline-flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {language === 'en' ? 'Last updated:' : 'Dernière mise à jour:'} 
        </span>
        <span className="font-medium text-[#545454]">{currentDateTime}</span>
        <span className="text-[#ff914d] ml-1">({currentUser})</span>
      </div>
    </div>
  );
}
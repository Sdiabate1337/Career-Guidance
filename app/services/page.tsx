"use client";

import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '../contexts/LanguageContext';
import FAQ from '../components/FAQ';

// Define service interface to match your data structure
interface ServiceStat {
  value: number;
  label: string;
  suffix: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  stat1: ServiceStat;
  stat2: ServiceStat;
  rating: number;
  reviewCount: number;
  cta: string;
  color: string;
  gradient: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  lightBg: string;
}

export default function ServicesPage() {
  const { language } = useContext(LanguageContext);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  
  // Current timestamp and user - using the exact values provided
  const currentDateTime = "2025-06-04 20:02:56";
  const currentUser = "Sdiabate1337";

  // Set isClient to true when component mounts (to avoid hydration mismatch)
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Intersection observers for animations
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  // Service data with enhanced fields
  const services: Service[] = [
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
      color: "#ff914d",
      gradient: "from-[#ff914d] to-[#ff8133]",
      textColor: "text-[#ff914d]",
      borderColor: "border-[#ff914d]",
      bgColor: "bg-[#ff914d]",
      lightBg: "bg-white"
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
      color: "#ff914d",
      gradient: "from-[#ff914d] to-[#ff8133]",
      textColor: "text-[#ff914d]",
      borderColor: "border-[#ff914d]",
      bgColor: "bg-[#ff914d]",
      lightBg: "bg-white"
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
      color: "#ff914d",
      gradient: "from-[#ff914d] to-[#ff8133]",
      textColor: "text-[#ff914d]",
      borderColor: "border-[#ff914d]",
      bgColor: "bg-[#ff914d]",
      lightBg: "bg-white"
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
      color: "#ff914d",
      gradient: "from-[#ff914d] to-[#ff8133]",
      textColor: "text-[#ff914d]",
      borderColor: "border-[#ff914d]",
      bgColor: "bg-[#ff914d]",
      lightBg: "bg-white"
    }
  ];
  
  // Set initial active service on mobile
  useEffect(() => {
    if (isClient && window.innerWidth < 768) {
      setActiveService(services[0].id);
    }
  }, [isClient, services]);
  
  // Render stars for ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star} 
            className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-[#ff914d]' : star <= rating ? 'text-[#ff914d]' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-medium text-gray-600">
          {rating.toFixed(1)} ({renderReviewCount(rating)})
        </span>
      </div>
    );
  };
  
  // Format review count with commas
  const renderReviewCount = (reviewCount: number) => {
    return reviewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
      <section ref={headerRef} className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
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
                {language === 'en' ? 'Career Development' : 'Développement de Carrière'}
              </motion.span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-[#545454]">
                {language === 'en' ? 'Professional ' : 'Services '}
              </span>
              <span className="text-[#ff914d] relative">
                {language === 'en' ? 'Services' : 'Professionnels'}
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
                  <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#ff914d]/50" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-[#545454]/80 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {language === 'en' 
                ? 'Expert guidance and personalized solutions to elevate your career. Choose from our comprehensive suite of professional services.'
                : 'Conseils d\'experts et solutions personnalisées pour faire progresser votre carrière. Choisissez parmi notre gamme complète de services professionnels.'}
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="#services" 
                className="group px-8 py-3.5 bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#ff914d]/20 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  {language === 'en' ? 'Explore Our Services' : 'Explorer Nos Services'}
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff8133] to-[#ff914d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </Link>
              
              <Link 
                href="/appointment" 
                className="group px-8 py-3.5 bg-white text-[#545454] rounded-xl text-lg font-medium transition-all duration-300 border border-[#545454]/10 hover:border-[#ff914d]/30 hover:shadow-lg hover:text-[#ff914d]"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {language === 'en' ? 'Book a Consultation' : 'Réserver une Consultation'}
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: servicesInView ? 1 : 0, scale: servicesInView ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
                {language === 'en' ? 'What We Offer' : 'Ce Que Nous Offrons'}
              </motion.span>
            </div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {language === 'en' ? 'Expert Services for Your Success' : 'Services Experts pour Votre Succès'}
              <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-[#545454]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {language === 'en' 
                ? 'Tailored solutions to help you achieve your professional goals and stand out in today\'s competitive landscape'
                : 'Des solutions sur mesure pour vous aider à atteindre vos objectifs professionnels et à vous démarquer dans le paysage concurrentiel d\'aujourd\'hui'}
            </motion.p>
          </motion.div>
          
          {/* Desktop Services Cards */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`h-2 bg-gradient-to-r ${service.gradient} w-full absolute top-0 left-0 z-10`}></div>
                  
                  <div className="flex flex-col h-full">
                    <div className="p-8">
                      <div className="flex items-start mb-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-r ${service.gradient} mr-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-8 h-8">
                            {service.icon}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-[#545454] group-hover:text-[#ff914d] transition-colors duration-300">{service.title}</h3>
                          {renderStars(service.rating)}
                        </div>
                      </div>
                      
                      <p className="text-[#545454]/80 mb-6">{service.description}</p>
                      
                      {/* Key Features */}
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start">
                            <svg className="w-5 h-5 text-[#ff914d] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#545454]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Stats Row */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#ff914d]">{service.stat1.value}{service.stat1.suffix}</div>
                          <div className="text-sm text-[#545454]/70">{service.stat1.label}</div>
                        </div>
                        <div className="h-12 w-px bg-[#545454]/10"></div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#ff914d]">{service.stat2.value}{service.stat2.suffix}</div>
                          <div className="text-sm text-[#545454]/70">{service.stat2.label}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto p-6 pt-0">
                      <Link 
                        href={`/services/${service.id}`}
                        className={`group block w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center relative overflow-hidden bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg hover:shadow-[#ff914d]/20`}
                      >
                        <span className="relative z-10 flex items-center">
                          {service.cta}
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile Accordion Services */}
          <div className="md:hidden">
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className={`border border-[#545454]/10 rounded-xl overflow-hidden transition-all duration-300 ${
                    activeService === service.id ? 'shadow-lg border-[#ff914d]/30' : 'shadow-sm'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: servicesInView ? 1 : 0, y: servicesInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <button
                    className="w-full p-5 flex items-center justify-between bg-white text-left"
                    onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white bg-gradient-to-r ${service.gradient} mr-3 shadow-md`}>
                        <div className="w-5 h-5">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className={`font-bold ${activeService === service.id ? 'text-[#ff914d]' : 'text-[#545454]'}`}>
                          {service.title}
                        </h3>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg 
                                key={star} 
                                className={`w-3 h-3 ${star <= Math.floor(service.rating) ? 'text-[#ff914d]' : 'text-gray-300'}`}
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-1 text-xs text-[#545454]/70">{service.rating}</span>
                        </div>
                      </div>
                    </div>
                    <svg 
                      className={`w-5 h-5 text-[#545454] transform transition-transform duration-300 ${
                        activeService === service.id ? 'rotate-180 text-[#ff914d]' : ''
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 bg-white">
                          <div className="h-px w-full bg-[#545454]/10 mb-5"></div>
                          <p className="text-[#545454]/80 text-sm mb-4">{service.description}</p>
                          
                          {/* Key Features */}
                          <ul className="space-y-2 mb-5">
                            {service.features.map((feature, featureIdx) => (
                              <li key={featureIdx} className="flex items-start text-sm">
                                <svg className="w-4 h-4 text-[#ff914d] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-[#545454]">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {/* Stats Row */}
                          <div className="flex items-center justify-between mb-5 p-3 bg-[#f8f8f8] rounded-lg">
                            <div className="text-center">
                              <div className="text-xl font-bold text-[#ff914d]">{service.stat1.value}{service.stat1.suffix}</div>
                              <div className="text-xs text-[#545454]/70">{service.stat1.label}</div>
                            </div>
                            <div className="h-10 w-px bg-[#545454]/10"></div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-[#ff914d]">{service.stat2.value}{service.stat2.suffix}</div>
                              <div className="text-xs text-[#545454]/70">{service.stat2.label}</div>
                            </div>
                          </div>
                          
                          <Link 
                            href={`/services/${service.id}`}
                            className={`group block w-full py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center relative overflow-hidden bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg`}
                          >
                            <span className="relative z-10 flex items-center">
                              {service.cta}
                              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
      
      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-[#ff914d] to-[#ff8133] rounded-3xl overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 30 }}
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
                  animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {language === 'en' ? 'Ready to Advance Your Career?' : 'Prêt à Faire Avancer Votre Carrière?'}
                </motion.h3>
                
                <motion.p 
                  className="text-white/90 text-lg md:text-xl mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {language === 'en' 
                    ? 'Schedule a free 30-minute consultation with one of our career experts to discuss your goals and identify the best service for your needs.'
                    : 'Planifiez une consultation gratuite de 30 minutes avec l\'un de nos experts en carrière pour discuter de vos objectifs et identifier le meilleur service pour vos besoins.'}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: ctaInView ? 1 : 0, y: ctaInView ? 0 : 20 }}
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
                    href="/contact" 
                    className="group px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10 flex items-center"
                  >
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
                    </span>
                  </Link>
                </motion.div>
              </div>
              
              <motion.div 
                className="md:w-1/3 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: ctaInView ? 1 : 0, scale: ctaInView ? 1 : 0.8 }}
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
      
      {/* FAQ Teaser Section */}
      <FAQ />
    </div>
  );
}
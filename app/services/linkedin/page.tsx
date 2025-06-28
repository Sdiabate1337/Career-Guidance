"use client";

import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from '../../contexts/LanguageContext';

const LinkedInServicePage = () => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('populaire');
  const [scrollY, setScrollY] = useState(0);
  
  // Current user and timestamp
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-06-04 18:58:15";
  
  // Animate elements on load
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Refs for scroll animations
  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const { ref: pricingRef, inView: pricingInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: processRef, inView: processInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Key features
  const keyFeatures = [
    {
      title: language === 'en' ? 'LinkedIn Account Creation' : 'Création de Compte LinkedIn',
      description: language === 'en' ? 'We create professional LinkedIn profiles that stand out and showcase your unique skills.' : 'Nous créons des profils LinkedIn professionnels qui se démarquent et mettent en valeur vos compétences uniques.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Profile Optimization' : 'Optimisation du profil',
      description: language === 'en' ? 'We enhance your profile with industry-specific keywords, achievements, and compelling descriptions.' : 'Nous améliorons votre profil avec des mots-clés spécifiques à votre secteur, vos réalisations et des descriptions convaincantes.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Content Strategy & Professional Writing' : 'Stratégie de contenu et Rédaction professionnelle',
      description: language === 'en' ? 'We develop a customized content strategy and craft professional posts that position you as an industry expert.' : 'Nous développons une stratégie de contenu personnalisée et rédigeons des publications professionnelles qui vous positionnent comme un expert de votre secteur.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Personal Branding Strategy' : 'Stratégie de Personal Branding',
      description: language === 'en' ? 'We build a cohesive personal brand that aligns with your career goals and industry positioning.' : 'Nous construisons une marque personnelle cohérente qui s\'aligne sur vos objectifs de carrière et votre positionnement dans l\'industrie.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Network Growth' : 'Croissance du réseau',
      description: language === 'en' ? 'We expand your professional network with quality connections relevant to your industry and goals.' : 'Nous élargissons votre réseau professionnel avec des connexions de qualité pertinentes pour votre secteur et vos objectifs.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Relationship Management & Professional Discussions' : 'Gestion des relations et discussions professionnelles',
      description: language === 'en' ? 'We manage your professional interactions and engagement to build meaningful connections.' : 'Nous gérons vos interactions professionnelles et votre engagement pour établir des connexions significatives.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];
  
  // Pricing plans
  const pricingPlans = [
    {
      id: 'populaire',
      name: language === 'en' ? 'POPULAR' : 'POPULAIRE',
      duration: language === 'en' ? '3 MONTHS' : '03 MOIS',
      priceAfrica: language === 'en' ? '€89' : '89 Euros TTC',
      priceEurope: language === 'en' ? '€119' : '119 Euros TTC',
      features: [
        language === 'en' ? 'Professional message management' : 'Gestion professionnelle de la messagerie',
        language === 'en' ? 'Professional biography and academic background writing' : 'Rédaction professionnelle de la Biographie et Parcours Académique',
        language === 'en' ? '6 written publications/3 months' : '06 Publications rédigées/3 Mois',
        language === 'en' ? '1 certifying training' : '01 formation certifiante',
        language === 'en' ? '1,500 quality connections' : '1500 relations de qualités'
      ],
      installments: 2,
      recommended: false,
      color: 'from-[#ff914d]/80 to-[#ff8133]/80'
    },
    {
      id: 'recommande',
      name: language === 'en' ? 'RECOMMENDED' : 'RECOMMANDE',
      duration: language === 'en' ? '6 MONTHS' : '06 MOIS',
      priceAfrica: language === 'en' ? '€179' : '179 Euros',
      priceEurope: language === 'en' ? '€209' : '209 Euros TTC',
      features: [
        language === 'en' ? 'Professional message management' : 'Gestion professionnelle de la messagerie',
        language === 'en' ? 'Professional biography and academic background writing' : 'Rédaction professionnelle de la Biographie et Parcours Académique',
        language === 'en' ? '12 written publications/6 months' : '12 Publications rédigées/06 Mois',
        language === 'en' ? '2 certifying trainings' : '02 formations certifiantes',
        language === 'en' ? '3,500+ quality connections' : '+ 3500 relations de qualités'
      ],
      installments: 5,
      recommended: true,
      color: 'from-[#ff914d] to-[#ff8133]'
    },
    {
      id: 'premium',
      name: language === 'en' ? 'PREMIUM' : 'PREMIUM',
      duration: language === 'en' ? '12 MONTHS' : '12 MOIS',
      priceAfrica: language === 'en' ? '€299' : '299 Euros TTC',
      priceEurope: language === 'en' ? '€399' : '399 Euros TTC',
      features: [
        language === 'en' ? 'Professional message management' : 'Gestion professionnelle de la messagerie',
        language === 'en' ? 'Direct contact with best profiles' : 'Contact direct avec des best profiles',
        language === 'en' ? 'Connection with a mentor' : 'Mise en relation avec un mentor',
        language === 'en' ? '35 written publications/1 year' : '35 Publications rédigées/1 An',
        language === 'en' ? '3 certifying trainings' : '03 formations certifiantes',
        language === 'en' ? '8,000+ quality connections' : '+ 8000 relations de qualités'
      ],
      installments: 8,
      recommended: false,
      color: 'from-[#ff914d]/90 to-[#ff8133]/90'
    }
  ];
  
  // Process steps
  const processSteps = [
    {
      title: language === 'en' ? 'Choose your Plan' : 'Choisissez votre Formule',
      description: language === 'en' ? 'Select the LinkedIn management plan that best suits your needs and career goals.' : 'Sélectionnez la formule de gestion LinkedIn qui correspond le mieux à vos besoins et objectifs de carrière.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Make a Deposit' : 'Versement d\'un acompte',
      description: language === 'en' ? 'Secure your chosen plan with an initial deposit to begin the onboarding process.' : 'Sécurisez votre formule choisie avec un acompte initial pour commencer le processus d\'intégration.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Receive Electronic Receipt' : 'Réception de votre reçu électronique',
      description: language === 'en' ? 'Get your signed and stamped electronic receipt confirming your enrollment.' : 'Obtenez votre reçu électronique signé et cacheté confirmant votre inscription.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Contract Reception & Signing' : 'Réception de votre contrat',
      description: language === 'en' ? 'Receive your contract, sign it, and return it to our email address within 24 hours.' : 'Recevez votre contrat, signez-le et renvoyez-le à notre adresse Mail en 24h.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Account Takeover' : 'Prise en Main du compte',
      description: language === 'en' ? 'Our team begins professionally managing your LinkedIn account according to the selected plan.' : 'Notre équipe commence à gérer professionnellement votre compte LinkedIn selon la formule sélectionnée.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Client Account Access Validation' : 'Validation d\'accès au compte par le Client',
      description: language === 'en' ? 'Validate and approve the account access for our team to manage your LinkedIn presence.' : 'Validez et approuvez l\'accès au compte pour que notre équipe puisse gérer votre présence LinkedIn.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: language === 'en' 
        ? "I'm extremely satisfied with the management of my LinkedIn account by Career Guidance. They were able to showcase my skills and background in a clear and impactful way. I highly recommend their services to anyone looking to optimize their presence on LinkedIn!"
        : "Je suis extrêmement satisfait de la gestion de mon compte LinkedIn par Career Guidance. Ils ont su mettre en valeur mes compétences et mon parcours de manière claire et impactante. Je recommande vivement leurs services à tous ceux qui souhaitent optimiser leur présence sur LinkedIn !",
      author: "NEYA ABIBATA",
      image: "/testimonials/neya-abibata.jpg"
    },
    {
      quote: language === 'en' 
        ? "Thanks to Career Guidance, my LinkedIn profile has been optimized in a professional and targeted way. I quickly gained visibility and received several interesting opportunities. Their guidance has really boosted my career!"
        : "Grâce à Career Guidance, mon profil LinkedIn a été optimisé de façon professionnelle et ciblée. J'ai rapidement gagné en visibilité et reçu plusieurs opportunités intéressantes. Leur accompagnement a vraiment boosté ma carrière !",
      author: "SEKONGO ABDOUL",
      image: "/testimonials/sekongo-abdoul.jpg"
    }
  ];

  return (
    <div className="relative bg-[#fcfcfc] overflow-hidden min-h-screen">
      {/* Enhanced Background Gradient Effects - Matching HeroSection */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff8f3] to-white opacity-80"></div>
        
        {/* Main Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fff8f3] via-[#fff4eb] to-transparent opacity-60"></div>
        
        {/* Enhanced Colored Blobs */}
        <div className="absolute -top-[20%] -left-[5%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#ff914d]/5 via-[#ff914d]/10 to-[#ff914d]/5 blur-3xl animate-blob"></div>
        <div className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#ff914d]/5 via-[#ff914d]/8 to-[#ff914d]/3 blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-[10%] right-[20%] w-[40%] h-[30%] rounded-full bg-gradient-to-br from-[#545454]/3 via-[#545454]/5 to-[#545454]/2 blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-[10%] left-[25%] w-[50%] h-[40%] rounded-full bg-gradient-to-br from-[#545454]/3 via-[#545454]/5 to-transparent blur-3xl animate-blob animation-delay-3000"></div>
        
        {/* Accent Highlights */}
        <div className="absolute top-[5%] left-[40%] w-[20%] h-[15%] rounded-full bg-gradient-to-r from-[#ff914d]/10 to-[#ff8133]/5 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[30%] w-[15%] h-[10%] rounded-full bg-gradient-to-r from-[#ff914d]/8 to-transparent blur-3xl"></div>
        
        {/* Enhanced Grid Pattern with Gradient Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-white opacity-40"></div>
        
        {/* Subtle Texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmOGY4ZjgiPjwvcmVjdD4KPC9zdmc+')] opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16 items-center">
          {/* Left Content Column - Enhanced Transitions */}
          <div className={`lg:col-span-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Back to Services Link */}
            <div className="inline-flex items-center mb-7 px-4 py-1.5 bg-gradient-to-r from-[#ff914d]/10 to-[#ff914d]/5 text-[#ff914d] rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
              <Link 
                href="/services" 
                className="text-[#ff914d] hover:text-[#ff8133] transition-colors"
              >
                {language === 'en' ? 'Back to All Services' : 'Retour à Tous les Services'}
              </Link>
            </div>
            
            {/* Enhanced Main Headline with Modern Typography */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#545454] mb-8 leading-tight tracking-tight">
              <span className="text-[#545454]">
                {language === 'en' 
                  ? 'LinkedIn Account' 
                  : 'Gestion de compte'}
              </span>
              <br />
              <span className="relative inline-block text-[#ff914d] mt-2 animate-pulse-slow">
                {language === 'en' ? 'Management' : 'LinkedIn'}
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
                  <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#ff914d]/50" />
                </svg>
              </span>
            </h1>
            
            {/* Refined Subheading with Better Typography */}
            <p className="text-xl text-[#545454]/80 mb-12 max-w-xl md:max-w-2xl leading-relaxed">
              {language === 'en' 
                ? "Welcome to our LinkedIn Account Management platform. Optimize your professional presence with expert profile reviews, content strategy, and network growth tactics. Partnering with CAREER GUIDANCE maximizes your opportunities and personal branding, helping you appear among LinkedIn's recommended profiles."
                : "Bienvenue sur notre plateforme de Gestion de compte LinkedIn. Optimisez votre présence professionnelle avec des revues de profil expertes, une stratégie de contenu et des tactiques de croissance de réseau. Collaborer avec CAREER GUIDANCE, c’est maximiser vos chances en matière d’opportunités et de Personal Branding, ce qui vous permettra d’apparaître parmi les profils recommandés par LINKEDIN."}
            </p>
            
            {/* Modern CTA Buttons with Enhanced Interactions */}
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 mb-16">
              <Link 
                href="#pricing" 
                className="group px-8 py-4 bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white text-lg font-medium rounded-xl hover:shadow-[#ff914d]/30 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden relative"
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  {language === 'en' ? 'See Our Plans' : 'Voir Nos Formules'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff8133] to-[#ff914d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </Link>
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-white backdrop-blur-sm text-[#ff914d] text-lg font-medium rounded-xl border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 ease-out relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#ff914d]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </Link>
            </div>
            
            {/* LinkedIn Stats with Modern Design */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-[#545454] group-hover:text-[#ff914d] transition-colors">8,000+</div>
                  <p className="text-sm text-[#545454]/70 mt-1">{language === 'en' ? 'Quality Connections' : 'Relations de qualité'}</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-[#545454] group-hover:text-[#ff914d] transition-colors">35+</div>
                  <p className="text-sm text-[#545454]/70 mt-1">{language === 'en' ? 'Professional Posts' : 'Publications professionnelles'}</p>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group col-span-2 md:col-span-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mb-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-[#545454] group-hover:text-[#ff914d] transition-colors">3</div>
                  <p className="text-sm text-[#545454]/70 mt-1">{language === 'en' ? 'Certifying Trainings' : 'Formations certifiantes'}</p>
                </div>
              </div>
            </div>
          </div>
                
                {/* Right Illustration Column - Enhanced with Modern Design Elements */}
                <div className={`lg:col-span-6 relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="relative">
                    {/* LinkedIn Branding Visual */}
                    <div className="relative aspect-square max-w-xl mx-auto">
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-lg rounded-[30px] shadow-xl border border-[#545454]/10 overflow-hidden">
                        {/* LinkedIn Header */}
                        <div className="h-32 bg-gradient-to-r from-[#0077b5] to-[#0077b5]/80 relative">
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
                          
                          <div className="absolute bottom-0 translate-y-1/2 left-8">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-[#0077b5]">
                              <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Profile Content */}
                        <div className="pt-16 px-8">
                          <h3 className="text-xl font-bold text-[#1e293b]">Career Guidance</h3>
                          <p className="text-sm text-[#64748b]">{language === 'en' ? 'Professional LinkedIn Management Services' : 'Services Professionnels de Gestion LinkedIn'}</p>
                          
                          <div className="mt-4 flex items-center space-x-3">
                            <div className="px-3 py-1 rounded-full bg-[#0077b5]/10 text-[#0077b5] text-xs font-medium">
                              {language === 'en' ? 'Personal Branding' : 'Personal Branding'}
                            </div>
                            <div className="px-3 py-1 rounded-full bg-[#0077b5]/10 text-[#0077b5] text-xs font-medium">
                              {language === 'en' ? 'Content Strategy' : 'Stratégie de contenu'}
                            </div>
                            <div className="px-3 py-1 rounded-full bg-[#0077b5]/10 text-[#0077b5] text-xs font-medium">
                              {language === 'en' ? 'Network Growth' : 'Croissance du réseau'}
                            </div>
                          </div>
                          
                          <div className="mt-6 space-y-3">
                            <div className="p-4 bg-[#f8fafc] rounded-lg">
                              <div className="flex justify-between items-start">
                                <div className="flex space-x-3">
                                  <div className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white text-xs font-bold">CG</div>
                                  <div>
                                    <p className="text-sm font-medium text-[#1e293b]">Career Guidance</p>
                                    <p className="text-xs text-[#64748b]">2h</p>
                                  </div>
                                </div>
                                <div>
                                  <svg className="w-5 h-5 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                  </svg>
                                </div>
                              </div>
                              
                              <div className="mt-3">
                                <p className="text-sm text-[#1e293b]">
                                  {language === 'en' 
                                    ? 'Optimizing your LinkedIn profile is the first step toward professional visibility and success...' 
                                    : 'Optimiser votre profil LinkedIn est la première étape vers une visibilité et une réussite professionnelle...'}
                                </p>
                              </div>
                              
                              <div className="mt-3 flex items-center space-x-4">
                                <div className="flex items-center space-x-1 text-[#64748b]">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                  </svg>
                                  <span className="text-xs">184</span>
                                </div>
                                <div className="flex items-center space-x-1 text-[#64748b]">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                  </svg>
                                  <span className="text-xs">32</span>
                                </div>
                                <div className="flex items-center space-x-1 text-[#64748b]">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                  </svg>
                                  <span className="text-xs">76</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-4 bg-[#f8fafc] rounded-lg opacity-60">
                              <div className="flex justify-between items-start">
                                <div className="flex space-x-3">
                                  <div className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white text-xs font-bold">CG</div>
                                  <div>
                                    <p className="text-sm font-medium text-[#1e293b]">Career Guidance</p>
                                    <p className="text-xs text-[#64748b]">1d</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="mt-3">
                                <p className="text-sm text-[#1e293b]">
                                  {language === 'en' 
                                    ? 'Building a quality network is essential for professional growth...' 
                                    : 'Construire un réseau de qualité est essentiel pour la croissance professionnelle...'}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Network Stats */}
                          <div className="mt-6 grid grid-cols-3 gap-4">
                            <div className="text-center">
                              <p className="text-sm font-bold text-[#1e293b]">8,572</p>
                              <p className="text-xs text-[#64748b]">{language === 'en' ? 'Connections' : 'Relations'}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-bold text-[#1e293b]">245</p>
                              <p className="text-xs text-[#64748b]">{language === 'en' ? 'Posts' : 'Publications'}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-bold text-[#1e293b]">52K</p>
                              <p className="text-xs text-[#64748b]">{language === 'en' ? 'Views' : 'Vues'}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating UI Elements */}
                    <div className="absolute -top-6 -right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-[#545454]/10 w-56 transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-1 group">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center text-white">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-[#545454] group-hover:text-[#0077b5] transition-colors duration-300">LinkedIn SSI</p>
                          <p className="text-xs text-[#64748b]">{language === 'en' ? 'Social Selling Index' : 'Indice de vente sociale'}</p>
                        </div>
                      </div>
                      <div className="h-2 bg-[#545454]/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#0077b5] to-[#00a0dc] rounded-full w-[85%] animate-pulse-slow"></div>
                      </div>
                      <p className="text-sm text-[#545454] mt-2 text-right font-medium">85/100</p>
                    </div>
                    
                    <div className="absolute -bottom-6 -left-6 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-[#545454]/10 w-56 transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-1 group">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-sm font-medium text-[#545454] group-hover:text-[#ff914d] transition-colors duration-300">{language === 'en' ? 'Profile Strength' : 'Force du profil'}</p>
                      </div>
                      <div className="h-2 bg-[#545454]/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#ff914d] to-[#ff8133] rounded-full w-[95%] animate-pulse-slow"></div>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <p className="text-xs text-[#64748b]">{language === 'en' ? 'All-Star' : 'All-Star'}</p>
                        <p className="text-sm text-[#545454] font-medium">95%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-20 relative z-10" ref={featuresRef}>
        <div className="absolute inset-0 bg-[#fcfcfc] opacity-80"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
                {language === 'en' ? 'Service Highlights' : 'CARACTERISTIQUES CLES'}
              </motion.span>
            </div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {language === 'en' ? 'What We Offer' : 'Ce que nous proposons'}
              <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
            </motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
                transition={{ duration: 0.5, delay: 0.1 + (idx * 0.1) }}
              >
                <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#545454] mb-3 group-hover:text-[#ff914d] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#545454]/80 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 relative z-10 overflow-hidden" id="pricing" ref={pricingRef}>
        <div className="absolute inset-0 bg-[#fcfcfc] opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fff8f3] via-[#fff4eb] to-transparent opacity-60"></div>
        <div className="absolute top-0 -left-40 w-80 h-80 bg-[#ff914d]/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#ff914d]/10 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
                {language === 'en' ? 'Pricing Plans' : 'NOS PACKS'}
              </motion.span>
            </div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {language === 'en' ? 'Choose Your Plan' : 'Choisissez votre formule'}
              <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-[#545454]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {language === 'en' 
                ? 'Select the perfect LinkedIn management plan to accelerate your professional growth'
                : 'Sélectionnez le forfait de gestion LinkedIn parfait pour accélérer votre croissance professionnelle'}
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative ${
                  plan.recommended ? 'lg:scale-110 z-10' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: pricingInView ? 1 : 0, y: pricingInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              >
                {plan.recommended && (
                  <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white text-xs font-bold py-1 text-center">
                    {language === 'en' ? 'RECOMMENDED' : 'RECOMMANDE'}
                  </div>
                )}
                
                <div className={`h-8 bg-gradient-to-r ${plan.color} ${plan.recommended ? 'mt-5' : 'mt-0'}`}></div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#545454] text-center">{plan.name}</h3>
                  <p className="text-sm text-[#545454]/70 text-center mb-4">{plan.duration}</p>
                  
                  <div className="mb-6 text-center">
                                   <div className="mb-2">
                  <span className="text-sm text-[#545454]/70">{language === 'en' ? 'Africa:' : 'Afrique:'}</span>
                  <div className="text-2xl font-bold text-[#545454]">{plan.priceAfrica}</div>
                </div>
                
                <div>
                  <span className="text-sm text-[#545454]/70">{language === 'en' ? 'Europe/America:' : 'Europe/AM:'}</span>
                  <div className="text-2xl font-bold text-[#545454]">{plan.priceEurope}</div>
                </div>
              </div>
              
              <div className="h-px bg-[#545454]/10 my-6"></div>
              
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start">
                    <svg className="w-5 h-5 text-[#ff914d] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[#545454]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mb-6">
                <div className="bg-[#f8fafc] rounded-lg p-3 text-center">
                  <p className="text-sm text-[#545454]">{language === 'en' ? 'Payment in' : 'TRANCHES'}</p>
                  <p className="text-2xl font-bold text-[#ff914d]">{plan.installments}</p>
                  <p className="text-xs text-[#545454]/70">{language === 'en' ? 'installments' : 'versements'}</p>
                </div>
              </div>
              
              <button 
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center ${
                  plan.recommended
                    ? 'bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white hover:shadow-lg hover:shadow-[#ff914d]/20'
                    : 'bg-white text-[#545454] border border-[#545454]/10 hover:border-[#ff914d]/30 hover:text-[#ff914d]'
                }`}
              >
                <span>{language === 'en' ? 'Select Plan' : 'Choisir ce plan'}</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  </section>
  
  {/* Process Section */}
  <section className="py-20 relative z-10" ref={processRef}>
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
    <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block">
          <motion.span 
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
            {language === 'en' ? 'How It Works' : 'Comment ça marche'}
          </motion.span>
        </div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {language === 'en' ? 'The Process' : 'Quelles sont les étapes ?'}
          <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
        </motion.h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((step, idx) => (
          <motion.div
            key={idx}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 30 }}
            transition={{ duration: 0.5, delay: 0.1 + (idx * 0.1) }}
          >
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white flex items-center justify-center font-bold text-lg shadow-md">
              {idx + 1}
            </div>
            
            <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mb-4">
              {step.icon}
            </div>
            
            <h3 className="text-lg font-bold text-[#545454] mb-3">{step.title}</h3>
            <p className="text-[#545454]/80 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  {/* Testimonials Section */}
  <section className="py-20 relative z-10 overflow-hidden" ref={testimonialsRef}>
    <div className="absolute inset-0 bg-[#fcfcfc] opacity-80"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fff8f3] via-[#fff4eb] to-transparent opacity-60"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block">
          <motion.span 
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
            {language === 'en' ? 'Client Feedback' : 'Témoignages Clients'}
          </motion.span>
        </div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {language === 'en' ? 'What Our Clients Say' : 'Ce que disent nos clients'}
          <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
        </motion.h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div 
            key={idx}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-[#545454]/10 hover:border-[#ff914d]/30 relative overflow-hidden"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: testimonialsInView ? 1 : 0, x: testimonialsInView ? 0 : (idx % 2 === 0 ? -30 : 30) }}
            transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff914d] to-[#ff8133]"></div>
            <div className="absolute top-8 right-8 text-[#ff914d]/20">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <p className="text-lg text-[#545454] mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ff914d]/20 rounded-full overflow-hidden flex items-center justify-center text-[#ff914d] mr-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#545454]">
                    {testimonial.author}
                  </h4>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-[#ff914d]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-[#545454]/70 ml-2">LinkedIn Service</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  {/* CTA Section */}
  <section className="py-20 relative z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#ff914d] to-[#ff8133]">
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
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {language === 'en' 
            ? 'Ready to Elevate Your LinkedIn Presence?' 
            : 'Prêt à élever votre présence LinkedIn?'}
        </motion.h2>
        
        <motion.p 
          className="text-xl mb-10 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {language === 'en' 
            ? 'Take the first step towards transforming your professional image and expanding your network with our expert LinkedIn management services.'
            : 'Faites le premier pas vers la transformation de votre image professionnelle et l\'expansion de votre réseau avec nos services experts de gestion LinkedIn.'}
        </motion.p>
        
        <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 justify-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-white/50 to-white/80 rounded-xl blur-sm"></div>
            <Link 
              href="#pricing"
              className="group relative px-8 py-4 bg-white text-[#ff914d] rounded-xl text-lg font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden block"
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                {language === 'en' ? 'Choose a Plan' : 'Choisir une formule'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white to-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              href="/contact"
              className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl text-lg font-medium hover:bg-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden block"
            >
              <span className="relative z-10 flex items-center justify-center">
                {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-10 flex justify-center items-center gap-2 text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-sm">
            {language === 'en' 
              ? 'Your information is secure and will never be shared with third parties'
              : 'Vos informations sont sécurisées et ne seront jamais partagées avec des tiers'}
          </span>
        </motion.div>
      </motion.div>
    </div>
  </section>
</div>
); };

export default LinkedInServicePage;
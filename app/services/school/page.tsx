"use client";

import { useContext, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from '../../contexts/LanguageContext';

const SchoolSearchPage = () => {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [activeLevel, setActiveLevel] = useState(0);
  const [activeTab, setActiveTab] = useState('licence');
  const [showAllFields, setShowAllFields] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Current user and timestamp - Updated as requested
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-06-04 18:18:33";
  
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
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const { ref: processRef, inView: processInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const { ref: fieldsRef, inView: fieldsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Animated counter component for statistics
  const Counter = useCallback(({
    value,
    duration = 2,
    suffix = "",
  }: {
    value: number | string;
    duration?: number;
    suffix?: string;
  }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let start = 0;
      const end = parseInt(value as string, 10);
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 1000 / 60);
      
      return () => {
        clearInterval(timer);
      };
    }, [value, duration]);
    
    return <span className="font-bold">{count}{suffix}</span>;
  }, []);
  
  // Key outcomes - Updated as per new content
  const keyOutcomes = useMemo(() => [
    {
      title: language === 'en' ? 'Acceptance Rate' : 'Taux d\'acceptation',
      value: '95%',
      description: language === 'en' ? 'in Accredited & Recognized Schools' : 'dans les Écoles Accréditées et Reconnues',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Scholarship Recipients' : 'Bénéficiaires de bourses',
      value: '40%',
      description: language === 'en' ? 'of clients receive Scholarships' : 'des clients reçoivent des Bourses',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Visa Support' : 'Assistance Visa',
      value: '100%',
      description: language === 'en' ? 'Assistance with visa procedures' : 'Assistance dans la procédure de VISA',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Integration Success' : 'Intégration',
      value: '75%',
      description: language === 'en' ? 'of our candidates have better Integration' : 'de nos candidats ont une meilleure Intégration',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Residence Card' : 'Carte de Séjour',
      value: '100%',
      description: language === 'en' ? 'Complete Residence Card application support' : 'Assistance à la demande de Carte de Séjour de A à Z',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      )
    }
  ], [language]);

  // Process steps - Updated as per new content
  const processSteps = useMemo(() => [
    {
      title: language === 'en' ? 'Choose your Program' : 'Choisissez votre Filière',
      description: language === 'en' ? 'Select the educational program that matches your career goals and interests.' : 'Sélectionnez le programme éducatif qui correspond à vos objectifs de carrière et vos intérêts.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Meet with the Studies Department' : 'Rendez-vous avec le Responsable du département ETUDES',
      description: language === 'en' ? 'Consult with our education experts to finalize your choice and discuss the application strategy.' : 'Consultez nos experts en éducation pour finaliser votre choix et discuter de la stratégie de candidature.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Prepare your Academic Documents' : 'Préparation de vos documents scolaires',
      description: language === 'en' ? 'Gather and prepare all necessary diplomas and academic records for your application.' : 'Rassemblez et préparez tous les diplômes et documents académiques nécessaires pour votre candidature.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Pay the Pre-enrollment Fee' : 'Versement du montant de préinscription',
      description: language === 'en' ? 'Complete the payment for pre-enrollment at your chosen institution.' : 'Complétez le paiement pour la préinscription dans l\'école choisie.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Receive Pre-enrollment Certificate' : 'Réception de votre Attestation de préinscription',
      description: language === 'en' ? 'Get your official pre-enrollment certificate (document to be attached to visa application).' : 'Obtenez votre attestation officielle de préinscription (Document à joindre à la demande de visa).',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Join your University' : 'Rejoignez votre université',
      description: language === 'en' ? 'Arrive at your destination and begin your educational journey.' : 'Arrivez à votre destination et commencez votre parcours éducatif.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: language === 'en' ? 'Join Student Association' : 'Affiliation à l\'association estudiantine',
      description: language === 'en' ? 'Connect with the student association of your community for better integration.' : 'Connectez-vous avec l\'association estudiantine de votre communauté pour une meilleure intégration.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ], [language]);

  // Study fields - Based on the provided table
  const studyFields = useMemo(() => {
    return {
      'finance': [
        'BANQUE ET ASSURANCE',
        'BANQUE FINANCE',
        'BANQUE FINANCE ET ASSURANCE',
        'ACTUARIAT ET GESTION DES RISQUES',
        'SCIENCES ECONOMIQUES',
        'ECONOMIE ET MANAGEMENT DIGITAUX',
        'ECONOMIE ET GESTION',
        'COMPTABILITE CONTROLE ET AUDIT',
        'ETUDES ECONOMIQUES ET STATISTIQUES',
        'FINANCE AUDIT CONTROLE DE GESTION',
        'INGENIERIE FINANCIERE',
        'EXPERT FINANCIER'
      ],
      'law': [
        'DROIT DES AFFAIRES',
        'DROIT DES AFFAIRES OHADA',
        'SCIENCES POLITIQUES',
        'RELATIONS INTERNATIONALES',
        'FISCALITE D\'ENTREPRISE'
      ],
      'management': [
        'ADMINISTRATION DES AFFAIRES',
        'MANAGEMENT DE PROJET ET ENTREPREUNARIAT',
        'RESSOURCES HUMAINES ET COMMUNICATION',
        'MARKETING ET COMMUNICATION DIGITALE',
        'MEDIAS COMMUNICATION ET JOURNALISME'
      ],
      'engineering': [
        'GENIE ELECTRIQUE',
        'GENIE MECANIQUE',
        'GENIE PHYSIQUE',
        'INGENIERIE ET PHYSIQUE DE MATERIAUX AVANCEE',
        'MECANIQUE AVANCEE',
        'MECANIQUE ROBOTIQUE ET MATERIAUX INNOVANTS'
      ],
      'health': [
        'INFIRMIER EN ANESTHESIE ET REANIMATION',
        'INFIRMIER EN SOINS D\'URGENCES ET SOINS INTENSIFS',
        'ORTHOPHONIE',
        'PSYCHOLOGIE',
        'PSYCHOMOTRICITE',
        'MEDECIN'
      ],
      'it': [
        'INGENIERIE INFORMATIQUE',
        'INGENIERIE INTELLIGENTE DES SYSTEMES INFORMATIQUES',
        'INGENIERIE INTELLIGENTE DES SYSTEMES RESEAUX ET TELECOMMUNICATIONS',
        'INTELLIGENCE ARTIFICIELLE',
        'GENIE INFORMATIQUE',
        'GENIE LOGICIEL',
        'CYBERSECURITE',
        'DATA SCIENCE'
      ],
      'customs': [
        'TRANSPORTS ET LOGISTIQUES',
        'COMMERCE INTERNATIONAL',
        'TECHNIQUES DOUANIERES ET LOGISTIQUE'
      ],
      'math': [
        'MATHEMATIQUE-INFORMATIQUE-PHYSIQUE',
        'MATHEMATIQUES ET SCIENCES DE DONNEES'
      ],
      'other': [
        'GEO RESSOURCES ET GEO MINES',
        'MINES & CARRIERES',
        'TRADING ET FINANCE DES MARCHES',
        'TOURISME ET HOTELLERIE',
        'ARCHITECTURE'
      ]
    };
  }, []);
  
  // Education cycles
  const educationCycles = useMemo(() => [
    {
      id: 'licence',
      title: 'LICENCE',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 'master',
      title: 'MASTER',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'ingenieurie',
      title: 'INGENIEURIE',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ], []);
  
  // Testimonials - Updated with the new ones provided
  const testimonials = useMemo(() => [
    {
      quote: language === 'en' 
        ? "The enrollment process for top schools can be stressful, but Career Guidance made it easy for me. Their team advised me on choosing institutions, helped me prepare my application, and guided me through the various application steps. Thanks to them, I joined a prestigious school in Mohammedia. It was a real relief to know I was in good hands!"
        : "Le processus d'inscription aux grandes écoles peut être stressant, mais Career Guidance m'a facilité la tâche. Leur équipe m'a conseillé sur le choix des établissements, m'a aidé à préparer mon dossier et m'a guidé dans les différentes étapes de candidature. Grâce à eux, j'ai intégré une prestigieuse école à Mohammedia. C'était un vrai soulagement de savoir que j'étais entre de bonnes mains !",
      author: language === 'en' ? "Anonymous Student" : "Étudiante Anonyme",
      title: language === 'en' ? "Master 1 Finance Student at Mohammedia" : "Étudiante en Master 1 Finance à Mohammedia",
      image: "/testimonials/anonymous-1.jpg"
    },
    {
      quote: language === 'en' 
        ? "After several months of unsuccessful searches, Career Guidance helped me find the school that perfectly matched my aspirations. Thanks to their personalized support, I was able to understand the selection criteria and prepare a solid application. Today, I study at one of the best schools in Morocco, and I am grateful for their valuable help."
        : "Après plusieurs mois de recherches sans succès, Career Guidance m'a aidée à trouver l'école qui correspondait parfaitement à mes aspirations. Grâce à leur accompagnement personnalisé, j'ai pu comprendre les critères de sélection et préparer un dossier solide. Aujourd'hui, j'étudie dans l'une des meilleures écoles du Maroc, et je suis reconnaissante pour leur aide précieuse.",
      author: "KONAN ARIELLE DEMOAYE",
      title: language === 'en' ? "Master 1 CCA Student at KENITRA" : "Étudiante en Master 1 CCA à KENITRA",
      image: "/testimonials/arielle.jpg"
    }
  ], [language]);

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
                    ? 'School Search &' 
                    : 'Recherches et'}
                </span>
                <br />
                <span className="relative inline-block text-[#ff914d] mt-2 animate-pulse-slow">
                  {language === 'en' ? 'Enrollment' : 'Inscriptions Scolaire'}
                  <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
                    <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#ff914d]/50" />
                  </svg>
                </span>
              </h1>
              
              {/* Refined Subheading with Better Typography */}
              <p className="text-xl text-[#545454]/80 mb-12 max-w-xl md:max-w-2xl leading-relaxed">
                {language === 'en' 
                  ? 'Welcome to our School Search & Enrollment platform. Our service provides comprehensive support for finding and applying to educational programs that align with your career goals, from initial research to final acceptance.'
                  : 'Bonjour, Bienvenue sur notre plateforme de Recherches et Inscriptions Scolaires, Notre service de Recherches & Inscriptions Scolaire offre un soutien complet pour trouver et postuler à des programmes éducatifs qui correspondent à vos objectifs de carrière.'}
              </p>
              
              {/* Modern CTA Buttons with Enhanced Interactions */}
              <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 mb-16">
                <Link 
                  href="/services/school/programs" 
                  className="group px-8 py-4 bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white text-lg font-medium rounded-xl hover:shadow-[#ff914d]/30 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden relative"
                >
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                    {language === 'en' ? 'Find Your Program' : 'Choisissez Votre Filière'}
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
                    {language === 'en' ? 'Schedule a Meeting' : 'Prendre un RDV'}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-[#ff914d]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </Link>
              </div>
              
              {/* Key Stats with Modern Design */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {keyOutcomes.slice(0, 4).map((outcome, idx) => (
                  <div
                    key={idx}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3 group-hover:scale-110 transition-transform duration-300">
                        {outcome.icon}
                      </div>
                      <div className="text-2xl font-bold text-[#ff914d]">{outcome.value}</div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#545454] group-hover:text-[#ff914d] transition-colors duration-300">{outcome.title}</p>
                      <p className="text-xs text-[#545454]/70 mt-1">{outcome.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Illustration Column - Enhanced with Modern Design Elements */}
            <div className={`lg:col-span-6 relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Glass Card Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ff914d]/20 to-[#ff8133]/20 rounded-[30px] blur-xl opacity-70"></div>
                
                <div className="rounded-[30px] bg-gradient-to-br from-[#ff914d] to-[#ff8133] p-10 text-white shadow-xl relative overflow-hidden z-10">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 mb-6 animate-pulse-slow">
                      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v7" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">
                      {language === 'en' ? 'Key Outcomes' : 'RESULTATS CLES'}
                    </h3>
                    
                    <ul className="space-y-3">
                      {keyOutcomes.slice(0, 4).map((outcome, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (idx * 0.1) }}
                        >
                          <div className="mr-3 flex-shrink-0 mt-0.5 bg-white/20 rounded-full p-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium">{outcome.title}: <strong>{outcome.value}</strong> {outcome.description}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/10 animate-blob animation-delay-2000"></div>
                  <div className="absolute top-10 -left-10 w-32 h-32 rounded-full bg-white/5 animate-blob animation-delay-4000"></div>
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute -top-8 -right-8 p-5 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-[#545454]/10 w-56 transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-1 group">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <p className="text-sm font-medium text-[#545454] group-hover:text-[#ff914d] transition-colors duration-300">{language === 'en' ? 'School Match Success' : 'Réussite d\'Appariement Scolaire'}</p>
                  </div>
                  <div className="h-3 bg-[#545454]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ff914d] to-[#ff8133] rounded-full w-[95%] animate-pulse-slow"></div>
                  </div>
                  <p className="text-sm text-[#545454] mt-2 text-right font-medium group-hover:text-[#ff914d] transition-colors duration-300">95%</p>
                </div>
                
                <div className="absolute -bottom-8 -left-8 p-5 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-[#545454]/10 w-56 transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-1 group">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#ff914d] mr-2"></div>
                    <p className="text-sm font-medium text-[#545454] group-hover:text-[#ff914d] transition-colors duration-300">{language === 'en' ? 'Scholarship Rate' : 'Taux de Bourse'}</p>
                  </div>
                  <div className="h-3 bg-[#545454]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ff914d] to-[#ff8133] rounded-full w-[40%] animate-pulse-slow"></div>
                  </div>
                  <p className="text-sm text-[#545454] mt-2 text-right font-medium group-hover:text-[#ff914d] transition-colors duration-300">40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
{/* Enhanced Cycles Section - Simplified for Same Fields Across Levels */}
<section className="py-20 relative z-10">
  <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f3]/80 to-white/60"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
          {language === 'en' ? 'Educational Paths' : 'NOS CYCLES'}
        </motion.span>
      </div>
      
      <motion.h2 
        className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {language === 'en' ? 'Study Programs' : 'FILIERES'}
        <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
      </motion.h2>
    </motion.div>
    
    {/* Enhanced Tab navigation with better indicators */}
    <div className="relative mb-16">
      <div className="absolute inset-x-0 -bottom-4 h-px bg-[#545454]/10"></div>
      <div className="flex flex-nowrap justify-center mb-0 gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {educationCycles.map((cycle, idx) => (
          <motion.button
            key={idx}
            className={`px-8 py-5 text-base md:text-lg font-medium transition-all duration-300 flex items-center hover:-translate-y-1 flex-shrink-0 relative ${
              activeTab === cycle.id 
                ? 'text-[#ff914d]' 
                : 'text-[#545454] hover:text-[#ff914d]'
            }`}
            onClick={() => setActiveTab(cycle.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3 + (idx * 0.1),
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`mr-3 w-12 h-12 rounded-full flex items-center justify-center ${
              activeTab === cycle.id 
                ? 'bg-[#ff914d]/10 text-[#ff914d]' 
                : 'bg-white shadow-sm border border-[#545454]/10 text-[#545454] group-hover:text-[#ff914d]'
            } transition-all duration-300`}>
              {cycle.icon}
            </div>
            <span>{cycle.title}</span>
            
            {/* Active indicator */}
            {activeTab === cycle.id && (
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff914d]"
                layoutId="activeTab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
    
    {/* Enhanced Fields Section with Animations */}
    <AnimatePresence mode="wait">
      <motion.div 
        key={activeTab}
        ref={fieldsRef}
        className="mt-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-[30px] shadow-xl p-8 mb-8 border border-[#545454]/10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: fieldsInView ? 0 : 30, opacity: fieldsInView ? 1 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h3 className="text-2xl font-serif font-bold text-[#545454] flex items-center">
              <motion.span
                className="text-[#ff914d] mr-3 inline-block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              >
                {activeTab === 'licence' ? (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                ) : activeTab === 'master' ? (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </motion.span>
              {language === 'en' 
                ? `Available Study Fields for ${activeTab === 'licence' ? 'Bachelor' : activeTab === 'master' ? 'Master' : 'Engineering'} Programs` 
                : `DOMAINES D'ÉTUDES DISPONIBLES en ${activeTab.toUpperCase()}`}
            </h3>
            
     
          </div>
          
          <div className="space-y-8">
            {/* Banking & Finance */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#545454]">
                  {language === 'en' ? 'Banking & Finance' : 'BANQUE ET FINANCE'}
                  <span className="ml-2 text-sm font-normal text-[#ff914d] bg-[#ff914d]/10 px-2 py-0.5 rounded-full">
                    {studyFields.finance.length} {language === 'en' ? 'programs' : 'programmes'}
                  </span>
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {studyFields.finance.map((field, idx) => (
                  <motion.div 
                    key={idx}
                    className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 text-[#545454] text-sm cursor-pointer border border-[#545454]/5 hover:border-[#ff914d]/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: fieldsInView ? 1 : 0, x: fieldsInView ? 0 : -10 }}
                    transition={{ duration: 0.5, delay: 0.1 + (idx * 0.03) }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium group-hover:text-[#ff914d] transition-colors duration-300">{field}</h5>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                          <span className="inline-block w-2 h-2 rounded-full bg-[#ff914d]"></span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional info that appears on hover - Simplified */}
                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                      <div className="pt-2 border-t border-[#545454]/10">
                        <div className="flex justify-between text-xs text-[#545454]/70">
                          <span>{language === 'en' ? 'Duration:' : 'Durée:'} {activeTab === 'licence' ? '3' : activeTab === 'master' ? '2' : '5'} {language === 'en' ? 'years' : 'ans'}</span>
                        </div>
                        <div className="mt-2 flex justify-end">
                          <button className="text-xs font-medium text-[#ff914d] hover:underline">
                            {language === 'en' ? 'Learn more' : 'En savoir plus'} →
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-xl rounded-bl-xl bg-gradient-to-br from-[#ff914d]/0 to-[#ff914d]/5 group-hover:from-[#ff914d]/5 group-hover:to-[#ff914d]/20 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Law & Politics with enhanced styling */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#545454]">
                  {language === 'en' ? 'Law & Politics' : 'DROIT, SCIENCES POLITIQUES et FISCALITE'}
                  <span className="ml-2 text-sm font-normal text-[#ff914d] bg-[#ff914d]/10 px-2 py-0.5 rounded-full">
                    {studyFields.law.length} {language === 'en' ? 'programs' : 'programmes'}
                  </span>
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {studyFields.law.map((field, idx) => (
                  <motion.div 
                    key={idx}
                    className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 text-[#545454] text-sm cursor-pointer border border-[#545454]/5 hover:border-[#ff914d]/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: fieldsInView ? 1 : 0, x: fieldsInView ? 0 : -10 }}
                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.03) }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium group-hover:text-[#ff914d] transition-colors duration-300">{field}</h5>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-1">
                          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                          <span className="inline-block w-2 h-2 rounded-full bg-[#ff914d]"></span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional info that appears on hover - Simplified */}
                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                      <div className="pt-2 border-t border-[#545454]/10">
                        <div className="flex justify-between text-xs text-[#545454]/70">
                          <span>{language === 'en' ? 'Duration:' : 'Durée:'} {activeTab === 'licence' ? '3' : activeTab === 'master' ? '2' : '5'} {language === 'en' ? 'years' : 'ans'}</span>
                        </div>
                        <div className="mt-2 flex justify-end">
                          <button className="text-xs font-medium text-[#ff914d] hover:underline">
                            {language === 'en' ? 'Learn more' : 'En savoir plus'} →
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-xl rounded-bl-xl bg-gradient-to-br from-[#ff914d]/0 to-[#ff914d]/5 group-hover:from-[#ff914d]/5 group-hover:to-[#ff914d]/20 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Show more fields button with enhanced styling */}
            {!showAllFields ? (
              <motion.button 
                onClick={() => setShowAllFields(true)}
                className="group w-full py-4 mt-4 rounded-xl bg-white backdrop-blur-sm text-[#545454] hover:text-white hover:bg-[#ff914d] transition-all duration-300 flex items-center justify-center font-medium border border-[#545454]/10 hover:border-[#ff914d]/30 shadow-sm hover:shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: fieldsInView ? 1 : 0, y: fieldsInView ? 0 : 10 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  {language === 'en' ? 'Explore All Fields' : 'Explorer tous les domaines'}
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff8133] to-[#ff914d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </motion.button>
            ) : (
              <>
                {/* Management */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-[#545454]">
                      {language === 'en' ? 'Management & Communication' : 'MANAGEMENT ET COMMUNICATION'}
                      <span className="ml-2 text-sm font-normal text-[#ff914d] bg-[#ff914d]/10 px-2 py-0.5 rounded-full">
                        {studyFields.management.length} {language === 'en' ? 'programs' : 'programmes'}
                      </span>
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {studyFields.management.map((field, idx) => (
                      <motion.div 
                        key={idx}
                        className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 text-[#545454] text-sm cursor-pointer border border-[#545454]/5 hover:border-[#ff914d]/30 transition-all duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + (idx * 0.03) }}
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                        }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium group-hover:text-[#ff914d] transition-colors duration-300">{field}</h5>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex space-x-1">
                              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                              <span className="inline-block w-2 h-2 rounded-full bg-[#ff914d]"></span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Additional info that appears on hover - Simplified */}
                        <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                          <div className="pt-2 border-t border-[#545454]/10">
                            <div className="flex justify-between text-xs text-[#545454]/70">
                              <span>{language === 'en' ? 'Duration:' : 'Durée:'} {activeTab === 'licence' ? '3' : activeTab === 'master' ? '2' : '5'} {language === 'en' ? 'years' : 'ans'}</span>
                            </div>
                            <div className="mt-2 flex justify-end">
                              <button className="text-xs font-medium text-[#ff914d] hover:underline">
                                {language === 'en' ? 'Learn more' : 'En savoir plus'} →
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-xl rounded-bl-xl bg-gradient-to-br from-[#ff914d]/0 to-[#ff914d]/5 group-hover:from-[#ff914d]/5 group-hover:to-[#ff914d]/20 transition-colors duration-300"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Engineering & Physics */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-[#545454]">
                      {language === 'en' ? 'Engineering & Physics' : 'ELECTRO-TECH, MECANIQUE et PHYSIQUE'}
                      <span className="ml-2 text-sm font-normal text-[#ff914d] bg-[#ff914d]/10 px-2 py-0.5 rounded-full">
                        {studyFields.engineering.length} {language === 'en' ? 'programs' : 'programmes'}
                      </span>
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {studyFields.engineering.map((field, idx) => (
                      <motion.div 
                        key={idx}
                        className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 text-[#545454] text-sm cursor-pointer border border-[#545454]/5 hover:border-[#ff914d]/30 transition-all duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + (idx * 0.03) }}
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                        }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium group-hover:text-[#ff914d] transition-colors duration-300">{field}</h5>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex space-x-1">
                              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                              <span className="inline-block w-2 h-2 rounded-full bg-[#ff914d]"></span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Additional info that appears on hover - Simplified */}
                        <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                          <div className="pt-2 border-t border-[#545454]/10">
                            <div className="flex justify-between text-xs text-[#545454]/70">
                              <span>{language === 'en' ? 'Duration:' : 'Durée:'} {activeTab === 'licence' ? '3' : activeTab === 'master' ? '2' : '5'} {language === 'en' ? 'years' : 'ans'}</span>
                            </div>
                            <div className="mt-2 flex justify-end">
                              <button className="text-xs font-medium text-[#ff914d] hover:underline">
                                {language === 'en' ? 'Learn more' : 'En savoir plus'} →
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-xl rounded-bl-xl bg-gradient-to-br from-[#ff914d]/0 to-[#ff914d]/5 group-hover:from-[#ff914d]/5 group-hover:to-[#ff914d]/20 transition-colors duration-300"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Health Sciences */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-[#545454]">
                      {language === 'en' ? 'Health Sciences' : 'SCIENCES DE LA SANTE'}
                      <span className="ml-2 text-sm font-normal text-[#ff914d] bg-[#ff914d]/10 px-2 py-0.5 rounded-full">
                        {studyFields.health.length} {language === 'en' ? 'programs' : 'programmes'}
                      </span>
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {studyFields.health.map((field, idx) => (
                      <motion.div 
                        key={idx}
                        className="group relative bg-white/60 backdrop-blur-sm rounded-xl p-4 text-[#545454] text-sm cursor-pointer border border-[#545454]/5 hover:border-[#ff914d]/30 transition-all duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + (idx * 0.03) }}
                        whileHover={{ 
                          scale: 1.03, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                        }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium group-hover:text-[#ff914d] transition-colors duration-300">{field}</h5>
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex space-x-1">
                              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                              <span className="inline-block w-2 h-2 rounded-full bg-[#ff914d]"></span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Additional info that appears on hover - Simplified */}
                        <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                          <div className="pt-2 border-t border-[#545454]/10">
                            <div className="flex justify-between text-xs text-[#545454]/70">
                              <span>{language === 'en' ? 'Duration:' : 'Durée:'} {activeTab === 'licence' ? '3' : activeTab === 'master' ? '2' : '5'} {language === 'en' ? 'years' : 'ans'}</span>
                            </div>
                            <div className="mt-2 flex justify-end">
                              <button className="text-xs font-medium text-[#ff914d] hover:underline">
                                {language === 'en' ? 'Learn more' : 'En savoir plus'} →
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-xl rounded-bl-xl bg-gradient-to-br from-[#ff914d]/0 to-[#ff914d]/5 group-hover:from-[#ff914d]/5 group-hover:to-[#ff914d]/20 transition-colors duration-300"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.button 
                  onClick={() => setShowAllFields(false)}
                  className="group w-full py-4 mt-8 rounded-xl bg-white backdrop-blur-sm text-[#545454] hover:text-white hover:bg-[#ff914d] transition-all duration-300 flex items-center justify-center font-medium border border-[#545454]/10 hover:border-[#ff914d]/30 shadow-sm hover:shadow-lg relative overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    {language === 'en' ? 'Show Less' : 'Afficher moins'}
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#ff8133] to-[#ff914d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                </motion.button>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    
    <div className="mt-12 text-center">
      <motion.div 
        className="inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link 
          href="/services/school/programs"
          className="group px-8 py-4 bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white text-lg font-medium rounded-xl hover:shadow-[#ff914d]/30 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden relative inline-flex items-center"
        >
          <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
            <svg className="w-5 h-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            {language === 'en' ? 'View All Programs' : 'Voir Tous les Programmes'}
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#ff8133] to-[#ff914d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </Link>
      </motion.div>
    </div>
  </div>
</section>

      {/* Process Section */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#fcfcfc] opacity-80"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ff914d]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ff914d]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
                   className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          >
            {language === 'en' ? 'Application Process' : 'Processus de Candidature'}
          </motion.span>
        </div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {language === 'en' ? 'How It Works' : 'Quelles sont les étapes ?'}
        </motion.h2>
        
        <motion.p 
          className="text-xl text-[#545454]/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {language === 'en' 
            ? 'We guide you through each step of the enrollment process'
            : 'Nous vous guidons à travers chaque étape du processus d\'inscription'}
        </motion.p>
      </motion.div>
      
      <div 
        ref={processRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {processSteps.map((step, idx) => (
          <motion.div 
            key={idx}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 relative border border-[#545454]/10 hover:border-[#ff914d]/30 hover:shadow-xl transition-all hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 30 }}
            transition={{ duration: 0.5, delay: 0.1 + (idx * 0.1) }}
          >
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white flex items-center justify-center font-bold text-lg shadow-md">
              {idx + 1}
            </div>
            <div className="w-14 h-14 mb-4 bg-[#ff914d]/10 rounded-full flex items-center justify-center text-[#ff914d]">
              {step.icon}
            </div>
            <h3 className="text-lg font-bold text-[#545454] mb-3">
              {step.title}
            </h3>
            <p className="text-[#545454]/80 text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: processInView ? 1 : 0, y: processInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link 
          href="/services/school/process"
          className="group inline-flex items-center px-6 py-3 bg-white backdrop-blur-sm text-[#ff914d] rounded-xl text-base font-medium border border-[#545454]/10 hover:border-[#ff914d]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
        >
          <span className="relative z-10">
            {language === 'en' ? 'Learn More About Our Process' : 'En Savoir Plus Sur Notre Processus'}
            <svg className="w-5 h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-[#ff914d]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </Link>
      </motion.div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section 
    ref={testimonialsRef}
    className="py-20 relative z-10 overflow-hidden"
  >
    <div className="absolute inset-0 bg-[#fcfcfc] opacity-80"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fff8f3] via-[#fff4eb] to-transparent opacity-60"></div>
    <div className="absolute top-0 -left-40 w-80 h-80 bg-[#ff914d]/10 rounded-full blur-3xl opacity-60"></div>
    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#ff914d]/10 rounded-full blur-3xl opacity-50"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
          >
            {language === 'en' ? 'Success Stories' : 'TEMOIGNAGES'}
          </motion.span>
        </div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {language === 'en' ? 'What Our Students Say' : 'Ce Que Disent Nos Étudiants'}
        </motion.h2>
        
        <motion.p 
          className="text-xl text-[#545454]/80 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {language === 'en' 
            ? 'Hear from students who have successfully enrolled with our guidance'
            : 'Écoutez les témoignages d\'étudiants qui se sont inscrits avec succès grâce à nos conseils'}
        </motion.p>
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
                  <p className="text-sm text-[#545454]/80">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link 
          href="/testimonials"
          className="group inline-flex items-center px-6 py-3 bg-white backdrop-blur-sm text-[#ff914d] rounded-xl text-base font-medium border border-[#545454]/10 hover:border-[#ff914d]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
        >
          <span className="relative z-10">
            {language === 'en' ? 'View More Success Stories' : 'Voir Plus de Témoignages'}
            <svg className="w-5 h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-[#ff914d]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
        </Link>
      </motion.div>
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
          <motion.span 
            className="text-5xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            🎓
          </motion.span>
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {language === 'en' 
            ? 'Ready to Start Your Educational Journey?' 
            : 'Prêt à Commencer Votre Parcours Éducatif?'}
        </motion.h2>
        
        <motion.p 
          className="text-xl mb-10 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {language === 'en' 
            ? 'Take the first step toward your educational goals with expert guidance and support. Our team is ready to help you navigate the journey.'
            : 'Faites le premier pas vers vos objectifs éducatifs avec des conseils et un soutien d\'experts. Notre équipe est prête à vous aider à naviguer dans ce parcours.'}
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
              href="/services/school/programs"
              className="group relative px-8 py-4 bg-white text-[#ff914d] rounded-xl text-lg font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden block"
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                {language === 'en' ? 'Find Your Program' : 'Trouvez Votre Filière'}
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
                {language === 'en' ? 'Schedule a Meeting' : 'Prendre un RDV'}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

export default SchoolSearchPage;
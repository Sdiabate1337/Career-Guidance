"use client";

import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '../contexts/LanguageContext';

export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Current timestamp and user
  const currentDateTime = "2025-06-04 20:10:51";
  const currentUser = "Sdiabate1337";
  
  // Intersection observers for animations
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const { ref: storyRef, inView: storyInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  // Company values
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: language === 'en' ? 'Trust & Integrity' : 'Confiance & Intégrité',
      description: language === 'en' 
        ? 'We build relationships on a foundation of trust and always act with integrity in every interaction.'
        : 'Nous construisons des relations sur une base de confiance et agissons toujours avec intégrité dans chaque interaction.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: language === 'en' ? 'Innovation' : 'Innovation',
      description: language === 'en' 
        ? 'We continuously evolve our methods and strategies to provide cutting-edge career guidance solutions.'
        : 'Nous faisons évoluer continuellement nos méthodes et stratégies pour fournir des solutions d\'orientation de carrière à la pointe.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: language === 'en' ? 'Client Success' : 'Réussite des Clients',
      description: language === 'en' 
        ? 'Your success is our success. We\'re dedicated to helping you achieve your professional goals and dreams.'
        : 'Votre réussite est notre réussite. Nous sommes dédiés à vous aider à atteindre vos objectifs et rêves professionnels.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: language === 'en' ? 'Global Perspective' : 'Perspective Globale',
      description: language === 'en' 
        ? 'We bring international expertise and a global outlook to help you navigate careers across borders.'
        : 'Nous apportons une expertise internationale et une vision globale pour vous aider à naviguer dans les carrières au-delà des frontières.'
    }
  ];
  
  // Team members
  const team = [
    {
      name: 'Emma Richardson',
      role: language === 'en' ? 'Founder & CEO' : 'Fondatrice & PDG',
      bio: language === 'en' 
        ? 'With over 15 years in career development and executive coaching, Emma founded Career Guidance to help professionals worldwide achieve their career aspirations.'
        : 'Avec plus de 15 ans dans le développement de carrière et le coaching exécutif, Emma a fondé Career Guidance pour aider les professionnels du monde entier à réaliser leurs aspirations de carrière.',
      image: '/team/emma-richardson.jpg',
      linkedIn: 'https://linkedin.com/in/emma-richardson'
    },
    {
      name: 'Michael Chen',
      role: language === 'en' ? 'Chief Career Strategist' : 'Stratège en Chef de Carrière',
      bio: language === 'en' 
        ? 'Former HR Director at Fortune 500 companies, Michael brings insider knowledge of recruitment processes and career advancement strategies.'
        : 'Ancien directeur RH dans des entreprises du Fortune 500, Michael apporte une connaissance interne des processus de recrutement et des stratégies d\'avancement de carrière.',
      image: '/team/michael-chen.jpg',
      linkedIn: 'https://linkedin.com/in/michael-chen'
    },
    {
      name: 'Sophia Okafor',
      role: language === 'en' ? 'Head of Education Services' : 'Responsable des Services Éducatifs',
      bio: language === 'en' 
        ? 'With a PhD in Education Policy and experience across three continents, Sophia leads our academic services with unparalleled expertise.'
        : 'Avec un doctorat en politique éducative et une expérience sur trois continents, Sophia dirige nos services académiques avec une expertise inégalée.',
      image: '/team/sophia-okafor.jpg',
      linkedIn: 'https://linkedin.com/in/sophia-okafor'
    },
    {
      name: 'Antoine Dubois',
      role: language === 'en' ? 'LinkedIn & Personal Branding Expert' : 'Expert LinkedIn & Marque Personnelle',
      bio: language === 'en' 
        ? 'A digital marketing veteran and personal branding guru, Antoine has helped thousands optimize their professional online presence.'
        : 'Vétéran du marketing digital et gourou de la marque personnelle, Antoine a aidé des milliers de personnes à optimiser leur présence professionnelle en ligne.',
      image: '/team/antoine-dubois.jpg',
      linkedIn: 'https://linkedin.com/in/antoine-dubois'
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      quote: language === 'en' 
        ? "I'm extremely satisfied with the management of my LinkedIn account by Career Guidance. They were able to showcase my skills and background in a clear and impactful way. I highly recommend their services to anyone looking to optimize their presence on LinkedIn!"
        : "Je suis extrêmement satisfait de la gestion de mon compte LinkedIn par Career Guidance. Ils ont su mettre en valeur mes compétences et mon parcours de manière claire et impactante. Je recommande vivement leurs services à tous ceux qui souhaitent optimiser leur présence sur LinkedIn !",
      author: "NEYA ABIBATA",
      image: "/testimonials/neya-abibata.jpg",
      rating: 5
    },
    {
      quote: language === 'en' 
        ? "Thanks to Career Guidance, my LinkedIn profile has been optimized in a professional and targeted way. I quickly gained visibility and received several interesting opportunities. Their guidance has really boosted my career!"
        : "Grâce à Career Guidance, mon profil LinkedIn a été optimisé de façon professionnelle et ciblée. J'ai rapidement gagné en visibilité et reçu plusieurs opportunités intéressantes. Leur accompagnement a vraiment boosté ma carrière !",
      author: "SEKONGO ABDOUL",
      image: "/testimonials/sekongo-abdoul.jpg",
      rating: 5
    },
     {
      quote: language === 'en' 
        ? "The enrollment process for top schools can be stressful, but Career Guidance made it easy for me. Their team advised me on choosing institutions, helped me prepare my application, and guided me through the various application steps. Thanks to them, I joined a prestigious school in Mohammedia. It was a real relief to know I was in good hands!"
        : "Le processus d'inscription aux grandes écoles peut être stressant, mais Career Guidance m'a facilité la tâche. Leur équipe m'a conseillé sur le choix des établissements, m'a aidé à préparer mon dossier et m'a guidé dans les différentes étapes de candidature. Grâce à eux, j'ai intégré une prestigieuse école à Mohammedia. C'était un vrai soulagement de savoir que j'étais entre de bonnes mains !",
      author: language === 'en' ? "Anonymous Student" : "Étudiante Anonyme",
      title: language === 'en' ? "Master 1 Finance Student at Mohammedia" : "Étudiante en Master 1 Finance à Mohammedia",
      image: "/testimonials/anonymous-1.jpg",
      rating: 5
    },
    {
      quote: language === 'en' 
        ? "After several months of unsuccessful searches, Career Guidance helped me find the school that perfectly matched my aspirations. Thanks to their personalized support, I was able to understand the selection criteria and prepare a solid application. Today, I study at one of the best schools in Morocco, and I am grateful for their valuable help."
        : "Après plusieurs mois de recherches sans succès, Career Guidance m'a aidée à trouver l'école qui correspondait parfaitement à mes aspirations. Grâce à leur accompagnement personnalisé, j'ai pu comprendre les critères de sélection et préparer un dossier solide. Aujourd'hui, j'étudie dans l'une des meilleures écoles du Maroc, et je suis reconnaissante pour leur aide précieuse.",
      author: "KONAN ARIELLE DEMOAYE",
      title: language === 'en' ? "Master 1 CCA Student at KENITRA" : "Étudiante en Master 1 CCA à KENITRA",
      image: "/testimonials/arielle.jpg",
      rating: 5
    }
  ];
  
  // Stats data
  const stats = [
    { value: '12+', label: language === 'en' ? 'Years Experience' : 'Années d\'Expérience' },
    { value: '25K+', label: language === 'en' ? 'Clients Served' : 'Clients Servis' },
    { value: '94%', label: language === 'en' ? 'Success Rate' : 'Taux de Réussite' },
    { value: '42', label: language === 'en' ? 'Countries Reached' : 'Pays Atteints' }
  ];
  
  // Render stars for ratings
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star} 
            className={`w-5 h-5 ${star <= Math.floor(rating) ? 'text-[#ff914d]' : star <= rating ? 'text-[#ff914d]' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
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
      
      {/* Hero Section - About Us */}
      <section ref={heroRef} id="about-us" className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : -30 }}
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
                  {language === 'en' ? 'Who We Are' : 'Qui Nous Sommes'}
                </motion.span>
              </div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#545454]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-[#545454]">
                  {language === 'en' ? 'About ' : 'À Propos de '}
                </span>
                <span className="text-[#ff914d] relative">
                  {language === 'en' ? 'Career Guidance' : 'Career Guidance'}
                  <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
                    <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#ff914d]/50" />
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-[#545454]/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {language === 'en' 
                  ? 'Career Guidance is a premier career development organization dedicated to empowering professionals at every stage of their journey. Our mission is to provide expert guidance, personalized strategies, and innovative tools that help individuals navigate the complexities of today\'s professional landscape and achieve meaningful success.'
                  : 'Career Guidance est une organisation de développement de carrière de premier plan dédiée à responsabiliser les professionnels à chaque étape de leur parcours. Notre mission est de fournir des conseils d\'experts, des stratégies personnalisées et des outils innovants qui aident les individus à naviguer dans la complexité du paysage professionnel d\'aujourd\'hui et à atteindre un succès significatif.'}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-[#ff914d]">{stat.value}</div>
                    <div className="text-sm text-[#545454]/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff914d]/10 to-[#ff914d]/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('/images/about/team-collaboration.jpg')] bg-cover bg-center"></div>
                </div>
                
                {/* Overlaid animated elements */}
                <div className="absolute -bottom-6 -left-6 p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-[#545454]/10 w-64 transition-all duration-1000 ease-out">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#545454]">
                        {language === 'en' ? 'Client Satisfaction' : 'Satisfaction Client'}
                      </h4>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star} 
                            className="w-4 h-4 text-[#ff914d]"
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-[#545454]/80">
                    {language === 'en' 
                      ? 'Our clients rate us 4.9 out of 5 stars based on over 1,200 reviews'
                      : 'Nos clients nous notent 4,9 sur 5 étoiles sur la base de plus de 1 200 avis'}
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-[#545454]/10 w-48 transition-all duration-1000 ease-out">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="text-lg font-bold text-[#545454]">94%</div>
                  </div>
                  <div className="text-xs text-[#545454]/70">
                    {language === 'en' ? 'Career Advancement Rate' : 'Taux d\'Avancement de Carrière'}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Company Values */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl font-serif font-bold text-[#545454] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {language === 'en' ? 'Our Core Values' : 'Nos Valeurs Fondamentales'}
                <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-[#545454]/70 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {language === 'en' 
                  ? 'These principles guide everything we do and define our approach to serving you.'
                  : 'Ces principes guident tout ce que nous faisons et définissent notre approche pour vous servir.'}
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-lg border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#545454] mb-2">{value.title}</h3>
                  <p className="text-[#545454]/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section ref={storyRef} id="our-story" className="py-20 relative z-10 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Timeline graphic */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-[#ff914d]/20 rounded-full">
                  <div className="absolute top-0 left-0 w-3 h-3 -ml-1 rounded-full bg-[#ff914d]"></div>
                  <div className="absolute top-1/3 left-0 w-3 h-3 -ml-1 rounded-full bg-[#ff914d]"></div>
                  <div className="absolute top-2/3 left-0 w-3 h-3 -ml-1 rounded-full bg-[#ff914d]"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 -ml-1 rounded-full bg-[#ff914d]"></div>
                </div>
                
                {/* Timeline content */}
                <div className="lg:pl-12 space-y-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="text-[#ff914d] font-bold mb-1">2010</div>
                    <h3 className="text-xl font-bold text-[#545454] mb-2">
                      {language === 'en' ? 'The Beginning' : 'Le Début'}
                    </h3>
                    <p className="text-[#545454]/70">
                      {language === 'en' 
                        ? 'Founded by Emma Richardson, Career Guidance started as a small consultancy focused on helping professionals navigate career transitions.'
                        : 'Fondé par Emma Richardson, Career Guidance a commencé comme un petit cabinet de conseil axé sur l\'aide aux professionnels pour naviguer dans les transitions de carrière.'}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="text-[#ff914d] font-bold mb-1">2015</div>
                    <h3 className="text-xl font-bold text-[#545454] mb-2">
                      {language === 'en' ? 'Global Expansion' : 'Expansion Mondiale'}
                    </h3>
                    <p className="text-[#545454]/70">
                      {language === 'en' 
                        ? 'With growing demand, we expanded our services internationally and built a diverse team of experts from various professional backgrounds.'
                        : 'Avec une demande croissante, nous avons étendu nos services à l\'international et constitué une équipe diversifiée d\'experts issus de divers horizons professionnels.'}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="text-[#ff914d] font-bold mb-1">2018</div>
                    <h3 className="text-xl font-bold text-[#545454] mb-2">
                      {language === 'en' ? 'Digital Transformation' : 'Transformation Numérique'}
                    </h3>
                    <p className="text-[#545454]/70">
                      {language === 'en' 
                        ? 'We pioneered innovative digital career development solutions, including our industry-leading LinkedIn management services.'
                        : 'Nous avons innové avec des solutions numériques de développement de carrière, y compris nos services de gestion LinkedIn, leaders de l\'industrie.'}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : -20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="text-[#ff914d] font-bold mb-1">
                      {language === 'en' ? 'Today' : 'Aujourd\'hui'}
                    </div>
                    <h3 className="text-xl font-bold text-[#545454] mb-2">
                      {language === 'en' ? 'Industry Leader' : 'Leader de l\'Industrie'}
                    </h3>
                    <p className="text-[#545454]/70">
                      {language === 'en' 
                        ? 'Now serving clients in over 40 countries, Career Guidance has become the trusted partner for professionals seeking to elevate their careers and achieve their full potential.'
                        : 'Servant désormais des clients dans plus de 40 pays, Career Guidance est devenu le partenaire de confiance pour les professionnels cherchant à élever leur carrière et à atteindre leur plein potentiel.'}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: storyInView ? 1 : 0, x: storyInView ? 0 : 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block">
                <motion.span 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: storyInView ? 1 : 0, scale: storyInView ? 1 : 0.8 }}
                  transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
                  {language === 'en' ? 'Our Journey' : 'Notre Parcours'}
                </motion.span>
              </div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: storyInView ? 1 : 0, y: storyInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {language === 'en' ? 'The Story Behind Career Guidance' : 'L\'Histoire Derrière Career Guidance'}
              </motion.h2>
              
              <motion.p 
                className="text-lg text-[#545454]/80 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: storyInView ? 1 : 0, y: storyInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {language === 'en' 
                  ? 'Our journey began with a simple but powerful mission: to help people find fulfillment and success in their professional lives. What started as a small consultancy has grown into a global organization that has transformed thousands of careers.'
                  : 'Notre parcours a commencé avec une mission simple mais puissante : aider les gens à trouver l\'épanouissement et le succès dans leur vie professionnelle. Ce qui a commencé comme un petit cabinet de conseil est devenu une organisation mondiale qui a transformé des milliers de carrières.'}
              </motion.p>
              
              <motion.p 
                className="text-lg text-[#545454]/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: storyInView ? 1 : 0, y: storyInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {language === 'en' 
                  ? 'Through economic shifts, technological revolutions, and changing workplace dynamics, we\'ve continuously evolved our services to meet the needs of modern professionals while staying true to our core values and commitment to excellence.'
                  : 'À travers les changements économiques, les révolutions technologiques et l\'évolution des dynamiques de travail, nous avons continuellement fait évoluer nos services pour répondre aux besoins des professionnels modernes tout en restant fidèles à nos valeurs fondamentales et à notre engagement envers l\'excellence.'}
              </motion.p>
              
              <motion.div
                className="relative h-72 w-full rounded-xl overflow-hidden shadow-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: storyInView ? 1 : 0, y: storyInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff914d]/10 to-[#ff914d]/5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('/images/about/company-history.jpg')] bg-cover bg-center"></div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: storyInView ? 1 : 0, y: storyInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <blockquote className="italic text-lg text-[#545454]/80 pl-4 border-l-4 border-[#ff914d]">
                  {language === 'en' 
                    ? '"Our greatest reward is seeing our clients thrive in careers they love. That\'s been our driving force from day one, and it continues to inspire everything we do."'
                    : '"Notre plus grande récompense est de voir nos clients s\'épanouir dans des carrières qu\'ils aiment. C\'est ce qui nous motive depuis le premier jour, et cela continue d\'inspirer tout ce que nous faisons."'}
                  <footer className="mt-2 font-bold text-[#545454]">— Emma Richardson, {language === 'en' ? 'Founder' : 'Fondatrice'}</footer>
                </blockquote>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section ref={teamRef} id="our-team" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: teamInView ? 1 : 0, scale: teamInView ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
                {language === 'en' ? 'Meet The Experts' : 'Rencontrez Les Experts'}
              </motion.span>
            </div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: teamInView ? 1 : 0, y: teamInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {language === 'en' ? 'Our Leadership Team' : 'Notre Équipe de Direction'}
              <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-[#545454]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: teamInView ? 1 : 0, y: teamInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {language === 'en' 
                ? 'Our diverse team of industry experts brings decades of combined experience to help guide your career journey.'
                : 'Notre équipe diversifiée d\'experts de l\'industrie apporte des décennies d\'expérience combinée pour guider votre parcours professionnel.'}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: teamInView ? 1 : 0, y: teamInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder for actual team member image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff914d]/10 to-[#ff914d]/5 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-[url('/images/team/placeholder.jpg')] bg-cover bg-center transform group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  
                  {/* LinkedIn icon on hover */}
                  <a 
                    href={member.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#545454] group-hover:text-[#ff914d] transition-colors duration-300">{member.name}</h3>
                  <p className="text-[#ff914d] font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-[#545454]/70">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="py-20 relative z-10 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <motion.span 
                className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: testimonialsInView ? 1 : 0, scale: testimonialsInView ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
                {language === 'en' ? 'Success Stories' : 'Témoignages de Réussite'}
              </motion.span>
            </div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {language === 'en' ? 'What Our Clients Say' : 'Ce Que Disent Nos Clients'}
              <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-[#545454]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {language === 'en' 
                ? 'Hear from professionals who have transformed their careers with our guidance.'
                : 'Écoutez les professionnels qui ont transformé leur carrière grâce à nos conseils.'}
            </motion.p>
          </div>
          
          {/* Desktop Testimonials */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-xl p-8 shadow-xl border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff914d] to-[#ff8133]"></div>
                <div className="absolute top-8 right-8 text-[#ff914d]/10">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="mb-6">{renderStars(testimonial.rating)}</div>
                
                <p className="text-[#545454]/80 mb-6 relative z-10">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-4">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#545454]">{testimonial.author}</div>
                    <div className="text-sm text-[#545454]/70">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-xl">
              <motion.div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl p-6 shadow-xl border border-[#545454]/10 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff914d] to-[#ff8133]"></div>
                      
                      <div className="mb-4">{renderStars(testimonial.rating)}</div>
                      
                      <p className="text-[#545454]/80 mb-6 text-sm relative z-10">"{testimonial.quote}"</p>
                      
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-[#545454]">{testimonial.author}</div>
                          <div className="text-xs text-[#545454]/70">{testimonial.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Carousel controls */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeTestimonial === idx ? 'bg-[#ff914d]' : 'bg-[#545454]/20'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          

        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative z-10">
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
                  {language === 'en' ? 'Ready to Transform Your Career?' : 'Prêt à Transformer Votre Carrière?'}
                </motion.h3>
                
                <motion.p 
                  className="text-white/90 text-lg md:text-xl mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {language === 'en' 
                    ? 'Schedule a free consultation with our experts today and take the first step towards your professional success.'
                    : 'Planifiez une consultation gratuite avec nos experts aujourd\'hui et faites le premier pas vers votre réussite professionnelle.'}
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
); }
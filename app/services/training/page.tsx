"use client";

import { useContext, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';
import Testimonial from '../Testimonial';
import PricingTable from '../PricingTable';
import FAQ from '../../components/FAQ';

const TrainingProgramsPage = () => {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [activeProgram, setActiveProgram] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // References for section navigation
  const heroRef = useRef(null);
  const programsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);
  
  // Current user and timestamp - Updated as requested
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-06-14 13:07:02";
  
  // SEO metadata
  const pageTitle = language === 'en' ? 'Certified Training Programs | Career Guidance' : 'Programmes de Formation Certifiés | Career Guidance';
  const pageDescription = language === 'en' 
    ? 'Enhance your career with our industry-recognized certification programs. Expert instruction, flexible scheduling, and hands-on projects to boost your resume.'
    : 'Améliorez votre carrière avec nos programmes de certification reconnus par l\'industrie. Instruction par des experts, horaires flexibles et projets pratiques.';
  
  // Track scroll position for back-to-top button and reduce performance impact
  useEffect(() => {
    const handleScroll = () => {
      // Using requestAnimationFrame to optimize scroll performance
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        setShowBackToTop(window.scrollY > 600);
      });
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Optimized Counter component for statistics
  const Counter = ({ value, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    
    useEffect(() => {
      if (!counterRef.current) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Disconnect after triggering once for performance
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(counterRef.current);
      
      return () => observer.disconnect();
    }, []);
    
    useEffect(() => {
      if (!isInView) return;
      
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }, [value, duration, isInView]);
    
    return <span ref={counterRef} className="font-bold">{count}{suffix}</span>;
  };
  
  // Certified Training Programs service data
  const service = {
    id: 'training',
    title: language === 'en' ? 'Certified Training Programs' : 'Programmes de Formation Certifiés',
    description: language === 'en' 
      ? 'Our Certified Training Programs provide industry-recognized qualifications that enhance your skills and boost your resume with in-demand credentials. These comprehensive programs combine expert instruction, hands-on projects, and flexible scheduling to ensure you can develop valuable skills without disrupting your current commitments.'
      : 'Nos Programmes de Formation Certifiés offrent des qualifications reconnues par l\'industrie qui améliorent vos compétences et valorisent votre CV avec des certifications recherchées. Ces programmes complets combinent un enseignement expert, des projets pratiques et une planification flexible pour vous assurer de développer des compétences précieuses sans perturber vos engagements actuels.',
    features: language === 'en' ? 
      [
        {
          title: "Industry certifications",
          description: "Globally recognized credentials from leading industry organizations and accreditation bodies",
          icon: "🏆"
        },
        {
          title: "Expert instructors",
          description: "Learn from professionals with extensive real-world experience in their respective fields",
          icon: "👨‍🏫"
        },
        {
          title: "Flexible schedule",
          description: "Self-paced options and multiple scheduling formats to accommodate your lifestyle",
          icon: "🗓️"
        },
        {
          title: "Hands-on projects",
          description: "Apply your learning through practical, portfolio-building assignments and case studies",
          icon: "🛠️"
        },
        {
          title: "Career support",
          description: "Resume enhancement, interview preparation, and job placement assistance",
          icon: "📈"
        }
      ] :
      [
        {
          title: "Certifications industrie",
          description: "Certifications mondialement reconnues des principales organisations industrielles et organismes d'accréditation",
          icon: "🏆"
        },
        {
          title: "Instructeurs experts",
          description: "Apprenez auprès de professionnels ayant une vaste expérience réelle dans leurs domaines respectifs",
          icon: "👨‍🏫"
        },
        {
          title: "Horaires flexibles",
          description: "Options à rythme libre et formats d'horaires multiples pour s'adapter à votre style de vie",
          icon: "🗓️"
        },
        {
          title: "Projets pratiques",
          description: "Appliquez votre apprentissage à travers des travaux pratiques de constitution de portfolio et des études de cas",
          icon: "🛠️"
        },
        {
          title: "Soutien à la carrière",
          description: "Amélioration du CV, préparation aux entretiens et assistance au placement professionnel",
          icon: "📈"
        }
      ],
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    stat1: { value: 94, label: language === 'en' ? 'Completion rate' : 'Taux d\'achèvement', suffix: '%' },
    stat2: { value: 92, label: language === 'en' ? 'Employment rate' : 'Taux d\'emploi', suffix: '%' },
    rating: 4.7,
    reviewCount: 315,
    cta: language === 'en' ? 'Get Certified' : 'Obtenez une Certification',
    color: "#4CAF50",
    gradient: "from-[#4CAF50]/90 to-[#4CAF50]/70",
    textColor: "text-[#4CAF50]",
    borderColor: "border-[#4CAF50]",
    bgColor: "bg-[#4CAF50]",
    lightBg: "bg-white dark:bg-gray-800",
    process: language === 'en' ? 
      [
        "Skill assessment and program selection",
        "Customized learning path creation",
        "Structured course modules with expert instruction",
        "Hands-on practical applications and projects",
        "Final assessment and certification"
      ] :
      [
        "Évaluation des compétences et sélection du programme",
        "Création d'un parcours d'apprentissage personnalisé",
        "Modules de cours structurés avec instruction par des experts",
        "Applications pratiques et projets concrets",
        "Évaluation finale et certification"
      ],
    processDescriptions: language === 'en' ? 
      [
        "We begin by evaluating your current skills and career goals to identify the most suitable certification program for your needs.",
        "Our experts develop a personalized learning path that focuses on your specific goals and adapts to your experience level.",
        "You'll progress through well-structured modules taught by industry professionals with real-world expertise.",
        "Apply theoretical knowledge through hands-on projects that build your portfolio and demonstrate your skills to potential employers.",
        "Complete a comprehensive final assessment to earn your industry-recognized certification, validating your expertise."
      ] :
      [
        "Nous commençons par évaluer vos compétences actuelles et vos objectifs de carrière pour identifier le programme de certification le plus adapté à vos besoins.",
        "Nos experts développent un parcours d'apprentissage personnalisé qui se concentre sur vos objectifs spécifiques et s'adapte à votre niveau d'expérience.",
        "Vous progresserez à travers des modules bien structurés enseignés par des professionnels de l'industrie avec une expertise réelle.",
        "Appliquez les connaissances théoriques à travers des projets pratiques qui enrichissent votre portfolio et démontrent vos compétences aux employeurs potentiels.",
        "Complétez une évaluation finale complète pour obtenir votre certification reconnue par l'industrie, validant votre expertise."
      ],
    outcomes: language === 'en' ? 
      [
        "94% program completion rate",
        "92% employment rate post-certification",
        "Average 22% salary increase",
        "Industry-recognized credentials",
        "Portfolio of practical projects"
      ] :
      [
        "Taux d'achèvement du programme de 94%",
        "Taux d'emploi de 92% après certification",
        "Augmentation moyenne de salaire de 22%",
        "Certificats reconnus par l'industrie",
        "Portfolio de projets pratiques"
      ],
    testimonials: [
      {
        name: "Carlos Mendez",
        title: language === 'en' ? "Data Analyst" : "Analyste de Données",
        image: "/testimonials/carlos.jpg",
        text: language === 'en' ? 
          "The data science certification program was rigorous but incredibly rewarding. The hands-on projects gave me real-world experience that I was able to showcase in interviews, leading to multiple job offers." :
          "Le programme de certification en science des données était rigoureux mais incroyablement enrichissant. Les projets pratiques m'ont donné une expérience réelle que j'ai pu mettre en valeur lors des entretiens, ce qui a conduit à de multiples offres d'emploi."
      },
      {
        name: "Aisha Patel",
        title: language === 'en' ? "UX Designer" : "Designer UX",
        image: "/testimonials/aisha.jpg",
        text: language === 'en' ? 
          "As a career changer, I was worried about breaking into UX design. This program provided not just the technical skills, but the confidence and portfolio I needed to successfully transition careers." :
          "En tant que personne en reconversion professionnelle, j'étais inquiète à l'idée de me lancer dans le design UX. Ce programme m'a fourni non seulement les compétences techniques, mais aussi la confiance et le portfolio dont j'avais besoin pour réussir ma transition de carrière."
      }
    ],
    availablePrograms: language === 'en' ? 
      [
        {
          name: "Data Science & Analytics",
          duration: "16 weeks",
          format: "Online / Part-time",
          certification: "ISO-accredited Data Analyst Certification",
          popular: true,
          icon: "📊",
          description: "Master data analysis, machine learning, and statistical modeling to transform raw data into actionable insights",
          skills: ["Python", "SQL", "Machine Learning", "Data Visualization", "Statistical Analysis"]
        },
        {
          name: "UX/UI Design",
          duration: "12 weeks",
          format: "Online / Part-time",
          certification: "Professional UX Designer Certification",
          icon: "🎨",
          description: "Learn to create engaging, user-friendly digital experiences through research, prototyping, and design thinking",
          skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Visual Design"]
        },
        {
          name: "Project Management",
          duration: "10 weeks",
          format: "Online / Part-time",
          certification: "PMI-approved Project Management Professional (PMP)",
          icon: "📋",
          description: "Develop the skills to lead projects effectively, from initiation through planning, execution, and closure",
          skills: ["Project Planning", "Risk Management", "Agile Methodologies", "Stakeholder Management", "Resource Allocation"]
        },
        {
          name: "Digital Marketing",
          duration: "8 weeks",
          format: "Online / Part-time",
          certification: "Certified Digital Marketing Professional",
          icon: "📱",
          description: "Master the strategies and tools to create effective digital marketing campaigns across multiple platforms",
          skills: ["SEO", "Content Marketing", "Social Media", "Email Marketing", "Analytics"]
        },
        {
          name: "Cloud Computing",
          duration: "14 weeks",
          format: "Online / Part-time",
          certification: "AWS Solutions Architect & Azure Administrator",
          icon: "☁️",
          description: "Gain expertise in designing, deploying, and managing cloud infrastructure on major platforms",
          skills: ["AWS", "Azure", "Cloud Architecture", "Security", "DevOps"]
        }
      ] :
      [
        {
          name: "Science des Données & Analyse",
          duration: "16 semaines",
          format: "En ligne / Temps partiel",
          certification: "Certification d'Analyste de Données accréditée ISO",
          popular: true,
          icon: "📊",
          description: "Maîtrisez l'analyse de données, l'apprentissage automatique et la modélisation statistique pour transformer des données brutes en insights exploitables",
          skills: ["Python", "SQL", "Machine Learning", "Visualisation de Données", "Analyse Statistique"]
        },
        {
          name: "Design UX/UI",
          duration: "12 semaines",
          format: "En ligne / Temps partiel",
          certification: "Certification de Designer UX Professionnel",
          icon: "🎨",
          description: "Apprenez à créer des expériences numériques attrayantes et conviviales grâce à la recherche, au prototypage et à la pensée design",
          skills: ["Recherche Utilisateur", "Wireframing", "Prototypage", "Tests d'Utilisabilité", "Design Visuel"]
        },
        {
          name: "Gestion de Projet",
          duration: "10 semaines",
          format: "En ligne / Temps partiel",
          certification: "Project Management Professional (PMP) approuvé par PMI",
          icon: "📋",
          description: "Développez les compétences pour diriger efficacement des projets, de l'initiation à la planification, l'exécution et la clôture",
          skills: ["Planification de Projet", "Gestion des Risques", "Méthodologies Agile", "Gestion des Parties Prenantes", "Allocation des Ressources"]
        },
        {
          name: "Marketing Digital",
          duration: "8 semaines",
          format: "En ligne / Temps partiel",
          certification: "Professionnel Certifié en Marketing Digital",
          icon: "📱",
          description: "Maîtrisez les stratégies et les outils pour créer des campagnes de marketing digital efficaces sur plusieurs plateformes",
          skills: ["SEO", "Marketing de Contenu", "Médias Sociaux", "Email Marketing", "Analytique"]
        },
        {
          name: "Cloud Computing",
          duration: "14 semaines",
          format: "En ligne / Temps partiel",
          certification: "AWS Solutions Architect & Azure Administrator",
          icon: "☁️",
          description: "Acquérez une expertise dans la conception, le déploiement et la gestion d'infrastructure cloud sur les principales plateformes",
          skills: ["AWS", "Azure", "Architecture Cloud", "Sécurité", "DevOps"]
        }
      ],
    pricing: [
      {
        name: language === 'en' ? "Single Certification" : "Certification Unique",
        price: language === 'en' ? "From $1,999" : "À partir de 1 999€",
        features: language === 'en' ? 
          ["One complete certification program", "Access to learning platform", "Hands-on projects", "Certification exam fee", "3 months of career support"] :
          ["Un programme de certification complet", "Accès à la plateforme d'apprentissage", "Projets pratiques", "Frais d'examen de certification", "3 mois de soutien à la carrière"]
      },
      {
        name: language === 'en' ? "Career Track" : "Parcours de Carrière",
        price: language === 'en' ? "From $3,499" : "À partir de 3 499€",
        popular: true,
        features: language === 'en' ? 
          ["Two complementary certifications", "Extended platform access", "Advanced projects", "All certification exam fees", "1-on-1 mentorship", "6 months of career support", "Job placement assistance"] :
          ["Deux certifications complémentaires", "Accès étendu à la plateforme", "Projets avancés", "Tous les frais d'examen de certification", "Mentorat individuel", "6 mois de soutien à la carrière", "Assistance au placement professionnel"]
      },
      {
        name: language === 'en' ? "Enterprise" : "Entreprise",
        price: language === 'en' ? "Custom" : "Personnalisé",
        features: language === 'en' ? 
          ["Custom training programs", "Team-based enrollment", "Company-specific projects", "Progress reporting", "Dedicated account manager", "Custom learning platform", "Ongoing support"] :
          ["Programmes de formation personnalisés", "Inscription basée sur l'équipe", "Projets spécifiques à l'entreprise", "Rapports de progression", "Gestionnaire de compte dédié", "Plateforme d'apprentissage personnalisée", "Support continu"]
      }
    ],
    faqs: language === 'en' ? 
      [
        {
          question: "Do I need prior experience for these certification programs?",
          answer: "Most of our programs are designed for different experience levels. Some entry-level certifications require no prior experience, while advanced programs may have prerequisites. Each program page clearly outlines any requirements, and we offer preparatory courses if needed."
        },
        {
          question: "How much time should I expect to commit weekly?",
          answer: "Most part-time programs require 15-20 hours per week, which includes instruction time, assignments, and projects. Our flexible format allows you to complete some activities on your own schedule, though there are some synchronized components."
        },
        {
          question: "What happens if I can't complete the program on schedule?",
          answer: "We understand that life happens. If you need additional time, we offer extension options at a nominal fee. You'll retain access to all course materials and instructor support during this extension period."
        }
      ] :
      [
        {
          question: "Ai-je besoin d'une expérience préalable pour ces programmes de certification?",
          answer: "La plupart de nos programmes sont conçus pour différents niveaux d'expérience. Certaines certifications de niveau débutant ne nécessitent aucune expérience préalable, tandis que les programmes avancés peuvent avoir des prérequis. Chaque page de programme décrit clairement les exigences, et nous proposons des cours préparatoires si nécessaire."
        },
        {
          question: "Combien de temps dois-je prévoir de consacrer chaque semaine?",
          answer: "La plupart des programmes à temps partiel nécessitent 15 à 20 heures par semaine, ce qui comprend le temps d'instruction, les devoirs et les projets. Notre format flexible vous permet de réaliser certaines activités selon votre propre horaire, bien qu'il y ait certaines composantes synchronisées."
        },
        {
          question: "Que se passe-t-il si je ne peux pas terminer le programme selon le calendrier?",
          answer: "Nous comprenons que la vie peut être imprévisible. Si vous avez besoin de plus de temps, nous proposons des options de prolongation moyennant des frais nominaux. Vous conserverez l'accès à tous les matériels de cours et au soutien des instructeurs pendant cette période de prolongation."
        }
      ],
    employers: language === 'en' ? 
      ["Microsoft", "Google", "Amazon", "IBM", "Adobe", "Salesforce"] :
      ["Microsoft", "Google", "Amazon", "IBM", "Adobe", "Salesforce"]
  };

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={language === 'en' ? 'certification, training programs, professional development, career advancement, skills development' : 'certification, programmes de formation, développement professionnel, avancement de carrière, développement des compétences'} />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/images/training-programs-social.jpg" />
        <meta property="og:url" content="https://careerguidance.com/services/training" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/images/training-programs-social.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://careerguidance.com/services/training" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "${language === 'en' ? 'Certified Training Programs' : 'Programmes de Formation Certifiés'}",
              "description": "${pageDescription}",
              "provider": {
                "@type": "Organization",
                "name": "Career Guidance",
                "sameAs": "https://careerguidance.com"
              },
              "offers": {
                "@type": "Offer",
                "price": "1999",
                "priceCurrency": "USD"
              }
            }
          `}
        </script>
      </Head>

      <main className="min-h-screen bg-white text-gray-800">

        {/* Back to Top Button - Accessible */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-green-600 rounded-full text-white shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
              aria-label={language === 'en' ? 'Back to top' : 'Retour en haut'}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Hero Section - Pure White Background */}
        <section 
          ref={heroRef} 
          className="relative pt-28 pb-20 overflow-hidden z-10 bg-white"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative z-10">
                <nav aria-label="Breadcrumb" className="mb-6">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                      <Link 
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600"
                      >
                        <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        {language === 'en' ? 'Home' : 'Accueil'}
                      </Link>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <Link 
                          href="/services" 
                          className="ml-1 text-sm font-medium text-gray-700 hover:text-green-600 md:ml-2"
                        >
                          {language === 'en' ? 'Services' : 'Services'}
                        </Link>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span className="ml-1 text-sm font-medium text-green-600 md:ml-2">
                          {language === 'en' ? 'Training Programs' : 'Programmes de Formation'}
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
                
                <h1 
                  id="hero-heading"
                  className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                >
                  <span className="inline-block relative">
                    {service.title}
                    <span className="absolute -bottom-2 left-0 h-1 bg-green-500 rounded-full w-full"></span>
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-5 mb-10">
                  <Link 
                    href={`/services/${service.id}/apply`}
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium text-lg shadow-md hover:bg-green-700 transition-all duration-300"
                  >
                    <span className="mr-3">{service.cta}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="#programs"
                    className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-800 rounded-lg font-medium text-lg shadow-sm hover:bg-gray-50 transition-all duration-300"
                  >
                    <span className="mr-3">{language === 'en' ? 'View Programs' : 'Voir les Programmes'}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
                
                <div className="flex flex-wrap items-center space-x-8">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="flex text-amber-400" aria-label={`Rating: ${service.rating} out of 5 stars`}>
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.floor(service.rating) ? "text-amber-400" : "text-gray-300"}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      
                      {/* Fractional star for decimal ratings */}
                      {service.rating % 1 !== 0 && (
                        <div className="relative">
                          <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${(service.rating % 1) * 100}%` }}>
                            <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <span className="ml-2 text-gray-600 font-medium">
                      {service.rating.toFixed(1)} ({service.reviewCount.toLocaleString()} {language === 'en' ? 'reviews' : 'avis'})
                    </span>
                  </div>
                  
                  <div className="hidden md:block h-8 w-px bg-gray-200"></div>
                  
                  <div className="flex items-center text-gray-600 text-sm sm:text-base">
                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-medium">{language === 'en' ? 'Trusted by 15,000+ professionals' : 'Approuvé par plus de 15 000 professionnels'}</span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 h-full">
                <div className="relative">
                  {/* Card with key outcomes */}
                  <div className="rounded-2xl bg-gradient-to-br from-green-600 to-green-700 p-8 text-white shadow-xl relative overflow-hidden z-10">
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-8">
                        {service.icon}
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {language === 'en' ? 'Key Outcomes' : 'Résultats Clés'}
                      </h2>
                      
                      <ul className="space-y-4" aria-label={language === 'en' ? 'Program outcomes' : 'Résultats du programme'}>
                        {service.outcomes.map((outcome, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start"
                          >
                            <div className="mr-3 flex-shrink-0 mt-1 bg-white/20 rounded-full p-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-medium">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Statistics cards */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-md p-4 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 text-green-600">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">
                          <Counter value={service.stat1.value} suffix={service.stat1.suffix} />
                        </div>
                        <div className="text-xs text-gray-600">{service.stat1.label}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-md p-4 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">
                          <Counter value={service.stat2.value} suffix={service.stat2.suffix} />
                        </div>
                        <div className="text-xs text-gray-600">{service.stat2.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trusted by brands */}
            <div className="mt-16">
              <p className="text-center text-gray-500 text-sm uppercase tracking-wider font-medium mb-6">
                {language === 'en' ? 'Trusted by leading companies worldwide' : 'Approuvé par des entreprises leaders dans le monde entier'}
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {service.employers.map((employer, idx) => (
                  <div 
                    key={idx}
                    className="text-gray-400 font-medium text-xl hover:text-gray-600 transition-colors"
                  >
                    {employer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs Section - Now with white background */}
        <section 
          id="programs" 
          ref={programsRef}
          className="py-20 relative z-10 bg-white"
          aria-labelledby="programs-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 
                id="programs-heading"
                className="text-3xl font-bold mb-6 text-gray-900"
              >
                {language === 'en' ? 'Available Programs' : 'Programmes Disponibles'}
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Choose from our range of industry-leading certification programs'
                  : 'Choisissez parmi notre gamme de programmes de certification leaders de l\'industrie'}
              </p>
            </div>
            
            {/* Program selection tabs - Accessible */}
            <div 
              className="flex flex-wrap justify-center gap-3 mb-12 px-4"
              role="tablist"
              aria-label={language === 'en' ? 'Training Programs' : 'Programmes de Formation'}
            >
              {service.availablePrograms.map((program, idx) => (
                <button
                  key={idx}
                  role="tab"
                  id={`tab-${idx}`}
                  aria-selected={activeProgram === idx ? "true" : "false"}
                  aria-controls={`tabpanel-${idx}`}
                  className={`px-5 py-3 rounded-lg text-sm md:text-base font-medium transition-all ${
                    activeProgram === idx 
                      ? 'bg-green-600 text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  onClick={() => setActiveProgram(idx)}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg" aria-hidden="true">{program.icon}</span>
                    <span>{program.name}</span>
                  </span>
                </button>
              ))}
            </div>
            
            {/* Program details */}
            <div className="grid grid-cols-1 gap-8">
              {service.availablePrograms.map((program, idx) => (
                <div 
                  key={idx}
                  role="tabpanel"
                  id={`tabpanel-${idx}`}
                  aria-labelledby={`tab-${idx}`}
                  className={`${activeProgram === idx ? 'block' : 'hidden'}`}
                >
                  <div
                    className={`rounded-xl overflow-hidden shadow-md relative ${program.popular ? 'ring-2 ring-green-500' : 'border border-gray-200'}`}
                  >
                    {program.popular && (
                      <div className="absolute top-0 right-0 bg-green-600 text-white text-xs uppercase tracking-wider font-bold px-4 py-1 rounded-bl-lg z-10">
                        {language === 'en' ? 'MOST POPULAR' : 'LE PLUS POPULAIRE'}
                      </div>
                    )}
                    
                    <div className="bg-white p-8 relative z-10">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-5 mb-8">
                            <div className={`w-16 h-16 flex items-center justify-center rounded-lg ${program.popular ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-700'} text-3xl`}>
                              <span aria-hidden="true">{program.icon}</span>
                            </div>
                            <div>
                              <h3 className={`text-2xl font-bold text-gray-900 ${program.popular ? 'text-green-600' : ''}`}>
                                {program.name}
                              </h3>
                              <p className="text-gray-600 mt-2">
                                {program.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-white border border-gray-100 rounded-lg p-6 mb-8 shadow-sm">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                              <svg className="w-5 h-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              {language === 'en' ? 'Program Details' : 'Détails du Programme'}
                            </h4>
                            <dl className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              <div className="flex items-center">
                                <dt className="sr-only">{language === 'en' ? 'Duration' : 'Durée'}</dt>
                                <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <dd>
                                  <p className="text-gray-700 font-medium">{language === 'en' ? 'Duration' : 'Durée'}</p>
                                  <p className="text-gray-900 font-bold">{program.duration}</p>
                                </dd>
                              </div>
                              
                              <div className="flex items-center">
                                <dt className="sr-only">{language === 'en' ? 'Format' : 'Format'}</dt>
                                <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <dd>
                                  <p className="text-gray-700 font-medium">{language === 'en' ? 'Format' : 'Format'}</p>
                                  <p className="text-gray-900 font-bold">{program.format}</p>
                                </dd>
                              </div>
                              
                              <div className="flex items-center">
                                <dt className="sr-only">{language === 'en' ? 'Certification' : 'Certification'}</dt>
                                <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <dd>
                                  <p className="text-gray-700 font-medium">{language === 'en' ? 'Certification' : 'Certification'}</p>
                                  <p className="text-gray-900 font-bold text-sm">{program.certification}</p>
                                </dd>
                              </div>
                            </dl>
                          </div>
                          
                          <Link 
                            href={`/services/training/programs/${program.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium shadow-md hover:bg-green-700 transition-all duration-300"
                          >
                            <span className="mr-2">
                              {language === 'en' ? `Explore ${program.name}` : `Explorer ${program.name}`}
                            </span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                        
                        <div className="bg-white border border-gray-100 rounded-lg p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            {language === 'en' ? 'Skills You\'ll Learn' : 'Compétences à Acquérir'}
                          </h4>
                          
                          <ul className="space-y-4" aria-label={language === 'en' ? 'Skills covered in the program' : 'Compétences couvertes dans le programme'}>
                            {program.skills.map((skill, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0 mt-0.5">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span className="text-gray-700 font-medium">{skill}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="text-gray-900 text-sm">
                              <p className="font-medium mb-2 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {language === 'en' ? 'Career Potential' : 'Potentiel de Carrière'}
                              </p>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-2" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                <div className="h-full bg-green-600 w-[85%]"></div>
                              </div>
                              <div className="flex justify-between mt-1">
                                <span className="text-xs text-gray-600">
                                  {language === 'en' ? 'High demand' : 'Forte demande'}
                                </span>
                                <span className="text-xs text-green-600 font-medium">
                                  {language === 'en' ? 'Excellent' : 'Excellent'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/services/training/compare"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-800 rounded-lg font-medium shadow-sm hover:bg-gray-50 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>{language === 'en' ? 'Compare All Programs' : 'Comparer Tous les Programmes'}</span>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Process Section - White background */}
        <section 
          ref={processRef} 
          className="py-24 relative z-10 bg-white"
          aria-labelledby="process-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                id="process-heading"
                className="text-3xl font-bold mb-6 text-gray-900"
              >
                {language === 'en' ? 'Our Training Process' : 'Notre Processus de Formation'}
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'A comprehensive approach to ensure successful learning and certification'
                  : 'Une approche complète pour assurer un apprentissage et une certification réussis'}
              </p>
            </div>
            
            <div className="relative">
              {/* Process timeline line */}
                           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-300 via-green-500 to-blue-500 transform md:translate-x-[-0.5px]"></div>
              
              <div className="space-y-16 relative">
                {service.process.map((step, idx) => (
                  <div 
                    key={idx}
                    className="relative"
                  >
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                      <div className="w-full md:w-1/2 pb-8 md:pb-0 flex flex-col items-center md:items-end md:pr-12 relative z-10">
                        <div 
                          className={`w-16 h-16 rounded-full ${idx % 2 === 0 ? 'bg-green-600' : 'bg-blue-600'} text-white flex items-center justify-center font-bold text-xl mb-4 md:mb-0 shadow-md`}
                          aria-hidden="true"
                        >
                          {idx + 1}
                        </div>
                      </div>
                      
                      <div className="w-full md:w-1/2 md:pl-12">
                        <div 
                          className="bg-white rounded-lg p-6 shadow-md border border-gray-100 relative overflow-hidden"
                        >
                          <h3 className={`text-xl font-bold mb-3 ${idx % 2 === 0 ? 'text-green-600' : 'text-blue-600'}`}>
                            <span className="sr-only">Step {idx + 1}:</span> {step}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed">
                            {service.processDescriptions[idx]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Process summary card */}
            <div className="mt-16 rounded-lg overflow-hidden relative">
              <div className="bg-green-600 p-8 lg:p-10 text-white relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {language === 'en' ? 'Your Path to Professional Growth' : 'Votre Chemin vers la Croissance Professionnelle'}
                    </h3>
                    
                    <p className="text-white/90 text-lg mb-6">
                      {language === 'en' 
                        ? 'Our certification programs are designed to help you acquire the skills employers are actively seeking. With flexible learning options and expert instruction, you can advance your career while balancing your current responsibilities.'
                        : 'Nos programmes de certification sont conçus pour vous aider à acquérir les compétences que les employeurs recherchent activement. Avec des options d\'apprentissage flexibles et une instruction par des experts, vous pouvez faire progresser votre carrière tout en équilibrant vos responsabilités actuelles.'}
                    </p>
                    
                    <Link 
                      href="/services/training/methodology"
                      className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-lg font-medium shadow-md hover:bg-gray-50 transition-all duration-300"
                    >
                      {language === 'en' ? 'Learn more about our methodology' : 'En savoir plus sur notre méthodologie'}
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '15k+', label: language === 'en' ? 'Graduates' : 'Diplômés' },
                      { value: '200+', label: language === 'en' ? 'Instructors' : 'Instructeurs' },
                      { value: '97%', label: language === 'en' ? 'Satisfaction' : 'Satisfaction' },
                      { value: '65+', label: language === 'en' ? 'Certifications' : 'Certifications' }
                    ].map((stat, idx) => (
                      <div 
                        key={idx}
                        className="bg-white/10 rounded-lg p-4"
                      >
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-white/80 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - White background */}
        <section 
          ref={testimonialsRef} 
          className="py-24 relative z-10 bg-white"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                id="testimonials-heading"
                className="text-3xl font-bold mb-6 text-gray-900"
              >
                {language === 'en' ? 'Student Testimonials' : 'Témoignages d\'Étudiants'}
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Hear from our graduates who have transformed their careers through our training programs'
                  : 'Écoutez nos diplômés qui ont transformé leur carrière grâce à nos programmes de formation'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.testimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 mr-4 relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-200">
                          <div className="w-full h-full bg-green-100 flex items-center justify-center text-green-600 text-xl font-bold" aria-hidden="true">
                            {testimonial.name.charAt(0)}
                          </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-green-600">{testimonial.title}</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <svg className="absolute top-0 left-0 w-10 h-10 text-gray-200 -translate-x-4 -translate-y-6 transform rotate-180" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      
                      <blockquote className="text-gray-700 mb-6 pl-2">
                        <p>{testimonial.text}</p>
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className="flex text-amber-400" aria-label="5 out of 5 stars">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {language === 'en' ? 'Verified Graduate' : 'Diplômé Vérifié'}
                        </span>
                      </div>
                      
                      <div>
                        <Link 
                          href={`/testimonials/${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-sm text-green-600 font-medium flex items-center hover:text-green-700 transition-colors"
                        >
                          {language === 'en' ? 'Read full story' : 'Lire l\'histoire complète'}
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/testimonials"
                className="inline-flex items-center px-6 py-3 bg-white border border-green-200 text-green-700 rounded-lg font-medium hover:bg-green-50 transition-all duration-300"
              >
                {language === 'en' ? 'View All Success Stories' : 'Voir Toutes les Histoires de Réussite'}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section - White background */}
        <section 
          ref={faqRef} 
          className="py-24 relative z-10 bg-white"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                id="faq-heading"
                className="text-3xl font-bold mb-6 text-gray-900"
              >
                {language === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {language === 'en' 
                  ? 'Find answers to common questions about our certification programs'
                  : 'Trouvez des réponses aux questions courantes sur nos programmes de certification'}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {service.faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-lg shadow-md border border-gray-100"
                >
                  <details className="group" id={`faq-${idx}`}>
                    <summary className="flex items-center justify-between cursor-pointer p-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      <svg className="w-6 h-6 text-green-600 group-open:transform group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            {/* Additional support options */}
            <div className="mt-16 bg-white rounded-lg shadow-md border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center text-white mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Need More Information?' : 'Besoin de Plus d\'Informations?'}
              </h3>
              
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Our program advisors are here to answer your questions and help you choose the right certification pathway.'
                  : 'Nos conseillers de programme sont là pour répondre à vos questions et vous aider à choisir le bon parcours de certification.'}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium shadow-md hover:bg-green-700 transition-all duration-300"
                >
                  <span>
                    {language === 'en' ? 'Schedule a Free Consultation' : 'Planifier une Consultation Gratuite'}
                  </span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
                
                <Link 
                  href="/services/training/faq"
                  className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  <span>
                    {language === 'en' ? 'View Detailed FAQ' : 'Voir FAQ Détaillée'}
                  </span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <p className="mt-6 text-sm text-gray-500">
                {language === 'en' 
                  ? 'Or call us directly at: (888) 555-CERT'
                  : 'Ou appelez-nous directement au: (888) 555-CERT'}
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section - Green background (keeping this for contrast) */}
        <section className="py-20 relative z-10 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {language === 'en' 
                    ? 'Ready to Advance Your Career With Industry-Recognized Certifications?' 
                    : 'Prêt à Faire Progresser Votre Carrière Avec des Certifications Reconnues?'}
                </h2>
                
                <p className="text-xl text-white/90 mb-8">
                  {language === 'en' 
                    ? 'Join thousands of professionals who have transformed their careers through our certification programs. Apply now and take the first step toward your next career milestone.'
                    : 'Rejoignez des milliers de professionnels qui ont transformé leur carrière grâce à nos programmes de certification. Postulez maintenant et faites le premier pas vers votre prochain jalon professionnel.'}
                </p>
                
                <div className="flex flex-wrap gap-5">
                  <Link 
                    href="/services/training/apply"
                    className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-lg font-medium text-lg shadow-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    <span className="mr-3">{language === 'en' ? 'Apply Now' : 'Postuler Maintenant'}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="/services/training/programs"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="mr-3">{language === 'en' ? 'Browse All Programs' : 'Parcourir Tous les Programmes'}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
                
                <div className="flex items-center mt-8 text-white/80">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-sm">{language === 'en' ? 'No obligation. Free consultation & program assessment.' : 'Sans obligation. Consultation gratuite et évaluation de programme.'}</span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse-slow"></div>
                  <div className="absolute inset-8 bg-white/20 rounded-full animate-pulse-slower"></div>
                  <div className="absolute inset-16 bg-white/20 rounded-full animate-pulse-slowest"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
                      <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trusted by brands in footer */}
            <div className="mt-16 pt-10 border-t border-white/20">
              <p className="text-center text-white/60 text-sm uppercase tracking-wider font-medium mb-6">
                {language === 'en' ? 'Certification programs recognized by industry leaders' : 'Programmes de certification reconnus par les leaders de l\'industrie'}
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {service.employers.map((employer, idx) => (
                  <div 
                    key={idx}
                    className="text-white/60 font-medium text-xl"
                  >
                    {employer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Last Updated Footer */}
        <div className="bg-white py-4 text-center text-gray-500 text-sm border-t border-gray-100">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Last updated: {currentDateTime}</span>
            <span>•</span>
            <span className="text-green-600">{currentUser}</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default TrainingProgramsPage;
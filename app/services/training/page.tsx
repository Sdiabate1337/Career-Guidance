"use client";

import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LanguageContext } from '../../contexts/LanguageContext';
import Testimonial from '../Testimonial';
import PricingTable from '../PricingTable';
import FAQ from '../../components/FAQ';

const TrainingProgramsPage = () => {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);
  const [activeProgram, setActiveProgram] = useState(0);
  
  // Current user and timestamp - Updated as requested
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-05-28 18:42:56";
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Animated counter component for statistics
  const Counter: React.FC<{ value: number; duration?: number; suffix?: string }> = ({ value, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
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
      
      return () => {
        clearInterval(timer);
      };
    }, [value, duration]);
    
    return <span className="font-bold">{count}{suffix}</span>;
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
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    lightBg: "bg-white dark:bg-grey-800",
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
    <div className="bg-grey-50 dark:bg-grey-900 min-h-screen overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 dark:bg-green-500/10 rounded-full blur-[100px]"
          style={{ transform: `translate(20%, -20%) rotate(${scrollY * 0.02}deg)` }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px]"
          style={{ transform: `translate(-20%, 20%) rotate(${-scrollY * 0.02}deg)` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-white dark:bg-grey-800 overflow-hidden z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-green-100 dark:bg-green-900/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center mb-6 rounded-full border border-grey-200 dark:border-grey-700 py-1 pl-1 pr-4 group overflow-hidden">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mr-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7m5 14l7-7-7-7" />
                  </svg>
                </div>
                <Link 
                  href="/services" 
                  className="text-grey-600 dark:text-black hover:text-green-600 dark:hover:text-green-600 text-sm font-medium transition-colors"
                >
                  {language === 'en' ? 'Back to All Services' : 'Retour à Tous les Services'}
                </Link>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-black dark:text-black mb-6 relative">
                <span className="relative">
                  {service.title}
                  <div className="absolute -bottom-3 left-0 h-1 bg-green-500 rounded-full w-full"></div>
                </span>
              </h1>
              
              <p className="text-xl text-grey-700 dark:text-black mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="relative overflow-hidden rounded-full">
                  <Link 
                    href={`/services/${service.id}/apply`}
                    className="relative z-10 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-medium transition-all duration-300 text-lg flex items-center group hover:shadow-lg hover:-translate-y-1"
                  >
                    <span className="mr-2">{service.cta}</span>
                    <span className="animate-bounce">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
                
                <div>
                  <Link 
                    href="#programs"
                    className="px-8 py-4 bg-white dark:bg-grey-700 border border-grey-200 dark:border-grey-600 text-black dark:text-black rounded-full font-medium hover:shadow-xl transition-all duration-300 text-lg flex items-center hover:-translate-y-1"
                  >
                    <span className="mr-2">{language === 'en' ? 'View Programs' : 'Voir les Programmes'}</span>
                    <span className="animate-bounce">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className={`flex ${service.textColor}`}>
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5" 
                        fill={i < Math.floor(service.rating) ? "currentColor" : "none"} 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-grey-700 dark:text-black">
                    {service.rating} ({service.reviewCount} {language === 'en' ? 'reviews' : 'avis'})
                  </span>
                </div>
                
                <div className="h-6 w-px bg-grey-300 dark:bg-grey-700"></div>
                
                <div className="text-grey-700 dark:text-black flex items-center text-sm">
                  <svg className="w-5 h-5 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{language === 'en' ? 'Trusted by 15,000+ professionals' : 'Approuvé par plus de 15 000 professionnels'}</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="relative">
                {/* Card glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-70"></div>
                
                <div className="rounded-2xl bg-gradient-to-br from-green-600 to-green-800 p-10 text-white shadow-xl relative overflow-hidden z-10">
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
                    <div className="w-20 h-20 mb-6 animate-pulse">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">
                      {language === 'en' ? 'Key Outcomes' : 'Résultats Clés'}
                    </h3>
                    
                    <ul className="space-y-3">
                      {service.outcomes.map((outcome, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start"
                        >
                          <div className="mr-3 flex-shrink-0 mt-0.5 bg-white/20 rounded-full p-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="font-medium">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Decorative circle */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/10"></div>
                  <div className="absolute top-10 -left-10 w-32 h-32 rounded-full bg-white/5"></div>
                </div>
                
                {/* Floating stats cards */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-grey-700 rounded-xl shadow-xl p-3 transform hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-black dark:text-black">
                        <Counter value={service.stat1.value} suffix={service.stat1.suffix} />
                      </div>
                      <div className="text-xs text-grey-600 dark:text-black/80">{service.stat1.label}</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-grey-700 rounded-xl shadow-xl p-3 transform hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-black dark:text-black">
                        <Counter value={service.stat2.value} suffix={service.stat2.suffix} />
                      </div>
                      <div className="text-xs text-grey-600 dark:text-black/80">{service.stat2.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-600 text-sm font-medium mb-4">
                {language === 'en' ? 'Program Benefits' : 'Avantages du Programme'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-black">
              {language === 'en' ? 'Training Features' : 'Caractéristiques de la Formation'}
            </h2>
            
            <p className="text-xl text-grey-600 dark:text-black max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Industry-recognized certification programs to enhance your career prospects'
                : 'Des programmes de certification reconnus par l\'industrie pour améliorer vos perspectives de carrière'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-grey-800 rounded-xl p-6 shadow-lg border border-grey-100 dark:border-grey-700 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 dark:bg-green-500/10 rounded-full -mt-10 -mr-10 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center shadow-lg mr-4 text-2xl`}>
                      {feature.icon}
                    </div>
                    <h3 className={`text-xl font-bold text-black dark:text-black`}>
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-grey-600 dark:text-black">
                    {feature.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-grey-100 dark:border-grey-700">
                    <span className="inline-flex items-center text-green-600 dark:text-green-500 text-sm font-medium group hover:translate-x-1 transition-transform">
                      {language === 'en' ? 'Learn more' : 'En savoir plus'}
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
                
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${service.bgColor} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Available Programs Section */}
      <section id="programs" className="py-20 bg-white dark:bg-grey-800 relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-grey-50 to-transparent dark:from-grey-900 dark:to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-grey-50 to-transparent dark:from-grey-900 dark:to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100/40 dark:bg-green-900/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 text-sm font-medium mb-4">
                {language === 'en' ? 'Certification Tracks' : 'Parcours de Certification'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-black">
              {language === 'en' ? 'Available Programs' : 'Programmes Disponibles'}
            </h2>
            
            <p className="text-xl text-grey-600 dark:text-black max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Choose from our range of industry-leading certification programs'
                : 'Choisissez parmi notre gamme de programmes de certification leaders de l\'industrie'}
            </p>
          </div>
          
          {/* Program selection tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {service.availablePrograms.map((program, idx) => (
              <button
                key={idx}
                className={`px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center transform hover:-translate-y-1 ${
                  activeProgram === idx 
                    ? 'bg-green-600 text-white shadow-lg shadow-green-500/20' 
                    : 'bg-grey-100 dark:bg-grey-700 text-black dark:text-black hover:bg-grey-200 dark:hover:bg-grey-600'
                }`}
                onClick={() => setActiveProgram(idx)}
              >
                <span className="mr-2 text-lg">{program.icon}</span>
                <span>{program.name}</span>
              </button>
            ))}
          </div>
          
          {/* Program details */}
          <div className="grid grid-cols-1 gap-8">
            {service.availablePrograms.map((program, idx) => (
              idx === activeProgram && (
                <div 
                  key={program.name}
                  className={`rounded-xl overflow-hidden shadow-xl relative ${program.popular ? 'border-2 border-green-500' : 'border border-grey-200 dark:border-grey-700'} transform hover:-translate-y-2 transition-transform duration-300`}
                >
                  {program.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10">
                      {language === 'en' ? 'MOST POPULAR' : 'LE PLUS POPULAIRE'}
                    </div>
                  )}
                  
                  <div className="bg-white dark:bg-grey-800 p-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 flex items-center justify-center rounded-full ${program.popular ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-grey-100 dark:bg-grey-700 text-grey-700 dark:text-black'} text-2xl`}>
                            <span>{program.icon}</span>
                          </div>
                          <div>
                            <h3 className={`text-2xl font-bold text-black dark:text-black ${program.popular ? 'text-green-600 dark:text-green-500' : ''}`}>
                              {program.name}
                            </h3>
                            <p className="text-grey-600 dark:text-black mt-1">
                              {program.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="bg-grey-50 dark:bg-grey-700/20 rounded-xl p-6 mb-6">
                          <h4 className="text-lg font-bold text-black dark:text-black mb-4">
                            {language === 'en' ? 'Program Details' : 'Détails du Programme'}
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <svg className={`w-5 h-5 text-green-600 dark:text-green-500 mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-grey-700 dark:text-black font-medium">{language === 'en' ? 'Duration:' : 'Durée:'} <span className="font-normal">{program.duration}</span></span>
                            </div>
                            
                            <div className="flex items-center">
                              <svg className={`w-5 h-5 text-green-600 dark:text-green-500 mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                              <span className="text-grey-700 dark:text-black font-medium">{language === 'en' ? 'Format:' : 'Format:'} <span className="font-normal">{program.format}</span></span>
                            </div>
                            
                            <div className="flex items-center">
                              <svg className={`w-5 h-5 text-green-600 dark:text-green-500 mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                              <span className="text-grey-700 dark:text-black font-medium">{language === 'en' ? 'Certification:' : 'Certification:'} <span className="font-normal">{program.certification}</span></span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="inline-block transform hover:scale-105 transition-transform">
                          <Link 
                            href={`/services/training/programs/${program.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium shadow-md hover:shadow-xl transition-all duration-300"
                          >
                            <span className="mr-2">
                              {language === 'en' ? `Explore ${program.name}` : `Explorer ${program.name}`}
                            </span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-6">
                        <h4 className="text-lg font-bold text-black dark:text-black mb-4">
                          {language === 'en' ? 'Skills You\'ll Learn' : 'Compétences à Acquérir'}
                        </h4>
                        
                        <ul className="space-y-3">
                          {program.skills.map((skill, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-5 h-5 text-green-600 dark:text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-grey-700 dark:text-black">{skill}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 pt-6 border-t border-green-100 dark:border-green-900/30">
                          <div className="text-black dark:text-black text-sm">
                            <span className="font-medium">
                              {language === 'en' ? 'Career Potential:' : 'Potentiel de Carrière:'}
                            </span>
                            <div className="h-2 bg-grey-200 dark:bg-grey-700 rounded-full overflow-hidden mt-2">
                              <div className="h-full bg-green-600 w-4/5"></div>
                            </div>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-grey-600 dark:text-black/80">
                                {language === 'en' ? 'High demand' : 'Forte demande'}
                              </span>
                              <span className="text-xs text-green-600 dark:text-green-500 font-medium">
                                {language === 'en' ? 'Excellent' : 'Excellent'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block transform hover:scale-105 transition-transform">
              <Link 
                href="/services/training/compare"
                className="inline-flex items-center px-6 py-3 bg-white dark:bg-grey-700 border border-grey-200 dark:border-grey-600 text-black dark:text-black rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>{language === 'en' ? 'Compare All Programs' : 'Comparer Tous les Programmes'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-grey-50 dark:bg-grey-900 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 text-sm font-medium mb-4">
                {language === 'en' ? 'Our Methodology' : 'Notre Méthodologie'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-black">
              {language === 'en' ? 'Our Training Process' : 'Notre Processus de Formation'}
            </h2>
            
            <p className="text-xl text-grey-600 dark:text-black max-w-3xl mx-auto">
              {language === 'en' 
                ? 'A comprehensive approach to ensure successful learning and certification'
                : 'Une approche complète pour assurer un apprentissage et une certification réussis'}
            </p>
          </div>
          
          <div className="relative">
            {/* Process timeline line - upgraded with gradient */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-300 via-green-500 to-blue-500 dark:from-green-500 dark:via-green-600 dark:to-blue-600 transform md:translate-x-[-0.5px]"></div>
            
            <div className="space-y-16 relative">
              {service.process.map((step, idx) => (
                <div 
                  key={idx}
                  className="relative"
                >
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="w-full md:w-1/2 pb-8 md:pb-0 flex flex-col items-center md:items-end md:pr-8">
                      <div 
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${idx % 2 === 0 ? 'from-green-500 to-green-700' : 'from-blue-500 to-blue-700'} text-white flex items-center justify-center font-bold text-xl mb-4 md:mb-0 z-10 shadow-lg hover:scale-110 transition-transform`}
                      >
                        {idx + 1}
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 md:pl-8">
                      <div 
                        className="bg-white dark:bg-grey-800 rounded-xl p-6 shadow-lg border border-grey-100 dark:border-grey-700 relative overflow-hidden hover:-translate-y-2 transition-transform"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/5 to-blue-500/5 dark:from-green-500/10 dark:to-blue-500/10 rounded-full -mt-10 -mr-10"></div>
                        
                        <h3 className="text-xl font-bold mb-3 text-black dark:text-black">
                          {step}
                        </h3>
                        
                        <p className="text-grey-600 dark:text-black">
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
          <div 
            className="mt-16 bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                  <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                    <rect width="80" height="80" fill="url(#smallGrid)" />
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {language === 'en' ? 'Your Path to Professional Growth' : 'Votre Chemin vers la Croissance Professionnelle'}
                </h3>
                <p className="text-white/90 mb-6">
                  {language === 'en' 
                    ? 'Our certification programs are designed to help you acquire the skills employers are actively seeking. With flexible learning options and expert instruction, you can advance your career while balancing your current responsibilities.'
                    : 'Nos programmes de certification sont conçus pour vous aider à acquérir les compétences que les employeurs recherchent activement. Avec des options d\'apprentissage flexibles et une instruction par des experts, vous pouvez faire progresser votre carrière tout en équilibrant vos responsabilités actuelles.'}
                </p>
                <div className="inline-block transform hover:scale-105 transition-transform">
                  <Link 
                    href="/services/training/methodology"
                    className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-medium shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    {language === 'en' ? 'Learn more about our methodology' : 'En savoir plus sur notre méthodologie'}
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
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
                    className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:-translate-y-1 transition-transform"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/10"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-grey-800 relative z-10">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 text-sm font-medium mb-4">
                {language === 'en' ? 'Success Stories' : 'Histoires de Réussite'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-black">
              {language === 'en' ? 'Student Testimonials' : 'Témoignages d\'Étudiants'}
            </h2>
            
            <p className="text-xl text-grey-600 dark:text-black max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Hear from our graduates who have transformed their careers through our training programs'
                : 'Écoutez nos diplômés qui ont transformé leur carrière grâce à nos programmes de formation'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-grey-50 dark:bg-grey-700 rounded-xl overflow-hidden shadow-lg border border-grey-100 dark:border-grey-600 relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/5 dark:bg-green-500/10 rounded-full -mt-20 -mr-20 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 mr-4 relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-200 dark:border-green-400">
                        <div className="w-full h-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-500 dark:text-green-300 text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-grey-700"></div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-black">
                        {testimonial.name}
                      </h3>
                      <p className="text-green-600 dark:text-green-400">{testimonial.title}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <svg className="absolute top-0 left-0 w-10 h-10 text-green-200 dark:text-green-700/50 -translate-x-4 -translate-y-6 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    
                    <p className="text-grey-700 dark:text-black mb-6 pl-2">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-grey-200 dark:border-grey-600">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-grey-600 dark:text-black/80">
                        {language === 'en' ? 'Verified Graduate' : 'Diplômé Vérifié'}
                      </span>
                    </div>
                    
                    <div className="transform hover:translate-x-1 transition-transform">
                      <Link 
                        href={`/testimonials/${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-green-600 dark:text-green-400 font-medium flex items-center"
                      >
                        {language === 'en' ? 'Read full story' : 'Lire l\'histoire complète'}
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="inline-block transform hover:scale-105 transition-transform">
              <Link 
                href="/testimonials"
                className="inline-flex items-center px-6 py-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-300"
              >
                {language === 'en' ? 'View All Success Stories' : 'Voir Toutes les Histoires de Réussite'}
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Employer Recognition Section */}
      <section className="py-16 bg-grey-50 dark:bg-grey-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-black dark:text-black mb-4">
              {language === 'en' ? 'Certifications Recognized By Leading Employers' : 'Certifications Reconnues Par les Principaux Employeurs'}
            </h3>
            <p className="text-grey-600 dark:text-black max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Our certification programs are valued by top companies worldwide'
                : 'Nos programmes de certification sont valorisés par les meilleures entreprises du monde entier'}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {service.employers.map((employer, idx) => (
              <div 
                key={idx}
                className="h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-105"
              >
                <div className="w-32 h-12 bg-white dark:bg-grey-800 shadow-sm rounded-md flex items-center justify-center">
                  <span className="text-grey-700 dark:text-black font-medium text-lg">
                    {employer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-grey-800 relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-grey-50 to-transparent dark:from-grey-900 dark:to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-grey-50 to-transparent dark:from-grey-900 dark:to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100/40 dark:bg-green-900/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                {language === 'en' ? 'Investment Options' : 'Options d\'Investissement'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-black">
              {language === 'en' ? 'Training Packages' : 'Forfaits de Formation'}
            </h2>
            
            <p className="text-xl text-grey-600 dark:text-black max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Flexible pricing options to fit your career development needs'
                : 'Options de tarification flexibles pour répondre à vos besoins de développement de carrière'}
            </p>
          </div>
          
          {/* Enhanced Pricing Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.pricing.map((plan, idx) => (
              <div 
                key={idx}
                className={`bg-white dark:bg-grey-800 rounded-xl shadow-lg overflow-hidden border ${plan.popular ? 'border-green-500 dark:border-green-400' : 'border-grey-200 dark:border-grey-700'} relative transform hover:-translate-y-2 transition-transform duration-300`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg z-10">
                    {language === 'en' ? 'MOST POPULAR' : 'LE PLUS POPULAIRE'}
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'bg-green-50 dark:bg-green-900/10' : ''}`}>
                  <h3 className="text-2xl font-bold text-black dark:text-black mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold text-black dark:text-black">{plan.price}</span>
                    <span className="text-grey-600 dark:text-black/80 ml-2 pb-1">
                      {plan.name !== (language === 'en' ? 'Enterprise' : 'Entreprise') ? 
                        (language === 'en' ? '/program' : '/programme') : 
                        ''}
                    </span>
                  </div>
                  
                  <div className="mb-8 transform hover:scale-105 transition-transform">
                    <Link 
                      href={`/services/${service.id}/pricing/${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block w-full py-3 px-4 text-center rounded-lg font-medium transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg hover:shadow-green-500/20'
                          : 'bg-white dark:bg-grey-700 border border-grey-200 dark:border-grey-600 text-black dark:text-black hover:bg-grey-50 dark:hover:bg-grey-600'
                      }`}
                    >
                      {language === 'en' ? 'Get Started' : 'Commencer'}
                    </Link>
                  </div>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-grey-700 dark:text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.popular && (
                  <div className="bg-green-600 text-white text-center py-2 text-sm font-medium">
                    {language === 'en' ? 'Most comprehensive value' : 'Valeur la plus complète'}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Payment options */}
          <div className="mt-12 flex justify-center">
            <div className="bg-white dark:bg-grey-800 rounded-xl p-4 shadow-md border border-grey-100 dark:border-grey-700 flex items-center gap-4 max-w-xl hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black dark:text-black">
                  {language === 'en' ? 'Flexible Payment Options Available' : 'Options de Paiement Flexibles Disponibles'}
                </h4>
                <p className="text-sm text-grey-600 dark:text-black">
                  {language === 'en' 
                    ? 'We offer interest-free installment plans and employer reimbursement programs'
                    : 'Nous proposons des plans de paiement échelonnés sans intérêt et des programmes de remboursement par l\'employeur'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-grey-50 dark:bg-grey-900 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 text-sm font-medium mb-4">
                {language === 'en' ? 'Questions & Answers' : 'Questions & Réponses'}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-black">
              {language === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
            </h2>
            
            <p className="text-xl text-grey-600 dark:text-black max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Find answers to common questions about our certification programs'
                : 'Trouvez des réponses aux questions courantes sur nos programmes de certification'}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {service.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-grey-800 rounded-xl overflow-hidden shadow-md border border-grey-100 dark:border-grey-700 hover:-translate-y-1 transition-transform"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-lg font-medium text-black dark:text-black">{faq.question}</h3>
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 transform group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-grey-700 dark:text-black">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          {/* Additional support options */}
          <div 
            className="mt-12 p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl shadow-lg border border-grey-100 dark:border-grey-700 text-center relative overflow-hidden hover:-translate-y-2 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 dark:from-green-500/10 dark:to-blue-500/10"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg animate-pulse">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              
              <h4 className="text-2xl font-bold text-black dark:text-black mb-3">
                {language === 'en' ? 'Need More Information?' : 'Besoin de Plus d\'Informations?'}
              </h4>
              
              <p className="text-grey-700 dark:text-black mb-6 text-lg">
                {language === 'en' 
                  ? 'Our program advisors are here to answer your questions and help you choose the right certification pathway.'
                  : 'Nos conseillers de programme sont là pour répondre à vos questions et vous aider à choisir le bon parcours de certification.'}
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="inline-block transform hover:scale-105 transition-transform">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-medium shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <span>
                      {language === 'en' ? 'Schedule a Free Consultation' : 'Planifier une Consultation Gratuite'}
                    </span>
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </Link>
                </div>
                
                <div className="inline-block transform hover:scale-105 transition-transform">
                  <Link 
                    href="/services/training/faq"
                    className="inline-flex items-center px-6 py-3 bg-white dark:bg-grey-700 border border-grey-200 dark:border-grey-600 text-black dark:text-black rounded-full font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <span>
                      {language === 'en' ? 'View Detailed FAQ' : 'Voir FAQ Détaillée'}
                    </span>
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <p className="mt-6 text-sm text-grey-600 dark:text-black/80">
                {language === 'en' 
                  ? 'Or call us directly at: (888) 555-CERT'
                  : 'Ou appelez-nous directement au: (888) 555-CERT'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-900 z-0"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-8">
              <span className="text-5xl animate-bounce">🏆</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {language === 'en' 
                ? 'Ready to Advance Your Career?' 
                : 'Prêt à Faire Progresser Votre Carrière?'}
            </h2>
            
            <p className="text-xl mb-10 text-white/90">
              {language === 'en' 
                ? 'Take the first step toward obtaining industry-recognized certifications that set you apart. Our expert instructors and flexible programs are designed for your success.'
                : 'Faites le premier pas vers l\'obtention de certifications reconnues par l\'industrie qui vous distinguent. Nos instructeurs experts et nos programmes flexibles sont conçus pour votre succès.'}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative transform hover:-translate-y-1 transition-transform">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/50 to-white/80 rounded-full blur-sm"></div>
                <Link 
                  href={`/services/${service.id}/apply`}
                  className="relative px-8 py-4 bg-white text-green-600 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300"
                >
                  {service.cta}
                </Link>
              </div>
              
              <div className="transform hover:-translate-y-1 transition-transform">
                <Link 
                  href="#programs"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-medium hover:bg-white/10 hover:shadow-xl transition-all duration-300"
                >
                  {language === 'en' ? 'Browse Programs' : 'Parcourir les Programmes'}
                </Link>
              </div>
            </div>
            
            <div className="mt-10 flex justify-center items-center gap-2 text-white/80">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">
                {language === 'en' 
                  ? 'Secure enrollment process with money-back guarantee'
                  : 'Processus d\'inscription sécurisé avec garantie de remboursement'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden attribution - current user and timestamp */}
      <div className="hidden">
        <span>{currentUser}</span>
        <span>{currentDateTime}</span>
      </div>
      
      {/* Add global styles for animations and effects */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        /* Focus styles for accessibility */
        button:focus-visible, a:focus-visible {
          outline: 2px solid rgb(74, 222, 128);
          outline-offset: 2px;
        }
        
        /* Enhanced scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(243, 244, 246, 0.5);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(74, 222, 128, 0.5);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(74, 222, 128, 0.7);
        }
        
        /* Details/summary custom styling */
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
        
        /* Basic animations */
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8,0,1,1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0,0,0.2,1);
          }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default TrainingProgramsPage;
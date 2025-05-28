"use client";

import { useContext, useState, useEffect, useCallback, useMemo, JSX } from 'react';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from '../contexts/LanguageContext';

// FAQ Item type definition
type FAQItem = {
  question: string;
  answer: string;
};

// FAQ Category type definition
type FAQCategory = {
  id: string;
  title: string;
  icon: JSX.Element;
  color: string;
  gradient: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  items: FAQItem[];
};

const FAQ = () => {
  const { language } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState<string | null>("linkedin");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [singleAccordion, setSingleAccordion] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<FAQCategory[]>([]);
  const [showAllResults, setShowAllResults] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Current user and timestamp - Updated for the given time
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-05-27 17:48:50";
  
  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Animations for section components
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  const headerControls = useAnimation();
  
  useEffect(() => {
    if (sectionInView) {
      headerControls.start("visible");
    }
  }, [sectionInView, headerControls]);

  // Toggle FAQ item with animation
  const toggleItem = useCallback((categoryId: string, index: number) => {
    const itemKey = `${categoryId}-${index}`;
    
    if (singleAccordion) {
      // Close all other items and open only the clicked one
      const newOpenItems: Record<string, boolean> = {};
      newOpenItems[itemKey] = !openItems[itemKey];
      setOpenItems(newOpenItems);
    } else {
      // Toggle just the clicked item
      setOpenItems(prev => ({
        ...prev,
        [itemKey]: !prev[itemKey]
      }));
    }
  }, [openItems, singleAccordion]);

  // FAQ Data
  const faqCategories: FAQCategory[] = useMemo(() => [
    {
      id: "linkedin",
      title: language === 'en' ? "LinkedIn Profile Management" : "Gestion de Compte LinkedIn",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: "#0077B5",
      gradient: "from-[#0077B5]/90 to-[#0077B5]/70",
      textColor: "text-[#0077B5]",
      borderColor: "border-[#0077B5]",
      bgColor: "bg-[#0077B5]",
      items: [
        {
          question: language === 'en' 
            ? "What LinkedIn services do you offer?" 
            : "Quels services proposez-vous pour LinkedIn ?",
          answer: language === 'en'
            ? "We help our clients optimize their LinkedIn profile, create engaging content, and develop their professional network."
            : "Nous aidons nos clients à optimiser leur profil LinkedIn, à créer du contenu engageant et à développer leur réseau professionnel."
        },
        {
          question: language === 'en'
            ? "Why is it important to have an optimized LinkedIn profile?"
            : "Pourquoi est-il important d'avoir un profil LinkedIn optimisé ?",
          answer: language === 'en'
            ? "LinkedIn is an essential professional showcase. A well-structured profile increases your chances of being noticed by recruiters and establishing strategic connections."
            : "LinkedIn est une vitrine professionnelle essentielle. Un profil bien structuré augmente vos chances d'être repéré par des recruteurs et d'établir des connexions stratégiques."
        },
        {
          question: language === 'en'
            ? "How can you improve my LinkedIn profile?"
            : "Comment pouvez-vous améliorer mon profil LinkedIn ?",
          answer: language === 'en'
            ? "We work on your photo, summary, experiences, and advise you on posts and interactions to maximize your visibility."
            : "Nous travaillons sur votre photo, votre résumé, vos expériences, et nous vous conseillons sur les publications et interactions pour maximiser votre visibilité."
        },
        {
          question: language === 'en'
            ? "Do you offer follow-up after profile optimization?"
            : "Offrez-vous un suivi après l'optimisation du profil ?",
          answer: language === 'en'
            ? "Yes! We offer post-optimization support to ensure that your profile remains active and attractive."
            : "Oui ! Nous proposons un accompagnement post-optimisation pour garantir que votre profil reste actif et attractif."
        }
      ]
    },
    {
      id: "training",
      title: language === 'en' ? "Certified Training Programs" : "Formations Certifiantes",
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "#4CAF50",
      gradient: "from-[#4CAF50]/90 to-[#4CAF50]/70",
      textColor: "text-[#4CAF50]",
      borderColor: "border-[#4CAF50]",
      bgColor: "bg-[#4CAF50]",
      items: [
        {
          question: language === 'en'
            ? "What certified training programs do you offer?"
            : "Quelles formations certifiantes proposez-vous ?",
          answer: language === 'en'
            ? "We offer a wide range of certified training programs in various fields including: Law, Corporate Taxation, Economics, Information Technology, Accounting, Management and Communication, Personal Development."
            : "Nous offrons une large gamme de formations certifiantes dans divers domaines à savoir : Droit, Fiscalité d'entreprise, Economie, Informatique, Comptabilité, Management et Communication, Développement personnel."
        },
        {
          question: language === 'en'
            ? "Do certifications have value on a resume?"
            : "Les certifications ont-elles une valeur sur un CV ?",
          answer: language === 'en'
            ? "Yes, as a Moroccan law company, our certifications have great value on CVs, thus offering added value to your professional career."
            : "Oui, en tant que société de Droit Marocain, nos certifications ont une grande valeur sur le CV, offrant ainsi une valeur ajoutée à votre parcours professionnel."
        },
        {
          question: language === 'en'
            ? "How do I register for a training program?"
            : "Comment s'inscrire à une formation ?",
          answer: language === 'en'
            ? "You can register via our website by filling out the application form or by contacting us directly."
            : "Vous pouvez vous inscrire via notre site en remplissant le formulaire de candidature ou en nous contactant directement."
        },
        {
          question: language === 'en'
            ? "Can I take a training program remotely?"
            : "Puis-je suivre une formation à distance ?",
          answer: language === 'en'
            ? "Yes, we offer both in-person and online training programs to adapt to your needs and availability."
            : "Oui, nous proposons des formations en présentiel et en ligne pour s'adapter à vos besoins et disponibilités."
        }
      ]
    },
    {
      id: "school",
      title: language === 'en' ? "School Search & Enrollment" : "Recherches et Inscriptions dans des écoles reconnues",
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5-9-5-9 5 9 5m0 0v7" />
        </svg>
      ),
      color: "#9C27B0",
      gradient: "from-[#9C27B0]/90 to-[#9C27B0]/70",
      textColor: "text-[#9C27B0]",
      borderColor: "border-[#9C27B0]",
      bgColor: "bg-[#9C27B0]",
      items: [
        {
          question: language === 'en'
            ? "In which countries can I apply through your service?"
            : "Dans quels pays puis-je postuler grâce à votre service ?",
          answer: language === 'en'
            ? "We accompany students in their enrollment in schools and universities in Morocco and in several foreign countries, particularly in Europe and North America."
            : "Nous accompagnons les étudiants dans leur inscription aux écoles et universités au Maroc et dans plusieurs pays étrangers, notamment en Europe et en Amérique du Nord."
        },
        {
          question: language === 'en'
            ? "What are the admission criteria for partner schools?"
            : "Quels sont les critères d'admission des écoles partenaires ?",
          answer: language === 'en'
            ? "Criteria vary depending on the institution and program chosen. We help you understand the requirements and prepare your application."
            : "Les critères varient selon l'établissement et le programme choisi. Nous vous aidons à comprendre les exigences et à préparer votre dossier de candidature."
        },
        {
          question: language === 'en'
            ? "Do you provide support for administrative procedures?"
            : "Fournissez-vous un accompagnement pour les démarches administratives ?",
          answer: language === 'en'
            ? "Yes, we guide our candidates at every step: application, visa, housing, and integration."
            : "Oui, nous guidons nos candidats à chaque étape : candidature, visa, logement, et intégration."
        },
        {
          question: language === 'en'
            ? "What is the average time to finalize enrollment?"
            : "Quel est le délai moyen pour finaliser une inscription ?",
          answer: language === 'en'
            ? "The timeline depends on the institution and country. Generally, it takes between a few weeks and several months."
            : "Le délai dépend de l'institution et du pays. En général, il faut compter entre quelques semaines et plusieurs mois."
        }
      ]
    }
  ], [language]);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredCategories([]);
      return;
    }
    
    const lowerCaseQuery = searchQuery.toLowerCase();
    const searchResults: FAQCategory[] = [];
    
    faqCategories.forEach(category => {
      const matchingItems = category.items.filter(item => 
        item.question.toLowerCase().includes(lowerCaseQuery) || 
        item.answer.toLowerCase().includes(lowerCaseQuery)
      );
      
      if (matchingItems.length > 0) {
        searchResults.push({
          ...category,
          items: matchingItems
        });
      }
    });
    
    setFilteredCategories(searchResults);
  }, [searchQuery, faqCategories]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() !== '') {
      setShowAllResults(true);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setFilteredCategories([]);
    setShowAllResults(false);
  };

  // Get categories to display based on search state
  const displayCategories = searchQuery.trim() !== '' ? filteredCategories : faqCategories;
  
  // Determine if there are search results
  const hasSearchResults = filteredCategories.length > 0;
  
  // Reset view category when search is active
  useEffect(() => {
    if (searchQuery.trim() !== '' && filteredCategories.length > 0) {
      setActiveCategory(filteredCategories[0].id);
    } else if (searchQuery.trim() === '') {
      setActiveCategory("linkedin");
    }
  }, [filteredCategories, searchQuery]);

  return (
    <motion.section 
      ref={sectionRef}
      className="py-28 lg:py-32 relative overflow-hidden bg-gradient-to-br from-grey-50 via-grey-100 to-grey-50 dark:from-grey-900 dark:via-grey-800 dark:to-grey-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Background Elements with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: scrollY * -0.1 }}
      >
        <motion.div 
          className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-orange-100/40 to-orange-200/40 dark:from-orange-900/15 dark:to-orange-800/15 blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-100/40 to-blue-200/40 dark:from-blue-900/15 dark:to-blue-800/15 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", delay: 5 }}
        />
        
        {/* Enhanced Grid Pattern with Parallax */}
        <div className="absolute inset-0 bg-grid-pattern opacity-7 dark:opacity-7" style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}></div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header with Animations */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={headerControls}
        >
          <motion.div 
            className="flex items-center justify-center mb-4"
            variants={itemVariants}
          >
            <motion.div 
              className="w-12 h-1 bg-orange-300 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <motion.div 
              className="w-3 h-3 bg-orange-500 rounded-full mx-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 180 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.div 
              className="w-12 h-1 bg-orange-300 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.7, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-grey-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            <span className="relative inline-block">
              <motion.span 
                className="relative z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.4 }}
              >
                {language === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
              </motion.span>
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-4 bg-orange-200/50 dark:bg-orange-800/50 -z-10 transform -rotate-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              ></motion.span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-grey-800 dark:text-grey-200 max-w-3xl mx-auto font-medium"
            variants={itemVariants}
          >
            {language === 'en' 
              ? 'Find answers to common questions about our services and how we can help you achieve your career goals'
              : 'Trouvez des réponses aux questions courantes sur nos services et comment nous pouvons vous aider à atteindre vos objectifs de carrière'}
          </motion.p>
          
          {/* Enhanced Search Bar */}
          <motion.div 
            className="mt-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <div className="relative group">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={language === 'en' ? "Search for questions or topics..." : "Rechercher des questions ou sujets..."}
                className="w-full py-4 px-6 pl-14 rounded-full bg-white text-black border-2 border-grey-100 shadow-lg focus:outline-none focus:ring-3 focus:ring-orange-500/30 focus:border-orange-400 transition-all duration-300 group-hover:shadow-xl"
                aria-label={language === 'en' ? "Search FAQs" : "Rechercher dans les FAQs"}
              />
              <motion.svg 
                className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-grey-400 group-hover:text-orange-500 transition-colors duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </motion.svg>
              
              {/* Clear search button */}
              <AnimatePresence>
                {searchQuery && (
                  <motion.button 
                    onClick={clearSearch}
                    className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-grey-100 text-grey-500 hover:bg-grey-200 hover:text-grey-700 flex items-center justify-center"
                    aria-label={language === 'en' ? "Clear search" : "Effacer la recherche"}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
            
            {/* Search results status */}
            <AnimatePresence>
              {searchQuery && (
                <motion.div 
                  className="mt-4 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {hasSearchResults ? (
                    <p className="text-sm text-grey-600 dark:text-grey-300">
                      {language === 'en' 
                        ? `Found ${filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0)} results for "${searchQuery}"` 
                        : `Trouvé ${filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0)} résultats pour "${searchQuery}"`}
                    </p>
                  ) : searchQuery.length > 0 ? (
                    <p className="text-sm text-grey-600 dark:text-grey-300">
                      {language === 'en' 
                        ? `No results found for "${searchQuery}". Try different keywords.` 
                        : `Aucun résultat trouvé pour "${searchQuery}". Essayez d'autres mots-clés.`}
                    </p>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Enhanced Mode Toggle */}
          <motion.div 
          className="mt-8 inline-flex items-center rounded-full bg-grey-100 dark:bg-grey-800 p-1.5 shadow-md"
          variants={itemVariants}
        >
          <motion.button 
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
              !singleAccordion 
                ? 'bg-white text-black dark:bg-grey-700 dark:text-black ring-2 ring-orange-500/20' 
                : 'text-grey-700 dark:text-grey-300 hover:text-black dark:hover:text-black'
            }`}
            onClick={() => setSingleAccordion(false)}
            whileHover={singleAccordion ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'Multiple Open' : 'Ouverture Multiple'}
          </motion.button>
          <motion.button 
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
              singleAccordion 
                ? 'bg-white text-black dark:bg-grey-700 dark:text-black ring-2 ring-orange-500/20' 
                : 'text-grey-700 dark:text-grey-300 hover:text-black dark:hover:text-black'
            }`}
            onClick={() => setSingleAccordion(true)}
            whileHover={!singleAccordion ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'Single Open' : 'Ouverture Unique'}
          </motion.button>
        </motion.div>
        </motion.div>

        {/* Enhanced Category Tabs with Animations */}
        {!showAllResults && (
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {displayCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group flex items-center gap-3 px-6 py-3.5 rounded-full transition-all duration-300 ${
                    activeCategory === category.id 
                      ? `bg-white dark:bg-grey-800 shadow-lg border-2 ${category.borderColor}/30 transform -translate-y-1` 
                      : `bg-grey-100 dark:bg-grey-800/50 hover:bg-white dark:hover:bg-grey-800 border-2 border-transparent hover:-translate-y-1`
                  }`}
                  whileHover={{ 
                    scale: activeCategory !== category.id ? 1.05 : 1,
                    y: activeCategory !== category.id ? -5 : -4
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeCategory === category.id 
                        ? `text-white ${category.bgColor} shadow-md shadow-${category.bgColor}/30` 
                        : `${category.textColor} bg-grey-200/50 dark:bg-grey-700/50 group-hover:${category.textColor} group-hover:bg-grey-200 dark:group-hover:bg-grey-700`
                    }`}
                    animate={activeCategory === category.id ? 
                      { scale: [1, 1.2, 1], rotate: [0, 5, 0] } : 
                      { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <span className={`font-bold text-base ${
                    activeCategory === category.id 
                      ? `text-black dark:text-black` 
                      : `text-grey-600 dark:text-grey-400 group-hover:text-black dark:group-hover:text-black`
                  }`}>
                    {category.title}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}

        {/* No Results Message */}
        <AnimatePresence>
          {searchQuery && !hasSearchResults && (
            <motion.div 
              className="max-w-4xl mx-auto bg-white rounded-[30px] p-10 text-center shadow-xl border-2 border-grey-100"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-20 h-20 mx-auto bg-grey-100 rounded-full flex items-center justify-center mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              >
                <svg className="w-10 h-10 text-grey-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3">
                {language === 'en' ? 'No results found' : 'Aucun résultat trouvé'}
              </h3>
              <p className="text-grey-600 mb-6">
                {language === 'en' 
                  ? `We couldn't find any questions matching "${searchQuery}". Try different keywords or browse our categories.` 
                  : `Nous n'avons trouvé aucune question correspondant à "${searchQuery}". Essayez d'autres mots-clés ou parcourez nos catégories.`}
              </p>
              <motion.button
                onClick={clearSearch}
                className="inline-flex items-center px-6 py-3 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-full font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {language === 'en' ? 'Clear Search' : 'Effacer la recherche'}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced FAQ Accordion Items with Animations */}
        <div className="max-w-4xl mx-auto">
          {displayCategories.map((category) => (
            <AnimatePresence key={category.id}>
              {(activeCategory === category.id || showAllResults) && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mb-10"
                >
                  {showAllResults && (
                    <motion.h3 
                      className="text-2xl font-bold mb-6 text-black dark:text-white border-b-2 border-grey-100 dark:border-grey-800 pb-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {category.title}
                    </motion.h3>
                  )}
                  
                  {category.items.map((item, index) => {
                    const isOpen = !!openItems[`${category.id}-${index}`];
                    
                    return (
                      <motion.div 
                        key={index}
                        className={`mb-5 bg-white rounded-[30px] overflow-hidden shadow-xl border-2 transition-all duration-300 ${
                          isOpen 
                            ? `shadow-2xl shadow-${category.color}/10 border-${category.color}/20` 
                            : 'border-grey-100 hover:shadow-xl hover:border-' + category.color + '/20'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        layout
                      >
                        <motion.button
                          onClick={() => toggleItem(category.id, index)}
                          className={`w-full px-8 py-6 flex justify-between items-center text-left ${isOpen ? 'bg-grey-50/50' : 'hover:bg-grey-50/30'}`}
                          aria-expanded={isOpen}
                          whileHover={{ backgroundColor: isOpen ? "rgba(249, 250, 251, 0.5)" : "rgba(249, 250, 251, 0.3)" }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center">
                            <motion.div 
                              className={`w-2 h-12 rounded-full mr-4 ${category.bgColor}`}
                              initial={{ opacity: 0.4 }}
                              animate={{ opacity: isOpen ? 1 : 0.4 }}
                              transition={{ duration: 0.3 }}
                            />
                            <span className="font-bold text-lg text-black pr-4">
                              {item.question}
                            </span>
                          </div>
                          <motion.div 
                            className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                              isOpen 
                                ? 'bg-' + category.color + ' text-white' 
                                : 'bg-grey-100 text-' + category.color
                            }`}
                            animate={{ 
                              rotate: isOpen ? 180 : 0,
                              backgroundColor: isOpen ? category.color : "#F3F4F6",
                              color: isOpen ? "#FFFFFF" : category.color
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </motion.button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <motion.div 
                                className="px-14 pb-8 text-black font-medium border-t border-grey-100 pt-6 bg-white"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <p className="leading-relaxed text-base md:text-lg">
                                  {item.answer}
                                </p>
                                
                                {/* Enhanced action buttons for answers */}
                                <div className="mt-6 flex flex-wrap gap-3">
                                  <motion.button 
                                    className="inline-flex items-center px-4 py-2 rounded-full bg-grey-100 hover:bg-grey-200 text-grey-700 text-sm transition-all duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    {language === 'en' ? 'Helpful' : 'Utile'}
                                  </motion.button>
                                  
                                  <motion.button 
                                    className="inline-flex items-center px-4 py-2 rounded-full bg-grey-100 hover:bg-grey-200 text-grey-700 text-sm transition-all duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {language === 'en' ? 'More Details' : 'Plus de Détails'}
                                  </motion.button>
                                </div>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        
        {/* Show All/Hide Results Button when searching */}
        <AnimatePresence>
          {filteredCategories.length > 0 && searchQuery && (
            <motion.div 
              className="flex justify-center mt-10 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={() => setShowAllResults(!showAllResults)}
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-grey-200 hover:border-orange-200 rounded-full text-grey-800 font-medium shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllResults ? (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    {language === 'en' ? 'Show Categories View' : 'Afficher par Catégories'}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    {language === 'en' ? 'Show All Results' : 'Afficher Tous les Résultats'}
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Enhanced Contact Section with Animations */}
        <motion.div 
          ref={ctaRef}
          className="mt-24 max-w-4xl mx-auto bg-white rounded-[32px] p-10 md:p-14 shadow-2xl border-2 border-orange-100 dark:border-orange-800/20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Decorative Elements with Animations */}
          <motion.div 
            className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 dark:bg-orange-900/10 rounded-full opacity-70 -z-10"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-50 dark:bg-orange-900/10 rounded-full opacity-70 -z-10"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
          
          <motion.div 
            className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-8"
            initial={{ scale: 0.8, rotate: 45 }}
            animate={ctaInView ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: 45 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
          >
            <svg className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
          
          <motion.h3 
            className="text-2xl md:text-3xl font-serif font-bold mb-6 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {language === 'en' ? 'Still Have Questions?' : 'Vous Avez D\'autres Questions ?'}
          </motion.h3>
          
          <motion.p 
            className="text-lg text-black font-medium mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {language === 'en' 
              ? 'Our team is always ready to help you with any questions or concerns you might have.'
              : 'Notre équipe est toujours prête à vous aider avec toutes vos questions ou préoccupations.'}
          </motion.p>
          
          <motion.button 
            className="group relative inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">
              {language === 'en' ? 'Contact Our Support Team' : 'Contacter Notre Équipe Support'}
            </span>
            <svg className="ml-2 w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 -z-10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
          
          {/* Live Chat Badge */}
          <motion.div 
            className="mt-12 inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">
              {language === 'en' ? 'Live Chat soon...' : 'Chat en Direct bientot...'}
            </span>
          </motion.div>
        </motion.div>

      </div>
      
      {/* Add global styles for animations and effects */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        /* Accessibility improvements */
        button:focus-visible, a:focus-visible {
          outline: 2px solid rgb(249, 115, 22);
          outline-offset: 2px;
        }
        
        /* Improved scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(243, 244, 246, 0.5);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(249, 115, 22, 0.5);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.7);
        }
      `}</style>
    </motion.section>
  );
};

export default FAQ;
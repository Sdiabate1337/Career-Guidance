"use client";

import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import { LanguageContext } from '../contexts/LanguageContext';

const PresidentMessage = () => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Current user and timestamp from props
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-05-26 02:15:03";
  
  // Animate elements on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Message content for both languages
  const messageContent = {
    en: "Our mission is to guide and empower the youth of Africa to become the leaders of tomorrow. We believe that through education, mentorship, and opportunity, we can unlock the vast potential that exists within our continent. Every young person deserves the chance to develop their talents and contribute to the growth of their communities and nations.",
    fr: "Notre mission est de guider et d'autonomiser la jeunesse africaine pour qu'elle devienne les leaders de demain. Nous croyons qu'à travers l'éducation, le mentorat et les opportunités, nous pouvons libérer le vaste potentiel qui existe dans notre continent. Chaque jeune mérite la chance de développer ses talents et de contribuer à la croissance de ses communautés et de ses nations."
  };

  // Create truncated version for mobile (first sentence only)
  const truncatedMessage = {
    en: messageContent.en.split('.')[0] + '.',
    fr: messageContent.fr.split('.')[0] + '.'
  };

  return (
    <section className="py-20 lg:py-40 relative overflow-hidden bg-gradient-to-br from-grey-50 via-grey-100 to-grey-50 dark:from-grey-900 dark:via-grey-800 dark:to-grey-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-orange-50/30 to-transparent dark:from-orange-900/5 dark:to-transparent"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-orange-100/30 to-orange-200/30 dark:from-orange-900/10 dark:to-orange-800/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-blue-100/30 to-blue-200/30 dark:from-blue-900/10 dark:to-blue-800/10 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-grey-900 dark:text-white mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">
                {language === 'en' ? 'A Message From Our President' : 'Un Message De Notre Président'}
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-4 bg-orange-200/30 dark:bg-orange-800/30 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full my-6"></div>
        </div>

        {/* President Message Content - Enhanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Photo Column - Takes 5 columns on desktop */}
          <div className={`lg:col-span-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Photo Frame with Enhanced Design */}
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                {/* Gold Border Effect */}
                <div className="absolute inset-0 p-2 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-[3rem] z-10">
                  {/* Inner White Border */}
                  <div className="absolute inset-0 m-1 bg-white dark:bg-grey-900 rounded-[2.8rem] overflow-hidden z-20">
                    {/* President's Photo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-grey-200 to-grey-300 dark:from-grey-700 dark:to-grey-800">
                      {/* Placeholder for the photo - In production, replace with actual Image component */}
                      <div className="w-full h-full flex items-center justify-center text-grey-400 dark:text-grey-600">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Shadow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-[3.5rem] blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-8 w-32 h-32 rounded-full border-8 border-orange-500/20 dark:border-orange-500/10 -z-10"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-400/10 dark:from-orange-500/20 dark:to-orange-400/5 blur-2xl -z-10"></div>
              
              {/* Name Tag */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white dark:bg-grey-900 px-8 py-3 rounded-full shadow-lg border border-grey-100 dark:border-grey-700">
                <p className="text-center font-semibold text-grey-900 dark:text-white">Saint Noël Krahiboué</p>
              </div>
            </div>
          </div>
          
          {/* Message Column - Takes 7 columns on desktop */}
          <div className={`lg:col-span-7 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Quote Card - Enhanced Design */}
              <div className="bg-white dark:bg-grey-900 rounded-[3rem] p-8 md:p-14 shadow-2xl border border-grey-100 dark:border-grey-700">
                {/* Large Quotation Mark */}
                <div className="absolute top-8 left-8 md:top-10 md:left-10 text-orange-200 dark:text-orange-800/30">
                  <svg className="w-20 h-20 md:w-32 md:h-32 -translate-x-1/3 -translate-y-1/3 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Quote Content - With mobile optimization */}
                <div className="relative z-10 mb-8 md:mb-10">
                  {/* On mobile: Show truncated or full message based on state */}
                  <blockquote className="font-serif text-xl md:text-3xl leading-relaxed text-black italic md:block">
                    {/* For mobile: Show either truncated or full version */}
                    <div className="md:hidden">
                      {isExpanded ? messageContent[language === 'en' ? 'en' : 'fr'] : truncatedMessage[language === 'en' ? 'en' : 'fr']}
                    </div>
                    
                    {/* For tablet/desktop: Always show full version */}
                    <div className="hidden md:block">
                      {messageContent[language === 'en' ? 'en' : 'fr']}
                    </div>
                  </blockquote>
                  
                  {/* Read More button - Only on mobile - Enhanced with orange color and better hover */}
                  <div className="md:hidden mt-4">
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="group relative inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium text-sm shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                    >
                      <span className="relative z-10">
                        {isExpanded ? (
                          <>
                            <span>{language === 'en' ? 'Show Less' : 'Voir Moins'}</span>
                            <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </>
                        ) : (
                          <>
                            <span>{language === 'en' ? 'Read More' : 'Lire Plus'}</span>
                            <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        )}
                      </span>
                      {/* Background hover effect */}
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                    </button>
                  </div>
                </div>
                
                {/* Signature Block - Enhanced Design */}
                <div className="flex flex-col md:flex-row items-center pt-6 border-t border-grey-200 dark:border-grey-700">
                  <div className="flex-1">
                    <p className="text-xl font-bold text-orange-600  dark:text-orange-400">Saint Noël Krahiboué</p>
                    <p className="text-orange-600 dark:text-orange-400 font-medium text-lg">
                      {language === 'en' ? 'Founder & President' : 'Fondateur & Président'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-dots-pattern opacity-10 dark:opacity-5 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-40 md:h-40 bg-dots-pattern opacity-10 dark:opacity-5 rounded-full"></div>
              
              {/* Orange Accent */}
              <div className="absolute -left-3 top-1/4 w-4 md:w-6 h-16 md:h-24 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
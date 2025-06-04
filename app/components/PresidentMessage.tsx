"use client";

import { useContext, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { LanguageContext } from '../contexts/LanguageContext';

const PresidentMessage = () => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const quoteRef = useRef(null);
  
  // Current user and timestamp from props
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-06-04 15:40:05";
  
  // Animate elements on load with enhanced observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById('president-message-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.disconnect();
    };
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
    <section 
      id="president-message-section"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Enhanced Premium Background with Sophisticated Gradients */}
      <div className="absolute inset-0 -z-10">
        {/* Base background with subtle texture */}
        <div className="absolute inset-0 bg-[#fcfcfc]"></div>
        
        {/* Primary gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff8f3] to-white opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#fff8f3] via-[#fff4eb] to-transparent opacity-70"></div>
        
        {/* Animated gradient blobs */}
        <div className="absolute -top-[20%] left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#ff914d]/5 via-[#ff914d]/8 to-[#ff914d]/3 blur-3xl animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[50%] h-[40%] rounded-full bg-gradient-to-br from-[#ff914d]/4 via-[#ff914d]/7 to-transparent blur-3xl animate-blob"></div>
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[#545454]/3 via-[#545454]/5 to-[#545454]/2 blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Enhanced grid pattern with gradient overlays */}
        <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-60"></div>
        
        {/* Subtle noise texture for premium feel */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmOGY4ZjgiPjwvcmVjdD4KPC9zdmc+')] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header with Animated Elements */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center mb-5 px-4 py-1.5 bg-gradient-to-r from-[#ff914d]/10 to-[#ff914d]/5 text-[#ff914d] rounded-full text-sm font-medium shadow-sm backdrop-blur-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
            {language === 'en' ? 'Leadership & Vision' : 'Leadership & Vision'}
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#545454] mb-6">
            <span className="relative inline-block">
              <span className="relative z-10">
                {language === 'en' ? "Our President's Message" : 'Mot du président'}
              </span>
              <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 8">
                <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#ff914d]/40" />
              </svg>
            </span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-[#545454]/80 mt-6">
            {language === 'en' 
              ? 'Leading with vision and purpose to create meaningful change across Africa'
              : 'Diriger avec vision et détermination pour créer un changement significatif à travers l\'Afrique'}
          </p>
        </div>

        {/* President Message Content - Enhanced Premium Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Enhanced Photo Column - Takes 5 columns on desktop */}
          <div className={`lg:col-span-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Frame with Premium Design */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transform group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)]">
                {/* Premium Border Effect */}
                <div className="absolute inset-0 p-[3px] bg-gradient-to-br from-[#ff914d] via-[#ffb47a] to-[#ff914d] rounded-[2.5rem] z-10">
                  {/* Inner White Border */}
                  <div className="absolute inset-0 m-[2px] bg-white rounded-[2.4rem] overflow-hidden z-20">
                    {/* President's Photo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0]">
                      {/* Placeholder for the photo - In production, replace with actual Image component */}
                      <div className="w-full h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] flex items-center justify-center">
                          <svg className="w-24 h-24 text-[#cccccc]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        
                        {/* Shimmer effect */}
                        <div className="absolute -inset-full w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-15 group-hover:animate-shine"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Shadow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#ff914d]/10 to-[#ff914d]/20 rounded-[3rem] blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Premium Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border-[6px] border-[#ff914d]/10 -z-10"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#ff914d]/10 to-[#ff914d]/5 blur-2xl -z-10"></div>
              <div className="absolute top-1/3 -right-4 w-8 h-8 rounded-full bg-[#ff914d]/20 animate-float-slow"></div>
              <div className="absolute bottom-1/4 -left-6 w-12 h-12 rounded-full border-2 border-[#545454]/10 animate-float-delayed"></div>
              
              {/* Enhanced Name Tag */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-xl shadow-xl border border-[#ff914d]/10 backdrop-blur-sm">
                <div className="text-center">
                  <p className="font-bold text-xl text-[#545454]">Saint Noël Krahiboué</p>
                  <p className="text-[#ff914d] font-medium text-sm mt-1">
                    {language === 'en' ? 'Founder & President' : 'Fondateur & Président'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Message Column - Takes 7 columns on desktop */}
          <div className={`lg:col-span-7 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Premium Quote Card */}
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#ff914d]/5 relative group hover:shadow-2xl transition-shadow duration-500">
                {/* Premium Quotation Mark */}
                <div className="absolute top-8 left-8 text-[#ff914d]/10">
                  <svg className="w-24 h-24 md:w-32 md:h-32 -translate-x-1/4 -translate-y-1/4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Enhanced Quote Content with Fade-in Animation */}
                <div className="relative z-10 mb-8 md:mb-10" ref={quoteRef}>
                  {/* Enhanced typography and spacing */}
                  <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-[#545454] italic md:block pl-4 border-l-4 border-[#ff914d]/20">
                    {/* For mobile: Show either truncated or full version with smooth height transition */}
                    <div className="md:hidden overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: isExpanded ? '500px' : '100px' }}>
                      {messageContent[language === 'en' ? 'en' : 'fr']}
                    </div>
                    
                    {/* For tablet/desktop: Always show full version */}
                    <div className="hidden md:block">
                      {messageContent[language === 'en' ? 'en' : 'fr']}
                    </div>
                  </blockquote>
                  
                  {/* Enhanced Read More button - Only on mobile */}
                  <div className="md:hidden mt-6">
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="group relative inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white font-medium text-sm shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#ff914d] focus:ring-offset-2 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        {isExpanded ? (
                          <>
                            <span>{language === 'en' ? 'Show Less' : 'Voir Moins'}</span>
                            <svg className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                          </>
                        ) : (
                          <>
                            <span>{language === 'en' ? 'Read More' : 'Lire Plus'}</span>
                            <svg className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        )}
                      </span>
                      {/* Enhanced hover effect with shine */}
                      <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ff8133] to-[#ff914d] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <div className="absolute -inset-full w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-15 group-hover:animate-shine"></div>
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* Enhanced Signature Block */}
                <div className="pt-6 border-t border-[#ff914d]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-[#ff914d]">Saint Noël Krahiboué</p>
                      <p className="text-[#545454]/80 font-medium text-base mt-1">
                        {language === 'en' ? 'Founder & President' : 'Fondateur & Président'}
                      </p>
                    </div>
                    
                    {/* Added signature image placeholder */}
                    <div className="h-16 w-32 opacity-70">
                      <svg viewBox="0 0 100 40" className="w-full h-full text-[#ff914d]/80">
                        <path d="M10,30 C20,10 30,15 40,25 S60,35 80,20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="animate-draw" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Added message timestamp */}
                  <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex justify-between items-center text-xs text-[#545454]/50">
                    <div>{currentDateTime}</div>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                      </svg>
                      {currentUser}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-[#545454]/5 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full border border-[#ff914d]/10"></div>
              
              {/* Enhanced Orange Accent */}
              <div className="absolute -left-3 top-1/4 w-2 h-20 bg-gradient-to-b from-[#ff914d] to-[#ff8133] rounded-full"></div>
              <div className="absolute -right-3 bottom-1/4 w-2 h-20 bg-gradient-to-b from-[#ff8133] to-[#ff914d] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add these animation keyframes to your globals.css if they're not already there


export default PresidentMessage;
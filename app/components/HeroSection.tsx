"use client";

import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animate elements on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-[#fcfcfc] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Enhanced Background Gradient Effects - Premium Light Aesthetic */}
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16 items-start">
          {/* Left Content Column - Enhanced Transitions */}
          <div className={`lg:col-span-7 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Modernized Tag Line */}
            <div className="inline-flex items-center mb-7 px-4 py-1.5 bg-gradient-to-r from-[#ff914d]/10 to-[#ff914d]/5 text-[#ff914d] rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
              {language === 'en' 
                ? 'Transform Your Career Path Today' 
                : 'Transformez Votre Parcours Professionnel Aujourd\'hui'}
            </div>
            
            {/* Enhanced Main Headline with Modern Typography */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-[#545454] mb-8 leading-tight tracking-tight">
              <span className="text-[#545454]">
                {language === 'en' 
                  ? 'Navigate Your Career' 
                  : 'Naviguez Votre Carrière'}
              </span>
              <br />
              <span className="relative inline-block text-[#ff914d] mt-2 animate-pulse-slow">
                {language === 'en' ? 'With Confidence' : 'Avec Confiance'}
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
                  <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#ff914d]/50" />
                </svg>
              </span>
            </h1>
            
            {/* Refined Subheading with Better Typography */}
            <p className="text-xl md:text-2xl text-[#545454]/80 mb-12 max-w-xl md:max-w-2xl leading-relaxed">
              {language === 'en' 
                ? 'Expert guidance to help you land your dream job, negotiate better compensation, and achieve meaningful career growth.'
                : 'Des conseils d\'experts pour vous aider à décrocher l\'emploi de vos rêves, négocier une meilleure rémunération et atteindre une croissance professionnelle significative.'}
            </p>
            
            {/* Modern CTA Buttons with Enhanced Interactions */}
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 mb-16">
              <Link 
                href="/services" 
                className="group px-8 py-4 bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white text-lg font-medium rounded-xl hover:shadow-[#ff914d]/30 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden relative"
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  {language === 'en' ? 'Explore Services' : 'Explorer Nos Services'}
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
            
            {/* Modernized Social Proof Section */}
            <div className="py-8 px-0 md:px-8 border-t border-[#545454]/10">
              <p className="text-base text-[#545454] mb-6 font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {language === 'en' ? 'Trusted by our partners:' : 'Approuvé par nos partenaires:'}
              </p>
              
            {/* Mobile Carousel View with Enhanced Design */}
            <div className="flex md:hidden space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-12 bg-white backdrop-blur-sm rounded-xl shadow-sm flex items-center justify-center border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <img
                    src={`/sp${index + 1}.jpeg`}
                    alt={`Sponsor ${index + 1}`}
                    className="h-8 object-contain"
                    style={{ maxWidth: "90%" }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Desktop Grid View with Modern Design */}
            <div className="hidden md:grid md:grid-cols-5 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="h-12 bg-white rounded-xl shadow-sm flex items-center justify-center px-4 border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group"
                >
                  <img
                    src={`/sp${index + 1}.jpeg`}
                    alt={`Sponsor ${index + 1}`}
                    className="h-8 object-contain group-hover:scale-105 transition-transform duration-300"
                    style={{ maxWidth: "90%" }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            </div>
          </div>
          
          {/* Right Illustration Column - Enhanced with Modern Design Elements */}
          <div className={`hidden lg:block lg:col-span-5 relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="sticky top-32 pt-8">
              <div className="relative aspect-square max-w-xl mx-auto">
                {/* Enhanced Career Path Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Modern Career Visualization */}
                  <svg viewBox="0 0 500 500" width="100%" height="100%" className="transform scale-100">
                    {/* Outer Circle with Modern Design */}
                    <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#545454]/20" />
                    <circle cx="250" cy="250" r="170" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,4" className="text-[#545454]/30 animate-spin-slow" />
                    
                    {/* Modernized Coordinate System */}
                    <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-[#545454]/20" />
                    <line x1="250" y1="50" x2="250" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-[#545454]/20" />
                    
                    {/* Enhanced Career Stages Background */}
                    <path d="M125,350 Q200,200 250,190 T400,130" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.1" className="text-[#ff914d]" />
                    
                    {/* Modern Career Growth Path */}
                    <path 
                      d="M125,350 Q200,200 250,190 T400,130" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      className="text-[#ff914d] animate-draw"
                    />
                    
                    {/* Enhanced Career Milestones */}
                    {[
                      { cx: 125, cy: 350, label: language === 'en' ? 'Start' : 'Début', labelX: 110, labelY: 380 },
                      { cx: 250, cy: 190, label: language === 'en' ? 'Growth' : 'Croissance', labelX: 230, labelY: 160 },
                      { cx: 400, cy: 130, label: language === 'en' ? 'Success' : 'Succès', labelX: 385, labelY: 100 }
                    ].map((point, index) => (
                      <g key={index} className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${1000 + index * 300}ms` }}>
                        {/* Modern Outer Pulse Effect */}
                        <circle cx={point.cx} cy={point.cy} r="20" fill="currentColor" className={`text-[#ff914d]/10 animate-pulse-${index}`} />
                        
                        {/* Enhanced Main Point */}
                        <circle cx={point.cx} cy={point.cy} r="8" fill="currentColor" className="text-[#ff914d]" />
                        
                        {/* Modern Label */}
                        <text x={point.labelX} y={point.labelY} fontSize="14" fontWeight="500" className="fill-[#545454]">{point.label}</text>
                      </g>
                    ))}
                    
                    {/* Modern Decorative Elements */}
                    <g className="animate-float">
                      <rect x="300" y="300" width="30" height="30" rx="6" fill="currentColor" className="text-[#ff914d]/30" />
                    </g>
                    <g className="animate-float-delayed">
                      <circle cx="150" cy="180" r="15" fill="currentColor" className="text-[#545454]/30" />
                    </g>
                    <g className="animate-float-slow">
                      <polygon points="350,220 365,245 335,245" fill="currentColor" className="text-[#ff914d]/30" />
                    </g>
                  </svg>
                </div>
                
                {/* Enhanced Floating UI Elements with Glass Morphism */}
                <div 
                  className="absolute top-12 right-0 p-5 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-[#ff914d]/10 w-56 transition-all duration-1000 ease-out delay-700 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <p className="text-sm font-medium text-[#545454] group-hover:text-[#ff914d] transition-colors duration-300">{language === 'en' ? 'Career Progress' : 'Progrès de Carrière'}</p>
                  </div>
                  <div className="h-3 bg-[#545454]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ff914d] to-[#ff8133] rounded-full w-[65%] animate-pulse-slow"></div>
                  </div>
                  <p className="text-sm text-[#545454] mt-2 text-right font-medium group-hover:text-[#ff914d] transition-colors duration-300">65%</p>
                </div>
                
                {/* Modern Skills Badges with Enhanced Interaction */}
                <div 
                  className="absolute bottom-4 right-0 flex flex-wrap gap-3 max-w-[240px] transition-all duration-1000 ease-out delay-1200"
                >
                  {[
                    { name: 'LinkedIn', icon: 'L', color: 'bg-blue-500' },
                    { name: 'Guidance', icon: 'R', color: 'bg-green-500' },
                    { name: 'Interview', icon: 'I', color: 'bg-purple-500' },
                    { name: 'Career Path', icon: 'C', color: 'bg-[#ff914d]' }
                  ].map((skill, index) => (
                    <div 
                      key={index}
                      className="group flex items-center px-3 py-2 bg-white/90 backdrop-blur-md rounded-lg border border-[#545454]/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#ff914d]/30"
                    >
                      <span className={`${skill.color} w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mr-2 group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-[#545454] group-hover:text-[#ff914d] transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HeroSection;
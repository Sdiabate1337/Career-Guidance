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
    <div className="relative bg-gradient-to-br from-grey-50 via-grey-100 to-grey-50 dark:from-grey-900 dark:via-grey-800 dark:to-grey-900 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-orange-100/30 to-orange-200/30 dark:from-orange-900/10 dark:to-orange-800/10 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-100/30 to-blue-200/30 dark:from-blue-900/10 dark:to-blue-800/10 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16 items-start">
          {/* Left Content Column - Full width on mobile */}
          <div className={`lg:col-span-7 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Tag Line */}
            <div className="inline-flex items-center mb-7 px-4 py-1.5 bg-gradient-to-r from-orange-100 to-orange-50 dark:from-orange-900/40 dark:to-orange-800/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
              {language === 'en' 
                ? 'Transform Your Career Path Today' 
                : 'Transformez Votre Parcours Professionnel Aujourd\'hui'}
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-grey-900 dark:text-white mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-grey-900 via-grey-800 to-grey-900 dark:from-white dark:via-grey-200 dark:to-white">
                {language === 'en' 
                  ? 'Navigate Your Career' 
                  : 'Naviguez Votre Carrière'}
              </span>
              <br />
              <span className="relative inline-block text-orange-500 mt-2">
                {language === 'en' ? 'With Confidence' : 'Avec Confiance'}
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8">
                  <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-300 dark:text-orange-700" />
                </svg>
              </span>
            </h1>
            
            {/* Subheading - More width on larger screens */}
            <p className="text-xl md:text-2xl text-grey-600 dark:text-grey-300 mb-12 max-w-xl md:max-w-2xl leading-relaxed">
              {language === 'en' 
                ? 'Expert guidance to help you land your dream job, negotiate better compensation, and achieve meaningful career growth.'
                : 'Des conseils d\'experts pour vous aider à décrocher l\'emploi de vos rêves, négocier une meilleure rémunération et atteindre une croissance professionnelle significative.'}
            </p>
            
            {/* CTA Buttons - Larger and more prominent */}
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 mb-16">
              <Link 
                href="/services" 
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-medium rounded-xl hover:shadow-orange-200 dark:hover:shadow-orange-900/30 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden relative"
              >
                <span className="relative z-10">{language === 'en' ? 'Explore Services' : 'Explorer Nos Services'}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </Link>
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-white/80 dark:bg-grey-800/50 backdrop-blur-sm text-orange-600 dark:text-orange-400 text-lg font-medium rounded-xl border border-grey-200 dark:border-grey-700 hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-300 ease-out relative overflow-hidden"
              >
                <span className="relative z-10">{language === 'en' ? 'Contact Us' : 'Contactez-Nous'}</span>
                <span className="absolute inset-0 bg-orange-50 dark:bg-orange-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </Link>
            </div>
            
            {/* Company Logos - Social Proof - Carousel on Mobile */}
            <div className="py-8 px-0 md:px-8 border-t border-grey-200 dark:border-grey-800">
              <p className="text-base text-grey-700 dark:text-grey-300 mb-6 font-medium">
                {language === 'en' ? 'Trusted by professionals from:' : 'Approuvé par les professionnels de:'}
              </p>
              
              {/* Mobile Carousel View */}
              <div className="flex md:hidden space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                {[
                  { name: 'Microsoft' },
                  { name: 'Google' },
                  { name: 'Amazon' },
                  { name: 'IBM' },
                  { name: 'Apple' }
                ].map((company, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-32 h-12 bg-white dark:bg-grey-800 rounded-xl shadow-sm flex items-center justify-center border border-grey-100 dark:border-grey-700"
                  >
                    <span className="text-base font-medium text-orange-600 dark:text-orange-400">{company.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Desktop Grid View */}
              <div className="hidden md:grid md:grid-cols-5 gap-6">
                {[
                  { name: 'Microsoft' },
                  { name: 'Google' },
                  { name: 'Amazon' },
                  { name: 'IBM' },
                  { name: 'Apple' }
                ].map((company, index) => (
                  <div 
                    key={index} 
                    className="h-12 bg-white dark:bg-grey-800 rounded-xl shadow-sm flex items-center justify-center px-4 border border-grey-100 dark:border-grey-700"
                  >
                    <span className="text-base font-medium text-orange-600 dark:text-orange-400">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Illustration Column - Hidden on mobile, visible on lg and up */}
          <div className={`hidden lg:block lg:col-span-5 relative transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="sticky top-32 pt-8">
              <div className="relative aspect-square max-w-xl mx-auto">
                {/* Main Career Path Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Career Visualization */}
                  <svg viewBox="0 0 500 500" width="100%" height="100%" className="transform scale-100">
                    {/* Outer Circle */}
                    <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-grey-200 dark:text-grey-700" />
                    <circle cx="250" cy="250" r="170" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,4" className="text-grey-300 dark:text-grey-700 animate-spin-slow" />
                    
                    {/* Coordinate System */}
                    <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-grey-300 dark:text-grey-700" />
                    <line x1="250" y1="50" x2="250" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-grey-300 dark:text-grey-700" />
                    
                    {/* Career Stages Background */}
                    <path d="M125,350 Q200,200 250,190 T400,130" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.1" className="text-orange-500" />
                    
                    {/* Career Growth Path */}
                    <path 
                      d="M125,350 Q200,200 250,190 T400,130" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      className="text-orange-500 animate-draw"
                    />
                    
                    {/* Career Milestones */}
                    {[
                      { cx: 125, cy: 350, label: language === 'en' ? 'Start' : 'Début', labelX: 110, labelY: 380 },
                      { cx: 250, cy: 190, label: language === 'en' ? 'Growth' : 'Croissance', labelX: 230, labelY: 160 },
                      { cx: 400, cy: 130, label: language === 'en' ? 'Success' : 'Succès', labelX: 385, labelY: 100 }
                    ].map((point, index) => (
                      <g key={index} className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${1000 + index * 300}ms` }}>
                        {/* Outer Pulse Effect */}
                        <circle cx={point.cx} cy={point.cy} r="20" fill="currentColor" className={`text-orange-500/10 animate-pulse-${index}`} />
                        
                        {/* Main Point */}
                        <circle cx={point.cx} cy={point.cy} r="8" fill="currentColor" className="text-orange-500" />
                        
                        {/* Label */}
                        <text x={point.labelX} y={point.labelY} fontSize="14" fontWeight="500" className="fill-orange-600 dark:fill-orange-400">{point.label}</text>
                      </g>
                    ))}
                    
                    {/* Decorative Elements */}
                    <g className="animate-float">
                      <rect x="300" y="300" width="30" height="30" rx="6" fill="currentColor" className="text-orange-300/30 dark:text-orange-700/30" />
                    </g>
                    <g className="animate-float-delayed">
                      <circle cx="150" cy="180" r="15" fill="currentColor" className="text-blue-300/30 dark:text-blue-700/30" />
                    </g>
                    <g className="animate-float-slow">
                      <polygon points="350,220 365,245 335,245" fill="currentColor" className="text-orange-300/30 dark:text-orange-700/30" />
                    </g>
                  </svg>
                </div>
                
                {/* Floating UI Elements */}
                <div 
                  className="absolute top-12 right-0 p-5 bg-white/90 dark:bg-grey-800/90 backdrop-blur-md rounded-xl shadow-xl border border-orange-100 dark:border-orange-800/30 w-56 transition-all duration-1000 ease-out delay-700 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <p className="text-sm font-medium text-orange-600 dark:text-orange-400">{language === 'en' ? 'Career Progress' : 'Progrès de Carrière'}</p>
                  </div>
                  <div className="h-3 bg-grey-200 dark:bg-grey-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full w-[65%] animate-pulse-slow"></div>
                  </div>
                  <p className="text-sm text-orange-600 dark:text-orange-400 mt-2 text-right font-medium">65%</p>
                </div>
                
                {/* Skills Badges */}
                <div 
                  className="absolute bottom-4 right-0 flex flex-wrap gap-3 max-w-[240px] transition-all duration-1000 ease-out delay-1200"
                >
                  {[
                    { name: 'LinkedIn', icon: 'L', color: 'bg-blue-500' },
                    { name: 'Resume', icon: 'R', color: 'bg-green-500' },
                    { name: 'Interview', icon: 'I', color: 'bg-purple-500' },
                    { name: 'Career Path', icon: 'C', color: 'bg-orange-500' }
                  ].map((skill, index) => (
                    <div 
                      key={index}
                      className="group flex items-center px-3 py-2 bg-white dark:bg-grey-800 rounded-lg border border-grey-100 dark:border-grey-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className={`${skill.color} w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mr-2`}>
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
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
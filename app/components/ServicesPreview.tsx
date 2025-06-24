"use client";

import { useContext, useRef, JSX } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from '../contexts/LanguageContext';

type StaticCounterProps = {
  value: number | string;
  suffix?: string;
};

const StaticCounter = ({ value, suffix = "" }: StaticCounterProps) => (
  <span className="font-bold tabular-nums">{value}{suffix}</span>
);

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  stat1: { value: number; label: string; suffix: string };
  stat2: { value: number; label: string; suffix: string };
  rating: number;
  reviewCount: number;
  cta: string;
  color: string;
  gradient: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  lightBg: string;
};

const ServicesPreview = () => {
  const { language } = useContext(LanguageContext);
  const containerRef = useRef(null);
  const { ref } = useInView({ threshold: 0.1, triggerOnce: true });

 const services: Service[] = [
  {
    id: 'linkedin',
    title: language === 'en' ? 'LinkedIn Profile Management' : 'Gestion de Profil LinkedIn',
    description: language === 'en'
      ? 'Optimize your professional presence with expert profile reviews, content strategy, and network growth tactics.'
      : 'Optimisez votre présence professionnelle avec des revues de profil expertes, une stratégie de contenu et des tactiques de croissance de réseau.',
    features: language === 'en'
      ? ["Profile optimization", "Content strategy", "Network growth", "Engagement boost"]
      : ["Optimisation de profil", "Stratégie de contenu", "Croissance du réseau", "Boost d'engagement"],
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    stat1: { value: 3, label: language === 'en' ? 'Increased visibility' : 'Visibilité accrue', suffix: 'x' },
    stat2: { value: 70, label: language === 'en' ? 'More connections' : 'Plus de connexions', suffix: '%' },
    rating: 4.9,
    reviewCount: 240,
    cta: language === 'en' ? 'Boost Your Profile' : 'Boostez Votre Profil',
    color: "#ff914d",
    gradient: "from-[#ff914d] to-[#ff8133]",
    textColor: "text-[#ff914d]",
    borderColor: "border-[#ff914d]",
    bgColor: "bg-[#ff914d]",
    lightBg: "bg-white"
  },
  {
    id: 'coaching-training',
    title: language === 'en'
      ? 'Certifying Trainings & Coaching'
      : 'FORMATIONS CERTIFIANTES et COACHING',
    description: language === 'en'
      ? "Advance your career with expert-led coaching and industry-recognized certifications."
      : "Faites évoluer votre carrière avec du coaching personnalisé et des formations certifiantes animées par des experts.",
    features: language === 'en'
      ? [
          "1-on-1 coaching",
          "Career planning",
          "Salary negotiation",
          "Interview prep",
          "Industry certifications",
          "Expert instructors",
          "Flexible schedule",
          "Hands-on projects"
        ]
      : [
          "Coaching individuel",
          "Plan de carrière",
          "Négociation salariale",
          "Préparation d'entretien",
          "Certifications industrie",
          "Formateurs experts",
          "Horaires flexibles",
          "Projets pratiques"
        ],
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    stat1: { value: 94, label: language === 'en' ? 'Completion rate' : 'Taux d\'achèvement', suffix: '%' },
    stat2: { value: 92, label: language === 'en' ? 'Employment rate' : 'Taux d\'emploi', suffix: '%' },
    rating: 4.8,
    reviewCount: 504,
    cta: language === 'en' ? 'Start Your Training or Coaching' : 'Commencer une Formation ou un Coaching',
    color: "#ff914d",
    gradient: "from-[#ff914d] to-[#ff8133]",
    textColor: "text-[#ff914d]",
    borderColor: "border-[#ff914d]",
    bgColor: "bg-[#ff914d]",
    lightBg: "bg-white"
  },
  {
    id: 'school',
    title: language === 'en'
      ? "Study Abroad: Morocco & France"
      : "Études à l'Étranger : Maroc & France",
    description: language === 'en'
      ? `Get step-by-step support for your education in Morocco and France.`
      : `Bénéficiez d’un accompagnement complet pour vos études au Maroc et en France.`,
    features: language === 'en'
      ? [
          "School matching (Morocco & France)",
          "Application guidance",
          "Visa support",
          "Scholarship assistance",
          "Step-by-step process for both Morocco and France"
        ]
      : [
          "Recherche d'écoles (Maroc & France)",
          "Accompagnement inscription",
          "Soutien visa",
          "Aide aux bourses",
          "Processus détaillé pour Maroc et France"
        ],
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0v7m9-7v7" />
      </svg>
    ),
    stat1: { value: 95, label: language === 'en' ? 'Acceptance rate' : 'Taux d\'acceptation', suffix: '%' },
    stat2: { value: 40, label: language === 'en' ? 'Scholarship recipients' : 'Bénéficiaires de bourses', suffix: '%' },
    rating: 4.8,
    reviewCount: 178,
    cta: language === 'en'
      ? 'Study in Morocco or France'
      : 'Étudier au Maroc ou en France',
    color: "#ff914d",
    gradient: "from-[#ff914d] to-[#ff8133]",
    textColor: "text-[#ff914d]",
    borderColor: "border-[#ff914d]",
    bgColor: "bg-[#ff914d]",
    lightBg: "bg-white"
  },
  {
    id: 'entrepreneur',
    title: language === 'en'
      ? 'Entrepreneurship & Company Creation'
      : 'Entrepreneuriat & Création de Société',
    description: language === 'en'
      ? 'Launch your own business in Morocco—legal support, company registration, domiciliation, fiscal setup, and business plan writing, all managed for you in record time.'
      : 'Lancez votre activité au Maroc : accompagnement légal, création de société, domiciliation, fiscalité, rédaction de business plan, tout est géré pour vous en un temps record.',
    features: language === 'en'
      ? [
          "Company registration",
          "Professional domiciliation",
          "Business plan drafting",
          "Full paperwork management",
          "Fiscal & legal setup",
          "Logo & business card included"
        ]
      : [
          "Création d'entreprise",
          "Domiciliation professionnelle",
          "Rédaction Business plan",
          "Gestion complète de la paperasse",
          "Mise en place fiscale & légale",
          "Logo & carte de visite inclus"
        ],
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#ff914d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="10" width="18" height="11" rx="2" fill="#fff8f3" />
        <path d="M7 10V7a5 5 0 0110 0v3" />
        <path d="M12 15v2" />
        <path d="M9 21h6" />
      </svg>
    ),
    stat1: { value: 4, label: language === 'en' ? 'Company creation packs' : 'Packs création société', suffix: '' },
    stat2: { value: 299, label: language === 'en' ? 'Business plan from' : 'Business plan dès', suffix: '€' },
    rating: 5.0,
    reviewCount: 120,
    cta: language === 'en'
      ? 'Discover Entrepreneurship'
      : 'Découvrir l’Entrepreneuriat',
    color: "#ff914d",
    gradient: "from-[#ff914d] to-[#ff8133]",
    textColor: "text-[#ff914d]",
    borderColor: "border-[#ff914d]",
    bgColor: "bg-[#ff914d]",
    lightBg: "bg-white"
  }
];


  const renderStarRating = (rating: number, color: string): JSX.Element => (
    <div className="flex items-center gap-2">
      <div className={`flex ${color}`}>
        {[...Array(5)].map((_, i) => {
          const filled = i < Math.floor(rating);
          return (
            <svg key={i} className="w-4 h-4" viewBox="0 0 20 20">
              {filled ? (
                <path fill="currentColor"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              ) : (
                <path fill="none" stroke="currentColor" strokeWidth="1.5"
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              )}
            </svg>
          );
        })}
      </div>
      <span className="text-sm font-medium text-[#545454]">
        {rating}
      </span>
    </div>
  );

  return (
    <section
      ref={containerRef}
      className="py-24 lg:py-32 relative overflow-hidden bg-white"
      id="services-preview"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div ref={ref} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <div className="max-w-xl">
            <div className="inline-flex items-center mb-5 px-4 py-1.5 bg-gradient-to-r from-[#ff914d]/10 to-[#ff914d]/5 text-[#ff914d] rounded-full text-sm font-medium shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2"></span>
              {language === 'en' ? 'Our Expertise' : 'Notre Expertise'}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#545454] mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">
                  {language === 'en' ? 'Our Services' : 'Nos Services'}
                </span>
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-[#545454]/80 max-w-3xl mt-6">
              {language === 'en'
                ? 'Comprehensive career development solutions tailored to your professional journey'
                : 'Des solutions complètes de développement de carrière adaptées à votre parcours professionnel'}
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3.5 rounded-xl bg-[#545454] text-white font-medium transition-all duration-300"
            >
              <span className="flex items-center">
                {language === 'en' ? 'View all services' : 'Voir tous les services'}
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
          {services.map((service, index) => (
            <div
              key={`grid-${service.id}`}
              className="relative h-full"
            >
              <div className="relative z-10 h-full rounded-2xl bg-white shadow-md overflow-hidden border border-[#f0f0f0]">
                <div className={`h-1.5 w-full bg-[#ff914d]`}></div>
                <div className="p-8 md:p-10 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${service.textColor} bg-[#fef7f1]`}>
                      {language === 'en' ? 'Service' : 'Service'} {(index + 1).toString().padStart(2, '0')}
                    </div>
                    {renderStarRating(service.rating, service.textColor)}
                  </div>
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-16 h-16 flex-shrink-0 rounded-xl ${service.bgColor} p-4 text-white shadow-md`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#545454] mb-1">
                        {service.title}
                      </h3>
                      <div className={service.textColor}>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-1 rounded-full ${service.bgColor} opacity-30`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#545454]/80 mb-6 flex-grow text-lg">
                    {service.description}
                  </p>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="bg-[#fef7f1] rounded-xl p-4 text-center">
                      <p className={`text-xl font-bold ${service.textColor}`}>
                        <StaticCounter value={service.stat1.value} suffix={service.stat1.suffix} />
                      </p>
                      <p className="text-xs text-[#545454]/70 mt-1">
                        {service.stat1.label}
                      </p>
                    </div>
                    <div className="bg-[#fef7f1] rounded-xl p-4 text-center">
                      <p className={`text-xl font-bold ${service.textColor}`}>
                        <StaticCounter value={service.stat2.value} suffix={service.stat2.suffix} />
                      </p>
                      <p className="text-xs text-[#545454]/70 mt-1">
                        {service.stat2.label}
                      </p>
                    </div>
                  </div>
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-[#545454] mb-3">
                      {language === 'en' ? 'Key Features:' : 'Caractéristiques Clés:'}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className={`w-5 h-5 mr-2 rounded-full flex items-center justify-center ${service.bgColor}`}>
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-[#545454]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/services/${service.id}`}
                      className={`w-full block text-center py-3.5 px-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-medium`}
                    >
                      <span className="flex items-center justify-center">
                        {service.cta}
                        <svg
                          className="ml-2 w-5 h-5"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile CTA */}
        <div className="mt-20 md:mt-24 text-center sm:hidden">
          <Link
            href="/services"
            className="inline-flex items-center justify-center w-full max-w-md px-10 py-5 rounded-xl bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white text-xl font-medium shadow-md"
          >
            <span className="flex items-center">
              {language === 'en' ? 'Explore All Services' : 'Explorer Tous Les Services'}
              <svg
                className="ml-3 w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
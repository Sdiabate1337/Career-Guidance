"use client";

import { useContext, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from '../../contexts/LanguageContext';
import Image from "next/image";


// ===== Cycles data =====
const educationCycles = [
  {
    id: 'licence',
    title: 'Licence / Bachelor',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 'master',
    title: 'Master / MSc',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'ingenieurie',
    title: 'Cycle Ingénieur',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// ===== Filières data =====
const filieresByCycle = {
  licence: [
    {
      title: "BANQUE & FINANCE",
      color: "#ff914d",
      fields: [
        "BANQUE ET ASSURANCE",
        "BANQUE FINANCE",
        "BANQUE FINANCE ET ASSURANCE",
        "ACTUARIAT ET GESTION DES RISQUES",
        "SCIENCES ECONOMIQUES",
        "ECONOMIE ET MANAGEMENT DIGITAUX",
        "ECONONIE ET GESTION",
        "COMPTABILITE CONTROLE ET AUDIT",
        "ETUDES ECONOMIQUES ET STATISTIQUES",
        "FINANCE AUDIT CONTROLE DE GESTION",
        "INGENIERIE FINANCIERE",
        "EXPERT FINANCIER"
      ]
    },
    {
      title: "DROIT, SCIENCES POLITIQUES & FISCALITE",
      color: "#ff914d",
      fields: [
        "DROIT DES AFFAIRES",
        "DROIT DES AFFAIRES OHADA",
        "SCIENCES POLITIQUES",
        "RELATIONS INTERNATIONALES",
        "FISCALITE D’ENTREPRISE",
      ]
    },
    {
      title: "MANAGEMENT & COMMUNICATION",
      color: "#ff914d",
      fields: [
        "ADMINISTRATION DES AFFAIRES",
        "MANAGEMENT DE PROJET ET ENTREPREUNARIAT",
        "RESSOURCES HUMAINES ET COMMUNICATION",
        "MARKETING ET COMMUNICATION DIGITALE",
        "MEDIAS COMMUNICATION  ET JOURNALISME"
      ]
    },
    {
      title: "INFORMATIQUE & RESEAUX",
      color: "#ff914d",
      fields: [
        "INGENIERIE INFORMATIQUE",
        "INGENIERIE INTELLIGENTE DES SYSTEMES INFORMATIQUES",
        "INGENIERIE INTELLIGENTE DES SYSTEMES RESEAUX ET TELECOMMUNICATIONS",
        "INTELLIGENCE ARTIFICIELLE",
        "GENIE INFORMATIQUE",
        "GENIE LOGICIEL",
        "CYBERSECURITE",
        "DATA SCIENCE"
      ]
    },
    {
      title: "MATHEMATIQUES & SCIENCES",
      color: "#ff914d",
      fields: [
        "MATHEMATIQUE-INFORMATIQUE-PHYSIQUE",
        "MATHEMATIQUES ET INFORMATIQUES",
        "MATHEMATIQUES ET SCIENCES DE DONNEES"
      ]
    }
  ],
  master: [
    {
      title: "BANQUE & FINANCE",
      color: "#ff914d",
      fields: [
        "BANQUE ET ASSURANCE",
        "BANQUE FINANCE",
        "BANQUE FINANCE ET ASSURANCE",
        "ACTUARIAT ET GESTION DES RISQUES",
        "SCIENCES ECONOMIQUES",
        "ECONOMIE ET MANAGEMENT DIGITAUX",
        "ECONONIE ET GESTION",
        "COMPTABILITE CONTROLE ET AUDIT",
        "ETUDES ECONOMIQUES ET STATISTIQUES",
        "FINANCE AUDIT CONTROLE DE GESTION",
        "INGENIERIE FINANCIERE",
        "EXPERT FINANCIER"
      ]
    },
    {
      title: "DROIT, SCIENCES POLITIQUES & FISCALITE",
      color: "#ff914d",
      fields: [
        "DROIT DES AFFAIRES",
        "DROIT DES AFFAIRES OHADA",
        "SCIENCES POLITIQUES",
        "RELATIONS INTERNATIONALES",
        "FISCALITE D’ENTREPRISE",
      ]
    },
    {
      title: "MANAGEMENT & COMMUNICATION",
      color: "#ff914d",
      fields: [
        "ADMINISTRATION DES AFFAIRES",
        "MANAGEMENT DE PROJET ET ENTREPREUNARIAT",
        "RESSOURCES HUMAINES ET COMMUNICATION",
        "MARKETING ET COMMUNICATION DIGITALE",
        "MEDIAS COMMUNICATION  ET JOURNALISME"
      ]
    },
    {
      title: "ELECTRO-TECH, MECANIQUE & PHYSIQUE",
      color: "#ff914d",
      fields: [
        "GENIE ELECTRIQUE",
        "GENIE MECANIQUE",
        "GENIE PHISIQUE",
        "INGENIERIE ET PHYSIQUE DE MATERIAUX AVANCEE",
        "MECANIQUE AVANCEE",
        "MECANIQUE ROBOTIQUE ET MATERIAUX INNOVANTS"
      ]
    },
    {
      title: "INFORMATIQUE & RESEAUX",
      color: "#ff914d",
      fields: [
        "INGENIERIE INFORMATIQUE",
        "INGENIERIE INTELLIGENTE DES SYSTEMES INFORMATIQUES",
        "INGENIERIE INTELLIGENTE DES SYSTEMES RESEAUX ET TELECOMMUNICATIONS",
        "INTELLIGENCE ARTIFICIELLE",
        "GENIE INFORMATIQUE",
        "GENIE LOGICIEL",
        "CYBERSECURITE",
        "DATA SCIENCE"
      ]
    },
    {
      title: "AUTRES",
      color: "#ff914d",
      fields: [
        "GEO RESSOURCES ET GEO MINES",
        "MINES & CARRIERES",
        "TRADING ET FINANCE DES MARCHES",
        "TOURISME ET HOTELLERIE",
        "ARCHITECTURE"
      ]
    }
  ],
  ingenieurie: [
    {
      title: "ELECTRO-TECH, MECANIQUE & PHYSIQUE",
      color: "#ff914d",
      fields: [
        "GENIE ELECTRIQUE",
        "GENIE MECANIQUE",
        "GENIE PHISIQUE",
        "INGENIERIE ET PHYSIQUE DE MATERIAUX AVANCEE",
        "MECANIQUE AVANCEE",
        "MECANIQUE ROBOTIQUE ET MATERIAUX INNOVANTS"
      ]
    },
    {
      title: "SCIENCES DE LA SANTE",
      color: "#ff914d",
      fields: [
        "INFIRMIER EN ANESTHESIE ET REANIMATION",
        "INFIRMIER EN SOINS D’URGENCES ET SOINS INTENSIFS",
        "ORTHOPHONIE",
        "PSYCHOLOGIE",
        "PSYCHOMOTRICITE",
        "MEDECIN"
      ]
    },
    {
      title: "INFORMATIQUE & RESEAUX",
      color: "#ff914d",
      fields: [
        "INGENIERIE INFORMATIQUE",
        "INGENIERIE INTELLIGENTE DES SYSTEMES INFORMATIQUES",
        "INGENIERIE INTELLIGENTE DES SYSTEMES RESEAUX ET TELECOMMUNICATIONS",
        "INTELLIGENCE ARTIFICIELLE",
        "GENIE INFORMATIQUE",
        "GENIE LOGICIEL",
        "CYBERSECURITE",
        "DATA SCIENCE"
      ]
    },
    {
      title: "MATHEMATIQUES & SCIENCES",
      color: "#ff914d",
      fields: [
        "MATHEMATIQUE-INFORMATIQUE-PHYSIQUE",
        "MATHEMATIQUES ET INFORMATIQUES",
        "MATHEMATIQUES ET SCIENCES DE DONNEES"
      ]
    }
  ]
};

// ===== SectionCyclesFilieres =====
function SectionCyclesFilieres({
  educationCycles,
  activeTab,
  setActiveTab,
  fieldsInView,
  fieldsRef,
  language,
  showAllFields,
  setShowAllFields,
}: {
  educationCycles: typeof educationCycles,
  activeTab: string,
  setActiveTab: (id: string) => void,
  fieldsInView: boolean,
  fieldsRef: React.RefObject<HTMLDivElement>,
  language: string,
  showAllFields: boolean,
  setShowAllFields: (show: boolean) => void,
}) {
  const filieresToShow = filieresByCycle[activeTab as keyof typeof filieresByCycle] || [];
  return (
    <section id="filieres" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
            {language === "en" ? "Educational Paths" : "NOS CYCLES"}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]">
            {language === "en" ? "Study Programs" : "FILIERES"}
            <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
          </h2>
        </div>
        <div className="flex flex-nowrap justify-center mb-10 gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {educationCycles.map((cycle) => (
            <button
              key={cycle.id}
              className={`px-8 py-5 text-base md:text-lg font-medium transition-all duration-300 flex items-center hover:-translate-y-1 flex-shrink-0 relative ${
                activeTab === cycle.id
                  ? "text-[#ff914d]"
                  : "text-[#545454] hover:text-[#ff914d]"
              }`}
              onClick={() => setActiveTab(cycle.id as string)}
            >
              <div className={`mr-3 w-12 h-12 rounded-full flex items-center justify-center ${
                activeTab === cycle.id
                  ? "bg-[#ff914d]/10 text-[#ff914d]"
                  : "bg-white shadow-sm border border-[#545454]/10 text-[#545454]"
              } transition-all duration-300`}>
                {cycle.icon}
              </div>
              <span>{cycle.title}</span>
            </button>
          ))}
        </div>
        <div ref={fieldsRef} className="mt-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-[30px] shadow-xl p-8 mb-8 border border-[#545454]/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filieresToShow.map((cat) => (
                <div key={cat.title}>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3">
                      {/* Optionally add an icon here */}
                    </div>
                    <h4 className="text-lg font-bold text-[#545454]">{cat.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm pl-3">
                    {cat.fields.map((field, i) => (
                      <li key={i} className="flex items-center text-[#545454]">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#ff914d] mr-2"></span>
                        {field}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== PAGE PRINCIPALE ==========
import CallToAction from '@/app/components/CallToAction';
import React from 'react';

export default function SchoolSearchPage() {
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState('licence');
  const [showAllFields, setShowAllFields] = useState(false);
  const dummyRef = useRef<HTMLDivElement>(null);
  const { ref: fieldsRef, inView: fieldsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const heroImages = ["/maroc.png", "/tour.jpg"];
  const [heroIndex, setHeroIndex] = useState(0);
  
  // Slider automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative bg-[#fcfcfc] overflow-hidden min-h-screen">

      {/* Hero Section avec slideshow en background */}
      <section className="relative pt-28 pb-20 overflow-hidden z-10">
        {/* Background slider */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ minHeight: 320 }}>
          {heroImages.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              priority={idx === 0}
              sizes="100vw"
              className={`
                object-cover object-center transition-opacity duration-1000 ease-in-out
                ${heroIndex === idx ? "opacity-100" : "opacity-0"}
              `}
              style={{ zIndex: 1 }}
            />
          ))}
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f3]/80 to-white/70 z-10" />
        </div>
        <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <motion.h1
              className="text-4xl md:text-5xl font-serif font-bold text-[#ff914d] mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {language === "en"
                ? "Study Abroad: Morocco & France"
                : "Études à l'Étranger : Maroc & France"}
            </motion.h1>
            <p className="text-lg text-[#545454] max-w-3xl mx-auto">
              {language === "en" ? (
                <>
                  Explore all the opportunities to pursue your higher education in Morocco or France with personalized guidance.<br /><br />
                  This section has been completely redesigned to offer you a clear and tailored experience, with dedicated spaces for each country.<br /><br />
                  Compare your options, get expert support at every step, and find the study path that suits you best. Your future starts here!
                </>
              ) : (
                <>
                  Découvrez toutes les opportunités pour poursuivre vos études supérieures au Maroc ou en France avec un accompagnement sur-mesure.<br /><br />
                  Cette rubrique a été entièrement repensée pour vous offrir une expérience claire et personnalisée, avec un espace dédié à chaque pays.<br /><br />
                  Comparez vos options, bénéficiez d’un accompagnement expert à chaque étape, et trouvez le parcours qui vous ressemble. Votre avenir commence ici !
                </>
              )}
            </p>
            {/* Toggle button FR/EN */}
                  {/* CTA "Voir les filières" */}
            <div className="flex justify-center mt-6">
              <a
                href="#filieres"
                className="inline-block px-8 py-3 rounded-full bg-[#ff914d] text-white font-bold text-lg shadow-lg hover:bg-[#ff7c1a] transition-colors duration-200"
              >
                {language === "en" ? "See Programs" : "Voir les filières"}
              </a>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* ...le reste de ta page... */}
      <section className="py-24 bg-gradient-to-br from-white via-[#fff8f3] to-[#ffe2d0] relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="rounded-[2.5rem] shadow-2xl border-0 bg-white/90 backdrop-blur-xl p-0 md:p-0 flex flex-col md:flex-row overflow-hidden relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          >
            {/* Morocco Card */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 py-12 px-8 bg-gradient-to-br from-[#ffede0] via-[#fff8f3] to-white relative">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl shadow-xl border-2 border-[#ff914d]/20 bg-white p-2">
                  <Image
                    src="/maroc.png"
                    alt="Morocco illustration"
                    width={90}
                    height={90}
                    className="rounded-xl object-contain"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#ff914d] flex items-center gap-2 tracking-tight">
                    <span className="w-3 h-3 rounded-full bg-[#ff914d]"></span>
                    Étudier au Maroc
                  </h3>
                  <p className="text-sm text-[#ff914d]/80 font-medium mt-1 uppercase tracking-wide">
                    #DreamBigMaroc
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base mt-3 mb-0">
                <span className="font-semibold">Career Guidance</span> accompagne les étudiants d’Afrique subsaharienne vers les meilleures écoles reconnues ou accréditées au Maroc.<br /><br />
                Notre réseau de partenaires facilite toutes les démarches : <span className="font-semibold">choix d’école, inscription, suivi du dossier, obtention du visa</span> – pour que vous puissiez concrétiser sereinement votre rêve d’études au Maroc, dans la ville de votre choix.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-xs font-bold uppercase">Écoles partenaires</span>
                <span className="inline-block px-3 py-1 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-xs font-bold uppercase">Visa simplifié</span>
              </div>
            </div>

            {/* Separator - Show on large screens */}
            <div className="hidden md:block w-[3px] bg-gradient-to-b from-[#ff914d]/0 via-[#ff914d]/30 to-[#002fa7]/0 my-12 mx-0 rounded-full"></div>

            {/* France Card */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 py-12 px-8 bg-gradient-to-br from-[#e6ecfb] via-white to-[#f4f7fd] relative">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl shadow-xl border-2 border-[#002fa7]/20 bg-white p-2">
                  <Image
                    src="/tour.jpg"
                    alt="France illustration"
                    width={90}
                    height={90}
                    className="rounded-xl object-contain"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#002fa7] flex items-center gap-2 tracking-tight">
                    <span className="w-3 h-3 rounded-full bg-[#002fa7]"></span>
                    Étudier en France
                  </h3>
                  <p className="text-sm text-[#002fa7]/80 font-medium mt-1 uppercase tracking-wide">
                    #CampusFrance
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base mt-3 mb-0">
                <span className="font-semibold">Career Guidance</span> accompagne les étudiants d’Afrique subsaharienne et du Maroc pour toutes les démarches d’études en France.<br /><br />
                Notre équipe vous aide de <span className="font-semibold">A à Z</span> : <span className="font-semibold">choix des filières, constitution du dossier, accompagnement Campus France, coaching entretien, procédure de visa</span> et plus encore, jusqu’à l’intégration en établissement.
              </p>
              <div className="w-full">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-[#002fa7] text-[15px] mt-4 list-none">
                  <li className="flex gap-2 items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#002fa7]"></span>
                    Choix des filières & universités
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#002fa7]"></span>
                    Dépôt de candidature
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#002fa7]"></span>
                    CV & lettre de motivation
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#002fa7]"></span>
                    Suivi du dossier Campus France
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#002fa7]"></span>
                    Coaching entretien & visa
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#002fa7]"></span>
                    Intégration établissement
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionCyclesFilieres
        educationCycles={educationCycles}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        fieldsInView={fieldsInView}
        fieldsRef={dummyRef}
        language={language}
        showAllFields={showAllFields}
        setShowAllFields={setShowAllFields}
      />

      <CallToAction />
    </div>
  );
}
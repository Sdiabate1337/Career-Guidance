import { motion, AnimatePresence } from "framer-motion";
import { RefObject } from "react";

const educationCycles = [
  { id: 'licence', title: 'Licence / Bachelor'},
  { id: 'master', title: 'Master / MSc' },
  { id: 'ingenieurie', title: 'Cycle Ingénieur' },
];

const filieresByCycle = {
  licence: [
    {
      title: "BANQUE & FINANCE",
      color: "#ff914d",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M9 10h.01M15 10h.01M7 14h10" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 8c2.21 0 4 1.343 4 3 0 1.657-1.79 3-4 3s-4-1.343-4-3c0-1.657 1.79-3 4-3z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      ),
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
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M9 10h.01M15 10h.01M7 14h10" />
        </svg>
      ),
      fields: [
        "MATHEMATIQUE-INFORMATIQUE-PHYSIQUE",
        "MATHEMATIQUES ET INFORMATIQUES",
        "MATHEMATIQUES ET SCIENCES DE DONNEES"
      ]
    }
  ]
};

type EducationCycle = {
  id: string | number;
  title: string;
  icon?: React.ReactNode;
};

interface SectionCyclesFilieresProps {
  language?: string;
  educationCycles: EducationCycle[];
  activeTab: string | number;
  setActiveTab: (id: string | number) => void;
  fieldsInView: boolean;
  fieldsRef?: RefObject<HTMLDivElement | null>
  showAllFields: boolean;
  setShowAllFields: (show: boolean) => void;
}

export default function SectionCyclesFilieres({
  language = "fr",
  educationCycles,
  fieldsRef,
  activeTab,
  setActiveTab,
  fieldsInView,
  showAllFields,
  setShowAllFields,
}: SectionCyclesFilieresProps) {
  const filieresToShow = filieresByCycle[activeTab as keyof typeof filieresByCycle] || [];

  return (
    <section className="py-20 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f3]/80 to-white/60"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <motion.span
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
              {language === "en" ? "Educational Paths" : "NOS CYCLES"}
            </motion.span>
          </div>
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {language === "en" ? "Study Programs" : "FILIERES"}
            <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
          </motion.h2>
        </motion.div>
        {/* Tabs */}
        <div className="relative mb-16">
          <div className="absolute inset-x-0 -bottom-4 h-px bg-[#545454]/10"></div>
          <div className="flex flex-nowrap justify-center mb-0 gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {educationCycles.map((cycle, idx) => (
              <motion.button
                key={cycle.id}
                className={`px-8 py-5 text-base md:text-lg font-medium transition-all duration-300 flex items-center hover:-translate-y-1 flex-shrink-0 relative ${
                  activeTab === cycle.id
                    ? "text-[#ff914d]"
                    : "text-[#545454] hover:text-[#ff914d]"
                }`}
                onClick={() => setActiveTab(cycle.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`mr-3 w-12 h-12 rounded-full flex items-center justify-center ${
                  activeTab === cycle.id
                    ? "bg-[#ff914d]/10 text-[#ff914d]"
                    : "bg-white shadow-sm border border-[#545454]/10 text-[#545454] group-hover:text-[#ff914d]"
                } transition-all duration-300`}>
                  {cycle.icon}
                </div>
                <span>{cycle.title}</span>
                {activeTab === cycle.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff914d]"
                    layoutId="activeTab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            ref={fieldsRef}
            className="mt-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-[30px] shadow-xl p-8 mb-8 border border-[#545454]/10"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: fieldsInView ? 0 : 30, opacity: fieldsInView ? 1 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filieresToShow.map((cat, idx) => (
                  <div key={cat.title}>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d] mr-3">
                        {cat.icon}
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
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
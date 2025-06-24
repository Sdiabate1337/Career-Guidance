"use client";

import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LanguageContext } from '../../contexts/LanguageContext';
import SectionCyclesFilieres from '@/app/components/SectionCyclesFilieres';
import CallToAction from '@/app/components/CallToAction';

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
    id: 'engineering',
    title: 'Cycle Ingénieur',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const SchoolSearchPage = () => {
  const { language } = useContext(LanguageContext);

  const [activeTab, setActiveTab] = useState('licence');
  const [showAllFields, setShowAllFields] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { ref: fieldsRef, inView: fieldsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-[#fcfcfc] overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <motion.h1
              className="text-4xl md:text-5xl font-serif font-bold text-[#ff914d] mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Études à l&apos;Étranger : Maroc & France
            </motion.h1>
            <p className="text-lg text-[#545454] max-w-3xl mx-auto">
              Vous verrez les éléments tels que demandés.<br />
              Prière de tenir compte des ajouts qui ont été faits au niveau de la partie INSCRIPTIONS dans les écoles (A remplacer par Etudes à l&apos;Etranger car on fera Maroc et France).<br />
              Cette rubrique est désormais présentée en deux parties distinctes pour répondre à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Section "Bienvenue sur notre plateforme d’Etudes à l’Etranger" */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="rounded-3xl shadow-xl border border-[#ececec] bg-gradient-to-br from-[#fff8f3] to-white p-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#ff914d] mb-6 text-center">
              Bienvenue sur notre plateforme d’<span className="text-[#232323]">Études à l’Étranger</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Maroc */}
              <div>
                <h3 className="font-bold text-lg text-[#ff914d] mb-2 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-[#ff914d] mr-2"></span>
                  Étudier au Maroc
                </h3>
                <p className="text-[#434343] mb-2">
                  Career Guidance se charge d’accompagner tous les étudiants en provenance de l’Afrique subsaharienne, désireux d’intégrer une école reconnue ou accréditée au Maroc.<br /><br />
                  En effet, notre structure étant en partenariats avec plusieurs écoles sur le territoire Marocain, nous permet de faciliter les procédures en interne pour nos différents candidats afin d’intégrer l’école de leur rêve.<br /><br />
                  Grâce à ce soutien, les étudiants peuvent naviguer plus facilement dans les étapes complexes d’inscription, de validation des dossiers et de demande de visa pour réussir leur projet d’études dans n’importe quelle ville du Maroc.
                </p>
              </div>
              {/* France */}
              <div>
                <h3 className="font-bold text-lg text-[#002fa7] mb-2 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-[#002fa7] mr-2"></span>
                  Étudier en France
                </h3>
                <p className="text-[#434343] mb-2">
                  Career Guidance se charge d’accompagner tous les étudiants en provenance de l’Afrique subsaharienne et du Maroc. Notre jeune équipe composée d’experts, vous accompagne dans toutes les procédures pour étudier en France.<br /><br />
                  En effet, elle aide à constituer et suivre les dossiers jusqu’à l’obtention d’une acceptation sur la plateforme officielle « Études en France » de Campus France, qui centralise les candidatures aux établissements français.
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-[#3d3d3d] text-base">
                  <li>Choix des filières et Universités</li>
                  <li>Dépôt de Candidature</li>
                  <li>Conception d’un CV professionnel</li>
                  <li>Rédaction des lettres de motivation à envoyer aux universités</li>
                  <li>Ouverture du Dossier et Inscription</li>
                  <li>Versement d’un Acompte</li>
                  <li>Signature de votre Contrat avec Career Guidance</li>
                  <li>Création du Compte Campus France</li>
                </ul>
                <ul className="list-disc ml-6 mt-4 space-y-1 text-[#3d3d3d] text-base">
                  <li>Coaching et Préparation de l’entretien Campus France</li>
                  <li>Assistance dans la procédure de Demande de Visa</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Cycles & Filières */}
      <SectionCyclesFilieres
        educationCycles={educationCycles}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        fieldsInView={fieldsInView}
        fieldsRef={fieldsRef}
        showAllFields={showAllFields}
        setShowAllFields={setShowAllFields}
        language={language}
      />

      <CallToAction />
    </div>
  );
};

export default SchoolSearchPage;
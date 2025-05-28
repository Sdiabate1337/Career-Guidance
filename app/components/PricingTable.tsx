import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

interface PricingTableProps {
  language: string;
}

type Region = 'africa' | 'europe' | 'america';

const PricingTable = ({ language }: PricingTableProps) => {
  const [region, setRegion] = useState<Region>('africa');

  // LinkedIn pricing data from the provided document
  type PricingPlanKey = 'essai' | 'classic' | 'populaire' | 'recommande' | 'premium';

  type PricingPlan = {
    title: string;
    period: string;
    africa: number;
    europe: number;
    america: number;
    relations: number;
    publications: number;
    popular: boolean;
  };

  const pricingData: Record<PricingPlanKey, PricingPlan> = {
    essai: {
      title: language === 'en' ? 'Trial' : 'Essai',
      period: language === 'en' ? '1 Month' : '1 Mois',
      africa: 45,
      europe: 61,
      america: 61,
      relations: 500,
      publications: 2,
      popular: false
    },
    classic: {
      title: language === 'en' ? 'Classic' : 'Classic',
      period: language === 'en' ? '3 Months' : '3 Mois',
      africa: 96,
      europe: 120,
      america: 120,
      relations: 1500,
      publications: 6,
      popular: false
    },
    populaire: {
      title: language === 'en' ? 'Popular' : 'Populaire',
      period: language === 'en' ? '6 Months' : '6 Mois',
      africa: 180,
      europe: 220,
      america: 220,
      relations: 3000,
      publications: 12,
      popular: true
    },
    recommande: {
      title: language === 'en' ? 'Recommended' : 'Recommandé',
      period: language === 'en' ? '9 Months' : '9 Mois',
      africa: 230,
      europe: 270,
      america: 270,
      relations: 5000,
      publications: 20,
      popular: false
    },
    premium: {
      title: language === 'en' ? 'Premium' : 'Premium',
      period: language === 'en' ? '12 Months' : '12 Mois',
      africa: 300,
      europe: 400,
      america: 400,
      relations: 10000,
      publications: 30,
      popular: false
    }
  };

  // Services included with all plans
  const includedServices = language === 'en' 
    ? [
      "LinkedIn page creation (if needed)",
      "Professional bio writing",
      "Professional formatting and presentation",
      "Personal branding strategy optimization",
      "Connection to quality profiles and experts",
      "Professional writing of publications",
      "Relationship management assistance",
      "Free interview preparation coaching"
    ]
    : [
      "Création de page LinkedIn (si nécessaire)",
      "Rédaction intégrale de votre Bio professionnelle",
      "Mise en forme et présentation professionnelle",
      "Stratégie de Personal Branding optimisée",
      "Connexion à des profils de qualité et experts",
      "Rédaction professionnelle de publications",
      "Assistance à la gestion des relations",
      "Coaching gratuit pour préparation d'entretien"
    ];

  return (
    <div className="mb-8">
      {/* Region Selector */}
      <div className="max-w-md mx-auto mb-10">
        <div className="flex items-center justify-center">
          <p className="mr-4 text-black dark:text-white font-medium">
            {language === 'en' ? 'Select your region:' : 'Sélectionnez votre région:'}
          </p>
          <div className="flex bg-grey-100 dark:bg-grey-800 p-1 rounded-full">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                region === 'africa' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-black dark:text-white hover:bg-grey-200 dark:hover:bg-grey-700'
              }`}
              onClick={() => setRegion('africa')}
            >
              {language === 'en' ? 'Africa' : 'Afrique'}
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                region === 'europe' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-black dark:text-white hover:bg-grey-200 dark:hover:bg-grey-700'
              }`}
              onClick={() => setRegion('europe')}
            >
              {language === 'en' ? 'Europe' : 'Europe'}
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                region === 'america' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-black dark:text-white hover:bg-grey-200 dark:hover:bg-grey-700'
              }`}
              onClick={() => setRegion('america')}
            >
              {language === 'en' ? 'America' : 'Amérique'}
            </button>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white dark:bg-grey-800 p-8 rounded-2xl shadow-lg mb-12">
        <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">
          {language === 'en' ? 'Our Mission' : 'Notre Mission'}
        </h3>
        <div className="prose prose-lg max-w-none text-black dark:text-white">
          <p className="text-center mb-6">
            {language === 'en' 
              ? 'Career Guidance Sarl is dedicated to optimizing your professional presence on LinkedIn and boosting your career opportunities.'
              : 'Career Guidance Sarl au se charge de l\'optimisation de votre présence professionnelle sur LinkedIn et l\'amélioration de vos opportunités de carrière.'}
          </p>
          
          <h4 className="font-bold text-xl mb-4">
            {language === 'en' ? 'All Our Plans Include:' : 'Tous Nos Plans Comprennent:'}
          </h4>
          
          <ul className="grid md:grid-cols-2 gap-y-2 gap-x-4">
            {includedServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <div className="text-orange-500 rounded-full p-1 mr-2 mt-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <p className="text-center mt-8 font-semibold text-orange-500">
            {language === 'en'
              ? 'The Career Guidance Team Welcomes You!'
              : "L'équipe Career Guidance vous souhaite la Bienvenue!"}
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Object.keys(pricingData).map((key) => {
          const plan = pricingData[key as PricingPlanKey];
          return (
            <motion.div 
              key={key}
              className={`bg-white dark:bg-grey-800 rounded-2xl shadow-xl overflow-hidden border border-grey-100 dark:border-grey-700 ${plan.popular ? 'ring-2 ring-orange-500 relative z-10 scale-105 md:-mt-4 md:-mb-4' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Object.keys(pricingData).indexOf(key) * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {plan.popular && (
                <div className="bg-orange-500 text-white text-center py-1 text-sm font-medium">
                  {language === 'en' ? 'Most Popular' : 'Le Plus Populaire'}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-black dark:text-white">{plan[region]}€</span>
                  <span className="text-grey-600 dark:text-grey-400">/{plan.period}</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-black dark:text-white">
                      {language === 'en' ? 'Connections:' : 'Relations:'}
                    </span>
                    <span className="font-semibold text-black dark:text-white">{plan.relations.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black dark:text-white">
                      {language === 'en' ? 'Publications:' : 'Publications:'}
                    </span>
                    <span className="font-semibold text-black dark:text-white">{plan.publications}</span>
                  </div>
                </div>
                
                <Link 
                  href="/consultation"
                  className={`w-full block text-center py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 hover:shadow-lg transition-all duration-300`}
                >
                  {language === 'en' ? 'Get Started' : 'Commencer'}
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* VAT Notice */}
      <div className="text-center mt-4 text-sm text-black dark:text-grey-400">
        {language === 'en' 
          ? 'These prices include 20% VAT to be paid to the Tax Department.'
          : 'NB : Ces montants comprennent la TVA 20% à verser à la Direction Générale des Impôts.'}
      </div>
    </div>
  );
};

export default PricingTable;
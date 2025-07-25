"use client";

import { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LanguageContext } from '../../contexts/LanguageContext';
import Testimonial from '../Testimonial';
import PricingTable from '../PricingTable';
import FAQ from '../../components/FAQ';

const CareerCoachingPage = () => {
  const { language } = useContext(LanguageContext);
  const [scrollY, setScrollY] = useState(0);
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-06-23 16:48:42";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const service = {
    id: 'coaching',
    title: language === 'en' ? 'Career Coaching' : 'Coaching de Carrière',
    // --- Description image 2 ---
    description: language === 'en'
      ? "Welcome to our Career Coaching Platform. We offer personalized, one-on-one guidance to help you navigate career transitions and professional development. We work closely with you to clarify your career goals, identify your strengths, and develop actionable strategies to achieve your professional objectives."
      : "Bienvenue sur notre Plateforme de Coaching Carrière. Notre structure offre des conseils personnalisés et individuels pour vous aider à naviguer les transitions de carrière et le développement professionnel. Nous travaillons étroitement avec vous pour clarifier vos objectifs de carrière, identifier vos forces et développer des stratégies exploitables pour atteindre vos objectifs professionnels.",
    features: language === 'en' ? 
      [
        {
          title: "1-on-1 coaching sessions",
          description: "Personalized guidance from experienced career professionals tailored to your specific situation"
        },
        {
          title: "Career planning",
          description: "Strategic roadmap development to guide short and long-term professional decisions"
        },
        {
          title: "Salary negotiation",
          description: "Proven tactics to maximize compensation packages and benefits"
        },
        {
          title: "Interview preparation",
          description: "Comprehensive preparation including mock interviews and personalized feedback"
        },
        {
          title: "Professional branding",
          description: "Development of your unique professional value proposition and personal brand"
        }
      ] :
      [
        {
          title: "Sessions de coaching individuelles",
          description: "Conseils personnalisés de professionnels de carrière expérimentés adaptés à votre situation spécifique"
        },
        {
          title: "Planification de carrière",
          description: "Développement d'une feuille de route stratégique pour guider les décisions professionnelles à court et à long terme"
        },
        {
          title: "Négociation salariale",
          description: "Tactiques éprouvées pour maximiser les packages de rémunération et les avantages"
        },
        {
          title: "Préparation d'entretien",
          description: "Préparation complète comprenant des simulations d'entretiens et des retours personnalisés"
        },
        {
          title: "Image de marque professionnelle",
          description: "Développement de votre proposition de valeur professionnelle unique et de votre marque personnelle"
        }
      ],
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    stat1: { value: 85, label: language === 'en' ? 'Career satisfaction' : 'Satisfaction de carrière', suffix: '%' },
    stat2: { value: 25, label: language === 'en' ? 'Salary increase' : 'Augmentation de salaire', suffix: '%' },
    rating: 4.8,
    reviewCount: 189,
    cta: language === 'en' ? 'Start Coaching' : 'Commencer le Coaching',
    color: "#FF5722",
    gradient: "from-[#FF5722]/90 to-[#FF5722]/70",
    textColor: "text-[#FF5722]",
    borderColor: "border-[#FF5722]",
    bgColor: "bg-[#FF5722]",
    lightBg: "bg-white",
    process: language === 'en' ? 
      [
        "Initial assessment and goal-setting session",
        "Development of personalized career strategy",
        "Regular coaching sessions (in-person or virtual)",
        "Skills and strength identification",
        "Action plan implementation and follow-up"
      ] :
      [
        "Session d'évaluation initiale et de définition d'objectifs",
        "Développement d'une stratégie de carrière personnalisée",
        "Sessions de coaching régulières (en personne ou virtuelles)",
        "Identification des compétences et des forces",
        "Mise en œuvre du plan d'action et suivi"
      ],
    outcomes: language === 'en' ? 
      [
        "85% career satisfaction improvement",
        "25% average salary increase",
        "92% success rate in career transitions",
        "Improved work-life balance",
        "Enhanced leadership skills"
      ] :
      [
        "Amélioration de 85% de la satisfaction professionnelle",
        "Augmentation moyenne de salaire de 25%",
        "Taux de réussite de 92% dans les transitions de carrière",
        "Meilleur équilibre travail-vie personnelle",
        "Compétences en leadership améliorées"
      ],
    testimonials: [
      {
        name: "Jennifer Wei",
        title: language === 'en' ? "Finance Manager" : "Responsable Finance",
        image: "/testimonials/jennifer.jpg",
        text: language === 'en' ? 
          "The career coaching program gave me clarity on my professional path when I was at a crossroads. My coach helped me leverage my experience to secure a role with a 32% salary increase." :
          "Le programme de coaching de carrière m'a donné de la clarté sur mon parcours professionnel lorsque j'étais à la croisée des chemins. Mon coach m'a aidée à tirer parti de mon expérience pour obtenir un poste avec une augmentation de salaire de 32%."
      },
      {
        name: "Thomas Rodriguez",
        title: language === 'en' ? "Project Manager" : "Chef de Projet",
        image: "/testimonials/thomas.jpg",
        text: language === 'en' ? 
          "The salary negotiation strategies alone were worth the investment. I was able to negotiate an additional $15,000 plus better benefits in my new position." :
          "Les stratégies de négociation salariale à elles seules valaient l'investissement. J'ai pu négocier 15 000 $ supplémentaires ainsi que de meilleurs avantages dans mon nouveau poste."
      }
    ],
    // --- TARIFS IMAGE 2 ---
    pricing: [
      {
        name: "Classic",
        price: "79 €",
        features: [
          "Rédaction de Lettre de Motivation",
          "Rédiger un CV percutant",
          "Les Secrets pour réussir un Entretien",
          "Postuler efficacement aux offres",
          "Simulation d’Entretien avec un RH"
        ],
        highlight: false,
      },
      {
        name: "Complet",
        price: "109 €",
        features: [
          "Rédaction de Lettre de Motivation",
          "Rédiger un CV percutant ?",
          "Les Secrets pour réussir un Entretien",
          "Postuler efficacement aux offres",
          "Simulation d’Entretien avec un RH",
          "Test Psychotechnique",
          "Comment négocier son Salaire ?"
        ],
        highlight: true,
      },
    ],
    faqs: language === 'en' ? 
      [
        {
          question: "How often do coaching sessions take place?",
          answer: "The frequency of sessions depends on your package and specific needs. Typically, we recommend biweekly sessions for optimal progress, but we can adjust to weekly or monthly depending on your schedule and goals."
        },
        {
          question: "Do you offer in-person or only virtual coaching?",
          answer: "We offer both in-person and virtual coaching options. In-person sessions are available in select cities, while virtual coaching is available worldwide. Many clients choose a combination of both formats."
        },
        {
          question: "What if I need to reschedule a session?",
          answer: "We understand that schedules can change. We have a 24-hour reschedule policy - just let us know at least 24 hours before your scheduled session, and we'll be happy to reschedule at no additional cost."
        }
      ] :
      [
        {
          question: "À quelle fréquence les sessions de coaching ont-elles lieu?",
          answer: "La fréquence des sessions dépend de votre forfait et de vos besoins spécifiques. Généralement, nous recommandons des sessions bimensuelles pour un progrès optimal, mais nous pouvons nous adapter à des sessions hebdomadaires ou mensuelles selon votre emploi du temps et vos objectifs."
        },
        {
          question: "Proposez-vous du coaching en personne ou uniquement virtuel?",
          answer: "Nous proposons des options de coaching à la fois en personne et virtuelles. Les sessions en personne sont disponibles dans certaines villes, tandis que le coaching virtuel est disponible dans le monde entier. De nombreux clients choisissent une combinaison des deux formats."
        },
        {
          question: "Que faire si j'ai besoin de reprogrammer une session?",
          answer: "Nous comprenons que les horaires peuvent changer. Nous avons une politique de report de 24 heures - faites-le nous savoir au moins 24 heures avant votre session programmée, et nous serons heureux de la reprogrammer sans frais supplémentaires."
        }
      ]
  };

  return (
    <motion.div 
      className="bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO */}
      <section className="pt-28 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link 
                href="/services" 
                className="inline-flex items-center text-gray-600 hover:text-orange-600 mb-6"
                aria-label={language === 'en' ? 'Back to All Services' : 'Retour à Tous les Services'}
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {language === 'en' ? 'Back to All Services' : 'Retour à Tous les Services'}
              </Link>
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">{service.title}</h1>
              <p className="text-xl text-gray-700 mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Link 
                    href={`/services/${service.id}/apply`}
                    className="px-8 py-4 bg-orange-600 text-white rounded-full font-semibold shadow hover:bg-orange-700 transition-all text-lg"
                  >
                    {service.cta}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
                  <Link 
                    href="#pricing"
                    className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-semibold shadow hover:bg-gray-50 transition-all text-lg"
                  >
                    {language === 'en' ? 'View Pricing' : 'Voir les Tarifs'}
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill={i < Math.floor(service.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-700">
                  {service.rating} ({service.reviewCount} {language === 'en' ? 'reviews' : 'avis'})
                </span>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="rounded-2xl bg-orange-600 p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">
                    {language === 'en' ? 'Key Outcomes' : 'Résultats Clés'}
                  </h3>
                  <ul className="space-y-3">
                    {service.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {language === 'en' ? 'Service Features' : 'Caractéristiques du Service'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Personalized career coaching to help you achieve your professional goals'
                : 'Coaching de carrière personnalisé pour vous aider à atteindre vos objectifs professionnels'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {language === 'en' ? 'Our Coaching Process' : 'Notre Processus de Coaching'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'A proven methodology designed to help you transform your career'
                : 'Une méthodologie éprouvée conçue pour vous aider à transformer votre carrière'}
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:translate-x-[-0.5px]"></div>
            <div className="space-y-12 relative">
              {service.process.map((step, idx) => (
                <motion.div 
                  key={idx}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="w-full md:w-1/2 pb-8 md:pb-0 flex flex-col items-center md:items-end md:pr-8">
                      <motion.div 
                        className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg mb-4 md:mb-0 z-10"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        {idx + 1}
                      </motion.div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8">
                      <div className="bg-gray-50 rounded-xl p-6 shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">
                          {step}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Enhanced Design */}
      <section className="relative py-24 bg-gradient-to-br from-orange-50/80 via-white to-gray-50">
        {/* Decorative background shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl z-0"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-orange-200 rounded-full opacity-20 blur-2xl z-0"></div>
        <div className="absolute inset-0 pointer-events-none z-0"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
              <span className="inline-block relative">
                <span className="relative z-10">
                  {language === 'en' ? 'Client Testimonials' : 'Témoignages de Clients'}
                </span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-2 bg-orange-400 rounded-full opacity-40"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              {language === 'en' 
                ? 'Hear from professionals who have transformed their careers through our coaching'
                : 'Écoutez des professionnels qui ont transformé leur carrière grâce à notre coaching'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {service.testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl shadow-xl border border-orange-100 px-8 py-10 flex flex-col justify-between group hover:shadow-2xl transition duration-300"
              >
                {/* Decorative quote icon */}
                <div className="absolute -top-7 left-7 w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 13h.01M15 13h.01M7 17c0-1.657 1.343-3 3-3s3 1.343 3 3v1a3 3 0 01-3 3H7v-4zm10 0c0-1.657-1.343-3-3-3s-3 1.343-3 3v1a3 3 0 003 3h2v-4z" />
                  </svg>
                </div>
                {/* Main testimonial content */}
                <blockquote className="text-gray-800 text-lg font-semibold leading-relaxed mb-6 min-h-[80px]">
                  “{testimonial.text}”
                </blockquote>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-200 shadow-sm">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base">{testimonial.name}</div>
                    <div className="text-orange-600 font-medium text-sm">{testimonial.title}</div>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.round(service.rating) ? 'text-orange-400' : 'text-gray-200'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Decorative bottom accent */}
                <span className="absolute bottom-0 left-0 w-8 h-2 bg-orange-100 rounded-br-2xl"></span>
                <span className="absolute bottom-0 right-0 w-8 h-2 bg-orange-100 rounded-bl-2xl"></span>
              </div>
            ))}
          </div>

          {/* Call-to-action */}
          <div className="mt-16 text-center">
            <Link
              href="/testimonials"
              className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full font-bold text-lg shadow hover:bg-orange-600 transition"
            >
              {language === 'en' ? 'See More Stories' : 'Voir plus de témoignages'}
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Nos Offres de Coaching Carrière
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez la formule qui correspond à vos besoins pour booster votre carrière.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.pricing.map((offer, idx) => (
              <div
                key={offer.name}
                className={`relative bg-gray-50 rounded-2xl shadow-xl border-2 px-8 py-10 transition-all duration-300 hover:scale-[1.025] hover:border-orange-400
                  ${offer.highlight ? "border-orange-400 shadow-orange-100 ring-2 ring-orange-200" : "border-gray-200"}
                `}
              >
                {offer.highlight && (
                  <span className="absolute top-6 right-6 bg-orange-500/90 text-white text-xs px-4 py-1 rounded-full font-bold shadow">
                    Le Plus Populaire
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">
                  {offer.name}
                </h3>
                <div className="text-center text-3xl font-black mb-6 text-orange-500">{offer.price}</div>
                <ul className="space-y-3 mb-6">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="mt-1 mr-2 flex-shrink-0 w-4 h-4 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <a
                    href={`/services/coaching/apply?offer=${offer.name.toLowerCase()}`}
                    className={`inline-block px-8 py-3 rounded-full font-bold text-lg shadow transition 
                      ${offer.highlight ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white border border-orange-500 text-orange-500 hover:bg-orange-50'}
                    `}
                  >
                    {offer.highlight ? 'Choisir Complet' : 'Choisir Classic'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {language === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Find answers to common questions about our Career Coaching service'
                : 'Trouvez des réponses aux questions courantes sur notre service de Coaching de Carrière'}
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {language === 'en' 
                ? 'Ready to Transform Your Career?' 
                : 'Prêt à Transformer Votre Carrière?'}
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {language === 'en' 
                ? 'Take the first step toward achieving your professional goals with expert guidance.'
                : 'Faites le premier pas vers la réalisation de vos objectifs professionnels avec l\'aide d\'experts.'}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  href={`/services/${service.id}/apply`}
                  className="px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300"
                >
                  {service.cta}
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  href="/services"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-medium hover:bg-white/10 hover:shadow-xl transition-all duration-300"
                >
                  {language === 'en' ? 'Explore Other Services' : 'Explorer D\'autres Services'}
                </Link>
              </motion.div>
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CareerCoachingPage;
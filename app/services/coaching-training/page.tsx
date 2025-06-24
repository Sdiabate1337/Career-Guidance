"use client";

import { useContext, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext';
import FAQ from '../../components/FAQ';

type CounterProps = {
  value: number;
  duration?: number;
  suffix?: string;
};

const Counter = ({ value, duration = 2, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={counterRef} className="font-bold">{count}{suffix}</span>;
};

export default function CoachingTrainingPage() {
  const { language } = useContext(LanguageContext);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-06-24 16:12:00";

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const service = {
    id: 'formations-coaching',
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
  };

  const testimonials = [
    {
      name: "Jennifer Wei",
      title: language === 'en' ? "Finance Manager" : "Responsable Finance",
      image: "/testimonials/jennifer.jpg",
      text: language === 'en'
        ? "The career coaching program gave me clarity on my professional path when I was at a crossroads. My coach helped me leverage my experience to secure a role with a 32% salary increase."
        : "Le programme de coaching de carrière m'a donné de la clarté sur mon parcours professionnel lorsque j'étais à la croisée des chemins. Mon coach m'a aidée à tirer parti de mon expérience pour obtenir un poste avec une augmentation de salaire de 32%."
    },
    {
      name: "Carlos Mendez",
      title: language === 'en' ? "Data Analyst" : "Analyste de Données",
      image: "/testimonials/carlos.jpg",
      text: language === 'en'
        ? "The data science certification program was rigorous but incredibly rewarding. The hands-on projects gave me real-world experience that I was able to showcase in interviews, leading to multiple job offers."
        : "Le programme de certification en science des données était rigoureux mais incroyablement enrichissant. Les projets pratiques m'ont donné une expérience réelle que j'ai pu mettre en valeur lors des entretiens, ce qui a conduit à de multiples offres d'emploi."
    }
  ];

  const pricing = [
    {
      name: language === 'en' ? "Classic Coaching" : "Coaching Classique",
      price: "79 €",
      features: [
        language === 'en' ? "Cover letter writing" : "Rédaction de Lettre de Motivation",
        language === 'en' ? "Impactful CV" : "Rédiger un CV percutant",
        language === 'en' ? "Interview secrets" : "Les Secrets pour réussir un Entretien",
        language === 'en' ? "Effective job applications" : "Postuler efficacement aux offres",
        language === 'en' ? "Mock interview" : "Simulation d’Entretien avec un RH"
      ],
      highlight: false,
    },
    {
      name: language === 'en' ? "Complete Coaching" : "Coaching Complet",
      price: "109 €",
      features: [
        language === 'en' ? "Cover letter writing" : "Rédaction de Lettre de Motivation",
        language === 'en' ? "Impactful CV" : "Rédiger un CV percutant",
        language === 'en' ? "Interview secrets" : "Les Secrets pour réussir un Entretien",
        language === 'en' ? "Effective job applications" : "Postuler efficacement aux offres",
        language === 'en' ? "Mock interview" : "Simulation d’Entretien avec un RH",
        language === 'en' ? "Psychometric test" : "Test Psychotechnique",
        language === 'en' ? "Salary negotiation" : "Comment négocier son Salaire ?"
      ],
      highlight: true,
    },
    {
      name: language === 'en' ? "Single Certification" : "Certification Unique",
      price: language === 'en' ? "From $1,999" : "À partir de 1 999€",
      features: language === 'en'
        ? ["One complete certification program", "Access to learning platform", "Hands-on projects", "Certification exam fee", "3 months of career support"]
        : ["Un programme de certification complet", "Accès à la plateforme d'apprentissage", "Projets pratiques", "Frais d'examen de certification", "3 mois de soutien à la carrière"]
    },
    {
      name: language === 'en' ? "Career Track" : "Parcours de Carrière",
      price: language === 'en' ? "From $3,499" : "À partir de 3 499€",
      highlight: true,
      features: language === 'en'
        ? ["Two complementary certifications", "Extended platform access", "Advanced projects", "All certification exam fees", "1-on-1 mentorship", "6 months of career support", "Job placement assistance"]
        : ["Deux certifications complémentaires", "Accès étendu à la plateforme", "Projets avancés", "Tous les frais d'examen de certification", "Mentorat individuel", "6 mois de soutien à la carrière", "Assistance au placement professionnel"]
    }
  ];

  const faqs = [
    ...(language === 'en'
      ? [
          {
            question: "Do I need prior experience for these certification or coaching programs?",
            answer: "Most programs are designed for all levels. Entry-level certifications and coaching require no prior experience, while advanced tracks may have prerequisites."
          },
          {
            question: "How much time should I expect to commit weekly?",
            answer: "Most part-time programs and coaching tracks require 15-20 hours per week including instruction, assignments, and projects."
          },
          {
            question: "What if I can't complete the program or need to reschedule coaching?",
            answer: "We offer extension options for training and flexible rescheduling for coaching. Your success is our priority!"
          }
        ]
      : [
          {
            question: "Ai-je besoin d'une expérience préalable pour ces programmes de certification ou de coaching ?",
            answer: "La plupart des programmes s'adressent à tous les niveaux. Les certifications et coachings débutants ne nécessitent aucune expérience préalable, tandis que les parcours avancés peuvent avoir des prérequis."
          },
          {
            question: "Combien de temps dois-je prévoir chaque semaine ?",
            answer: "La plupart des programmes à temps partiel et coachings nécessitent 15 à 20 heures par semaine, incluant cours, devoirs et projets."
          },
          {
            question: "Que se passe-t-il si je ne peux pas terminer ou dois reporter une session ?",
            answer: "Nous proposons des options de prolongation pour la formation et des reports flexibles pour le coaching. Votre réussite est notre priorité !"
          }
        ])
  ];

  // SEO
  const pageTitle = language === 'en'
    ? 'Certifying Trainings & Coaching | Career Guidance'
    : 'FORMATIONS CERTIFIANTES et COACHING | Career Guidance';
  const pageDescription = language === 'en'
    ? 'Advance your career with personalized coaching and industry-recognized certifications. Expert instructors, hands-on projects, and flexible scheduling to help you reach your goals.'
    : 'Faites évoluer votre carrière avec du coaching personnalisé et des formations certifiantes reconnues. Formateurs experts, projets pratiques et horaires flexibles pour atteindre vos objectifs.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={language === 'en' ? 'certification, training, coaching, career development, skills, professional' : 'certification, formation, coaching, développement professionnel, compétences, carrière'} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/images/training-programs-social.jpg" />
        <meta property="og:url" content="https://careerguidance.com/services/coaching-training" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/images/training-programs-social.jpg" />
        <link rel="canonical" href="https://careerguidance.com/services/coaching-training" />
      </Head>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#ff914d] rounded-full text-white shadow-lg hover:bg-[#ff8133] transition-all duration-300 flex items-center justify-center"
            aria-label={language === 'en' ? 'Back to top' : 'Retour en haut'}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-white text-gray-800">

        {/* HERO */}
        <section className="relative pt-28 pb-20 overflow-hidden z-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
            <p className="text-xl text-gray-700 mb-8">{service.description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href={`/services/${service.id}/apply`}
                className="px-8 py-4 bg-[#ff914d] text-white rounded-full font-semibold shadow hover:bg-[#ff8133] transition-all text-lg"
              >
                {service.cta}
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-semibold shadow hover:bg-gray-50 transition-all text-lg"
              >
                {language === 'en' ? 'View Pricing' : 'Voir les Tarifs'}
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex text-[#ff914d]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill={i < Math.floor(service.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-700">
                {service.rating} ({service.reviewCount} {language === 'en' ? 'reviews' : 'avis'})
              </span>
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
                  ? 'Personalized career coaching and industry-recognized certifications to achieve your professional goals'
                  : 'Coaching de carrière personnalisé et certifications reconnues pour atteindre vos objectifs professionnels'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow hover:shadow-lg border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#ff914d] flex items-center justify-center mb-4 text-white text-2xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#ff914d]">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {language === 'en' ? 'Key Outcomes' : 'Résultats Clés'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#fef7f1] rounded-xl p-8 text-center">
                <span className="text-4xl font-bold text-[#ff914d]">
                  <Counter value={service.stat1.value} suffix={service.stat1.suffix} />
                </span>
                <div className="text-lg text-[#545454] font-medium mt-2">{service.stat1.label}</div>
              </div>
              <div className="bg-[#fef7f1] rounded-xl p-8 text-center">
                <span className="text-4xl font-bold text-[#ff914d]">
                  <Counter value={service.stat2.value} suffix={service.stat2.suffix} />
                </span>
                <div className="text-lg text-[#545454] font-medium mt-2">{service.stat2.label}</div>
              </div>
              <div className="bg-[#fef7f1] rounded-xl p-8 flex flex-col justify-center items-center">
                <div className="flex items-center text-[#ff914d] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6" fill={i < Math.floor(service.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <div className="text-lg text-[#545454] font-medium">
                  {service.rating} / 5 ({service.reviewCount} {language === 'en' ? 'reviews' : 'avis'})
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {language === 'en' ? 'What Our Clients Say' : 'Ce Que Disent Nos Clients'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 shadow border border-gray-100 flex flex-col h-full"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#ff914d] mr-4"
                    />
                    <div>
                      <div className="font-bold text-lg text-[#ff914d]">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                  <blockquote className="italic text-gray-700 mb-4">"{testimonial.text}"</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                {language === 'en' ? 'Pricing & Packages' : 'Tarifs & Offres'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricing.map((offer, idx) => (
                <div
                  key={idx}
                  className={`relative bg-gray-50 rounded-2xl shadow-xl border-2 px-8 py-10 transition-all duration-300 hover:scale-[1.025] hover:border-[#ff914d]
                    ${offer.highlight ? "border-[#ff914d] ring-2 ring-[#ff914d]/30" : "border-gray-200"}
                  `}
                >
                  {offer.highlight && (
                    <span className="absolute top-6 right-6 bg-[#ff914d]/90 text-white text-xs px-4 py-1 rounded-full font-bold shadow">
                      {language === 'en' ? "Most Popular" : "Le Plus Populaire"}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 text-center">
                    {offer.name}
                  </h3>
                  <div className="text-center text-3xl font-black mb-6 text-[#ff914d]">{offer.price}</div>
                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="mt-1 mr-2 flex-shrink-0 w-4 h-4 rounded-full bg-[#ff914d]/10 text-[#ff914d] flex items-center justify-center">
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
                      href={`/services/coaching-training/apply?offer=${encodeURIComponent(offer.name.toLowerCase())}`}
                      className={`inline-block px-8 py-3 rounded-full font-bold text-lg shadow transition 
                        ${offer.highlight ? 'bg-[#ff914d] text-white hover:bg-[#ff8133]' : 'bg-white border border-[#ff914d] text-[#ff914d] hover:bg-orange-50'}
                      `}
                    >
                      {language === 'en' ? 'Choose this offer' : 'Choisir cette offre'}
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
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md border border-gray-100"
                >
                  <details className="group" id={`faq-${idx}`}>
                    <summary className="flex items-center justify-between cursor-pointer p-6 focus:outline-none focus:ring-2 focus:ring-[#ff914d] focus:ring-offset-2 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                      <svg className="w-6 h-6 text-[#ff914d] group-open:transform group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / Last Updated */}
        <div className="bg-white py-4 text-center text-gray-500 text-sm border-t border-gray-100">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Last updated: {currentDateTime}</span>
            <span>•</span>
            <span className="text-[#ff914d]">{currentUser}</span>
          </div>
        </div>
      </main>
    </>
  );
}
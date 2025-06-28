"use client";

import { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { LanguageContext } from "../../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { section } from "framer-motion/client";

const entrepreneurshipPacks = (language: string) => [
  {
    name: language === "en" ? "PREMIUM PACK" : "PACK PREMIUM",
    price: "619 € TTC",
    duration: language === "en"
      ? "24 months + 2 months free"
      : "24 mois + 2 mois gratuits",
    features: [
      language === "en"
        ? "24-month domiciliation (+2 months free) with a professional address"
        : "Domiciliation 24 mois + (2 mois gratuit) avec une adresse professionnelle.",
      language === "en" ? "Negative certificate" : "Certificat négatif.",
      language === "en" ? "Registered statutes" : "Statut enregistré.",
      language === "en" ? "Professional tax certificate" : "Attestation de la taxe professionnelle.",
      language === "en" ? "Commercial register declaration" : "Déclaration au registre de commerce.",
      language === "en" ? "Existence declaration" : "Déclaration d’existence.",
      language === "en" ? "Legal notice" : "Annonce légale.",
      language === "en" ? "CNSS registration" : "Affiliation à la CNSS.",
      language === "en" ? "Company stamp" : "Cachet de la société.",
      language === "en" ? "6 months free accounting" : "6 mois gratuite de la comptabilité.",
      language === "en" ? "Logo & business card" : "Logo et carte visite.",
    ],
    highlight: true,
  },
  {
    name: language === "en" ? "SUPER PACK" : "PACK SUPER",
    price: "539 € TTC",
    duration: language === "en"
      ? "12 months + 2 months free"
      : "12 mois + 2 mois gratuits",
    features: [
      language === "en"
        ? "12-month domiciliation (+2 months free) with a professional address"
        : "Domiciliation 12 mois + (2 mois gratuit) avec une adresse professionnelle.",
      language === "en" ? "Negative certificate" : "Certificat négatif.",
      language === "en" ? "Registered statutes" : "Statut enregistré.",
      language === "en" ? "Professional tax certificate" : "Attestation de la taxe professionnelle.",
      language === "en" ? "Commercial register declaration" : "Déclaration au registre de commerce.",
      language === "en" ? "Existence declaration" : "Déclaration d’existence.",
      language === "en" ? "Legal notice" : "Annonce légale.",
      language === "en" ? "CNSS registration" : "Affiliation à la CNSS.",
      language === "en" ? "Company stamp" : "Cachet de la société.",
      language === "en" ? "6 months free accounting" : "6 mois gratuite de la comptabilité.",
      language === "en" ? "Logo & business card" : "Logo et carte visite.",
    ],
    highlight: false,
  },
  {
    name: language === "en" ? "CLASSIC PACK" : "PACK CLASSIC",
    price: "469 € TTC",
    duration: language === "en"
      ? "6 months + 2 months free"
      : "6 mois + 2 mois gratuits",
    features: [
      language === "en"
        ? "6-month domiciliation (+2 months free) with a professional address"
        : "Domiciliation 6 mois + (2 mois gratuit) avec une adresse professionnelle.",
      language === "en" ? "Negative certificate" : "Certificat négatif.",
      language === "en" ? "Registered statutes" : "Statut enregistré.",
      language === "en" ? "Professional tax certificate" : "Attestation de la taxe professionnelle.",
      language === "en" ? "Commercial register declaration" : "Déclaration au registre de commerce.",
      language === "en" ? "Existence declaration" : "Déclaration d’existence.",
      language === "en" ? "Legal notice" : "Annonce légale.",
      language === "en" ? "CNSS registration" : "Affiliation à la CNSS.",
      language === "en" ? "Company stamp" : "Cachet de la société.",
      language === "en" ? "6 months free accounting" : "6 mois gratuite de la comptabilité.",
    ],
    highlight: false,
  },
];

const businessPlan = (language: string) => ({
  price: "299 € TTC",
  features:
    language === "en"
      ? [
          "Full business plan writing",
          "Complete market study",
          "Project feasibility validation",
          "Fast delivery at best price",
        ]
      : [
          "Rédaction intégrale de votre Business Plan",
          "Étude de marché complète",
          "Vérification du potentiel de votre projet",
          "Livré rapidement à coût maîtrisé",
        ],
});

const faqs = (language: string) =>
  language === "en"
    ? [
        {
          q: "What is the purpose of a BUSINESS PLAN?",
          a: (
            <ul className="list-disc pl-6 space-y-1 text-base text-gray-700">
              <li>Clarify and structure your project</li>
              <li>Define your strategy</li>
              <li>Identify strengths and weaknesses of your offer</li>
              <li>Seek funding</li>
              <li>Convince future partners</li>
              <li>Compare achievements to forecasts and take action</li>
            </ul>
          ),
        },
        {
          q: "WHY CHOOSE CAREER GUIDANCE?",
          a: (
            <div>
              <span className="font-semibold text-[#ff914d]">
                Our business plan process includes:
              </span>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-base text-gray-700">
                <li>Detailed market study</li>
                <li>Strategy development</li>
                <li>Accurate financial forecasts</li>
                <li>Professional presentation</li>
              </ul>
            </div>
          ),
        },
      ]
    : [
        {
          q: "À quoi sert un BUSINESS PLAN ?",
          a: (
            <ul className="list-disc pl-6 space-y-1 text-base text-gray-700">
              <li>Clarifier et structurer son projet</li>
              <li>Préciser sa stratégie</li>
              <li>Identifier les points forts de l’offre ainsi que ses points faibles</li>
              <li>Rechercher des financements</li>
              <li>Convaincre les futurs partenaires</li>
              <li>Comparer les réalisations aux prévisions et agir</li>
            </ul>
          ),
        },
        {
          q: "POURQUOI CHOISIR CAREER GUIDANCE ?",
          a: (
            <div>
              <span className="font-semibold text-[#ff914d]">
                Notre processus de rédaction de business plan comprend :
              </span>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-base text-gray-700">
                <li>Étude de marché détaillée</li>
                <li>Élaboration de stratégie</li>
                <li>Prévisions financières précises</li>
                <li>Présentation professionnelle</li>
              </ul>
            </div>
          ),
        },
      ];

export default function EntrepreneurshipPage() {
  const { language } = useContext(LanguageContext);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentUser = "Sdiabate1337";
  const currentDateTime = "2025-06-24 16:52:36";

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageTitle =
    language === "en"
      ? "Entrepreneurship & Company Creation Morocco | Career Guidance"
      : "Entrepreneuriat & Création de Société au Maroc | Career Guidance";
  const pageDescription =
    language === "en"
      ? "Launch your business in Morocco easily and legally. All-inclusive packs: domiciliation, paperwork, business plan, logo, business card and more."
      : "Créez votre société au Maroc rapidement et en toute légalité. Packs clés en main : domiciliation, formalités, business plan, logo, carte visite et plus.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/entrepreneurship-maroc.jpg" />
        <meta property="og:url" content="https://careerguidance.com/services/entrepreneurship" />
        <link rel="canonical" href="https://careerguidance.com/services/entrepreneurship" />
      </Head>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 z-50 w-12 h-12 bg-[#ff914d] rounded-full text-white shadow-lg hover:bg-[#ff8133] transition-all flex items-center justify-center"
            aria-label={language === "en" ? "Back to top" : "Retour en haut"}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-white text-gray-800">
        {/* HERO */}
        <section className="relative pt-24 pb-12 bg-gradient-to-tr from-[#fff7f1] via-[#ffecd9] to-[#fff7f1] overflow-hidden">
          <div className="pointer-events-none absolute -top-12 -left-20 h-72 w-72 rounded-full bg-[#ff914d]/10 blur-3xl animate-blob" />
          <div className="pointer-events-none absolute -bottom-12 right-0 h-72 w-72 rounded-full bg-[#ff914d]/20 blur-3xl animate-blob animation-delay-2000" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#ff914d] mb-4">
              {language === "en"
                ? "Entrepreneurship & Company Creation in Morocco"
                : "ENTREPRENEURIAT & CRÉATION DE SOCIÉTÉ AU MAROC"}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-4">
              {language === "en" ? (
                <>
                  Welcome to our platform dedicated to entrepreneurship.<br />
                  Want to launch your own business legally in Morocco?<br />
                  You have a company vision? <br />
                  <span className="font-bold text-[#ff914d]">Career Guidance</span> helps make it reality by managing all steps of your company creation, from paperwork to registration, in record time.
                </>
              ) : (
                <>
                  Bienvenue sur notre plateforme dédiée à l’entrepreneuriat.<br />
                  Vous souhaitez lancer votre propre activité tout en étant dans la légalité ?<br />
                  Vous avez une vision d’entreprise ?<br />
                  <span className="font-bold text-[#ff914d]">Career Guidance</span> vous aide à la concrétiser en gérant toutes les étapes de la création de votre société, de la paperasserie à l’immatriculation, en un temps record.
                </>
              )}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center">
              <Link
                href="#packs"
                className="w-full sm:w-auto px-7 py-3 bg-[#ff914d] text-white rounded-full font-semibold shadow hover:bg-[#ff8133] transition-all text-lg text-center"
              >
                {language === "en" ? "See Packs" : "Découvrir les Packs"}
              </Link>
              <Link
                href="#businessplan"
                className="w-full sm:w-auto px-7 py-3 bg-white border border-gray-200 text-[#ff914d] rounded-full font-semibold shadow hover:bg-orange-50 transition-all text-lg text-center"
              >
                {language === "en" ? "Business Plan" : "Business Plan"}
              </Link>
            </div>
          </div>
        </section>

        {/* PACKS */}
        <section id="packs" className="py-24 bg-gradient-to-b from-[#fff7f1] via-white to-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-14 text-center">
              <span className="inline-block px-5 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-xs font-semibold mb-4 tracking-widest shadow-sm border border-[#ffd6b3]">
                {language === "en"
                  ? "Entrepreneurship Packs"
                  : "Offres Entrepreneuriat"}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-[#232323] tracking-tight">
                {language === "en"
                  ? "Company Creation & Domiciliation Packs"
                  : "Packs Création de Société & Domiciliation"}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                {language === "en"
                  ? "Choose the package that fits your needs to launch your business in Morocco."
                  : "Choisissez la formule adaptée à vos besoins pour lancer votre entreprise au Maroc."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {entrepreneurshipPacks(language).map((pack, idx) => (
                <motion.div
                  key={pack.name}
                  className={`relative bg-white rounded-3xl shadow-2xl border-2 px-8 py-12 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-3xl group
                    ${pack.highlight ? "border-[#ff914d] ring-2 ring-[#ff914d]/30 z-10 scale-105" : "border-gray-100"}
                  `}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                >
                  {pack.highlight && (
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#ff914d] text-white text-xs px-6 py-2 rounded-full font-bold shadow-lg tracking-wider z-20 uppercase">
                      {language === "en" ? "Most Popular" : "Le Plus Populaire"}
                    </span>
                  )}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-2 text-center text-[#232323] group-hover:text-[#ff914d] transition-colors">{pack.name}</h3>
                    <div className="text-center text-3xl sm:text-4xl font-black mb-1 text-[#ff914d] drop-shadow">{pack.price}</div>
                    <div className="text-center text-xs mb-7 text-gray-500 font-semibold tracking-wide">{pack.duration}</div>
                    <ul className="space-y-3 mb-10 text-gray-800 text-base">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mt-1 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-[#ff914d]/15 text-[#ff914d] flex items-center justify-center">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-2 text-center">
                    <a
                      href={`/services/entrepreneurship/apply?pack=${encodeURIComponent(pack.name.toLowerCase())}`}
                      className={`inline-block w-full px-8 py-3 rounded-full font-bold text-base shadow transition-all duration-200
                        ${pack.highlight
                          ? "bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white hover:from-[#ff8133] hover:to-[#ff914d]"
                          : "bg-white border border-[#ff914d] text-[#ff914d] hover:bg-orange-50"}
                      `}
                    >
                      {language === "en" ? "Choose this pack" : "Choisir ce pack"}
                    </a>
                  </div>
                  {/* Decorative Accent bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff914d]/0 via-[#ff914d]/30 to-[#ff914d]/0 rounded-b-3xl" />
                </motion.div>
              ))}
            </div>
            <div className="mt-14 flex flex-col items-center">
              <span className="text-sm text-gray-500">
                {language === "en"
                  ? "Need guidance? Contact our advisors for a custom solution."
                  : "Besoin de conseils ? Contactez nos conseillers pour une solution personnalisée."}
              </span>
              <a
                href="/contact"
                className="mt-3 inline-block px-7 py-3 bg-[#ff914d] text-white rounded-full font-semibold shadow hover:bg-[#ff8133] text-base transition-all"
              >
                {language === "en" ? "Contact an Advisor" : "Contacter un Conseiller"}
              </a>
            </div>
          </div>
        </section>

       {/* BUSINESS PLAN */}
        <section id="businessplan" className="py-24 bg-gradient-to-b from-[#fff7f1] via-[#fff4e8] to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block px-5 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-xs font-semibold mb-4 tracking-widest shadow-sm border border-[#ffd6b3]">
              {language === "en"
                ? "Tailored Solution"
                : "Solution Sur-Mesure"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 text-[#232323] tracking-tight">
              {language === "en"
                ? "Business Plan & Market Study"
                : "Business Plan & Étude de Marché"}
            </h2>
            <div className="text-2xl sm:text-3xl font-extrabold mb-3 text-[#ff914d] drop-shadow">
              {businessPlan(language).price}
            </div>
            <ul className="space-y-3 mb-10 text-gray-800 text-base sm:text-lg text-left mx-auto max-w-xl">
              {businessPlan(language).features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-[#ff914d]/15 text-[#ff914d] flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services/entrepreneurship/apply?type=businessplan"
              className="inline-block w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#ff914d] to-[#ff8133] text-white rounded-full font-extrabold shadow-lg hover:from-[#ff8133] hover:to-[#ff914d] transition-all text-lg text-center tracking-wide"
            >
              {language === "en"
                ? "Order My Business Plan"
                : "Commander mon Business Plan"}
            </Link>
            <div className="mt-8 text-gray-500 text-sm max-w-lg mx-auto">
              {language === "en"
                ? "Benefit from a complete, expert-crafted business plan and market study to start your business with confidence."
                : "Profitez d’un business plan complet et d’une étude de marché réalisée par des experts pour lancer votre projet en toute sérénité."}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 bg-gradient-to-br from-[#ff914d] to-[#ff8133] text-white text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              {language === "en"
                ? "Ready to start your business in Morocco?"
                : "Prêt à lancer votre société au Maroc ?"}
            </h2>
            <p className="text-lg mb-8">
              {language === "en"
                ? "Contact our team for a free consultation and let's make your entrepreneurial project a success together!"
                : "Contactez notre équipe pour une consultation gratuite et concrétisons ensemble votre projet entrepreneurial !"}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-white text-[#ff914d] font-bold text-lg shadow hover:bg-orange-50 transition-all"
              >
                {language === "en" ? "Contact Us" : "Contactez-Nous"}
              </Link>
              <Link
                href="#packs"
                className="inline-block px-8 py-3 rounded-full bg-[#ff8133] text-white font-bold text-lg shadow hover:bg-[#ff914d]/90 transition-all"
              >
                {language === "en" ? "See All Packs" : "Voir tous les Packs"}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#ff914d]">
                {language === "en" ? "Frequently Asked Questions" : "Foire aux Questions"}
              </h2>
            </div>
            <div className="space-y-8">
              {faqs(language).map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-lg shadow-md border border-gray-100 p-6"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                >
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-[#ff914d]">
                      {faq.q}
                      <svg className="w-6 h-6 text-[#ff914d] group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4">{faq.a}</div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
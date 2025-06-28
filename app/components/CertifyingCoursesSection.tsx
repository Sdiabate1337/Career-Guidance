import React from "react";

const categories = [
  {
    title: "Droit, Fiscalité & Banque",
    color: "from-[#fff7e6] via-[#ffecd9] to-[#ffe0c2]",
    iconBg: "bg-gradient-to-tr from-[#ff914d]/30 to-[#ff914d]/60",
    icon: (
      <svg className="w-7 h-7 text-[#ff914d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      "Comprendre l'environnement bancaire et ses pratiques",
      "Initiation à l'analyse juridique et rédaction de contrats",
      "Droit des sociétés pour non-juriste",
      "Fiscalité d’entreprise (Maroc/Côte d'Ivoire)",
      "Les techniques de recouvrement",
      "Sage",
    ],
  },
  {
    title: "Informatiques & Comptabilité",
    color: "from-[#e6fafd] via-[#e9f9f7] to-[#e1f5fe]",
    iconBg: "bg-gradient-to-tr from-[#00bfae]/20 to-[#00bfae]/40",
    icon: (
      <svg className="w-7 h-7 text-[#00bfae]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={2} />
        <path strokeWidth={2} d="M3 10h18M9 16h6" />
      </svg>
    ),
    items: [
      "Pack Microsoft Office (Word, Excel, Pptx, Access)",
      "Power BI",
      "Python",
      "Comptabilité",
      "Canva",
    ],
  },
  {
    title: "Entrepreneuriat",
    color: "from-[#fff5f7] via-[#ffe4ee] to-[#ffe0ec]",
    iconBg: "bg-gradient-to-tr from-[#ff5e62]/20 to-[#ff5e62]/35",
    icon: (
      <svg className="w-7 h-7 text-[#ff5e62]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} d="M12 3v18m9-9H3" />
      </svg>
    ),
    items: [
      "Coaching et initiation à l’entrepreneuriat",
      "Rédaction et présentation d’un business plan",
      "Procédures de création d'une société (A à Z)",
    ],
  },
  {
    title: "Soft Skills, Communication & Développement Personnel",
    color: "from-[#f7f6ff] via-[#e8e9fc] to-[#e0e7ff]",
    iconBg: "bg-gradient-to-tr from-[#8360c3]/15 to-[#2ebf91]/15",
    icon: (
      <svg className="w-7 h-7 text-[#8360c3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
    items: [
      "Gestion du temps",
      "Gestion du stress",
      "Gestion de conflits",
      "Techniques de négociation",
      "Prise de parole en public",
      "S'adapter à un nouvel environnement de travail",
      "L'intelligence émotionnelle",
      "Leadership",
      "Marketing de soi (Personal Branding)",
      "Les bases du métier de ressources humaines",
      "Les techniques d'expression et de communication",
      "Community management",
      "Marketing digital",
    ],
  },
];

export default function CertifyingCoursesSection() {
  return (
    <section id="certifying-courses" className="py-24 bg-gradient-to-b from-[#fff7f1] via-[#f8fafc] to-white relative">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#ff914d]/10 to-transparent pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-bold tracking-wider mb-4 shadow-sm border border-[#ffd6b3]">
            FICHE DE FORMATIONS CERTIFIANTES
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-[#232323] tracking-tight">
            Nos <span className="text-[#ff914d]">Formations Certifiantes</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Développez vos compétences et boostez votre carrière grâce à nos parcours certifiants, animés par des experts du métier.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`relative rounded-[2rem] shadow-xl border border-[#f4e7db] bg-white bg-gradient-to-br ${cat.color} p-8 pb-7 flex flex-col items-start transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group`}
              style={{ minHeight: 440 }}
            >
              {/* Icon */}
              <div className={`mb-5 w-14 h-14 rounded-xl flex items-center justify-center shadow-md ${cat.iconBg} group-hover:scale-105 transition-transform duration-300`}>
                {cat.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-extrabold mb-4 text-[#232323] group-hover:text-[#ff914d] transition-colors duration-200">{cat.title}</h3>
              {/* List */}
              <ul className="space-y-2 text-gray-700 text-base list-disc pl-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="leading-snug">{item}</li>
                ))}
              </ul>
              {/* Card Accent Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff914d]/0 via-[#ff914d]/30 to-[#ff914d]/0 rounded-b-[2rem]" />
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#ff914d] to-[#ffb47a] text-white font-extrabold text-lg shadow-md hover:from-[#ff8133] hover:to-[#ff914d] transition-all duration-200"
          >
            En savoir plus / S'inscrire
          </a>
        </div>
      </div>
    </section>
  );
}
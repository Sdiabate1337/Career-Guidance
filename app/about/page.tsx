"use client";

import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { LanguageContext } from '../contexts/LanguageContext';

// Enhanced AboutPage with modern UI/UX and clean structure
export default function AboutPage() {
  const { language } = useContext(LanguageContext);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Intersection observers for animation triggers
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: storyRef, inView: storyInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Data
  const stats = [
    { value: '12+', label: language === 'en' ? 'Years Experience' : 'Années d\'Expérience' },
    { value: '25K+', label: language === 'en' ? 'Clients Served' : 'Clients Servis' },
    { value: '94%', label: language === 'en' ? 'Success Rate' : 'Taux de Réussite' },
    { value: '42', label: language === 'en' ? 'Countries Reached' : 'Pays Atteints' }
  ];

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 10.5V6a5 5 0 10-10 0v4.5a2.5 2.5 0 01-2.5 2.5h0a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5h0a2.5 2.5 0 01-2.5-2.5z" />
        </svg>
      ),
      title: 'Leadership',
      description: `Le leadership guide nos actions avec vision et courage. Il inspire chaque membre de l’équipe à donner le meilleur de lui-même. Ensemble, nous construisons un avenir solide et ambitieux.`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m0 0H8m4 0h4M4 4h16v16H4V4z" />
        </svg>
      ),
      title: 'Excellence',
      description: `L’excellence est notre standard quotidien, un engagement à toujours dépasser les attentes. Nous cultivons la rigueur et la qualité dans tout ce que nous entreprenons. C’est ainsi que nous créons une valeur durable.`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1 4v-4m0 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 0v4" />
        </svg>
      ),
      title: 'Innovation',
      description: `L’innovation est au cœur de notre dynamisme, nous poussant à explorer de nouvelles idées. Elle nous permet de transformer les défis en opportunités uniques. Grâce à elle, nous façonnons le progrès de demain.`
    }
  ];

  const testimonials = [
    {
      quote: "Je suis extrêmement satisfait de la gestion de mon compte LinkedIn par Career Guidance. Ils ont su mettre en valeur mes compétences et mon parcours de manière claire et impactante. Je recommande vivement leurs services à tous ceux qui souhaitent optimiser leur présence sur LinkedIn !",
      author: "NEYA ABIBATA",
      rating: 5
    },
    {
      quote: "Grâce à Career Guidance, mon profil LinkedIn a été optimisé de façon professionnelle et ciblée. J'ai rapidement gagné en visibilité et reçu plusieurs opportunités intéressantes. Leur accompagnement a vraiment boosté ma carrière !",
      author: "SEKONGO ABDOUL",
      rating: 5
    },
    {
      quote: "Le processus d'inscription aux grandes écoles peut être stressant, mais Career Guidance m'a facilité la tâche... Grâce à eux, j'ai intégré une prestigieuse école à Mohammedia. C'était un vrai soulagement de savoir que j'étais entre de bonnes mains !",
      author: "Étudiante Anonyme",
      title: "Étudiante en Master 1 Finance à Mohammedia",
      rating: 5
    },
    {
      quote: "Après plusieurs mois de recherches sans succès, Career Guidance m'a aidée à trouver l'école qui correspondait parfaitement à mes aspirations... Aujourd'hui, j'étudie dans l'une des meilleures écoles du Maroc, et je suis reconnaissante pour leur aide précieuse.",
      author: "KONAN ARIELLE DEMOAYE",
      title: "Étudiante en Master 1 CCA à KENITRA",
      rating: 5
    }
  ];

  // Render stars for ratings
  const renderStars = (rating: number) => (
    <div className="flex items-center">{[1,2,3,4,5].map(i => (
      <svg key={i} className={`w-5 h-5 ${i <= rating ? 'text-[#ff914d]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}</div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fffefb] via-[#fff8f3] to-white">
      {/* Hero Section */}
      <section ref={heroRef} id="about-us" className="pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : -30 }}
            transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
              À Propos
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#545454]">
              <span className="text-[#545454]">À Propos de </span>
              <span className="text-[#ff914d]">Career Guidance</span>
            </h1>
            <p className="text-lg text-[#545454]/80 mb-8">
              Career Guidance est une organisation de développement de carrière de premier plan dédiée à responsabiliser les professionnels à chaque étape de leur parcours. Notre mission est de fournir des conseils d'experts, des stratégies personnalisées et des outils innovants qui aident les jeunes à construire un avenir professionnel ambitieux.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-[#ff914d]">{stat.value}</div>
                  <div className="text-sm text-[#545454]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: heroInView ? 1 : 0, x: heroInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl bg-[url('/images/about/team-collaboration.jpg')] bg-cover bg-center" />
          </motion.div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#545454] mb-4">
            Nos Valeurs Fondamentales<span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
          </h2>
          <p className="text-lg text-[#545454]/70 max-w-3xl mx-auto">
            Ces principes guident tout ce que nous faisons et définissent notre approche pour vous servir.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div key={idx}
              className="bg-white rounded-xl p-8 shadow-lg border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
            >
              <div className="w-12 h-12 mb-5 rounded-full bg-[#ff914d]/10 flex items-center justify-center text-[#ff914d]">{value.icon}</div>
              <h3 className="text-xl font-bold text-[#545454] mb-2">{value.title}</h3>
              <p className="text-[#545454]/70 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notre Histoire */}
      <section ref={storyRef} id="notre-histoire" className="py-20 bg-white/80 relative z-10 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4">
              NOTRE HISTOIRE
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-[#545454]">
              L’histoire derrière Career Guidance : un parcours d’engagement et de réussite
            </h2>
            <p className="text-lg text-[#545454]/80">
              Career Guidance est née d’une vision claire et ambitieuse : accompagner les jeunes dans la construction de leur avenir professionnel avec confiance et ambition.<br /><br />
              Spécialisés dans le coaching carrières, l’accompagnement aux inscriptions dans des écoles reconnues et accréditées au Maroc et en Europe, la formation certifiante, ainsi que la gestion de comptes LinkedIn, nous avons su progressivement bâtir une structure solide et respectée.
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-[#ff914d] mb-2">Des débuts modestes mais déterminés</h3>
              <p className="text-[#545454]/80 text-lg">
                Fondé par M. Saint Noël Krahiboué en Août 2024, Career Guidance a commencé comme une petite structure axée sur le coaching carrière et le conseil en orientation. Au départ, nous avons dû faire face à de nombreux défis, qu’il s’agisse de gagner la confiance des jeunes, de convaincre les établissements partenaires, ou encore de structurer des programmes adaptés aux besoins spécifiques de notre clientèle. En Septembre 2024, M. Cédric Yoro rejoint l’équipe en tant qu’associé afin de participer à la réalisation des objectifs de la structure. Chaque obstacle a renforcé notre détermination et affiné notre approche.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#ff914d] mb-2">Une mission au cœur de notre engagement</h3>
              <p className="text-[#545454]/80 text-lg">
                A travers les changements économiques, les révolutions technologiques et l’évolution des dynamiques de travail, nous avons continuellement fait évoluer nos services pour répondre aux besoins des professionnels modernes tout en restant fidèles à nos valeurs fondamentales et à notre engagement envers l’Excellence.<br /><br />
                Aujourd’hui, nous sommes fiers de voir que Career Guidance réalise l’un de ses objectifs majeurs : inculquer à la jeunesse africaine des valeurs fondamentales telles que le leadership, l’excellence et la générosité. Nous croyons fermement que ces valeurs sont les clés pour permettre aux jeunes de s’épanouir pleinement, tant sur le plan professionnel que personnel.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#ff914d] mb-2">Vers un avenir prometteur</h3>
              <p className="text-[#545454]/80 text-lg">
                Career Guidance continue d’évoluer, toujours guidée par la volonté d’apporter un impact positif durable dans la vie des jeunes africains. En cultivant le leadership, l’excellence et la générosité, nous contribuons à former une nouvelle génération prête à relever les défis de demain avec confiance et ambition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="py-20 relative z-10 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff914d]/10 text-[#ff914d] text-sm font-medium mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: testimonialsInView ? 1 : 0, scale: testimonialsInView ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}>
              <span className="w-2 h-2 rounded-full bg-[#ff914d] mr-2 animate-pulse"></span>
              Témoignages de Réussite
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#545454]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              Ce Que Disent Nos Clients
              <span className="inline-block ml-2 text-[#ff914d] animate-pulse-slow">.</span>
            </motion.h2>
            <motion.p className="text-lg text-[#545454]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              Écoutez les professionnels qui ont transformé leur carrière grâce à nos conseils.
            </motion.p>
          </div>
          {/* Desktop Testimonials */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div key={idx}
                className="bg-white rounded-xl p-8 shadow-xl border border-[#545454]/10 hover:border-[#ff914d]/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: testimonialsInView ? 1 : 0, y: testimonialsInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}>
                <div className="mb-6">{renderStars(testimonial.rating)}</div>
                <p className="text-[#545454]/80 mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="font-bold text-[#545454]">{testimonial.author}</div>
                <div className="text-sm text-[#545454]/70">{testimonial.title}</div>
              </motion.div>
            ))}
          </div>
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-xl">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl p-6 shadow-xl border border-[#545454]/10 relative overflow-hidden">
                      <div className="mb-4">{renderStars(testimonial.rating)}</div>
                      <p className="text-[#545454]/80 mb-6 text-sm relative z-10">"{testimonial.quote}"</p>
                      <div className="font-bold text-[#545454]">{testimonial.author}</div>
                      <div className="text-xs text-[#545454]/70">{testimonial.title}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeTestimonial === idx ? 'bg-[#ff914d]' : 'bg-[#545454]/20'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="bg-gradient-to-r from-[#ff914d] to-[#ff8133] rounded-3xl overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <motion.h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                  Prêt à Transformer Votre Carrière?
                </motion.h3>
                <motion.p className="text-white/90 text-lg md:text-xl mb-6"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                  Planifiez une consultation gratuite avec nos experts aujourd'hui et faites le premier pas vers votre réussite professionnelle.
                </motion.p>
                <motion.div className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                  <Link href="/appointment" className="px-6 py-3 bg-white text-[#ff914d] rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-black/5 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Réserver Consultation Gratuite
                  </Link>
                  <Link href="/contact" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-medium transition-all duration-300 hover:bg-white/10 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contactez-Nous
                  </Link>
                </motion.div>
              </div>
              <motion.div className="md:w-1/3 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping-slow opacity-60"></div>
                  <div className="absolute inset-2 bg-white/30 rounded-full animate-ping-slow opacity-60 animation-delay-500"></div>
                  <div className="absolute inset-4 bg-white/40 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <div className="text-center text-sm text-[#545454]/70 pb-10">
        <span className="inline-flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Dernière mise à jour:
        </span>
        <span className="font-medium text-[#545454]">2025-06-04 20:10:51</span>
        <span className="text-[#ff914d] ml-1">(Sdiabate1337)</span>
      </div>
    </div>
  );
}
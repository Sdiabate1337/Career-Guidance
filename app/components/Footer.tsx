"use client";

import { useLanguage } from '../contexts/LanguageContext';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function Footer() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or newsletter service
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setEmail('');
    // Reset the success message after 5 seconds
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-grey-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                <span className="text-white font-serif text-xl font-bold">CG</span>
              </div>
              <h3 className="text-xl font-serif font-bold">Career Guidance</h3>
            </div>
            <p className="text-grey-300 mb-6">
              {language === "en" 
                ? "Professional career guidance to help you achieve your professional goals and ambitions." 
                : "Orientation professionnelle pour vous aider à atteindre vos objectifs de carrière."}
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-grey-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-grey-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-grey-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-grey-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">
              {language === "en" ? "Services" : "Services"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/linkedin-optimization" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "LinkedIn Optimization" : "Optimisation LinkedIn"}
                </Link>
              </li>
              <li>
                <Link href="/services/career-coaching" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "Career Coaching" : "Coaching de Carrière"}
                </Link>
              </li>
              <li>
                <Link href="/services/training" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "Certified Training" : "Formation Certifiée"}
                </Link>
              </li>
              <li>
                <Link href="/services/school-enrollment" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "School Enrollment" : "Inscription Scolaire"}
                </Link>
              </li>
              <li>
                <Link href="/services/resume-writing" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "Resume Writing" : "Rédaction de CV"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">
              {language === "en" ? "Company" : "Entreprise"}
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/about" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "About Us" : "À Propos"}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "Our Team" : "Notre Équipe"}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "Testimonials" : "Témoignages"}
                </Link>
              </li>
            </ul>

            <h4 className="font-serif font-bold text-lg mb-4">
              {language === "en" ? "Resources" : "Ressources"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "Blog" : "Blog"}
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "Career Guides" : "Guides de Carrière"}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-grey-300 hover:text-orange-400 transition-colors">
                  {language === "en" ? "FAQ" : "FAQ"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info & Newsletter */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">
              {language === "en" ? "Contact Us" : "Contactez-Nous"}
            </h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="text-grey-300 not-italic">
                  123 Career Avenue, Suite 200<br />
                  Professional City, PR 12345
                </address>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-grey-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@careerboost.com" className="text-grey-300 hover:text-orange-400 transition-colors">
                  contact@careerboost.com
                </a>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <h4 className="font-serif font-bold text-lg mb-4">
              {language === "en" ? "Stay Updated" : "Restez Informé"}
            </h4>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === "en" ? "Your email" : "Votre email"}
                  required
                  className="bg-grey-700 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 rounded-r-md text-white font-medium"
                >
                  {language === "en" ? "Subscribe" : "S'abonner"}
                </button>
              </div>
              {subscribed && (
                <p className="text-green-400 text-sm mt-2">
                  {language === "en" ? "Thank you for subscribing!" : "Merci de vous être abonné!"}
                </p>
              )}
              <p className="text-grey-400 text-xs mt-2">
                {language === "en" 
                  ? "We'll never share your email with anyone else." 
                  : "Nous ne partagerons jamais votre email avec qui que ce soit."}
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Legal */}
        <div className="pt-8 border-t border-grey-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-grey-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Career Guidance. {language === "en" ? "All rights reserved." : "Tous droits réservés."}
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-grey-400 hover:text-orange-400 transition-colors text-sm">
                {language === "en" ? "Privacy Policy" : "Politique de Confidentialité"}
              </Link>
              <Link href="/terms" className="text-grey-400 hover:text-orange-400 transition-colors text-sm">
                {language === "en" ? "Terms of Service" : "Conditions d'Utilisation"}
              </Link>
              <Link href="/cookies" className="text-grey-400 hover:text-orange-400 transition-colors text-sm">
                {language === "en" ? "Cookie Policy" : "Politique des Cookies"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
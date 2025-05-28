"use client";

import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageContext } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement newsletter subscription logic
    console.log(`Subscribing email: ${email}`);
    // Reset form
    setEmail('');
    // Show success message or handle accordingly
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-grey-100 dark:bg-grey-900 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Information */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center mr-3">
                <span className="text-white font-serif font-bold text-lg">CG</span>
              </div>
              <h2 className="text-xl font-serif font-bold text-grey-900 dark:text-white">Career Guidance</h2>
            </div>
            <p className="text-grey-600 dark:text-grey-400 mb-4">
              {language === 'en' 
                ? 'Empowering professionals to reach their career goals through expert guidance, coaching, and personalized strategies.'
                : 'Aidons les professionnels à atteindre leurs objectifs de carrière grâce à des conseils d\'experts, du coaching et des stratégies personnalisées.'}
            </p>
            
            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-grey-900 dark:text-white uppercase tracking-wider mb-3">
                {language === 'en' ? 'Contact Us' : 'Contactez-nous'}
              </h3>
              <div className="space-y-2 text-grey-600 dark:text-grey-400">
                <p className="flex items-start">
                  <svg className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Career Street, Suite 101<br />Montreal, QC H3Z 2Y7</span>
                </p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (514) 555-0123</span>
                </p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@careerguidance.com</span>
                </p>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h3 className="text-sm font-semibold text-grey-900 dark:text-white uppercase tracking-wider mb-3">
                {language === 'en' ? 'Follow Us' : 'Suivez-nous'}
              </h3>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-grey-500 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-grey-500 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-grey-500 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-grey-500 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-grey-900 dark:text-white uppercase tracking-wider mb-4">
              {language === 'en' ? 'Services' : 'Services'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/career-coaching" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Career Coaching' : 'Coaching de Carrière'}
                </Link>
              </li>
              <li>
                <Link href="/services/resume-optimization" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Resume Optimization' : 'Optimisation de CV'}
                </Link>
              </li>
              <li>
                <Link href="/services/linkedin-profile" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'LinkedIn Profile Enhancement' : 'Amélioration de Profil LinkedIn'}
                </Link>
              </li>
              <li>
                <Link href="/services/interview-preparation" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Interview Preparation' : 'Préparation aux Entretiens'}
                </Link>
              </li>
              <li>
                <Link href="/services/career-transition" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Career Transition Support' : 'Support de Transition de Carrière'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* About & Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-grey-900 dark:text-white uppercase tracking-wider mb-4">
              {language === 'en' ? 'About & Resources' : 'À propos & Ressources'}
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/about" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Our Story' : 'Notre Histoire'}
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Our Team' : 'Notre Équipe'}
                </Link>
              </li>
              <li>
                <Link href="/about/testimonials" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Testimonials' : 'Témoignages'}
                </Link>
              </li>
            </ul>
            
            <h3 className="text-sm font-semibold text-grey-900 dark:text-white uppercase tracking-wider mb-4">
              {language === 'en' ? 'Resources' : 'Ressources'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Blog' : 'Blog'}
                </Link>
              </li>
              <li>
                <Link href="/resources/guides" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Career Guides' : 'Guides de Carrière'}
                </Link>
              </li>
              <li>
                <Link href="/resources/tools" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Free Tools' : 'Outils Gratuits'}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-grey-900 dark:text-white uppercase tracking-wider mb-4">
              {language === 'en' ? 'Stay Updated' : 'Restez Informé'}
            </h3>
            <p className="text-grey-600 dark:text-grey-400 mb-4">
              {language === 'en' 
                ? 'Subscribe to our newsletter for career tips, industry insights, and exclusive offers.'
                : 'Abonnez-vous à notre newsletter pour des conseils de carrière, des informations sur l\'industrie et des offres exclusives.'}
            </p>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={language === 'en' ? 'Your email address' : 'Votre adresse e-mail'}
                  className="min-w-0 flex-1 bg-white dark:bg-grey-800 text-grey-800 dark:text-white border border-grey-300 dark:border-grey-700 px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  {language === 'en' ? 'Subscribe' : 'S\'abonner'}
                </button>
              </div>
            </form>
            
            <h3 className="text-sm font-semibold text-grey-900 dark:text-white uppercase tracking-wider mb-4">
              {language === 'en' ? 'Legal' : 'Mentions Légales'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Terms of Service' : 'Conditions d\'Utilisation'}
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-grey-600 hover:text-orange-500 dark:text-grey-400 dark:hover:text-orange-400">
                  {language === 'en' ? 'Accessibility' : 'Accessibilité'}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-grey-200 dark:border-grey-800">
          <p className="text-center text-grey-500 dark:text-grey-400 text-sm">
            © {currentYear} Career Guidance. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
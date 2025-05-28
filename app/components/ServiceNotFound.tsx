import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const ServiceNotFound = () => {
  const { language } = useContext(LanguageContext);
  
  return (
    <div className="min-h-screen bg-grey-50 dark:bg-grey-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-24 h-24 mx-auto text-orange-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
            {language === 'en' ? 'Service Not Found' : 'Service Non Trouvé'}
          </h1>
          
          <p className="text-lg text-black dark:text-white mb-8">
            {language === 'en' 
              ? 'Sorry, the service you are looking for does not exist or may have been moved.'
              : 'Désolé, le service que vous recherchez n\'existe pas ou a peut-être été déplacé.'}
          </p>
          
          <Link 
            href="/services" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {language === 'en' ? 'Back to Services' : 'Retour aux Services'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceNotFound;
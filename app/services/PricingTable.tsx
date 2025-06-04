"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

type Plan = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
};

interface PricingTableProps {
  plans: Plan[];
  color: string;
  bgColor: string;
  serviceId: string;
  language: string;
}

const PricingTable: React.FC<PricingTableProps> = ({ plans, color, bgColor, serviceId, language }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, idx) => (
        <motion.div
          key={idx}
          className={`rounded-2xl overflow-hidden shadow-lg border ${plan.popular ? `border-${color} dark:border-${color}` : 'border-grey-200 dark:border-grey-700'} bg-white dark:bg-grey-800 relative`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          {plan.popular && (
            <div className={`absolute top-0 right-0 left-0 ${bgColor} text-white text-center py-1 text-sm font-medium`}>
              {language === 'en' ? 'Most Popular' : 'Le Plus Populaire'}
            </div>
          )}
          
          <div className="p-6 pt-8">
            <h4 className="text-xl font-bold mb-2 text-black dark:text-white">
              {plan.name}
            </h4>
            <div className="mb-6">
              <span className="text-3xl font-bold text-black dark:text-white">{plan.price}</span>
              {plan.price !== (language === 'en' ? 'Custom' : 'Personnalisé') && (
                <span className="text-grey-600 dark:text-grey-400 text-sm ml-1">
                  {language === 'en' ? '/package' : '/forfait'}
                </span>
              )}
            </div>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <svg className={`w-5 h-5 text-${color} mr-2 flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-grey-700 dark:text-grey-300 text-sm">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={`/services/${serviceId}/apply?plan=${encodeURIComponent(plan.name)}`}
                className={`w-full block text-center py-3 px-6 rounded-xl ${plan.popular ? bgColor + ' text-white' : 'bg-grey-100 dark:bg-grey-700 text-black dark:text-white'} font-medium transition-all duration-300 hover:shadow-lg`}
              >
                {language === 'en' ? 'Get Started' : 'Commencer'}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PricingTable;
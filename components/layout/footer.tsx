'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t border-emerald-700/10"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-600">
          © {currentYear} Nusrat Jahan Papia. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}
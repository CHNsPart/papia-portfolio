'use client';

import { motion } from 'framer-motion';
import { IconArrowDown } from '@tabler/icons-react';
import { BackgroundLines } from '@/components/ui/background-lines';

export function Hero() {
  return (
    <BackgroundLines className="min-h-screen flex flex-col justify-center pt-20">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 relative z-10"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <span className="block">UI/UX Designer</span>
            <span className="block text-emerald-700 dark:text-emerald-500">Nusrat Jahan Papia</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl">
            Creative and detail-oriented designer with over four years of experience
            in freelance and corporate design environments. Specialized in creating
            user-centered designs that improve experience and engagement.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
            >
              View Projects
              <IconArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-700/20 hover:bg-emerald-700/5 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <IconArrowDown 
            className="w-6 h-6 animate-bounce text-emerald-700" 
          />
        </motion.div>
      </div>
    </BackgroundLines>
  );
}
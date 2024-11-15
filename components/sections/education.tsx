'use client';

import { motion } from 'framer-motion';
import { IconSchool, IconCalendar } from '@tabler/icons-react';

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      {/* Decorative background pattern */}
      <div className="absolute right-0 top-1/4 -z-10 opacity-5">
        <svg width="404" height="392" fill="none">
          <defs>
            <pattern id="education-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-emerald-700" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="392" fill="url(#education-pattern)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl border border-emerald-700/10 hover:border-emerald-700/20 transition-all duration-300 hover:bg-emerald-50/5 max-w-3xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700">
              <IconSchool className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400">
                {"Bachelor's in Computer Science and Engineering (CSE)"}
              </h3>
              <p className="text-foreground/60">University of Liberal Arts Bangladesh (ULAB), Dhaka</p>
              <div className="flex items-center gap-2 text-sm text-emerald-600/60">
                <IconCalendar className="w-4 h-4" />
                <span>Graduated: 2021</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
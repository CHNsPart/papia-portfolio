'use client';

import { motion } from 'framer-motion';
import { IconBriefcase, IconCalendar } from '@tabler/icons-react';

const experiences = [
  {
    title: "UI/UX Designer",
    company: "OonkoO",
    period: "August 2023 - October 2024",
    description: [
      "Developed user interfaces for web and mobile applications",
      "Collaborated with cross-functional teams to design seamless user experiences",
      "Conducted user research and usability testing to validate design choices"
    ]
  },
  {
    title: "Freelance UI/UX Designer",
    company: "Self-employed",
    period: "August 2019 - July 2023",
    description: [
      "Designed and implemented UI/UX solutions for diverse clients",
      "Delivered user-centered designs enhancing usability and visual appeal",
      "Worked closely with clients to ensure satisfaction with final designs"
    ]
  }
];

// Decorative SVG Component
const DecorativeLine = () => (
  <svg 
    className="absolute left-8 top-0 h-full w-[2px] -z-10"
    viewBox="0 0 2 100"
    preserveAspectRatio="none"
  >
    <path
      d="M1 0V100"
      className="stroke-emerald-700/20"
      strokeWidth="2"
      strokeDasharray="4 4"
      fill="none"
    />
  </svg>
);

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Decorative background pattern */}
      <div className="absolute left-0 top-1/4 -z-10 opacity-5">
        <svg width="404" height="392" fill="none">
          <defs>
            <pattern id="experience-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-emerald-700" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="392" fill="url(#experience-pattern)" />
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
          <h2 className="text-3xl font-bold">Experience</h2>
          <p className="text-lg text-foreground/60 max-w-3xl">
            Over 4 years of experience in creating meaningful digital experiences.
          </p>
        </div>

        <div className="space-y-12 relative">
          <DecorativeLine />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-16"
            >
              <div className="absolute left-5 top-5 w-6 h-6 rounded-full bg-emerald-500 border-2 border-emerald-600 z-10" />
              
              <div className="space-y-4 p-6 rounded-2xl border border-emerald-700/10 hover:border-emerald-700/20 transition-all duration-300 hover:bg-emerald-50/5">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400">{exp.title}</h3>
                  <p className="text-foreground/60">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-emerald-600/60 mt-1">
                    <IconCalendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <IconBriefcase className="w-5 h-5 text-emerald-600/40 mt-1 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
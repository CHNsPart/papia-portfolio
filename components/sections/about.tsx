'use client';

import { motion } from 'framer-motion';
import { IconBrandFigma, IconCalendar, IconCode, IconFlag, IconPaint, IconTestPipe, IconDownload } from '@tabler/icons-react';

const skills = [
  {
    title: "Design Tools",
    description: "Figma, Adobe XD, Sketch, Photoshop, Illustrator",
    icon: IconBrandFigma,
  },
  {
    title: "Prototyping",
    description: "InVision, Marvel, Interactive Designs",
    icon: IconPaint,
  },
  {
    title: "Development",
    description: "HTML, CSS, JavaScript (React)",
    icon: IconCode,
  },
  {
    title: "Testing",
    description: "User Research, Wireframing, Usability Testing",
    icon: IconTestPipe,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      {/* Decorative SVG Background */}
      <div className="absolute right-0 top-0 -z-10 opacity-5">
        <svg width="404" height="392" fill="none">
          <defs>
            <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-emerald-700" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
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
          <h2 className="text-3xl font-bold text-emerald-500">About Me</h2>
          <p className="text-lg text-foreground/60 max-w-3xl">
            Based in Dhaka, Bangladesh, I&apos;m a UI/UX designer passionate about creating 
            intuitive and engaging digital experiences. With over four years of experience 
            in both freelance and corporate environments, I specialize in translating 
            complex problems into simple, beautiful solutions.
          </p>

          {/* Personal Details */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2 text-foreground/60">
              <IconCalendar className="w-5 h-5 text-emerald-600" />
              <span className="text-sm"><span className='text-gray-500 font-semibold'>Date of Birth:</span> March 13, 1996</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/60">
              <IconFlag className="w-5 h-5 text-emerald-600" />
              <span className="text-sm"><span className='text-gray-500 font-semibold'>Nationality:</span> Bangladeshi</span>
            </div>
          </div>

          {/* Download Resume Button */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="/Papia 2024  CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              <IconDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-emerald-700/10 hover:border-emerald-700/20 transition-colors bg-emerald-50/5 hover:bg-emerald-50/10"
            >
              <skill.icon className="w-8 h-8 mb-4 text-emerald-600" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-foreground/60">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
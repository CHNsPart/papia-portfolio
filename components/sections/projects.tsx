'use client';

import { motion } from 'framer-motion';
import { IconExternalLink } from '@tabler/icons-react';
import Image from 'next/image';

const projects = [
  {
    title: "E-commerce Website Redesign",
    description: "Improved user experience and checkout flow, resulting in 40% increase in conversions",
    tags: ["UI Design", "UX Research", "Figma"],
    image: "/project1.png",
    link: "#"
  },
  {
    title: "Healthcare Mobile App",
    description: "Designed an intuitive mobile app for patient management and appointment booking",
    tags: ["Mobile Design", "UI/UX", "Prototyping"],
    image: "/project2.jpg",
    link: "#"
  },
  {
    title: "Financial Dashboard",
    description: "Created a comprehensive dashboard for financial data visualization",
    tags: ["Dashboard", "Data Viz", "UI Design"],
    image: "/project3.jpeg",
    link: "#"
  }
];

// Decorative SVG Component
const DecorativeCircle = () => (
  <svg
    className="absolute right-0 top-20 -z-10 opacity-5"
    width="404"
    height="392"
    viewBox="0 0 404 392"
    fill="none"
  >
    <circle cx="202" cy="196" r="150" stroke="currentColor" className="text-emerald-700" strokeWidth="40" strokeDasharray="10 10" />
    <circle cx="202" cy="196" r="100" stroke="currentColor" className="text-emerald-600" strokeWidth="20" strokeDasharray="5 5" />
  </svg>
);

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <DecorativeCircle />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-lg text-foreground/60 max-w-3xl">
            A selection of projects that showcase my design process and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-700/10 hover:border-emerald-700/20 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              </div>

              <div className="relative space-y-4 p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-emerald-50 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <IconExternalLink className="w-5 h-5 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                
                <p className="text-emerald-100/80">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-emerald-900/50 text-emerald-300 border border-emerald-700/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
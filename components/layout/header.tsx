'use client';

import { IconBrandGithub, IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram, IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: IconBrandGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: IconBrandLinkedin,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61553276402019&mibextid=LQQJ4d',
    icon: IconBrandFacebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nusrat_papia/profilecard/?igsh=ZWljdXhkN3VtcGw0',
    icon: IconBrandInstagram,
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold z-50">
          Papia
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm hover:text-emerald-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-500 transition-colors"
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 text-foreground hover:text-emerald-500 transition-colors"
        >
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/85 h-screen backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col items-center justify-center min-h-screen gap-8">
                {/* Mobile Navigation */}
                <div className="flex flex-col items-center gap-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="text-lg hover:text-emerald-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Socials */}
                <div className="flex items-center gap-6 mt-8">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="hover:text-emerald-500 transition-colors"
                      >
                        <Icon size={24} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
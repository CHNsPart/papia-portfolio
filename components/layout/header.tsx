'use client';

import { IconBrandGithub, IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Papia
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground/80 transition-colors"
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
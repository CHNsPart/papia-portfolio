'use client';

import { motion } from 'framer-motion';
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';

const contactInfo = [
  {
    icon: IconMail,
    label: "Email",
    value: "nusratpapia862@gmail.com",
    href: "mailto:nusratpapia862@gmail.com"
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+880 1732 400706",
    href: "tel:+8801732400706"
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "South Keraniganj, Dhaka, Bangladesh, 1310",
    href: "https://maps.google.com/?q=South+Keraniganj+Dhaka+Bangladesh"
  }
];

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/NusratJahanPapia',
    icon: IconBrandGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nusrat-jahan-papia/',
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
  }
];

// ... (DecorativeSVG and MapComponent remain the same)

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <DecorativeSVG />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-lg text-foreground/60 max-w-3xl">
            Feel free to reach out for collaborations or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 bg-emerald-50/5 p-8 rounded-2xl border border-emerald-700/10"
          >
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 group-hover:bg-emerald-700 group-hover:text-emerald-50 transition-colors">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-600/60">{info.label}</p>
                    <p className="text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-emerald-700/10">
              <p className="text-sm text-emerald-600/60 mb-4">Follow Me On</p>
              <div className="flex flex-wrap gap-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-700 hover:text-emerald-50 transition-colors"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <MapComponent />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// Decorative SVG Component
const DecorativeSVG = () => (
  <svg 
    className="absolute right-0 -top-20 -z-10 opacity-5 text-emerald-700"
    width="404" 
    height="392" 
    fill="none"
  >
    <path
      d="M50,250 Q150,50 250,250 T450,250"
      stroke="currentColor"
      strokeWidth="20"
      fill="none"
      className="animate-pulse"
    />
    <path
      d="M50,200 Q150,0 250,200 T450,200"
      stroke="currentColor"
      strokeWidth="10"
      fill="none"
      className="animate-pulse"
      style={{ animationDelay: "1s" }}
    />
  </svg>
);


// Map component using iframe
const MapComponent = () => (
  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-emerald-700/10 shadow-lg shadow-emerald-700/5">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29220.763797694273!2d90.38011535!3d23.695754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b714c0a1781d%3A0xaba5113b6eac47d2!2sSouth%20Keraniganj%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1699919433049!5m2!1sen!2sbd"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
);
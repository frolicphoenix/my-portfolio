import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ContactLink {
  img?: string;
  icon?: string;
  label: string;
  href: string;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    img: 'https://img.icons8.com/bubbles/200/apple-mail.png',
    label: 'E-Mail',
    href: 'mailto:pranjalmlokhande@gmail.com',
  },
  {
    img: 'https://img.icons8.com/bubbles/200/linkedin.png',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pranjallokhande/',
  },
  {
    img: 'https://img.icons8.com/bubbles/200/github.png',
    label: 'GitHub',
    href: 'https://github.com/frolicphoenix',
  },
  {
    img: 'https://img.icons8.com/bubbles/200/tumblr.png',
    label: 'Tumblr',
    href: 'https://theunrealdesigner.tumblr.com/',
  },
];

const ContactScene: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, x: 100, rotateY: 10 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.5, ease: [0.23,1,0.32,1] } },
    exit:    { opacity: 0, x: -100, rotateY: -10, transition: { duration: 0.5, ease: [0.23,1,0.32,1] } },
  };

  return (
    <motion.section
      role="region"
      aria-label="Contact Me Section"
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#0a0a0a]/95 to-[#0a0a0a]/85 bg-cover p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={reduceMotion ? { duration: 0 } : undefined}
    >
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl w-full">

        {/* Links */}
        <section
          aria-labelledby="contact-links-heading"
          className="flex flex-col w-full md:w-1/3 gap-4"
        >
          <h3 id="contact-links-heading" className="text-xl font-semibold text-amber-300">
            Quick Links
          </h3>
          {CONTACT_LINKS.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center gap-4 bg-[#1e1e1e]/70 backdrop-blur-md p-3 rounded-lg text-amber-300 transition-colors duration-300 ease-in-out hover:bg-[#88a035] focus:outline-none focus:ring-2 focus:ring-[#88a035]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: idx * 0.1 + 0.2 } }}
            >
              {link.img ? (
                <img
                  src={link.img}
                  alt={link.label}
                  className="w-8 h-8 object-contain"
                  loading="lazy"
                />
              ) : (
                <span>{link.icon}</span>
              )}
              <span className="font-medium">{link.label}</span>
            </motion.a>
          ))}
        </section>

        {/* Form */}
        <section
          aria-labelledby="contact-form-heading"
          className="w-full md:w-2/3"
        >
          <h3 id="contact-form-heading" className="text-xl font-semibold text-amber-300 mb-4">
            Send a Message
          </h3>
          <form
            action="https://formsubmit.co/pranjalmlokhande@gmail.com"
            method="POST"
            className="flex flex-col gap-4 bg-[#1e1e1e]/70 backdrop-blur-md p-6 rounded-lg text-white shadow-lg"
          >
            <label className="flex flex-col text-sm">
              <span className="mb-1">Name</span>
              <input
                type="text"
                name="name"
                required
                className="bg-transparent border border-[#88a035]/50 rounded p-3 focus:outline-none focus:border-[#88a035] transition-colors"
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="mb-1">Email</span>
              <input
                type="email"
                name="email"
                required
                className="bg-transparent border border-[#88a035]/50 rounded p-3 focus:outline-none focus:border-[#88a035] transition-colors"
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="mb-1">Current Game or Fun Fact</span>
              <input
                type="text"
                name="currentgame"
                required
                className="bg-transparent border border-[#88a035]/50 rounded p-3 focus:outline-none focus:border-[#88a035] transition-colors"
              />
            </label>

            <label className="flex flex-col text-sm">
              <span className="mb-1">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                className="bg-transparent border border-[#88a035]/50 rounded p-3 focus:outline-none focus:border-[#88a035] transition-colors resize-none"
              />
            </label>

            {/* Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <button
              type="submit"
              className="bg-[#88a035] text-amber-300 rounded p-3 font-bold hover:bg-[#bbcf64] transition-colors focus:outline-none focus:ring-2 focus:ring-[#88a035]"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-16 text-center text-sm opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9, transition: { delay: 0.8 } }}
      >
        &copy; 2025 Pranjall. All rights reserved.
      </motion.footer>
    </motion.section>
  );
};

export default React.memo(ContactScene);

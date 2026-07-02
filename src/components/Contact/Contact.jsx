import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Send, Loader2 } from 'lucide-react';
import { socials } from '../../data/socials';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Maryam Hassan Resume.pdf';
    link.download = 'Maryam Hassan Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="section-eyebrow mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Let's Work Together</h2>
          <p className="text-ink-light/60 dark:text-ink-dark/60 max-w-xl mx-auto">
            Grab a copy of my resume or drop me an email.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          {/* Contact bar */}
          <div
            className="card-glass flex flex-col sm:flex-row items-stretch sm:items-center gap-4
            p-4 sm:p-3 sm:pl-6 rounded-3xl"
          >
            {/* Email pill */}
            <div
              aria-label="email address"
              className="group flex flex-1 items-center gap-3 rounded-2xl sm:rounded-full
              border border-black/10 dark:border-white/15 bg-white/70 dark:bg-white/5
              px-5 py-3.5 text-left transition-colors duration-300 hover:border-primary-magenta/50"
              
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-brand text-white shrink-0">
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] tracking-wider text-ink-light/90 dark:text-ink-dark/50">
                  Email me at: mmaryamhassann1@gmail.com
                </span>
              </span>
              <span className="ml-auto shrink-0 text-ink-light/40 dark:text-ink-dark/40 group-hover:text-primary-magenta transition-colors">
                {/* {copied ? <Check size={16} /> : <Copy size={16} />} */}
              </span>
            </div>

            {/* Resume button */}
            <button
              onClick={handleResumeDownload}
              className="btn-primary justify-center sm:w-auto shrink-0 !py-3.5"
            >
              Download Resume
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-black/10 dark:border-white/15
                text-ink-light/70 dark:text-ink-dark/70 transition-all duration-300
                hover:text-white hover:border-transparent hover:bg-gradient-brand hover:-translate-y-1 hover:shadow-glow-sm"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

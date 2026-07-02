import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, FileDown } from 'lucide-react';
import { navLinks } from '../../data/navLinks';
import { useActiveSection } from '../../hooks/useActiveSection';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.to));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Maryam Hassan Resume.pdf';
    link.download = 'Maryam Hassan Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`section-container flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass shadow-card' : 'bg-transparent'
        }`}
      >
        <ScrollLink
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-xl font-bold gradient-text select-none"
        >
          MH
        </ScrollLink>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth
                duration={500}
                offset={-90}
                spy
                className={`relative cursor-pointer text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.to
                    ? 'text-primary-magenta dark:text-primary-pink'
                    : 'text-ink-light/70 dark:text-ink-dark/70 hover:text-primary-magenta dark:hover:text-primary-pink'
                }`}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-brand rounded-full"
                  />
                )}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <button onClick={handleResumeDownload} className="btn-secondary !py-2 !px-4 text-sm">
            <FileDown size={16} />
            Resume
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/15"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="section-container overflow-hidden lg:hidden"
          >
            <div className="glass mt-3 rounded-2xl p-5 flex flex-col gap-4 shadow-card">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                  className={`cursor-pointer text-base font-medium py-1 ${
                    activeSection === link.to
                      ? 'text-primary-magenta dark:text-primary-pink'
                      : 'text-ink-light dark:text-ink-dark'
                  }`}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <button
                onClick={() => {
                  handleResumeDownload();
                  setMobileOpen(false);
                }}
                className="btn-primary w-full justify-center mt-2"
              >
                <FileDown size={16} />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`relative flex items-center justify-center w-10 h-10 rounded-full
      border border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5
      backdrop-blur-md transition-colors duration-300 hover:border-primary-magenta/60
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-magenta ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.35 }}
            className="absolute"
          >
            <Moon size={18} className="text-primary-pink" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.35 }}
            className="absolute"
          >
            <Sun size={18} className="text-primary-magenta" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

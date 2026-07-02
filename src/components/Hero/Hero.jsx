import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import { FileDown, ArrowDown } from 'lucide-react';
import { socials } from '../../data/socials';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMysql,  } from 'react-icons/si';

const floatingIcons = [
  { icon: SiReact, top: '8%', left: '4%', delay: 0 },
  { icon: SiTailwindcss, top: '68%', left: '2%', delay: 0.6 },
  { icon: SiMysql, top: '14%', left: '82%', delay: 1.1 },
  { icon: SiNodedotjs, top: '72%', left: '84%', delay: 1.6 },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Maryam Hassan Resume.pdf';
    link.download = 'Maryam Hassan Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="section-eyebrow mb-4">
            Hey there, I'm
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
          >
            Maryam Hassan
          </motion.h1>
          <motion.h2
            variants={item}
            className="text-2xl sm:text-3xl font-semibold mb-6 h-10 text-ink-light/90 dark:text-ink-dark/90"
          >
            <TypeAnimation
              sequence={[
                'Software Engineer', 2000,
                'Machine Learning Engineer', 2000,
                'React Developer', 2000,
                'MERN Stack Developer', 2000,
                'Software Quality Engineer', 2000,
              ]}
              wrapper="span"
              speed={50}
              className="gradient-text"
              repeat={Infinity}
            />
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-base sm:text-lg text-ink-light/70 dark:text-ink-dark/70 max-w-lg mb-8 leading-relaxed"
          >
            I design and build fast, accessible, and delightful web experiences blended with AI - 
            turning ambitious ideas into products with clean code
            and thoughtful interfaces.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-8">
            <button onClick={handleResumeDownload} className="btn-primary">
              <FileDown size={18} />
              Download Resume
            </button>
            <ScrollLink to="projects" smooth duration={600} offset={-60} className="btn-secondary cursor-pointer">
              View My Work
            </ScrollLink>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4">
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
          </motion.div>
        </motion.div>

        {/* Right column — profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-brand blur-[80px] opacity-40 scale-90" />

          {floatingIcons.map(({ icon: Icon, top, left, delay }, i) => (
            <motion.div
              key={i}
              className="absolute z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl glass shadow-card"
              style={{ top, left }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay, ease: 'easeInOut' }}
            >
              <Icon size={22} className="text-primary-magenta dark:text-primary-pink" />
            </motion.div>
          ))}

          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-64 sm:w-80 aspect-[4/5] rounded-[2.5rem] overflow-hidden
            border border-white/40 dark:border-white/10 shadow-glow glass p-2"
          >
            <div className="w-full h-full rounded-[2rem] bg-gradient-brand-alt flex items-center justify-center">
              <span className="text-white/90 font-display text-6xl font-bold select-none">MH</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-ink-light/50 dark:text-ink-dark/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}

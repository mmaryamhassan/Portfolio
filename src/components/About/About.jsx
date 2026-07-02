import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Sparkles } from 'lucide-react';
import { education, achievements } from '../../data/experience';

function AnimatedCounter({ value, duration = 1.6 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(value);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold gradient-text">
      {count}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="section-eyebrow mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="card-glass p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-brand text-white">
                <Sparkles size={18} />
              </span>
              <h3 className="text-xl font-bold">My Journey</h3>
            </div>
            <p className="text-ink-light/70 dark:text-ink-dark/70 leading-relaxed">
              
              My journey into software development began with a curiosity about how technology solves real-world problems. From creating academic projects to developing full-stack applications with modern technology, each project has strengthened my problem-solving skills and passion for building meaningful digital experiences. I care about the full picture; from the user's first impression to the systems and teams that make it happen.

            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="card-glass p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-brand text-white">
                <GraduationCap size={18} />
              </span>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <ul className="space-y-4">
              {education.map((ed) => (
                <li key={ed.id} className="relative pl-5 border-l-2 border-primary-magenta/40">
                  <p className="font-semibold">{ed.degree}</p>
                  <p className="text-sm font-semibold text-ink-light/75 dark:text-ink-dark/60">{ed.school}</p>
                  <p className="text-sm text-ink-light/70 dark:text-ink-dark/60">{ed.details}</p>
                  <p className="text-xs text-primary-magenta dark:text-primary-pink font-medium">{ed.period}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {achievements.map((a) => (
            <div key={a.label} className="card-glass p-6 text-center hover:-translate-y-1">
              <AnimatedCounter value={a.value} />
              <p className="mt-2 text-sm text-ink-light/60 dark:text-ink-dark/60">{a.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

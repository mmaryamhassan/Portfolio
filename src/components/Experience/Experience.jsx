import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../../data/experience';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="section-eyebrow mb-3">Where I've Worked</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-magenta via-accent-violet to-primary-pink sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`relative flex items-start sm:items-center gap-6 sm:gap-0 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className="absolute left-0 sm:left-1/2 flex items-center justify-center w-10 h-10 rounded-full
                  bg-gradient-brand text-white shadow-glow-sm sm:-translate-x-1/2 z-10">
                  <Briefcase size={16} />
                </div>

                <div className={`pl-16 sm:pl-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <div className="card-glass p-6 inline-block w-full sm:w-auto text-left">
                    <p className="text-xs font-semibold text-primary-magenta dark:text-primary-pink mb-1">
                      {exp.period}
                    </p>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-sm font-medium text-ink-light/60 dark:text-ink-dark/60 mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-ink-light/70 dark:text-ink-dark/70 leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-primary-magenta/10 text-primary-magenta dark:bg-primary-pink/15 dark:text-primary-pink"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

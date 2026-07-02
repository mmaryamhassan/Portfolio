import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectFilters } from '../../data/projects';
import ProjectCard from './ProjectCard';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="section-eyebrow mb-3">My Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectFilters.map((filter) => (
            <button
              key={filter}  
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-brand text-white shadow-glow-sm'
                  : 'border border-black/10 dark:border-white/15 text-ink-light/70 dark:text-ink-dark/70 hover:border-primary-magenta/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-ink-light/60 dark:text-ink-dark/60 mt-10">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}

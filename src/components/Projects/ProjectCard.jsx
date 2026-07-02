import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Projects from './Projects';


export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl p-[1.5px] bg-gradient-brand bg-[length:200%_auto] transition-transform duration-300 will-change-transform"
      style={{ transitionProperty: 'transform' }}
    >
      <div className="card-glass h-full overflow-hidden !rounded-[calc(1.5rem-1.5px)]">
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-ink-light/70 dark:text-ink-dark/70 mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full bg-primary-magenta/10 text-primary-magenta dark:bg-primary-pink/15 dark:text-primary-pink"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project.github || project.demo) && (
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-secondary !py-2 !px-4 text-sm justify-center ${
                    project.demo ? "flex-1" : "w-full"
                  }`}
                >
                  <Github size={16} /> Code
                </a>
              )}  

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-primary !py-2 !px-4 text-sm justify-center ${
                    project.github ? "flex-1" : "w-full"
                  }`}
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
}

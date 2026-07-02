import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function SkillCard({ skill }) {
  const Icon = skill.icon;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group card-glass p-5 hover:shadow-glow-sm transition-shadow"
    >
      <div className="flex items-center gap-3 mb-1">
        <motion.span
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-brand text-white shrink-0"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={20} />
        </motion.span>
        <p className="font-semibold">{skill.name}</p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="section-eyebrow mb-3">What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Skills & Tools</h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-bold mb-5 text-primary-magenta dark:text-primary-pink">
                {category.title}
              </h3>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={grid}
                className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4"
              >
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

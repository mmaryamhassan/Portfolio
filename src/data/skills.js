import {
  SiReact, SiBootstrap, SiTailwindcss, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiFirebase, SiSupabase,
  SiMongodb, SiPostgresql,
  SiGit, SiGithub, SiFigma,
  SiMysql,
  SiPostman,
  SiTrello,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 95 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 88 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92 },
      { name: 'JavaScript', icon: SiJavascript, level: 93 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 87 },
      { name: 'Express.js', icon: SiExpress, level: 84 },
      { name: 'Firebase', icon: SiFirebase, level: 80 },
      { name: 'Supabase', icon: SiSupabase, level: 78 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 86 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
      { name: 'MySQL', icon: SiMysql, level: 82 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'GitHub', icon: SiGithub, level: 90 },
      { name: 'Postman', icon: SiPostman, level: 95 },
      { name: 'Figma', icon: SiFigma, level: 75 },
      { name: 'Trello', icon: SiTrello, level: 75 },
    ],
  },
];

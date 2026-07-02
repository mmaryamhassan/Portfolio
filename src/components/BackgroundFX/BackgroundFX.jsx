import { useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';

function Particles({ count = 22 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: 2 + Math.random() * 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 8 + Math.random() * 10,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary-magenta/40 dark:bg-white/50 animate-float-slow"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function Stars({ count = 60 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 0.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden opacity-0 dark:opacity-100 transition-opacity duration-700">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white animate-pulse-glow"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function BackgroundFX() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-surface-light dark:bg-surface-dark transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-70 dark:opacity-40" />

      {/* Blur blobs */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary-magenta/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-accent-violet/25 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 w-[26rem] h-[26rem] rounded-full bg-primary-pink/25 blur-3xl animate-blob [animation-delay:8s]" />

      <Particles />
      {theme === 'dark' && <Stars />}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(isFinePointer && !reduced);

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[60] h-[380px] w-[380px] rounded-full mix-blend-screen"
      style={{
        translateX: springX,
        translateY: springY,
        x: '-50%',
        y: '-50%',
        background:
          'radial-gradient(circle, rgba(217,70,239,0.18) 0%, rgba(168,85,247,0.10) 40%, transparent 70%)',
      }}
    />
  );
}

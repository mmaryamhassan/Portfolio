import Lenis from '@studio-freight/lenis';

let lenisInstance = null;

export function initLenis() {
  if (lenisInstance) return lenisInstance;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  lenisInstance = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

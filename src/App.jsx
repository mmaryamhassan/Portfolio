import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import SEO from './components/UI/SEO';
import Loader from './components/Loader/Loader';
import BackgroundFX from './components/BackgroundFX/BackgroundFX';
import CursorGlow from './components/CursorGlow/CursorGlow';
import ScrollProgress from './components/UI/ScrollProgress';
import BackToTop from './components/UI/BackToTop';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { initLenis } from './utils/lenis';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = initLenis();
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => {
      clearTimeout(timer);
      lenis?.destroy?.();
    };
  }, []);

  return (
    <>
      <SEO />
      <Loader isLoading={isLoading} />
      <BackgroundFX />
      <CursorGlow />
      <ScrollProgress />

      <div className="relative text-ink-light dark:text-ink-dark">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      <BackToTop />
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
    </>
  );
}

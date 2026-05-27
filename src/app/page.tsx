'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '../components/ui/loader';
import Navbar from '../components/ui/navbar';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Services from '../components/sections/services';
import Projects from '../components/sections/projects';
import Workflow from '../components/sections/workflow';
import GitHubSection from '../components/sections/github';
import Contact from '../components/sections/contact';
import Footer from '../components/ui/footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Cinematic initial loader screen */}
      <Loader onComplete={() => setLoading(false)} />

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Global background glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full glow-blur-blue opacity-10 pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full glow-blur-purple opacity-10 pointer-events-none z-0" />

            {/* Navigation Header */}
            <Navbar />

            {/* Telemetry Page Sections */}
            <main className="flex-grow z-10">
              <Hero />
              <About />
              <Skills />
              <Services />
              <Projects />
              <Workflow />
              <GitHubSection />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

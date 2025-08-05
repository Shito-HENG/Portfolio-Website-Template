// src/components/AnimatedRoutes.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import all your page components
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Certificates from '../pages/Certificates';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';

// Import the new PageTransition wrapper
import PageTransition from './PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // FIX: Add 'flex-grow' to this wrapper div
    <div className="flex-grow">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/certificates" element={<PageTransition><Certificates /></PageTransition>} />
          <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
          <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;

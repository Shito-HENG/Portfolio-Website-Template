// src/components/FadeInSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children, className }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <motion.div
      ref={domRef}
      className={className}  // <-- CRITICAL: className is now applied here
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
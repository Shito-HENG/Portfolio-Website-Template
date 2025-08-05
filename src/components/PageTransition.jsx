// src/components/PageTransition.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      className="p-6"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

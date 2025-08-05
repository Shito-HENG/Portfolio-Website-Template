// src/components/AnimatedText.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  "Cybersecurity Analyst",
  "Full-Stack Developer"
];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const currentPhrase = phrases[index];
  const typingSpeed = 70; // milliseconds per character (adjust for speed)
  const deletingSpeed = 40; // milliseconds per character (adjust for speed)
  const pauseAfterTyping = 1500; // milliseconds to pause after typing (1.5 seconds)
  const pauseAfterDeleting = 500; // milliseconds to pause after deleting

  useEffect(() => {
    let typeTimeout;
    let deleteTimeout;
    let phraseChangeTimeout;

    const type = (text, i) => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        typeTimeout = setTimeout(() => type(text, i + 1), typingSpeed);
      } else {
        // Finished typing, now pause
        phraseChangeTimeout = setTimeout(() => {
          deleteText(text, text.length);
        }, pauseAfterTyping);
      }
    };

    const deleteText = (text, i) => {
      if (i > 0) {
        setDisplayedText(text.substring(0, i - 1));
        deleteTimeout = setTimeout(() => deleteText(text, i - 1), deletingSpeed);
      } else {
        // Finished deleting, now move to next phrase
        phraseChangeTimeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, pauseAfterDeleting);
      }
    };

    // Start typing the current phrase when index changes
    setDisplayedText(""); // Clear text before typing new one
    type(currentPhrase, 0);

    return () => {
      clearTimeout(typeTimeout);
      clearTimeout(deleteTimeout);
      clearTimeout(phraseChangeTimeout);
    };
  }, [index, currentPhrase, typingSpeed, deletingSpeed, pauseAfterTyping, pauseAfterDeleting]);

  return (
    <span style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <AnimatePresence mode='wait'>
        <motion.span
          key={currentPhrase}
          className="inline-block text-blue-400" // This is where we'll add the color class
        >
          {displayedText}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default AnimatedText;
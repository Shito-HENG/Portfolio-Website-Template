// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import FadeInSection from "../components/FadeInSection";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from '../components/AnimatedText'; // <-- ADD THIS IMPORT

// --- IMPORT YOUR 3 PHOTOS HERE ---
// IMPORTANT: Update these paths and filenames to your actual images
// Using your provided image paths:
import photo1 from '../assets/1371498-toshiro-hitsugaya-wallpaper-2732x1536-for-windows-7.jpg';
import photo2 from '../assets/1586248.jpg';
import photo3 from '../assets/toshiro-hitsugaya-bleach-thousand-year-blood-war-hd-wallpaper-uhdpaper.com-483@1@i.jpg';
// ---------------------------------

export default function Home() {
  const images = [photo1, photo2, photo3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const displayDuration = 5000; // Time in milliseconds (5 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, displayDuration);

    return () => clearInterval(interval);
  }, [images.length, displayDuration]);

  // Animation variants for the image fade (still applies to motion.div)
  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="max-w-5xl mx-auto p-6 flex items-center justify-center min-h-[calc(100vh-16rem)]">
      <FadeInSection className="flex flex-col md:flex-row items-center md:justify-center md:space-x-12 w-full">

        {/* Image Carousel Container - RETAINS overflow-hidden and rounded-full */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-accent-primary shadow-lg mb-8 md:mb-0 flex-shrink-0 overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex} // Key is still essential for AnimatePresence
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0,0,0,0.1)',
              }}
              className="absolute top-0 left-0 w-full h-full rounded-full"
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Text Content (Name, Tagline, Buttons) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <h1 className="text-6xl md:text-7xl font-heading font-bold mb-4 leading-tight text-light-text">
            Hi, I'm <span className="text-accent-primary">Your Name</span>
          </h1>
          {/* --- REPLACE THIS LINE WITH AnimatedText COMPONENT --- */}
          <p className="text-xl md:text-2xl text-medium-text mb-8 font-sans flex items-center gap-1 whitespace-nowrap">
            A passionate   <AnimatedText /> {/* <-- USE THE COMPONENT HERE */}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/projects"
              className="bg-accent-primary hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-opacity-75 text-lg"
            >
              View My Projects
            </Link>
            <a
              href="/path/to/your/resume.pdf" // Update this with your actual CV/Resume path
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-light-text font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-75 text-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
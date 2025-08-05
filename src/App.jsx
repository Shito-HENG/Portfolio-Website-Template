// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from './components/AnimatedRoutes';
import SnowfallBackground from './components/SnowfallBackground';

function App() {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: 1,
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        grab: {
          distance: 150,
          links: {
            opacity: 0.5,
          },
        },
      },
    },
    particles: {
      color: {
        value: "#FF0000",
      },
      links: {
        color: "#FFFFFF",
        distance: 140,
        enable: true,
        opacity: 0.4,
        width: 1,
        triangles: {
          enable: false,
          color: { value: "#00CFFF" },
          opacity: 0.1,
        },
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: { min: 0.2, max: 0.6 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
          startValue: "random",
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 2 },
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 0.5,
          sync: false,
          startValue: "random",
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark-bg text-light-text font-sans relative overflow-y-auto">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="fixed inset-0 z-0 pointer-events-none"
        />
        
        <SnowfallBackground />

        <Header className="relative z-10" />

        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>

        <Footer className="relative z-10" />
      </div>
    </Router>
  );
}

export default App;

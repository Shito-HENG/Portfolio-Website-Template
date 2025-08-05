// src/components/SnowfallBackground.jsx
import React, { useEffect, useState } from 'react';

const SnowfallBackground = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Generates a random number of snowflakes on mount
    const numSnowflakes = 100;
    const newSnowflakes = Array.from({ length: numSnowflakes }, (_, index) => {
      const size = Math.random() * 5 + 2; // Snowflake size from 2px to 7px
      const delay = Math.random() * 15; // Animation delay up to 15s
      const duration = Math.random() * 15 + 10; // Animation duration from 10s to 25s
      const opacity = Math.random(); // Random opacity
      const position = Math.random() * 100; // Starting position on the X axis

      return {
        id: index,
        size,
        delay,
        duration,
        opacity,
        position,
      };
    });

    setSnowflakes(newSnowflakes);
  }, []);

  // Define the snowflake animation using CSS keyframes.
  // We will apply this animation to each snowflake directly.
  const style = `
    @keyframes snowfall {
      0% {
        transform: translateY(-10vh) rotateZ(0deg);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateY(105vh) rotateZ(360deg);
        opacity: 0;
      }
    }
  `;

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <style>{style}</style>
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            left: `${flake.position}vw`,
            // This is the fix: apply the animation directly to the element.
            animation: `snowfall ${flake.duration}s linear ${flake.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowfallBackground;

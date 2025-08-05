// src/pages/Projects.jsx
import React from "react";
import FadeInSection from "../components/FadeInSection";

export default function Projects() {
  // Define your project data as an array of objects
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal website showcasing my skills and projects, built with React and Tailwind CSS.",
      link: "https://github.com/yourusername/your-portfolio-repo", // Replace with actual link
      tech: ["React", "Tailwind CSS", "SPA"]
    },
    {
      title: "CTF Challenges",
      description: "Solutions and write-ups for various Capture The Flag challenges, focusing on web exploits and reverse engineering.",
      link: "https://ctf-platform.example.com/challenges/my-solutions", // Replace with actual link
      tech: ["Python", "Networking", "Security", "Reverse Engineering"]
    },
    {
      title: "Smart Home App",
      description: "An IoT dashboard application to monitor and control smart home devices from a centralized interface.",
      link: "https://smarthome-app.example.com", // Replace with actual link
      tech: ["Node.js", "Express", "MongoDB", "IoT", "APIs"]
    },
    // Add more projects as needed
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <FadeInSection>
        <h2 className="text-4xl font-heading font-bold mb-8 text-center text-light-text">Featured Projects</h2>

        {/* Responsive Grid for Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-medium-dark-bg rounded-lg shadow-xl p-6 flex flex-col transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-accent-primary mb-3 font-heading">{project.title}</h3>
              <p className="text-medium-text mb-4 flex-grow">{project.description}</p>
              {/* Technology Tags */}
              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {/* View Project Button/Link */}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="mt-auto inline-block bg-accent-primary hover:bg-accent-hover text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out text-center">
                  View Project &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
// src/pages/Skills.jsx
import React from "react";
import FadeInSection from "../components/FadeInSection";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "C/C++", "Java", "Bash"]
    },
    {
      category: "Web Development",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "Tailwind CSS", "RESTful APIs"]
    },
    {
      category: "Cybersecurity",
      skills: ["Network Security", "Vulnerability Assessment", "Incident Response", "Malware Analysis", "Forensics", "Cryptography"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Burp Suite", "Nmap", "Metasploit"]
    },
    // Add more categories as needed
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <FadeInSection>
        <h2 className="text-4xl font-heading font-bold mb-8 text-center text-light-text">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((categoryItem, index) => (
            <div key={index} className="bg-medium-dark-bg rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-accent-primary mb-4 font-heading">{categoryItem.category}</h3>
              <ul className="list-disc list-inside space-y-2 text-light-text">
                {categoryItem.skills.map((skill, i) => (
                  <li key={i} className="text-lg flex items-center">
                    <span className="mr-2 text-accent-primary">&bull;</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
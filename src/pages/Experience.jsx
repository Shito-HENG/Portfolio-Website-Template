// src/pages/Experience.jsx
import React from "react";
import FadeInSection from "../components/FadeInSection";

export default function Experience() {
  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "XYZ Labs",
      duration: "Jan 2024 - Present",
      description: "Assisted in vulnerability assessments, incident response, and security tool deployment. Contributed to documentation.",
    },
    {
      title: "Web Developer (Volunteer)",
      company: "Local NGO",
      duration: "May 2023 - Dec 2023",
      description: "Developed and maintained the organization's website, improving user engagement and online presence.",
    },
    {
      title: "CTF Participant",
      company: "Regional Cyber Competitions",
      duration: "2022 - Present",
      description: "Actively participated in various CTF events, honing skills in exploitation, forensics, and cryptography.",
    },
    {
      title: "FC Participant",
      company: "Regional Cyber Competitions",
      duration: "2022 - Present",
      description: "Actively participated in various CTF events, honing skills in exploitation, forensics, and cryptography.",
    },
    // Add more experience entries
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <FadeInSection>
        <h2 className="text-4xl font-heading font-bold mb-8 text-center text-light-text">Work & Volunteering Experiences</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-medium-dark-bg rounded-lg shadow-lg p-6 flex flex-col items-start transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-accent-primary mb-2 font-heading">{exp.title}</h3>
              <p className="text-medium-text mb-1"><strong>{exp.company}</strong> | {exp.duration}</p>
              <p className="text-light-text flex-grow">{exp.description}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
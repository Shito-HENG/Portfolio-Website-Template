// src/pages/Education.jsx
import React from "react";
import FadeInSection from "../components/FadeInSection";

export default function Education() {
  const educationEntries = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Royal University of Phnom Penh",
      duration: "Sept 2020 - Expected 2024",
      gpa: "3.8/4.0", // Optional
      achievements: ["Dean's List (2021, 2022)", "Graduated with Honors"], // Optional
      relevantCoursework: ["Data Structures", "Algorithms", "Network Security", "Operating Systems"] // Optional
    },
    {
      degree: "High School Diploma",
      institution: "Phnom Penh High School",
      duration: "Sept 2017 - June 2020",
      // Add other relevant details if any
    },
    // Add more education entries as needed (e.g., bootcamps, certifications)
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <FadeInSection>
        <h2 className="text-4xl font-heading font-bold mb-8 text-center text-light-text">My Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationEntries.map((entry, index) => (
            <div key={index} className="bg-medium-dark-bg rounded-lg shadow-xl p-6 flex flex-col transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-accent-primary mb-2 font-heading">{entry.degree}</h3>
              <p className="text-light-text mb-1"><strong>{entry.institution}</strong></p>
              <p className="text-medium-text text-sm mb-3">{entry.duration}</p>

              {entry.gpa && <p className="text-medium-text mb-1">GPA: {entry.gpa}</p>}

              {entry.achievements && entry.achievements.length > 0 && (
                <div className="mt-2">
                  <h4 className="font-semibold text-light-text">Achievements:</h4>
                  <ul className="list-disc list-inside text-medium-text ml-4">
                    {entry.achievements.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              )}

              {entry.relevantCoursework && entry.relevantCoursework.length > 0 && (
                <div className="mt-2">
                  <h4 className="font-semibold text-light-text">Relevant Coursework:</h4>
                  <ul className="list-disc list-inside text-medium-text ml-4">
                    {entry.relevantCoursework.map((course, i) => <li key={i}>{course}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
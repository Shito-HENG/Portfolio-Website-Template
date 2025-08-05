// src/pages/Certificates.jsx
import React from 'react';
import FadeInSection from '../components/FadeInSection';

export default function Certificates() {
    // Updated data structure to support multiple certification categories
    const certCategories = [
        {
            title: "Industry Certifications",
            certs: [
                {
                    name: "TryHackMe: Offensive Pentesting",
                    issuer: "TryHackMe",
                    issued: "2023",
                    verifyUrl: "#", // Replace with actual URL
                    image: "https://placehold.co/300x200/2c3e50/ffffff?text=TryHackMe", // Placeholder image URL
                },
                {
                    name: "HackTheBox: Starting Point",
                    issuer: "HackTheBox",
                    issued: "2023",
                    verifyUrl: "#", // Replace with actual URL
                    image: "https://placehold.co/300x200/2c3e50/ffffff?text=HackTheBox", // Placeholder image URL
                },
                {
                    name: "Google Cybersecurity Certificate",
                    issuer: "Google",
                    issued: "2024",
                    verifyUrl: "#", // Replace with actual URL
                    image: "https://placehold.co/300x200/2c3e50/ffffff?text=Google", // Placeholder image URL
                },
            ]
        },
        {
            title: "Bootcamp Certifications",
            certs: [
                {
                    name: "Full Stack Development Bootcamp",
                    issuer: "Example University",
                    issued: "2022",
                    verifyUrl: "#", // Replace with actual URL
                    image: "https://placehold.co/300x200/2c3e50/ffffff?text=Bootcamp", // Placeholder image URL
                },
            ]
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <FadeInSection>
                <h2 className="text-4xl font-heading font-bold mb-8 text-center text-light-text">
                    Certificates & Achievements
                </h2>
                {certCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3 className="text-2xl font-semibold font-heading text-light-text mt-8 mb-6 text-center">
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {category.certs.map((cert, certIndex) => (
                                <div
                                    key={certIndex}
                                    className="bg-medium-dark-bg rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="mb-4 rounded-lg overflow-hidden">
                                        <img
                                            src={cert.image}
                                            alt={`Certificate for ${cert.name}`}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-accent-primary mb-2 font-heading">
                                        {cert.name}
                                    </h3>
                                    <p className="text-medium-text mb-1">
                                        <span className="font-semibold">Issuer:</span> {cert.issuer}
                                    </p>
                                    <p className="text-medium-text mb-4">
                                        <span className="font-semibold">Issued:</span> {cert.issued}
                                    </p>
                                    <a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent-secondary hover:underline font-semibold flex items-center"
                                    >
                                        Verify <span className="ml-2">→</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </FadeInSection>
        </div>
    );
}

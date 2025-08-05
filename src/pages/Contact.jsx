// src/pages/Contact.jsx
import React, { useState } from "react";
import FadeInSection from "../components/FadeInSection";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For a real contact form, you'd send formData to a backend service.
    // I have replaced the alert() with a console log to avoid a blocking popup.
    console.log("Form submitted:", formData);
    
    // You could show a custom, non-blocking toast or modal here.
    
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <FadeInSection>
        <h2 className="text-4xl font-heading font-bold mb-8 text-center text-light-text">Let's Connect</h2>

        <div className="bg-medium-dark-bg rounded-lg shadow-xl p-8 mb-8">
          <p className="text-medium-text text-lg mb-6 text-center">
            Have a question, a project idea, or just want to say hello? Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-light-text text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-light-text focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-light-text text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-light-text focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-light-text text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-light-text focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent-primary hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-opacity-75 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media and Direct Contact */}
        <div className="bg-medium-dark-bg rounded-lg shadow-xl p-8 text-center">
          <h3 className="text-2xl font-semibold font-heading text-light-text mb-4">Find Me On</h3>
          <div className="flex justify-center space-x-6 text-accent-primary text-4xl">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent-hover transition duration-300 ease-in-out">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent-hover transition duration-300 ease-in-out">
              <FaLinkedin />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email" className="hover:text-accent-hover transition duration-300 ease-in-out">
              <FaEnvelope />
            </a>
          </div>
          <p className="text-medium-text mt-6">
            Or directly email me at: <a href="mailto:your.email@example.com" className="text-accent-primary hover:underline">your.email@example.com</a>
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}
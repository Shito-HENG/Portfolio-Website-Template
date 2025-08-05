import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/skills', label: 'Skills'},
    { path: '/experience', label: 'Experiences' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    // Use your custom background color, e.g., 'bg-medium-dark-bg'
    <header className="bg-medium-dark-bg p-6 shadow-md text-light-text">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* The font-heading is correctly applied here */}
        <h1 className="text-4xl font-heading font-bold mb-4 md:mb-0">My Portfolio</h1>
        {/* Use your custom accent colors for navigation links */}
        <nav className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-accent-primary">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                hover:text-accent-hover transition duration-300 ease-in-out
                ${location.pathname === link.path ? 'text-accent-hover font-semibold underline' : ''}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
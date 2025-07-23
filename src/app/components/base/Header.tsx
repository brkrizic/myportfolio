"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">MyPortfolio</div>

        {/* Hamburger button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav links - hidden on mobile by default */}
        <ul
          className={`flex-col sm:flex-row flex sm:flex space-y-4 sm:space-y-0 sm:space-x-6 text-gray-300 absolute sm:static top-full left-0 w-full sm:w-auto bg-black bg-opacity-90 sm:bg-transparent px-4 sm:px-0 py-4 sm:py-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } sm:flex`}
        >
          <li>
            <a href="#about" className="hover:text-white transition block sm:inline">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition block sm:inline">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition block sm:inline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition block sm:inline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

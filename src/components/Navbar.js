import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <a
            href="#home"
            className="hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition duration-300"
          >
            About Us
          </a>
          {/* <a
            href="#services"
            className="hover:text-gray-300 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </a> */}
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#home"
              className="hover:text-gray-300 transition duration-300 text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 transition duration-300 text-lg font-medium"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-gray-300 transition duration-300 text-lg font-medium"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition duration-300 text-lg font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

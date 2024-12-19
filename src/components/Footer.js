import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0 px-6">
        {/* Footer Navigation */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-8">
          <a
            href="#home"
            className="text-gray-400 hover:text-white font-comfortaa transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-white font-comfortaa transition duration-300"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-gray-400 hover:text-white font-comfortaa transition duration-300"
          >
            Services
          </a>
          {/* <a
            href="#contact"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Contact
          </a> */}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/company/healy-hyperspatial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
          </a>
          {/* GitHub Icon */}
          <a
            href="https://github.com/Healy-Hyperspatial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Healy Hyperspatial. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import logo from "../assets/hh-bw-wide.png";

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="flex flex-col items-center justify-center py-8">
        {/* Enlarged Logo */}
        <img
          src={logo}
          alt="Healy-Hyperspatial Logo"
          className="w-[80%] max-w-4xl object-contain"
        />

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-6">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/company/healy-hyperspatial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-8 w-8"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.14c-.97 0-1.5-.71-1.5-1.41 0-.7.54-1.41 1.5-1.41s1.5.71 1.5 1.41c0 .7-.54 1.41-1.5 1.41zm13.5 11.14h-3v-5.3c0-1.27-.45-2.13-1.58-2.13-.86 0-1.37.58-1.59 1.13-.08.2-.1.48-.1.76v5.54h-3v-10h3v1.38c.41-.64 1.15-1.38 2.77-1.38 2.02 0 3.51 1.32 3.51 4.15v5.85z" />
            </svg>
          </a>

          {/* Website Icon */}
          <a
            href="https://www.healy-hyperspatial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-8 w-8"
            >
              <path d="M12 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-9c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0 7.5c-2.485 0-4.5-1.07-4.5-2.4 0-.62.497-1.179 1.298-1.697 1.389.664 2.99 1.097 3.702 1.097.711 0 2.312-.433 3.701-1.097.801.518 1.299 1.077 1.299 1.697 0 1.33-2.015 2.4-4.5 2.4z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

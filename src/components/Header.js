import React from "react";
import logo from "../assets/healy-hyper-banner.svg";
import starsVideo from "../assets/stars.mp4"; // Import the video file

const Header = () => {
  return (
    <section id="home">
      <header
        className="relative text-white overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={starsVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content */}

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          {/* Enlarged Logo with Hover Effect */}
          <img
            src={logo}
            alt="Healy-Hyperspatial Logo"
            className="w-[80%] max-w-4xl object-contain transform transition-transform duration-300 hover:scale-105"
          />

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/healy-hyperspatial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
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

            {/* GitHub Icon */}
            <a
              href="https://github.com/Healy-Hyperspatial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-8 w-8"
              >
                <path d="M12 2c-5.523 0-10 4.477-10 10 0 4.418 2.868 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.151-1.11-1.458-1.11-1.458-.908-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.637-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.562 9.562 0 0 1 12 6.845c.85.004 1.705.114 2.504.335 1.91-1.294 2.748-1.025 2.748-1.025.545 1.378.202 2.397.099 2.65.641.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.566 4.937.36.309.679.919.679 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C19.135 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;

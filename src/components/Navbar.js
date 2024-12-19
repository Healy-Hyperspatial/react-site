import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isLandscape, setIsLandscape] = useState(false);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check for landscape mode
  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  return (
    <>
      {isAtTop && ( // Only render navbar when at the top of the page
        <nav
          id="home"
          className="fixed top-0 w-full z-50 bg-transparent text-gray-300"
        >
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 md:text-2xl font-medium">
              <a
                href="#home"
                className="hover:text-white md:text-lg font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-white md:text-lg font-medium"
              >
                About Us
              </a>
              <a
                href="#services"
                className="hover:text-white md:text-lg font-medium"
              >
                Services
              </a>
              <a
                href="#open-source"
                className="hover:text-white md:text-lg font-medium"
              >
                Open Source
              </a>
            </div>

            {/* Hamburger Menu for Mobile (hidden in landscape mode) */}
            {!isLandscape && (
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
            )}
          </div>

          {/* Mobile Menu */}
          {!isLandscape && isOpen && (
            <div className="md:hidden bg-transparent">
              <div className="flex flex-col items-center space-y-4 py-4">
                <a
                  href="#home"
                  className="hover:text-gray-300 sm:text-lg font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-gray-300 sm:text-lg font-medium"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="hover:text-gray-300 sm:text-lg font-medium"
                >
                  Services
                </a>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;

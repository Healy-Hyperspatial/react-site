import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDocker,
  faPython,
  faJsSquare,
  faEthereum,
  faAws,
  faMicrosoft,
  faGolang,
  faUbuntu,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";

const Services = () => {
  return (
    <section id="services" className="bg-gray-200 text-black py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Column: Text */}
        <div className="w-full md:flex-1">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 text-left">
            Our Services
          </h2>
          <p className="text-md sm:text-lg leading-relaxed mb-6 text-left">
            At Healy Hyperspatial, we specialize in delivering innovative
            solutions tailored to the needs of forward-thinking organizations.
            Our expertise spans a range of cutting-edge technologies and
            industry domains.
          </p>
          <p className="text-md sm:text-lg leading-relaxed mb-6 text-left">
            We focus on geospatial analytics, scalable API and database design,
            and cloud-based solutions. Our goal is to empower organizations with
            robust, reliable, and scalable technologies.
          </p>
        </div>

        {/* Right Column: Technology Icons */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
          {/* 2x2 Grid of Logos */}
          <div className="text-3xl grid grid-cols-4 gap-5">
            <FontAwesomeIcon icon={faGithub} className="text-black" />
            <FontAwesomeIcon icon={faDocker} className="text-black" />
            <FontAwesomeIcon icon={faPython} className="text-black" />
            <FontAwesomeIcon icon={faCloud} className="text-black" />
            <FontAwesomeIcon icon={faMicrosoft} className="text-black" />

            <FontAwesomeIcon icon={faAws} className="text-black" />

            <FontAwesomeIcon icon={faJsSquare} className="text-black" />
            <FontAwesomeIcon icon={faGolang} className="text-black" />
            <FontAwesomeIcon icon={faReact} className="text-black" />
            <FontAwesomeIcon icon={faEthereum} className="text-black" />
            <FontAwesomeIcon icon={faUbuntu} className="text-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

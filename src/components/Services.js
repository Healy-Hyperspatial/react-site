import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCloud,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 text-black py-12 px-6">
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
          <div className="grid grid-cols-2 gap-6">
            <FontAwesomeIcon icon={faGithub} className="text-black text-5xl" />
            <FontAwesomeIcon icon={faDocker} className="text-black text-5xl" />
            <FontAwesomeIcon icon={faPython} className="text-black text-5xl" />
            <FontAwesomeIcon
              icon={faCloud}
              className="text-black text-5xl"
            />{" "}
            {/* AWS Placeholder */}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* API and Database Design */}
        <div className="bg-gradient-to-b from-gray-100 to-white shadow-lg p-6 rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
          <FontAwesomeIcon icon={faCode} className="text-4xl text-black mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            API & Database Design
          </h3>
          <p className="text-gray-600 text-left leading-relaxed">
            We build robust and scalable APIs, combined with well-structured
            database architectures to power high-performance applications.
          </p>
          <ul className="mt-4 text-gray-500 text-left list-disc list-inside space-y-1">
            <li>REST & GraphQL APIs</li>
            <li>Relational & NoSQL Databases</li>
            <li>Microservices Architecture</li>
          </ul>
        </div>

        {/* Geospatial Analytics */}
        <div className="bg-gradient-to-b from-gray-100 to-white shadow-lg p-6 rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className="text-4xl text-black mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Geospatial Analytics
          </h3>
          <p className="text-gray-600 text-left leading-relaxed">
            Harness the power of location-based data with our advanced
            geospatial analytics and visualization solutions.
          </p>
          <ul className="mt-4 text-gray-500 text-left list-disc list-inside space-y-1">
            <li>STAC (SpatioTemporal Asset Catalog)</li>
            <li>Geospatial Data Pipelines</li>
            <li>Custom Mapping Solutions</li>
          </ul>
        </div>

        {/* Cloud Solutions */}
        <div className="bg-gradient-to-b from-gray-100 to-white shadow-lg p-6 rounded-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
          <FontAwesomeIcon
            icon={faCloud}
            className="text-4xl text-black-500 mb-4"
          />
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Cloud Solutions
          </h3>
          <p className="text-gray-600 text-left leading-relaxed">
            Scale effortlessly with our expertise in deploying cloud-based
            solutions for data-heavy applications.
          </p>
          <ul className="mt-4 text-gray-500 text-left list-disc list-inside space-y-1">
            <li>AWS & Azure Cloud Services</li>
            <li>Serverless Architecture</li>
            <li>High Availability Systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

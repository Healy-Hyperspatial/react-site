import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCloud,
  faMapMarkedAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const ServiceCards = () => {
  const [openSection, setOpenSection] = useState(null);

  const services = [
    {
      id: "api",
      title: "API & Database Design",
      icon: faCode,
      description:
        "We build robust and scalable APIs, combined with well-structured database architectures.",
      list: [
        "REST & GraphQL APIs",
        "Relational & NoSQL Databases",
        "Microservices Architecture",
      ],
    },
    {
      id: "geo",
      title: "Geospatial Analytics",
      icon: faMapMarkedAlt,
      description:
        "Harness the power of location-based data with our advanced geospatial solutions.",
      list: [
        "STAC Catalog",
        "Geospatial Data Pipelines",
        "Custom Mapping Solutions",
      ],
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      icon: faCloud,
      description:
        "Scale effortlessly with our expertise in cloud-based solutions for data-heavy applications.",
      list: [
        "AWS & Azure",
        "Serverless Architecture",
        "High Availability Systems",
      ],
    },
    {
      id: "blockchain",
      title: "Blockchain Services",
      icon: faLock,
      description:
        "Leverage the power of decentralized systems with our blockchain services.",
      list: [
        "Smart Contracts",
        "Blockchain Architecture",
        "Cryptographic Security",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-6">
      {services.map((service) => (
        <div key={service.id} className="mb-4 border-b border-gray-300">
          <button
            onClick={() =>
              setOpenSection(openSection === service.id ? null : service.id)
            }
            className="w-full flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-200 transition duration-300"
          >
            <span className="flex items-center space-x-2 sm:text-lg font-semibold">
              {/* <FontAwesomeIcon icon={service.icon} className="text-gray-600" /> */}
              <span className="font-comfortaa">{service.title}</span>
            </span>
            <span>{openSection === service.id ? "−" : "+"}</span>
          </button>
          {openSection === service.id && (
            <div className="bg-white p-4 text-gray-700">
              <p className="mb-4">{service.description}</p>
              <ul className="list-disc list-inside">
                {service.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;

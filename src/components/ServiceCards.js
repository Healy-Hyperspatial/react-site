import React, { useState } from "react";
import {
  faCode,
  faCloud,
  faMapMarkedAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCards = () => {
  const [openSection, setOpenSection] = useState(null);

  const services = [
    {
      id: "api",
      title: "API & Database",
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
    <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Service Cards */}
      {services.map((service) => (
        <div
          key={service.id}
          className="rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
        >
          <button
            onClick={() =>
              setOpenSection(openSection === service.id ? null : service.id)
            }
            className="w-full flex items-center justify-between p-6 bg-gray-100 rounded-t-xl hover:bg-gray-200 transition duration-300"
          >
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={service.icon} className="text-xl text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
            <span className="text-gray-500">{openSection === service.id ? "−" : "+"}</span>
          </button>
          {openSection === service.id && (
            <div className="p-6">
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
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

import React, { useState } from "react";
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
    <div className="container mx-auto py-6 flex flex-col md:flex-row gap-6">
      {/* Service Cards */}
      <div className="flex-1">
        {services.map((service) => (
          <div key={service.id} className="mb-4 border-b border-gray-300">
            <button
              onClick={() =>
                setOpenSection(openSection === service.id ? null : service.id)
              }
              className="w-full flex justify-between items-center py-4 px-6 bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <span className="flex items-center space-x-2 sm:text-xl font-semibold">
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

      {/* Open Source Values */}
      <div className="bg-white p-6 rounded-xl shadow-md flex-1">
        <h3 className="sm:text-2xl font-bold text-gray-800 mb-4 text-left">
          Open Source Values
        </h3>
        <p className="text-gray-600 sm:text-lg leading-relaxed text-left">
          At Healy Hyperspatial, we are deeply committed to the principles of
          open source. Our work is built on collaboration, transparency, and
          community-driven innovation.
        </p>
        <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-inner">
          <h4 className="sm:text-xl font-comfortaa font-semibold text-gray-800 mb-2 text-left">
            SFEOS: STAC Ecosystem Contributions
          </h4>
          <p className="text-gray-700 sm:text-lg leading-relaxed text-left">
            One of our key contributions is{" "}
            <a
              href="https://github.com/stac-utils/stac-fastapi-elasticsearch-opensearch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              stac-fastapi-elasticsearch-opensearch
            </a>
            , an open-source project providing Elasticsearch and OpenSearch
            backends for STAC APIs. This project supports advanced aggregation
            and search capabilities, enabling efficient geospatial data
            exploration and management. We also provide ready-to-use Docker
            images to simplify deployment for developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;

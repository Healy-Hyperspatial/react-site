import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCloud,
  faMapMarkedAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const ServiceCards = () => {
  const [activeTab, setActiveTab] = useState("api");

  const tabs = [
    {
      id: "api",
      title: "API & Database Design",
      icon: faCode,
      description:
        "We build robust and scalable APIs, combined with well-structured database architectures to power high-performance applications.",
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
        "Harness the power of location-based data with our advanced geospatial analytics and visualization solutions.",
      list: [
        "STAC (SpatioTemporal Asset Catalog)",
        "Geospatial Data Pipelines",
        "Custom Mapping Solutions",
      ],
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      icon: faCloud,
      description:
        "Scale effortlessly with our expertise in deploying cloud-based solutions for data-heavy applications.",
      list: [
        "AWS & Azure Cloud Services",
        "Serverless Architecture",
        "High Availability Systems",
      ],
    },
    {
      id: "blockchain",
      title: "Blockchain Services",
      icon: faLock,
      description:
        "Leverage the power of decentralized systems with our blockchain services, enabling secure and transparent data management.",
      list: [
        "Smart Contract Development",
        "Blockchain Architecture Design",
        "Cryptographic Security Solutions",
      ],
    },
  ];

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6">
      {/* Tabs and Cards Column */}
      <div className="bg-white py-6 px-4 rounded-xl shadow-md flex-1">
        {/* Tab Buttons */}
        <div className="flex space-x-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 text-sm sm:text-base font-medium rounded-t-xl w-full ${
                activeTab === tab.id
                  ? "bg-gray-800 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-gray-100 shadow-lg p-4 rounded-b-xl">
          {tabs
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <div key={tab.id}>
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={tab.icon}
                    className="text-black text-4xl mr-3"
                  />
                  <h3 className="text-lg font-bold text-black">{tab.title}</h3>
                </div>
                <p className="text-gray-900 text-left leading-relaxed">
                  {tab.description}
                </p>
                <ul className="mt-4 text-gray-800 text-left list-disc list-inside space-y-1">
                  {tab.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      {/* Additional Column */}
      <div className="bg-white p-6 rounded-xl shadow-md flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
          Open Source Values
        </h3>
        <p className="text-gray-600 leading-relaxed text-left">
          At Healy Hyperspatial, we are deeply committed to the principles of
          open source. Our work is built on collaboration, transparency, and
          community-driven innovation.
        </p>
        <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-inner">
          <h4 className="text-lg font-semibold text-gray-800 mb-2 text-left">
            SFEOS: STAC Ecosystem Contributions
          </h4>
          <p className="text-gray-700 leading-relaxed text-left">
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

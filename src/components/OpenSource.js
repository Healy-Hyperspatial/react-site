import React from "react";

const OpenSource = () => {
  const projects = [
    {
      name: "stac-fastapi-elasticsearch-opensearch",
      description:
        "Provides Elasticsearch and OpenSearch backends for STAC APIs, supporting advanced aggregation and search capabilities.",
      link: "https://github.com/stac-utils/stac-fastapi-elasticsearch-opensearch",
    },
    {
      name: "stac-validator",
      description:
        "A CLI tool to validate STAC (SpatioTemporal Asset Catalog) metadata and ensure compliance with the specification.",
      link: "https://github.com/stac-utils/stac-validator",
    },
    {
      name: "stac-check",
      description:
        "A project for performing quality checks on STAC catalogs and collections.",
      link: "https://github.com/stac-utils/stac-check",
    },
    {
      name: "stacchain",
      description:
        "An innovative project integrating blockchain technology into the STAC ecosystem for enhanced traceability and verification.",
      link: "https://github.com/stacchain",
    },
  ];

  return (
    <section id="open-source" className="py-12 px-6 bg-gray-100">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-8 text-left">
          <h2 className="text-xl sm:text-4xl font-bold text-gray-800">
            Open Source
          </h2>
          <p className="text-gray-600 sm:text-xl mt-4">
            At Healy Hyperspatial, open source is at the heart of our values.
            Through collaboration and transparency, we aim to empower the
            community with cutting-edge tools and solutions.
          </p>
        </div>

        {/* Open Source Highlight */}
        <div className="rounded-2xl bg-white shadow-lg p-8">
          <h3 className="sm:text-2xl font-bold text-gray-800 mb-4">
            Our Featured Projects
          </h3>
          <ul className="space-y-6">
            {projects.map((project, index) => (
              <li
                key={index}
                className="bg-gray-50 p-6 rounded-3xl shadow-inner hover:shadow-xl transition-shadow"
              >
                <h4 className="sm:text-xl font-semibold text-gray-800 mb-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 font-oxanium hover:underline"
                  >
                    {project.name}
                  </a>
                </h4>
                <p className="text-gray-700 sm:text-lg">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

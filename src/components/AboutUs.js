import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faGlobe } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <section id="about" className="bg-white text-black py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-3xl font-bold mb-6 text-left">
            About Us
          </h2>
          <p className="text-md sm:text-lg leading-relaxed mb-6 text-left">
            Healy Hyperspatial was created to deliver highly effective,
            next-generation services to forward-thinking organizations. We
            specialize in API and database design, geospatial innovation, and
            the deployment of high-performance, cloud-based applications. As
            proponents of open-source, we are committed to contributing to the
            development of the STAC (SpatioTemporal Asset Catalog) ecosystem.
          </p>
          <p className="text-md sm:text-lg leading-relaxed mb-6 text-left">
            Our mission extends beyond providing services; we aim to foster a
            community where innovation thrives, sharing knowledge and tools that
            empower developers and organizations to reach their full potential.
            By blending advanced geospatial analytics with robust technical
            solutions, we transform complex data into actionable insights,
            driving sustainable growth and competitive advantage for our
            clients.
          </p>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          {/* Open Source Projects */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <FontAwesomeIcon
                icon={faCodeBranch}
                className="text-black hover:text-black transition duration-300"
                size="2x"
              />
              <h3 className="text-md sm:text-xl font-semibold text-left">
                Open Source Projects
              </h3>
            </div>
            <ul className="space-y-4 text-left">
              <li>
                <a
                  href="https://github.com/stac-utils/stac-fastapi-elasticsearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition duration-300"
                >
                  stac-fastapi-elasticsearch-opensearch
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/stac-utils/stac-validator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition duration-300"
                >
                  stac-validator
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/stac-utils/stac-check"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition duration-300"
                >
                  stac-check
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/stacchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition duration-300"
                >
                  stacchain
                </a>
              </li>
            </ul>
          </div>

          {/* Website Design Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-black hover:text-black transition duration-300"
                size="2x"
              />
              <h3 className="text-md sm:text-xl font-semibold text-left">
                Website Design
              </h3>
            </div>
            <ul className="space-y-4 text-left">
              <li>
                <a
                  href="https://jonhealy1.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition duration-300"
                >
                  jonhealy1.github.io
                </a>
              </li>
              <li>
                <a
                  href="https://stacchain.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition duration-300"
                >
                  stacchain.github.io
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

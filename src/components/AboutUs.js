import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white text-black py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-left">About Us</h2>
          <p className="text-lg leading-relaxed mb-6 text-left">
            Healy Hyperspatial was created to deliver highly effective,
            next-generation services to forward-thinking organizations. We
            specialize in API and database design, geospatial innovation, and
            the deployment of high-performance, cloud-based applications. As
            proponents of open-source, we are committed to contributing to the
            development of the STAC (SpatioTemporal Asset Catalog) ecosystem.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-left">
            Our mission extends beyond providing services; we aim to foster a
            community where innovation thrives, sharing knowledge and tools that
            empower developers and organizations to reach their full potential.
            By blending advanced geospatial analytics with robust technical
            solutions, we transform complex data into actionable insights,
            driving sustainable growth and competitive advantage for our
            clients.
          </p>
          <a
            href="https://github.com/Healy-Hyperspatial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 text-lg font-medium text-white bg-black rounded-lg shadow hover:bg-gray-800 transition duration-300"
          >
            Visit Our GitHub
          </a>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4 text-left">
            Our Open Source Projects
          </h3>
          <ul className="space-y-4 text-left">
            <li>
              <a
                href="https://github.com/stac-utils/stac-fastapi-elasticsearch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition duration-300"
              >
                STAC-FastAPI-Elasticsearch-OpenSearch
              </a>
            </li>
            <li>
              <a
                href="https://github.com/stac-utils/stac-validator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition duration-300"
              >
                STAC Validator
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Healy-Hyperspatial/stacchain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition duration-300"
              >
                STACChain
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

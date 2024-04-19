import React from 'react';

const PoliciesPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-md max-w-[1128px] mx-auto">
      <h2 className="text-2xl font-bold text-deep-blue mb-4">Policies</h2>

      {/* Table of Contents */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Table of Contents</h3>
        <ul className="list-disc pl-6">
          <li>
            <a href="#definitions" className="text-deep-blue hover:underline">
              Definitions
            </a>
          </li>
          <li>
            <a href="#acceptable-use" className="text-deep-blue hover:underline">
              Acceptable Use
            </a>
          </li>
          <li>
            <a href="#user-data-collection" className="text-deep-blue hover:underline">
              User Data Collection
            </a>
          </li>
          {/* Add more sections as needed */}
        </ul>
      </div>

      {/* Sections */}
      <section id="definitions" className="mb-8">
        <h3 className="text-xl font-bold text-deep-blue mb-4">Definitions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin fermentum felis non quam
          fringilla, vitae scelerisque lectus egestas.
        </p>
      </section>

      <section id="acceptable-use" className="mb-8">
        <h3 className="text-xl font-bold text-deep-blue mb-4">Acceptable Use</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin fermentum felis non quam
          fringilla, vitae scelerisque lectus egestas.
        </p>
      </section>

      <section id="user-data-collection" className="mb-8">
        <h3 className="text-xl font-bold text-deep-blue mb-4">User Data Collection</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin fermentum felis non quam
          fringilla, vitae scelerisque lectus egestas.
        </p>
      </section>

      {/* Add more sections as needed */}

      {/* Search Bar */}
      <div className="mb-6">
        <label htmlFor="search" className="text-deep-blue font-bold">
          Search Policies:
        </label>
        <input
          type="text"
          id="search"
          placeholder="Type keywords to search..."
          className="border p-2 rounded-md"
        />
      </div>

      {/* Downloadable PDFs */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Downloadable PDFs</h3>
        <p>
          <a href="/path/to/policies.pdf" download className="text-deep-blue hover:underline">
            Download Policies PDF
          </a>
        </p>
      </div>

      {/* Glossary */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Glossary</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin fermentum felis non quam
          fringilla, vitae scelerisque lectus egestas.
        </p>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-bold text-deep-blue mb-2">Contact Information</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
    </div>
  );
};

export default PoliciesPage;

import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const ExportProfileSection = ({ exporterData, changeRoute, isProfileOwner, isExpanded, setIsExpanded }) => {
  const {
    companyName,
    logo,
    country,
    state,
    contact,
    productCategories,
    certifications,
    reviews,
    description,
    socialLinks,
    downloadableCatalog,

  } =  exporterData;
  
  return (
    <>
      <div className={"flex flex-col md:flex-row items-center " + (isProfileOwner? "mb-0": "mb-7")}> 
        <img src={logo.path} alt={`${companyName} Logo`} className="w-12 h-12 md:mr-4 rounded-full" /> 
        <div className="text-center md:text-left">
          <h2 className="text-base font-medium text-deep-blue mb-2 flex items-center">
            {companyName}
              <div className="w-[70px] text-xs rounded-full bg-blue-100 text-blue-600 px-3 py-1 font-medium ml-2">
                    Verified
              </div>
          </h2> 
          <p className="text-sm text-gray-600">
            {state}, {country}
          </p>
        </div>
      </div>

      {isProfileOwner && 
      <div className='relative mb-3 flex justify-end'>
        <button 
          onClick={() => changeRoute('?=settings')} 
          className="rounded-full ml-auto text-xs font-semibold bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700 px-2 py-2"
        >
          <FaPencilAlt className="inline-block -mt-0.5 mr-1" size={14} />
        </button> 
      </div>}



      <div className="mb-7">
          <div className="flex space-x-4 ml-auto"> 
          <a 
            href={`mailto:${contact?.email}`}
            className="border border-gray-400 text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md text-xs font-medium"
          >
            Contact Exporter
          </a> 
          <a 
            href="#quote" 
            className="border border-gray-400 text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md text-xs font-medium"
          >
            Request Quote
          </a>
          <a 
            href={contact?.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-gray-400 text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md text-xs font-medium"
          >
            Visit Website
          </a>
        </div>
      </div>
      <div className="mb-7"> 
        <h3 className="text-sm font-semibold text-deep-blue mb-2">Company Information</h3> 
        <p className={`text-xs text-gray-700 ${isExpanded ? '' : 'line-clamp-3'}`} style={{lineHeight: '1.6em', fontSize: '14px', color: '#5f6368'}}> 
          {description}
        </p> 
        <button
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-blue-500 hover:underline"
        >
            {isExpanded ? 'See Less' : 'See More'}
        </button>
      </div>

      {/* Contact Information */}
      <div className="mb-7"> 
        <h3 className="text-sm font-semibold text-deep-blue mb-2">Contact Information</h3> 
        <div style={{ fontSize: '14px', color: '#5f6368' }}>
          <p>Email: {contact?.email}</p> 
          <p>Phone: {contact?.phone}</p> 
          <p>Website: {contact?.website}</p> 
        </div>
      </div>

      {/* Tab Panels */}
      <div className="mb-5">
        {/* Social Media Links */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-deep-blue mb-1">Social Media Links</h3>
          <ul className="flex space-x-1">
            {socialLinks?.map((link, index) => (
              <li key={index}>
                <a
                 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linkedin-blue hover:underline mr-1"
                >
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product Offerings */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-deep-blue mb-2">Product Offerings</h3>
        <div className="flex">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-md mr-2">
              {/* <img src={category.image} alt={category.name} className="w-full h-16 object-cover mb-1 rounded-md" /> */}
              <h4 className="font-semibold mb-1">{category.label}</h4>
              {/* <p className="text-xs text-gray-600">{category.description}</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-deep-blue mb-1">Certifications</h3>
        <ul className="list-disc pl-4">
          {certifications.map((certification, index) => (
            <li key={index} className="py-2 border-b border-gray-200"> {/* Item Styling */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={certification.path} 
                  className="text-blue-600 hover:underline"
                  download
                >
                  {certification.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Downloadable Brochures or Catalogs */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-deep-blue mb-1">Downloadable Brochures or Catalogs</h3>
        <a
          href={downloadableCatalog}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-linkedin-blue hover:underline"
          download
        >
          Download Catalog
        </a>
      </div>

      {/* Tab Panels */}
    </>
  );
};

export default ExportProfileSection;

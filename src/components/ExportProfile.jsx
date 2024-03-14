// ExporterProfile.jsx
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ExporterProfile = ({ exporterInfo }) => {
  const demoExporter = {
    companyName: 'ExportCo 1',
    logo: 'https://via.placeholder.com/150', // Replace with actual logo URL
    location: 'City, Country',
    contact: {
      email: 'info@exportco.com',
      phone: '+123 456 7890',
      website: 'www.exportco.com',
    },
    productCategories: [
      { id: 1, name: 'Textiles', image: 'https://via.placeholder.com/300', description: 'High-quality textile product with unique design.' },
      { id: 2, name: 'Handicrafts', image: 'https://via.placeholder.com/300', description: 'Artisanal handicraft with intricate details.' },
      // Add more product categories as needed
    ],
    certifications: ['ISO 9001', 'Fair Trade'],
    reviews: [
      { id: 1, user: 'Customer A', rating: 4, comment: 'Great products and excellent service!' },
      { id: 2, user: 'Customer B', rating: 5, comment: 'Reliable exporter, would recommend.' },
    ],
    companyStory: 'ExportCo has been serving customers worldwide with high-quality products since its inception...',
    newsAndUpdates: [
      { id: 1, title: 'New Product Launch', date: '2022-05-15', content: 'Exciting announcement about our latest product.' },
      { id: 2, title: 'Expansion Plans', date: '2022-04-10', content: 'We are expanding our operations to reach new markets.' },
    ],
    mapLocation: { latitude: 37.7749, longitude: -122.4194 }, // Example coordinates for San Francisco
    socialMediaLinks: {
      facebook: 'https://www.facebook.com/exportco',
      twitter: 'https://twitter.com/exportco',
      linkedin: 'https://www.linkedin.com/company/exportco',
    },
    downloadableCatalog: 'https://www.exportco.com/downloads/catalog.pdf',
  };

  const {
    companyName,
    logo,
    location,
    contact,
    productCategories,
    certifications,
    reviews,
    companyStory,
    newsAndUpdates,
    mapLocation,
    socialMediaLinks,
    downloadableCatalog,
  } = exporterInfo || demoExporter;

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      {/* Primary Information */}
      <div className="flex flex-col md:flex-row items-center mb-6">
        <img src={logo} alt={`${companyName} Logo`} className="w-16 h-16 md:mr-4 md:mb-0 mb-4 rounded-full" />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-deep-blue">{companyName}</h2>
          <p className="text-gray-700">{location}</p>
        </div>
      </div>

      <Tabs>
        <TabList className="flex mb-4">
          <Tab className="bg-gray-200 py-2 px-4 rounded-md cursor-pointer">Contact</Tab>
          <Tab className="bg-gray-200 py-2 px-4 rounded-md cursor-pointer">Products</Tab>
          <Tab className="bg-gray-200 py-2 px-4 rounded-md cursor-pointer">Certifications</Tab>
          <Tab className="bg-gray-200 py-2 px-4 rounded-md cursor-pointer">Reviews</Tab>
          <Tab className="bg-gray-200 py-2 px-4 rounded-md cursor-pointer">Company Info</Tab>
          <Tab className="bg-gray-200 py-2 px-4 rounded-md cursor-pointer">News and Updates</Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanel>
            {/* Contact Information */}
            <div>
                <h3 className="text-lg font-bold text-deep-blue mb-2">Contact Information</h3>
                <p className="text-gray-700">Email: {contact.email}</p>
                <p className="text-gray-700">Phone: {contact.phone}</p>
                <p className="text-gray-700">Website: {contact.website}</p>
            </div>

                {/* Social Media Links */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-deep-blue mb-2">Social Media Links</h3>
                <ul className="flex space-x-2">
                {Object.entries(socialMediaLinks).map(([platform, link]) => (
                    <li key={platform}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-deep-blue hover:underline">{platform}</a>
                    </li>
                ))}
                </ul>
            </div>

                  {/* Interactive Map */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-deep-blue mb-2">Location Map</h3>
                {/* Add an interactive map component (e.g., Google Maps integration) */}
                {/* You may use a library like react-leaflet or google-maps-react */}
            </div>

        </TabPanel>

        <TabPanel>
          {/* Product Offerings */}
          <div>
            <h3 className="text-lg font-bold text-deep-blue mb-2">Product Offerings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productCategories.map((category) => (
                <div key={category.id} className="bg-gray-100 p-4 rounded-md">
                  <img src={category.image} alt={category.name} className="w-full h-32 object-cover mb-2 rounded-md" />
                  <h4 className="text-md font-bold mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-700">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-deep-blue mb-2">Certifications</h3>
            <ul className="list-disc pl-6">
              {certifications.map((certification) => (
                <li key={certification} className="text-gray-700">{certification}</li>
              ))}
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          {/* Customer Reviews */}
          <div>
            <h3 className="text-lg font-bold text-deep-blue mb-2">Customer Reviews</h3>
            {reviews.map((review) => (
              <div key={review.id} className="mb-2">
                <p className="font-bold text-gray-700">{review.user}</p>
                <p className="text-gray-700">Rating: {review.rating}/5</p>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
            {/* Company Information */}
            <div>
                <h3 className="text-lg font-bold text-deep-blue mb-2">Company Information</h3>
                <p className="text-gray-700">{companyStory}</p>
            </div>
                {/* Downloadable Brochures or Catalogs */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-deep-blue mb-2">Downloadable Brochures or Catalogs</h3>
                <a href={downloadableCatalog} target="_blank" rel="noopener noreferrer" className="text-deep-blue hover:underline">Download Catalog</a>
            </div>
        </TabPanel>


        {/* Tab Panels */}
        <TabPanel>
            {/* News and Updates */}
          <div>
            <h3 className="text-lg font-bold text-deep-blue mb-2">News and Updates</h3>
            {newsAndUpdates.map((update) => (
              <div key={update.id} className="mb-2">
                <h4 className="text-md font-bold text-deep-blue mb-1">{update.title}</h4>
                <p className="text-gray-700">{update.date} - {update.content}</p>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
      


      {/* Call to Action Buttons */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-deep-blue text-white py-2 px-4 rounded-md">Contact Exporter</button>
        <button className="bg-deep-blue text-white py-2 px-4 rounded-md">Request Quote</button>
        <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer" className="bg-deep-blue text-white py-2 px-4 rounded-md">Visit Website</a>
      </div>
    </div>

  );
};

export default ExporterProfile;

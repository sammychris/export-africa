'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import ExporterHeader from './ExporterHeader';
// import ExporterLeftSidebar from './ExporterLeftSidebar'; 
// import ExporterProducts from './ExporterProducts';
// import ExporterRightSidebar from './ExporterRightSidebar'; 
const demoExporter = {
    companyName: "African Wonders Exports",
    description: `By BIEITC-INDIA Barai International Export-Import Trading Company-India welcoming and happy to invite all of you respected Importer, Buyer, Distributor, Trader, Manufacturer and Sales Person from all over World to join with us and grow their business internationally. We are ready to supply all kinds of products and machinery from India like Medicine, Medical Equipment, cosmetic,human hair,Lab Equipment, Chemicals, Commodities, Readymade Garments, Clothes, Household Items, Iron ore, Aluminum Accessory, Building Materials, Office accessory, A4 paper, Tiles, Marbles, Granite, Automobile Parts, Indian Marsala, Frozen Chicken &fish, Machinery, Plant Equipment, and many more as per your requirements for help and support your business going next level.`,
    productCategories: [
      { value: "textiles", label: "Textiles & Fabrics" },
      { value: "natural_products", label: "Natural Products (Shea Butter, Oils)" },
      { value: "handicrafts", label: "Handicrafts" }
    ],
    logo: {
      name: "logo.png",
      type: "image/png",
      size: 25600, // Placeholder,
      path: "/placeholder-images/african-wonders-logo.png" // Or a placeholder image URL
    },
    brochuresCatalogsUrl: "https://africanwonders.com/brochure.pdf", // Or a placeholder download link
    location: "Accra, Ghana",
    contact: {
      email: "sales@africanwonders.com",
      phone: "+233 201 234 567",
      website: "https://africanwonders.com"
    },
    verified: true,
    products: [
      {
          name: "Organic Dried Mango",
          image: "", // Replace with a placeholder image URL
          shortDescription: "Sweet, chewy, and naturally sun-dried",
          price: 12.99,
          category: "Dried Fruits & Nuts",
          stockCount: 50,
          rating: 4.2, 
          numReviews: 23 
      },
      {
          name: "Artisan Roasted Coffee Beans",
          image: "", // Replace with a placeholder image URL
          shortDescription: "Medium roast, rich and flavorful",
          price: 16.50,
          category: "Coffee & Tea",
          stockCount: 28,
          rating: 4.6, 
          numReviews: 12  
      },
      {
          name: "Fair Trade Shea Butter",
          image: "", // Replace with a placeholder image URL 
          shortDescription: "Pure, moisturizing, ethically sourced",
          price: 8.99,
          category: "Skincare",
          stockCount: 75,
          rating: 4.8, 
          numReviews: 8 
      },
      // Add more product data as needed...
  ]
  , // We can leave this empty for the demo
    // certifications: [
    //   { 
    //     name: "Fair Trade Certified", 
    //     type: "image/jpeg",
    //     size: 51200, // Placeholder
    //     path: "/placeholder-images/fair-trade-cert.jpg"
    //   }
    // ],
    // companyDocuments: { }, // Left empty for demo
    idDocument: { }, // Left empty for demo
    addressProof: { }, // Left empty for demo
    // reviews: [], // We can leave this empty for the demo

    certifications: [
        { 
          name: "Fair Trade Certified", 
          type: "image/jpeg",
          size: 51200, // Placeholder
          path: "/placeholder-images/fair-trade-cert.jpg"
        },
        {
          name: "Organic Certification",
          type: "image/png",
          size: 38600, // Placeholder
          path: "/placeholder-images/organic-cert.png"
        }
        // ...add more certifications
      ],
    
      companyDocuments: [
        {
          name: "Business Registration",
          type: "application/pdf",
          size: 204800, // Placeholder
          path: "/placeholder-files/business-reg.pdf" 
        },
        { 
          name: "Export License",
          type: "application/pdf",
          size: 158000, // Placeholder
          path:  "/placeholder-files/export-license.pdf" 
        }
        // ...add more documents
      ],
    
      reviews: [
        { 
          customerName: "Acme Trading Co.", 
          rating: 4.5, 
          reviewText: "Excellent products and customer service!" 
        },
        { 
          customerName: "Global Imports LLC",
          rating: 4.8,
          reviewText: "High-quality goods and reliable communication."
        } 
        // ...add more reviews
      ],
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/africanwonders" },
      { platform: "instagram", url: "https://www.instagram.com/africanwonders" }
    ]
  };

  
  


const ExporterLayout = ({ children} ) => {
    const exporterData = demoExporter;
  return (
    <div className="container mx-auto pt-8">
      <ExporterHeader exporterData={exporterData} />
      <div className="flex gap-8 mt-6">
        <ExporterLeftSidebar  exporterData={exporterData}/> {/* Implement or remove as needed */}

            <div className="flex-grow">
                <ExporterProducts products={exporterData.products} /> {/* Passing the products data */}
                <ExporterCertifications certifications={exporterData.certifications} />
                <ExporterDocuments documents={exporterData.companyDocuments} />
                <ExporterReviews reviews={exporterData.reviews} />

            </div> 
      </div>
    </div>
  );
};

export default ExporterLayout;



const ExporterHeader = ({ exporterData }) => {
  const { companyName, description, logo } = exporterData;

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center gap-4">
      {/* Company Logo */}
      <div className="w-16 h-16 relative"> {/* Adjust dimensions as needed */}
        <Image
          src={logo.path}
          alt={companyName} 
          layout="fill" 
          objectFit="contain" 
        />
      </div>

      {/* Company Details */}
      <div>
        <h1 className="text-xl font-semibold">{companyName}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
    </header>
  );
};



const ExporterLeftSidebar = ({ exporterData }) => {
  const { productCategories } = exporterData;
  const { location, contact, brochuresCatalogsUrl, socialLinks } = exporterData;

  return (
    <aside className="w-64 border-r border-gray-200 p-4"> {/* Adjust width as needed */}

      <h2 className="text-lg font-medium mb-4">Contact Us</h2>
      {/* Contact Details */}
      <div className="mb-6">
        {contact.email && ( 
          <p className="mb-1">
            <span className="font-medium">Email:</span> 
            <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
              {contact.email}
            </a> 
        </p>
        )}
        {contact.phone && <p className="mb-1"><span className="font-medium">Phone:</span> {contact.phone}</p>} 
        {location && <p><span className="font-medium">Location:</span> {location}</p>} 
      </div>

 {/* Brochure Download */}
 <div className="mb-6">
  <Link href={brochuresCatalogsUrl} passHref>
    <div className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md inline-block">
      Download Brochure
    </div>
  </Link>
</div>

{/* Social Links */}
<div className="mb-6">
  <h3 className="text-base font-medium mb-2">Follow Us</h3>
  <ul>
    {socialLinks.map((link) => (
      <li key={link.platform}>
        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> 
          {link.platform} 
        </a>
      </li>
    ))}
  </ul>
</div>





<h2 className="text-lg font-medium mb-4">Product Categories</h2>
      <ul>
        {productCategories.map((category) => (
          <li key={category.value} className="mb-2">
            <div href="#" className="hover:text-blue-600">{/* Replace "#" with actual links */}
              {category.label}
            </div>
          </li>
        ))}
      </ul>
    </aside>

    
  );
};





const ExporterRightSidebar = ({ exporterData }) => {
  const { location, contact, brochuresCatalogsUrl, socialLinks } = exporterData;

  return (
    <aside className="w-80 border-l border-gray-200 p-4"> {/* Adjust width as needed */}
      <h2 className="text-lg font-medium mb-4">Contact Us</h2>

      {/* Contact Details */}
      <div className="mb-6">
        {contact.email && ( 
          <p className="mb-1">
            <span className="font-medium">Email:</span> 
            <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
              {contact.email}
            </a> 
         </p>
        )}
        {contact.phone && <p className="mb-1"><span className="font-medium">Phone:</span> {contact.phone}</p>} 
        {location && <p><span className="font-medium">Location:</span> {location}</p>} 
      </div>

       {/* Brochure Download */}
       <div className="mb-6">
        <Link href={brochuresCatalogsUrl} passHref>
          <div className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md inline-block">
            Download Brochure
          </div>
        </Link>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-base font-medium mb-2">Follow Us</h3>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.platform}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> 
                {link.platform} 
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};



const ExporterProducts = ({ products }) => {
  return (
    <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.name} className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
          {/* Product Image */}
          <div className="relative h-48 mb-4 overflow-hidden rounded-md"> 
            <Image
              src={product.image}
              alt={product.name}
              layout="fill" 
              objectFit="cover" 
            />
          </div>

          {/* Product Details */}
          <h3 className="text-lg font-medium mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-3">{product.shortDescription}</p> 

          {/* Price and Other Info - Customize this section */}
          <div className="font-medium">
            <span className="text-xl">${product.price}</span> 
            {/* Add more info like ratings, stock, etc. if needed */}
          </div>
        </div>
      ))}
    </section>
  );
};


const ExporterCertifications = ({ certifications }) => {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-medium mb-4">Certifications</h2>
      <div className="grid grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div key={cert.name} className="relative h-32 overflow-hidden rounded-md">
            <Image
              src={cert.path}
              alt={cert.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};



const ExporterDocuments = ({ documents }) => {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-medium mb-4">Company Documents</h2>
      <ul className="list-disc list-inside"> {/* Or use a table structure if preferred */}
        {documents.map((doc) => (
          <li key={doc.name}>
            <Link href={doc.path} passHref>
              <div className="text-blue-600 hover:underline">
                {doc.name} ({doc.type})
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};


const ExporterReviews = ({ reviews }) => {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-medium mb-4">Customer Reviews</h2>
      <div>
        {reviews.map((review) => (
          <div key={review.customerName} className="border border-gray-200 rounded-md p-4 mb-4">
            <p className="font-medium">{review.customerName}</p>
            {/* Add a star rating display here if you have that data */}
            <p className="italic">"{review.reviewText}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};


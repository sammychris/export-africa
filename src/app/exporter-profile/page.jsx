// components/ExporterProfile.js
import Image from 'next/image';
import Link from 'next/link'; 

export default function ExporterProfile({ }) {

  const exporter = demoExporter;
  return (
    <div className="container mx-auto max-w-screen-md p-6">
      {/* Profile Header */}
      <div className="bg-white shadow-md rounded-md mb-6">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            {/* Consider relative layout and sizing for logo */}
            <div className="mr-4"> 
              {exporter.logo ? (
                <Image 
                  src={exporter.logo.path} 
                  alt={exporter.companyName}
                  width={80}
                  height={80}
                  className="rounded-full" 
                />
              ) : (
                // Placeholder image if no logo is uploaded
                <div className="w-20 h-20 bg-gray-300 rounded-full" /> 
              )}
            </div>
            <div>
              <h1 className="text-2xl font-medium">{exporter.companyName}</h1>
              <p className="text-gray-600">{exporter.location}</p>
            </div>
          </div>
          {exporter.verified && (
            <div className="rounded-full bg-blue-100 text-blue-600 text-sm px-3 py-1 font-medium">
              Verified
            </div>
          )}
        </div>
        {/* Description  */}
        <div className="px-6 py-4">{exporter.description}</div> 
      </div>

      {/* Key Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-medium mb-2">Products</h2>
          <ul className="list-disc list-inside">
            {exporter.productCategories.map((category) => (
              <li key={category.value}>{category.label}</li> 
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-medium mb-2">Contact & Links</h2>
          <ul className="space-y-2">
            {exporter.contact.email && (
              <li>
                <a href={`mailto:${exporter.contact.email}`} className="text-blue-600 hover:underline">
                  {exporter.contact.email}
                </a>
              </li>
            )}
            {/* Similar for phone, website, socials */}
          </ul>
        </div>
      </div>

      {/* Certifications, Documents, Reviews (Use Tabs? Separate Sections?) */}
      {/* ... Your implementation for these sections */} 
            <div className="bg-white shadow-md rounded-md mb-6">
        {/* Tab Navigation */}  
        <ul className="nav nav-tabs flex mb-3" id="sectionsTab" role="tablist"> 
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="certifications-tab" data-bs-toggle="tab" data-bs-target="#certifications" type="button" role="tab" aria-controls="certifications" aria-selected="true">Certifications</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="documents-tab" data-bs-toggle="tab" data-bs-target="#documents" type="button" role="tab" aria-controls="documents" aria-selected="false">Documents</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
            </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content" id="sectionsTabContent">
            <div className="tab-pane fade show active" id="certifications" role="tabpanel" aria-labelledby="certifications-tab">
                 {/* Certifications Implementation */}
            </div>
            <div className="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">
                 {/* Documents Implementation */}
            </div>
            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                 {/* Reviews Implementation */}
            </div>
        </div>
      </div>

<div className="bg-white shadow-md rounded-md p-4 mb-6">
        <h2 className="text-lg font-medium mb-2">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          {/* ... (Individual Product Card implementation) */}
                
          {
            exporter.products.map((product, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
          {/* Individual Product Card */} 
          <div className="border border-gray-200 rounded-md p-4">
            <img src={product.image} alt={product.name} className="w-full mb-3" />
            <h3 className="text-base font-medium">{product.name}</h3> 
            <p className="text-gray-500">{product.shortDescription}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded-md mt-2">
                View Details
            </button> 
          </div>
          {/* Repeat for more products */}
        </div>
            ))
          }

        </div>
      </div>


      
    </div> 
  );
}



const demoExporter = {
    companyName: "African Wonders Exports",
    description: `By BIEITC-INDIA Barai International Export-Import Trading Company-India welcoming and happy to invite all of you respected Importer, Buyer, Distributor, Trader, Manufacturer and Sales Person from all over World to join with us and grow their business internationally. We are ready to supply all kinds of products and machinery from India like Medicine, Medical Equipment, cosmetic,human hair,Lab Equipment, Chemicals, Commodities, Readymade Garments, Clothes, Household Items, Iron ore, Aluminum Accessory, Building Materials, Office accessory, A4 paper, Tiles, Marbles, Granite, Automobile Parts, Indian Marsala, Frozen Chicken &fish, Machinery, Plant Equipment, and many more as per your requirements for help and support your business going next level. `,
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
          image: "https://images.unsplash.com/photo-1567306226416-28f0efb729fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", // Replace with a placeholder image URL
          shortDescription: "Sweet, chewy, and naturally sun-dried",
          price: 12.99,
          category: "Dried Fruits & Nuts",
          stockCount: 50,
          rating: 4.2, 
          numReviews: 23 
      },
      {
          name: "Artisan Roasted Coffee Beans",
          image: "https://images.unsplash.com/photo-1459755486667-9898262cc9de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", // Replace with a placeholder image URL
          shortDescription: "Medium roast, rich and flavorful",
          price: 16.50,
          category: "Coffee & Tea",
          stockCount: 28,
          rating: 4.6, 
          numReviews: 12  
      },
      {
          name: "Fair Trade Shea Butter",
          image: "https://images.unsplash.com/photo-1588889570040-5e1e40a81feb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80", // Replace with a placeholder image URL 
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
    certifications: [
      { 
        name: "Fair Trade Certified", 
        type: "image/jpeg",
        size: 51200, // Placeholder
        path: "/placeholder-images/fair-trade-cert.jpg"
      }
    ],
    companyDocuments: { }, // Left empty for demo
    idDocument: { }, // Left empty for demo
    addressProof: { }, // Left empty for demo
    reviews: [], // We can leave this empty for the demo
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/africanwonders" },
      { platform: "instagram", url: "https://www.instagram.com/africanwonders" }
    ]
  };
  
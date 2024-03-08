const exporterInfo = {
    pageCategory: [
      { id: 1, name: 'Products' },
      { id: 2, name: 'Gallery & Project' },
      { id: 3, name: 'Reviews' },
    ],
   reviews:[
      { id: 1, user: 'Customer A', rating: 4, comment: 'Great products and excellent service!' },
      { id: 2, user: 'Customer B', rating: 5, comment: 'Reliable exporter, would recommend.' },
    ],
    productCategories: [
      { id: 1, name: 'Textiles', image: 'https://via.placeholder.com/300', description: 'High-quality textile product with unique design.' },
      { id: 2, name: 'Handicrafts', image: 'https://via.placeholder.com/300', description: 'Artisanal handicraft with intricate details.' },
      { id: 3, name: 'Good Services', image: 'https://via.placeholder.com/300', description: 'Artisanal handicraft with intricate details.' },
      { id: 4, name: 'Awesome Services', image: 'https://via.placeholder.com/300', description: 'Artisanal handicraft with intricate details.' },
      // Add more product categories as needed
    ],
     gallery: [
      { id: 1, name: 'Textiles', image: 'https://via.placeholder.com/300', description: 'High-quality textile product with unique design.' },
      { id: 2, name: 'Handicrafts', image: 'https://via.placeholder.com/300', description: 'Artisanal handicraft with intricate details.' },
      // Add more product categories as needed
    ]
  }
  
  
  
  const demoExporter = {
    companyName: 'ExportCo 1',
    logo: [
      {
        name: 'Facebook',
        path: 'https://via.placeholder.com/150'
      }
    ], // Replace with actual logo URL
    location: 'City, Country',
    contact: {
      email: 'info@exportco.com',
      phone: '+123 456 7890',
      website: 'www.exportco.com',
    },
    productCategories: [
      { id: 1, name: 'Textiles', label: 'Textiles', image: 'https://via.placeholder.com/300', description: 'High-quality textile product with unique design.' },
      { id: 2, name: 'Handicrafts', label: 'Handicrafts', image: 'https://via.placeholder.com/300', description: 'Artisanal handicraft with intricate details.' },
      // Add more product categories as needed
    ],
    certifications: [{
      name:'ISO 9001',
      path: 'https://via.placeholder.com/150'
    }, {
      name: 'Fair Trade',
      path: 'https://via.placeholder.com/150'
    }],
    reviews: [
      { id: 1, user: 'Customer A', rating: 4, comment: 'Great products and excellent service!' },
      { id: 2, user: 'Customer B', rating: 5, comment: 'Reliable exporter, would recommend.' },
    ],
    description: 'ExportCo has been serving customers worldwide with high-quality products since its inception...',
    newsAndUpdates: [
      { id: 1, title: 'New Product Launch', date: '2022-05-15', content: 'Exciting announcement about our latest product.' },
      { id: 2, title: 'Expansion Plans', date: '2022-04-10', content: 'We are expanding our operations to reach new markets.' },
    ],
    mapLocation: { latitude: 37.7749, longitude: -122.4194 }, // Example coordinates for San Francisco
    socialLinks: [
      {platform: "Facebook", url: 'https://www.facebook.com/exportco'},
      {platform: "twitter", url: 'https://twitter.com/exportco'},
      {platform: "linkedin", url: 'https://www.linkedin.com/company/exportco'},
    ],
    downloadableCatalog: '/uploads/2024-02-02/1706887295491-Add a heading.png',
  };



  const productDemo = {
    featuredImage: "https://picsum.photos/id/1018/600/400",  // Coffee-related from Lorem Picsum
    gallery: [
        "https://picsum.photos/id/1015/400/300", 
        "https://picsum.photos/id/1020/400/300",
        "https://picsum.photos/id/1020/400/300",
        "https://picsum.photos/id/1020/400/300",
    ],
    // video: "https://www.youtube.com/embed/y-4X9GK_xxc",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    name: "Single-Origin Organic Coffee Beans",
    description: "Ethically sourced, hand-roasted beans with rich chocolate and nutty notes.",
    category: "Processed Foods",
    price: 18.99,
    currency: "USD",
    measurementUnit: "lb", 
    rating: 3,
    reviews: [
        { buyerName: 'Jane W.', rating: 5, content: 'Amazing coffee! Smooth and flavorful.' },
        { buyerName: 'Mike L.', rating: 4, content: 'Great quality, would order again.' }
    ]
};
// pages/search.js
'use client'
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductTest';
import ExporterCard from '@/components/ExporterTest';
import SearchBar from '@/components/SearchTest';


const data = {
    products: [
        {
            "id": 1,
            "name": "Coffee Beans (Robusta)",
            "description": "High-quality Robusta coffee beans sourced from Ethiopia. Bold and intense flavor.",
            "price": 12.99,
            "image": '/uploads/2024-02-02/1706887295491-Add a heading.png',
            "category": "Food & Beverages",
            "certifications": ["Organic", "Fairtrade"],
            "exporter_id": 2
          },
    ],
    exporters: [
        {
            "id": 1,
            "name": "Ethiopian Coffee Cooperative",
            "logo": '/uploads/2024-02-02/1706887295491-Add a heading.png',
            "location": "Addis Ababa, Ethiopia",
            "summary": "A group of small coffee farmers dedicated to sustainable and ethical practices.",
            "products": [1, 3, 5] // IDs of products offered
          },
      // ... more matching exporters
    ]
  }
  

const Searching = ({ }) => {
    const results = data;
  const [searchTerm, setSearchTerm] = useState('');

  // Handle search results display logic here
  // (Filtering, categorization, dynamic card display)

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      {results.products.length > 0 && (
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {results.exporters.length > 0 && (
        <h2 className="text-2xl font-semibold mt-8 mb-4">Exporters</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.exporters.map((exporter) => (
          <ExporterCard key={exporter.id} exporter={exporter} />
        ))}
      </div>
    </div>
  );
};

export default Searching;

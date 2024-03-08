import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Gift Card Marketplace</title>
        {/* ... other metadata */}
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 p-6">
      <div className="flex items-center space-x-2">
        <img src="/images/norton-secured.png" alt="Norton Secured Seal" />
        <p>Your transactions are protected.</p> 
        </div>

        <div className="flex flex-col items-center">
          {/* Search Bar */}
          <div className="bg-white rounded-md shadow-md p-2 flex items-center">
            <svg className="w-6 h-6 text-gray-500" /* ...Microsoft Search Icon */>
              {/* ... */} 
            </svg>
            <input type="text" 
                   placeholder="Search gift cards, PayPal..." 
                   className="w-full outline-none px-2" />
          </div>

          {/* Optional Featured Listings Carousel - You'll need a suitable library */}
        </div>
      </section>

      {/* ... Rest of your Marketplace content */}
      <CategoryNavigation />

      <section className="mt-8">
      <h2 className="text-xl font-medium mb-4">Gift Cards</h2> 
      <div className="grid grid-cols-2 gap-4"> 
        {/* Replace with dynamic data later */}
        <GiftCard brand="Amazon" logoUrl="/images/amazon-logo.png" denomination="$50" price={50} />  
        {/* ... More GiftCard components  */}
      </div>
    </section>
    </div>
  );
}


// components/CategoryNavigation.js
// import React from 'react';

const categories = [
  { icon: 'shopping-bag', label: 'Retail' },
  { icon: 'controller', label: 'Gaming' },
  { icon: 'utensils', label: 'Food & Drink' },
  // ... Add more categories as needed
];

function CategoryNavigation() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-medium mb-4">Categories</h2>
      <div className="grid grid-cols-3 gap-4"> 
        {categories.map((category) => (
          <div key={category.label} className="text-center bg-white rounded-md p-4 shadow-md">
            <svg className="w-8 h-8 mx-auto text-blue-500" /* ...Icon Here */>
              {/* ...Icon based on category.icon */}
            </svg>
            <p className="mt-2">{category.label}</p>
          </div>
        ))}

        {/* PayPal Funds Section */}
        <div className="text-center bg-white rounded-md p-4 shadow-md">
          {/* ... Icon for PayPal */}
          <p className="mt-2">PayPal Funds</p>
        </div>
      </div>
    </section>
  );
}





// interface GiftCardProps {
//   brand: string;
//   logoUrl: string;
//   denomination: string;
//   price: number;
//   description?: string; // Optional
// }
 function GiftCard({ brand, logoUrl, denomination, price, description }) {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex items-center mb-2">
        <Image src={logoUrl} alt={brand} width={50} height={50} className="mr-4"/> 
        <h3 className="text-lg font-medium">{brand}</h3>
      </div>

      <p className="text-2xl font-bold">${price}</p>
      <p className="text-gray-600">Denomination: {denomination}</p>

      {description && (
        <p className="mt-2 text-sm">{description}</p> 
      )}

      {/* ... Add purchase/details button later */}
    </div>
  );
}





function Header() {
  return (
    <header className="bg-white sticky top-0 z-10"> 
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        {/* <Link href="/"> */}
          <a className="text-xl font-bold">GiftCard Marketplace</a>
        {/* </Link> */}

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li> 
            {/* Add more links as needed: About, Sell Gift Cards, etc. */}
            <li><Link href="/contact-us">Contact Us</Link></li> 
          </ul>
        </nav>

        {/* User Account / Cart (if applicable) */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Login 
          </button>
        </div>
      </div>
    </header>
  );
}

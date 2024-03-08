import Head from 'next/head'
import Link from 'next/link';
// import FeaturedListings from '../components/FeaturedListings' 
// import Categories from '../components/Categories'

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-8"> 
      <Head>
        <title>Gift Card Marketplace</title>
        <meta name="description" content="Buy and sell gift cards and PayPal funds" />
      </Head>

      <header className="sticky top-0 z-10 bg-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo / Site Title */}
            <a href="/" className="text-xl font-semibold">Gift Card Marketplace</a>

            {/* Navigation (adjust as needed) */}
            <nav>
            <ul className="hidden md:flex space-x-4">
                <li><a href="#" className="hover:text-blue-500">Browse</a></li>
                <li><a href="#" className="hover:text-blue-500">Sell</a></li>
                <li><a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Sign In</a></li>
            </ul>
            </nav>

            {/* Mobile menu button - Implement as needed */}
        </div>
      </header>


      {/* Search Bar */}
      <div className='h-48 flex justify-center items-center max-w-lg m-auto'>
        <div className="flex items-center justify-center bg-gray-100 rounded-lg mb-6 p-3 w-full">
            <input type="text" placeholder="Search for gift cards..." className="bg-transparent flex-1 outline-none px-2" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Search</button> 
        </div>
      </div>


      {/* Featured Listings */}
      <FeaturedListings />

      {/* Categories */}
      <Categories />  
    </div>
  )
}





function FeaturedListings() {
  // Placeholder data - you'd fetch this from your database
  const featuredListings = [
    { title: 'Amazon Gift Card', rate: '85%', image: '/images/amazon-card.jpg' },
    { title: 'iTunes Gift Card', rate: '80%', image: '/images/itunes-card.jpg' },
    { title: 'Paypal Funds', rate: '80%', image: '/images/itunes-card.jpg' },
    { title: 'Payoneer', rate: '80%', image: '/images/itunes-card.jpg' },
    // ...more listings
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-medium mb-4">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredListings.map((listing) => (
          <Link href="/listing/" key={listing.title} passHref> {/* Replace [id] */}
            <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <img src={listing.image} alt={listing.title} className="w-full mb-3" />
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <p className="text-blue-500 font-medium">{listing.rate}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


// import Link from 'next/link';

function Categories() {
  // Sample category data 
  const categories = [
    { title: 'Retail', icon: 'shopping-bag' },
    { title: 'Gaming', icon: 'controller' },
    { title: 'Streaming', icon: 'play' },
    { title: 'Music', icon: 'music-note' },
    // ...more categories
    { title: 'PayPal', icon: 'paypal' }, 
    { title: 'Payoneer', icon: 'payoneer' }, 
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-medium mb-4">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link href="/category/" key={category.title} passHref> {/* Replace [slug] */}
            <a className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-center">
              <div className="text-blue-500 text-2xl mb-2"> 
                <i className={`fa-solid fa-${category.icon}`}></i> {/* Assuming Font Awesome */}
              </div>
              <p className="text-lg font-semibold">{category.title}</p>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}


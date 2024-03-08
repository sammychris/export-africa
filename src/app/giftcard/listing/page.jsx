import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';


const listing = {
    id: 12345,
    cardType: 'iTunes',
    rate: '80%',
    paymentMethods: ['PayPal', 'Cash App'], 
    dealerId: 27,
    dealerName: 'Trusted Gift Card Exchange',
    dealerIsVerified: true,
    description:  'This is a $100 iTunes gift card, valid for the US store. Instant delivery after payment.',
    // image: '...' (You could add a placeholder image URL later)
  };

  


  const relatedListings = [
    { 
      id: 12346, 
      cardType: 'iTunes', 
      rate: '78%', 
      dealerName: 'Quick Card Deals', 
      dealerIsVerified: false, 
      image: '/placeholder-card.jpg' 
    },
    { 
      id: 12347, 
      cardType: 'Steam', 
      rate: '82%', 
      dealerName: 'Gift Cards Galore', 
      dealerIsVerified: true, 
      image: '/placeholder-card.jpg' 
    },
    // ... You could add 1-2 more related listings
  ];

  


const Listing = () => {
    return (
        <div className="container mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8"> 
    {/* Sidebar (same as before) */}
    <aside className="md:col-span-1">
                <nav className="bg-white rounded-lg p-4 shadow-md sticky top-20">
                    <ul>
                        <li><a href="/" className="block py-2 hover:bg-gray-100">Home</a></li>
                        <li><a href="/browse" className="block py-2 hover:bg-gray-100">Browse</a></li>
                        <li><a href="/dealers" className="block py-2 hover:bg-gray-100">Dealers</a></li>
                        
                        {/* Assuming a logged-in user */} 
                        <li><a href="/profile" className="block py-2 hover:bg-gray-100">My Profile</a></li>
                        <li><a href="/logout" className="block py-2 hover:bg-gray-100">Logout</a></li> 
                    </ul>
                </nav>

            </aside>

    {/* Main Listing Content */}
    <main className="md:col-span-3">
      <div className="bg-white rounded-lg p-4 shadow-md mb-6">
        {/* Large Title */}
        <h1 className="text-3xl font-medium mb-2">Amazon Gift Card - $100</h1>

        {/* Rate, Details, Verification */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
            <div className="font-semibold text-lg">
            <p>Rate: <span className="text-blue-600">{listing.rate}</span></p>
            <p>Card Type: {listing.cardType}</p>
            <p>Payment Methods: {listing.paymentMethods.join(', ')}</p>
            </div>
            <div>
            <h3 className="text-lg font-medium">Dealer</h3>
            {/* <Link href={`/dealer/${listing.dealerId}`}> */}
                <a className="hover:underline">{listing.dealerName}</a>
            {/* </Link> */}
            {listing.dealerIsVerified && (
                <span className="text-green-500 text-sm ml-2 flex items-center">
                <FaCheckCircle /> Verified
                </span>
            )}
            </div>
            <div>
            {/* Add other relevant details here if needed */}
            </div>
        </div>


        <div className="mt-4">
  <h3 className="text-lg font-medium">Description</h3>
  <p>{listing.description}</p> 
</div>



<div className="mt-4">
  <h3 className="text-lg font-medium">Contact Dealer</h3>
  <form className="mt-3">
     <textarea rows="4" placeholder="Your message..." className="w-full border border-gray-300 rounded p-2"></textarea>
     <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2">Send Message</button>
  </form>
</div>



      </div>

      {/* (Optional) Related Listings */}
      <section className="mt-8">
        <h2 className="text-2xl font-medium mb-4">Related Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Individual Listing Preview Cards Will Go Here */}

            {relatedListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg p-4 shadow-md">
                {/* ... Content of each preview card */}
                {/* <Link href={`/listing/${listing.id}`}> */}
  <a>
    <img src={listing.image || '/placeholder-card.jpg'} alt={listing.cardType} className="w-full mb-2" /> 
    <h3 className="text-lg font-medium">{listing.cardType}</h3>
    <p className="text-blue-500">{listing.rate}</p>
    <p>{listing.dealerName}</p>
  </a>
{/* </Link> */}

            </div>
            ))}
        </div>
        </section>
    </main>
  </div>
</div>

    )
}

export default Listing;
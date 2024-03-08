'use client'
import { useRouter } from 'next/router'; // For dynamic routing
// import DealerInfo from '../../components/DealerInfo';
// import DealerRates from '../../components/DealerRates';
// import Reviews from '../../components/Reviews'; 
import { FaCheckCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function DealerProfile() {
//   const router = useRouter();
//   const { dealerId } = router.query;
const dealerId = 'router.query';

  // Placeholder - You'd fetch dealer data based on dealerId
//   const dealerData = { 
//     // ... dealer info 
//   }; 
  const dealerData = {
    businessName: 'Trusted Gift Card Exchange',
    isVerified: true,
    email: 'trustedcards@example.com',
    phone: '+1 (555) 123-4567',
    rates: [
      { cardType: 'Amazon', rate: '85%' },
      { cardType: 'Steam', rate: '80%' },
      { cardType: 'iTunes', rate: '75%' },
      { cardType: 'PayPal', rate: '90%' },
    ],
    // You could add more dealer fields here:
    // website: 'https://....',
    // location: 'New York, USA',
    // ...etc. 
  };
  

  // Conditional loading if data is not fetched yet
  if (!dealerData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8"> 
            {/* Sidebar */}
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

            {/* Main Content */}
            <main className="md:col-span-3 pt-8">
            <DealerInfo dealer={dealerData} />
            <DealerRates dealer={dealerData} />
            <Reviews dealerId={dealerId} /> 
            </main>
        </div>
    </div>
  );
}



 // Assuming icons

function DealerInfo({ dealer }) {
  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-medium">{dealer.businessName}</h2>
          {dealer.isVerified && (
            <span className="text-green-500 text-lg ml-3 flex items-center">
              <FaCheckCircle /> Verified
            </span>
          )}
        </div>

        {/* Dealer Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Contact:</p>
            <p>{dealer.email}</p>
            <p>{dealer.phone}</p> 
          </div>
          <div>
            {/* Add more fields as needed: website, location, etc. */}
          </div>
        </div>
      </div>
    </section>
  );
}


function DealerRates({ dealer }) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-medium mb-4">Current Rates</h2>
  
        <div className="bg-white rounded-lg p-4 shadow-md">
          {/* Table Structure */}
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Card Type</th>
                <th className="text-right">Rate</th>
              </tr>
            </thead>
            <tbody>
              {dealer.rates.map((rate) => (
                <tr key={rate.cardType}>
                  <td>{rate.cardType}</td>
                  <td className="text-right">{rate.rate}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  





function Reviews({ dealerId }) {
  const [reviews, setReviews] = useState([]);
  const [newReviewContent, setNewReviewContent] = useState('');
  // ... other state for loading, submitting, errors

  // Fetch existing reviews on load
  useEffect(() => {
    const fetchReviews = async () => { 
      // ... your API call to fetch reviews for the dealerId   
      const fetchedReviews = await /* your API call */ 
      setReviews(fetchedReviews);    
    };

    fetchReviews();
  }, [dealerId]); 

  // Function to handle submitting a new review (needs API integration)
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // ... logic to submit review via an API call
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-medium mb-4">Reviews</h2>

      {/* Display existing reviews */}
      <div>
        {reviews.map((review) => (
          <div className="bg-white rounded-lg p-4 shadow-md mb-3" key={review.id}>
            {/* Review content, rating, etc. */}
          </div>
        ))}
      </div>

      {/* New Review Form (if user is logged in) */}
      <form onSubmit={handleSubmitReview}>
        <textarea 
          value={newReviewContent}
          onChange={(e) => setNewReviewContent(e.target.value)}
          // ... other textarea props
        />
        <button type="submit">Submit Review</button>
      </form>

    </section>
  );
}

'use client'
import { useState, useEffect } from 'react';

const getDemoDealerRates = async () => {
    return [
        { id: 1, cardType: 'Amazon', rate: 85, updatedAt: '2024-02-24T09:34:00' },
        { id: 2, cardType: 'iTunes', rate: 78, updatedAt: '2024-02-23T15:12:00' },
        { id: 3, cardType: 'Steam', rate: 80, updatedAt: '2024-02-24T07:49:00' },
    ];
}
  
const getSampleMarketData = async () => {
    // Simulating variations
    const trends = ['up', 'down', 'neutral'];
    const randomTrend = trends[Math.floor(Math.random() * trends.length)];

    return {
        giftCardTrend: randomTrend, 
        payPalRate: Math.floor(Math.random() * (92 - 85) + 85), // Between 85 and 92
    }
};


const RateUpdate = () => {
    const [dealerRates, setDealerRates] = useState([]); // Your existing dealer rate data
    const [marketData, setMarketData] = useState(null);

    useEffect(() => {
        // Fetch Dealer Rates (replace with your actual logic)
        const fetchDealerRates = async () => {
          const fetchedRates = await getDemoDealerRates();  // Use your demo data function
          setDealerRates(fetchedRates); 
        }; 
    
        // Fetch Market Data
        const fetchMarketData = async () => {
          const data = await getSampleMarketData(); 
          setMarketData(data);
        }
    
        fetchDealerRates();
        fetchMarketData(); 
      }, []);

    return(
        <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-medium mb-4">Rate Updates</h2>

            {/* Current Rates Display */}
            <div className="mb-4">
                <h3 className="text-lg font-medium">Your Current Rates</h3>
                <table className="w-full border-collapse">
                        {/* Table Headers: Card Type, Rate, etc. */}
                    <thead>
                        <tr>
                            <th className="text-left p-3 border border-gray-300">Card Type</th>
                            <th className="text-left p-3 border border-gray-300">Rate</th>
                            <th className="text-left p-3 border border-gray-300">Last Updated</th> 
                            {/* Potential additional column: Actions (Edit) */}
                        </tr>
                    </thead>
                    <tbody>
                        {dealerRates.map((rate) => (
                            <tr key={rate.id}> 
                            <td className="p-3 border border-gray-300">{rate.cardType}</td>
                            <td className="p-3 border border-gray-300">{rate.rate}%</td>
                            <td className="p-3 border border-gray-300">{rate.updatedAt}</td> 
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* Update Form */}
            <form> 
                {/* <div className="grid grid-cols-2 gap-4 mb-3"> */}
                {/* Input fields for different card types and potentially PayPal */}
                {/* </div> */}
                <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="flex items-center">
                        <label htmlFor="amazonRate" className="mr-2">Amazon:</label>
                        <input type="number" id="amazonRate" className="border border-gray-300 p-2 rounded w-32" />
                    </div>
                    {/* ... Similar fields for other card types ... */}
                    <div className="flex items-center">
                        <label htmlFor="payPalRate" className="mr-2">PayPal:</label>
                        <input type="number" id="payPalRate" className="border border-gray-300 p-2 rounded w-32" />
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Update Rates</button>
            </form>

            {/* Simplified Market Data */}
            <div className="mt-6">
                <h3 className="text-lg font-medium">Market Trends</h3>
                {/* Simple indicators - you'd likely pull these from an external source */}
                {marketData && (
                <ul>
                    <li>Gift Card Trend: 
                    <span className={`text-${marketData.giftCardTrend === 'up' ? 'green-500' : 'red-500'}`}>
                        {marketData.giftCardTrend}
                    </span>
                    </li>
                    <li>PayPal (Example): {marketData.payPalRate}%</li> 
                </ul>
                )}
            </div>

        </section>

    )
}

export default RateUpdate;

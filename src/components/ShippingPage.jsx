import React, { useState } from 'react';

const ShippingPage = () => {
  const [quoteRequestFormData, setQuoteRequestFormData] = useState({
    origin: '',
    destination: '',
    goodsType: '',
    weight: '',
    dimensions: '',
    deliveryDate: '',
    customsInfo: '',
    additionalRequests: '',
  });

  const [shippingOptions, setShippingOptions] = useState([
    { id: 1, name: 'Air Freight', transitTime: '3-5 days', cost: '$$$' },
    { id: 2, name: 'Ocean Freight', transitTime: '14-21 days', cost: '$$' },
    // Add more shipping options as needed
  ]);

  const [selectedQuote, setSelectedQuote] = useState(null);

  const handleQuoteRequestInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteRequestFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuoteRequestSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission (e.g., send the shipping quote request)
    console.log('Shipping Quote Request:', quoteRequestFormData);
    // Reset form data
    setQuoteRequestFormData({
      origin: '',
      destination: '',
      goodsType: '',
      weight: '',
      dimensions: '',
      deliveryDate: '',
      customsInfo: '',
      additionalRequests: '',
    });
  };

  const handleSelectQuote = (quote) => {
    setSelectedQuote(quote);
    // Add logic for further actions (e.g., booking, tracking)
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md max-w-[1128px] mx-auto">
      <h2 className="text-2xl font-bold text-deep-blue mb-4">Shipping Options</h2>

      {/* Display shipping options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shippingOptions.map((option) => (
          <div
            key={option.id}
            className="bg-gray-100 p-4 rounded-md cursor-pointer"
            onClick={() => handleSelectQuote(option)}
          >
            <h3 className="text-lg font-bold text-deep-blue mb-2">{option.name}</h3>
            <p className="text-sm text-gray-700">Transit Time: {option.transitTime}</p>
            <p className="text-sm text-gray-700">Cost: {option.cost}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-deep-blue mb-4 mt-8">Request Shipping Quote</h2>
      <form onSubmit={handleQuoteRequestSubmit}>
        {/* Shipment details */}
        <div className="mb-4">
          <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
            Origin
          </label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={quoteRequestFormData.origin}
            onChange={handleQuoteRequestInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {/* Add other form fields for shipment details */}
        </div>

        {/* Customs information */}
        <div className="mb-4">
          <label htmlFor="customsInfo" className="block text-sm font-medium text-gray-700">
            Customs Information
          </label>
          <textarea
            id="customsInfo"
            name="customsInfo"
            value={quoteRequestFormData.customsInfo}
            onChange={handleQuoteRequestInputChange}
            rows="3"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
          {/* Add other form fields for customs information */}
        </div>

        {/* Additional requests */}
        <div className="mb-4">
          <label htmlFor="additionalRequests" className="block text-sm font-medium text-gray-700">
            Additional Requests
          </label>
          <textarea
            id="additionalRequests"
            name="additionalRequests"
            value={quoteRequestFormData.additionalRequests}
            onChange={handleQuoteRequestInputChange}
            rows="3"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
          {/* Add other form fields for additional requests */}
        </div>

        {/* Submit button */}
        <button type="submit" className="bg-deep-blue text-white py-2 px-4 rounded-md">
          Submit Quote Request
        </button>
      </form>

      {/* Quote comparison */}
      {selectedQuote && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-deep-blue mb-4">Quote Comparison</h2>
          {/* Add UI elements for quote comparison table */}
          {/* Include key details like price, transit time, delivery date, additional fees, etc. */}
          <table className="w-full border border-gray-300">
            {/* Add table headers */}
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Option</th>
                <th className="border border-gray-300 p-2">Transit Time</th>
                <th className="border border-gray-300 p-2">Cost</th>
              </tr>
            </thead>
            {/* Add table body */}
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">{selectedQuote.name}</td>
                <td className="border border-gray-300 p-2">{selectedQuote.transitTime}</td>
                <td className="border border-gray-300 p-2">{selectedQuote.cost}</td>
              </tr>
              {/* Add more rows if needed */}
            </tbody>
          </table>
        </div>
      )}

      {/* Additional features */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-deep-blue mb-4">Additional Features</h2>
        {/* Add UI elements for additional features */}
        {/* Include pre-defined shipping profiles, real-time quotes, customs clearance support, insurance options, and documentation management */}
        <p>Additional features content goes here...</p>
      </div>
    </div>
  );
};

export default ShippingPage;

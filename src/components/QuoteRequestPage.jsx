import React, { useState } from 'react';

const QuoteRequestPage = () => {
  const [quoteFormData, setQuoteFormData] = useState({
    productName: '',
    productDescription: '',
    quantity: 1,
    destinationCountry: '',
    deliveryDate: '',
    additionalRequirements: '',
  });

  const handleQuoteInputChange = (e) => {
    const { name, value } = e.target;
    setQuoteFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission (e.g., send the quote request)
    console.log('Quote Request:', quoteFormData);
    // Reset form data
    setQuoteFormData({
      productName: '',
      productDescription: '',
      quantity: 1,
      destinationCountry: '',
      deliveryDate: '',
      additionalRequirements: '',
    });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md max-w-[1128px] mx-auto">
      <h2 className="text-2xl font-bold text-deep-blue mb-4">Request Quote</h2>
      <form onSubmit={handleQuoteSubmit}>
        {/* Product details */}
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-bold text-gray-700 mb-2">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={quoteFormData.productName}
            onChange={handleQuoteInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="productDescription" className="block text-sm font-bold text-gray-700 mb-2">
            Product Description:
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={quoteFormData.productDescription}
            onChange={handleQuoteInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-bold text-gray-700 mb-2">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quoteFormData.quantity}
            onChange={handleQuoteInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Delivery details */}
        <div className="mb-4">
          <label htmlFor="destinationCountry" className="block text-sm font-bold text-gray-700 mb-2">
            Destination Country:
          </label>
          <input
            type="text"
            id="destinationCountry"
            name="destinationCountry"
            value={quoteFormData.destinationCountry}
            onChange={handleQuoteInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="deliveryDate" className="block text-sm font-bold text-gray-700 mb-2">
            Desired Delivery Date:
          </label>
          <input
            type="date"
            id="deliveryDate"
            name="deliveryDate"
            value={quoteFormData.deliveryDate}
            onChange={handleQuoteInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Additional requirements */}
        <div className="mb-4">
          <label htmlFor="additionalRequirements" className="block text-sm font-bold text-gray-700 mb-2">
            Additional Requirements:
          </label>
          <textarea
            id="additionalRequirements"
            name="additionalRequirements"
            value={quoteFormData.additionalRequirements}
            onChange={handleQuoteInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>

        {/* Submit button */}
        <button type="submit" className="bg-deep-blue text-white py-2 px-4 rounded-md">
          Submit Quote Request
        </button>
      </form>
    </div>
  );
};

export default QuoteRequestPage;

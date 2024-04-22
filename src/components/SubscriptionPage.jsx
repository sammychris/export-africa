import React, { useState } from 'react';

const SubscriptionPage = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const subscriptionPlans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: '$9.99/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      userTypes: ['Individuals', 'Small Businesses'],
    },
    {
      id: 2,
      name: 'Standard Plan',
      price: '$19.99/month',
      features: ['All Basic features', 'Additional Feature 1', 'Additional Feature 2'],
      userTypes: ['Small Businesses', 'Medium Enterprises'],
    },
    {
      id: 3,
      name: 'Premium Plan',
      price: '$29.99/month',
      features: ['All Standard features', 'Premium Feature 1', 'Premium Feature 2'],
      userTypes: ['Medium Enterprises', 'Large Enterprises'],
    },
  ];

  const handlePlanToggle = (planId) => {
    setSelectedPlans((prevSelected) => {
      if (prevSelected.includes(planId)) {
        return prevSelected.filter((id) => id !== planId);
      } else {
        return [...prevSelected, planId];
      }
    });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md max-w-[1128px] mx-auto">
      {/* Heading and Introduction */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-deep-blue mb-4">Subscription Plans</h2>
        <p>Browse our subscription plans and choose the one that suits your needs.</p>
      </div>

      {/* Plan Comparison Tool */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Plan Comparison</h3>
        <div className="flex space-x-4">
          {subscriptionPlans.map((plan) => (
            <label key={plan.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedPlans.includes(plan.id)}
                onChange={() => handlePlanToggle(plan.id)}
                className="mr-2"
              />
              {plan.name}
            </label>
          ))}
        </div>
      </div>

      {/* Card or Table Layout for Subscription Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subscriptionPlans.map((plan) => (
          <div key={plan.id} className={`border p-4 rounded-md ${selectedPlans.includes(plan.id) ? 'bg-gray-100' : ''}`}>
            <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-700 mb-2">{plan.price}</p>
            <ul className="list-disc pl-6">
              {plan.features.map((feature) => (
                <li key={feature} className="text-gray-700">{feature}</li>
              ))}
            </ul>
            <button className="bg-deep-blue text-white py-2 px-4 rounded-md mt-4">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* Plan Benefits in Context */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Plan Benefits in Context</h3>
        <div>
          <h4 className="text-md font-bold text-deep-blue mb-2">Individuals and Small Businesses</h4>
          <p className="text-gray-700">The Basic Plan provides essential features suitable for individuals and small businesses looking for cost-effective solutions.</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-bold text-deep-blue mb-2">Medium Enterprises</h4>
          <p className="text-gray-700">The Standard Plan offers additional features catering to the needs of medium-sized enterprises.</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-bold text-deep-blue mb-2">Large Enterprises</h4>
          <p className="text-gray-700">For large enterprises with extensive requirements, the Premium Plan provides advanced features and scalability.</p>
        </div>
      </div>

      {/* Visual Cues */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Visual Cues</h3>
        <p className="text-gray-700">Use icons, colors, or badges to differentiate plan tiers and make them visually appealing.</p>
      </div>

      {/* Testimonials or Case Studies */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Testimonials</h3>
        <div>
          <p className="text-gray-700">{`"Choosing the Premium Plan transformed our business. The advanced features and dedicated support are unmatched!" - John Doe, CEO`}</p>
        </div>
      </div>

      {/* Money-back Guarantee or Free Trial */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-deep-blue mb-2">Money-back Guarantee or Free Trial</h3>
        <p className="text-gray-700">Consider offering a money-back guarantee or free trial to reduce user risk and encourage exploration.</p>
      </div>
    </div>
  );
};

export default SubscriptionPage;

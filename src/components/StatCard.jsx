import React from 'react';

function StatCard({ value, description }) {
  return (
    <div className="bg-white rounded shadow p-6 text-center">
      <h3 className="text-3xl font-bold text-blue-600">{value}</h3> 
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default StatCard;

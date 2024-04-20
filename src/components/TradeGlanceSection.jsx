import React from 'react';
import StatCard from './StatCard';

function TradeGlanceSection() {
  const statsData = [
    { value: "$50B", description: "Intra-African Trade Value (2023)" },
    { value: "$50B", description: "Intra-African Trade Value (2023)" },
    { value: "$50B", description: "Intra-African Trade Value (2023)" },
  ];

  return (
    <section className="my-8 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-medium text-center mb-6">African Trade at a Glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TradeGlanceSection;

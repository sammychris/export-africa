import React from 'react';

const ValuePropHighlights = () => {
  return (
    <div className="py-8 text-center">
      {/* Icons + Text Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <img src="icon1.svg" alt="Niche Remote Focus" />
          <p>Niche Remote Focus</p>
        </div>
        <div>
          <img src="icon2.svg" alt="Open-Source Portfolio Building" />
          <p>Open-Source Portfolio Building</p>
        </div>
        <div>
          <img src="icon3.svg" alt="Community-Powered" />
          <p>Community-Powered</p>
        </div>
      </div>
    </div>
  );
};

export default ValuePropHighlights;

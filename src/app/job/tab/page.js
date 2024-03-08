import React from 'react';
import TopBanner from './TopBanner';
import HeroSection from './HeroSection';
import ValuePropHighlights from './ValuePropHighlights';
import LatestFeatured from './LatestFeatured';
import SocialProof from './SocialProof';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <TopBanner />
      <HeroSection />
      <ValuePropHighlights />
      <LatestFeatured />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default HomePage;

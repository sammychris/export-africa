'use client'
import { useEffect, useState } from 'react'; 
import { useRouter } from 'next/navigation';
import HeroBanner from '@/components/HeroBanner';
import ExploreCategoryList from '@/components/ExploreCategoryList';
import AppGuildList from '@/components/AppGuildList';
import FeaturedExporters from '@/components/FeaturedExporters';
import TestimonialsSection from '@/components/TestimonialsSection';
import TradeGlanceSection from '@/components/TradeGlanceSection';


export default function HomePageContainer({exporters, categories}) {
    const [searchField, setSearchField] = useState('');
    const [searchPage, setSearchPage] = useState('products'); 
    const router = useRouter();

    const handleSearchSubmit= () => {
        router.push(`/${searchPage}/search?keywords=${searchField}`); 
    }
    
    return (
      <div className=""> 
        <HeroBanner searchPage={searchPage} setSearchPage={setSearchPage} setSearchField={setSearchField} handleSearchSubmit={handleSearchSubmit}/>
        <div className=" min-h-screen">
      {/* <FeaturedContent /> */}
      <FeaturedExporters featuredExporters={exporters}/>

      {/* Explore Categories */}
      <ExploreCategoryList productCategories={categories}/>

      {/* How It Works */}
      <AppGuildList/>
      <TestimonialsSection/>
      <TradeGlanceSection/>
      
        {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto text-center max-w-[1128px]">
          <h2 className="text-2xl font-medium text-center mb-6">Ready to Start Trading?</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8">Join ExportAfrica now and discover a world of opportunities in African trade.</p>
          <button className="bg-deep-blue text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-800">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
      </div>
    );
}

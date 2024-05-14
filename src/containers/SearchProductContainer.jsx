'use client'
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import ProductCard from '@/components/ProductCard';
import Loading from '@/components/Loading';
import Button from '@/components/Button';





export default function SearchContainer({request}) {
  const { searchParams } = request;
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    loadMoreData(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const loadMoreData = async (startIndex) => {
    setIsLoading(true);
    try {
      const query = buildSearchQuery(startIndex);
      const { data } = await axios.get(`/api/products?${query}`);
      setDisplayedProducts(startIndex === 1 ? data.data : [...displayedProducts, ...data.data]);
      setOffset(startIndex + productsPerPage);
      setHasMore(data.data.length === productsPerPage); // Check if a full batch was received 
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setIsLoading(false);
    }
  };


  const buildSearchQuery = (startIndex) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('offset', startIndex);
    searchParams.set('limit', productsPerPage);
    return searchParams.toString();
  }

  if (!displayedProducts.length) return  <Loading/>

  return (
      
        <div className="container mx-auto py-8"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen"> 
                { 
                  displayedProducts.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
            
            {hasMore && (
              <div className="text-center mt-4">
                <Button isLoading={isLoading}  onClick={() => loadMoreData(offset)} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                  Load More
                </Button> 
              </div>
              
            )}
      </div>
  );
}

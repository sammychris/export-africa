'use client'
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import ExporterCard from '@/components/ExporterCard';
import Loading from '@/components/Loading';
import Button from '@/components/Button';


export default function SearchExporterContainer({request}) {
  const { searchParams } = request;
  const [displayedExporters, setDisplayedExporters] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const profilesPerPage = 9;


  useEffect(() => {
    loadMoreData(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);


  const loadMoreData = async (startIndex) => {
    setIsLoading(true);
    try {
      const query = buildSearchQuery(startIndex);
      const { data } = await axios.get(`/api/exporters?${query}`);
      setDisplayedExporters(startIndex === 1 ? data.data : [...displayedExporters, ...data.data]);
      setOffset(startIndex + profilesPerPage);
      setHasMore(data.data.length === profilesPerPage); // Check if a full batch was received 
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setIsLoading(false);
    }
  };

  const buildSearchQuery = (startIndex) => {
    console.log({startIndex})
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('offset', startIndex);
    searchParams.set('limit', profilesPerPage);
    return searchParams.toString();
  }


  if (!displayedExporters.length) return  <Loading />
  return (
    <>
        <div className="container mx-auto py-8"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen"> 
                { 
                    displayedExporters.map(exporter => <ExporterCard key={exporter.id} exporter={exporter} />)
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
    </>
  );
}




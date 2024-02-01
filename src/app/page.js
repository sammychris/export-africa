import Head from 'next/head';
import Footer from '@/components/Footer'
import HomePageContainer from '@/containers/HomePageContainer';
import axios from 'axios';



const fetchData = async (id) => {
  try {
    const exporterResponse = await axios.get(`http://localhost:3000/api/exporters?limit=5`);
    const categoryResponse = await axios.get(`http://localhost:3000/api/categories?limit=5`); 
    // get products by exporterId

    return {
      exporters: exporterResponse?.data?.data || [],
      categories: categoryResponse?.data?.data || [],
    }
  } catch({response}) {
      console.log('Error Response: ', response?.data)
  }
}

export default async function Home() {
  const {exporters, categories} = await fetchData() || {};

  return (
    <div className=""> {/* Base container */}
      <Head>
        <title>Your African Trade App</title>
        {/* Your Meta Tags */}
      </Head>
      <HomePageContainer exporters={exporters} categories={categories} />
      <Footer />
    </div>
  );
}

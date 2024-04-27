import Footer from '@/components/Footer';
import ExporterContainer from '@/containers/ExporterContainer';
import { getAuthToken } from '@/lib/autheticate';
import axios from 'axios';
import {redirect} from 'next/navigation';


const fetchData = async (id) => {
  try {
    const token = getAuthToken(); 

    const exporter = await axios.get(`http://localhost:3000/api/exporters/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const products = await axios.get(`http://localhost:3000/api/products?exporterId=${id}`); // get products by exporterId

    return {
      exporterData: exporter?.data?.data || null,
      isProfileOwner: exporter?.data?.isProfileOwner || false,
      productsData: products?.data?.data || [],
    }
  } catch(error) {
      console.log({error})
  }
}



export default async function ExporterId(request) {
  const id = request?.params?.id;

  let { exporterData, productsData, isProfileOwner } = await fetchData(id);

  if (isProfileOwner)  return redirect('/exporters/my-profile');

  return (
    <div className="min-h-screen font-sans">
      <ExporterContainer request={request} exporterData={exporterData} productsData={productsData} isProfileOwner={isProfileOwner} />
      <Footer />
    </div>
  )
}



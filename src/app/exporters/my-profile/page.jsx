import Footer from '@/components/Footer';
import ExporterContainer from '@/containers/ExporterContainer';
import { getAuthToken } from '@/lib/autheticate';
import axios from 'axios';
import { redirect } from 'next/navigation';



async function fetchExporterProfileAndProducts() {
    try {
        const token = getAuthToken(); 
        const responseExporter = await axios.get(`http://localhost:3000/api/exporters/user`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        const exporterData = responseExporter?.data?.data || null;
        const isProfileOwner = responseExporter?.data?.isProfileOwner || false;

        let productsResponse;
        if (exporterData) {
            productsResponse = await axios.get(`http://localhost:3000/api/products?exporterId=${exporterData?._id}`); 
        }

        return {
            exporterData, 
            isProfileOwner,
            productsData: productsResponse?.data?.data
        }; 
    } catch ({response}) {
        if (response?.status === 404) {
            return { error: 'notFound' }; // Signal a 404 scenario
          } else { 
            console.log('error response: ', response);
          }
    }
}


export default async function ExporterId(request) {

    const { exporterData, isProfileOwner, productsData, error } = await fetchExporterProfileAndProducts() || {};
  
    if (error === 'notFound') return redirect('/choose-account-type');
  
    // if (exporterData && !exporterData?.verified) return redirect('/verification-pending');
    return (
        <div className="min-h-screen font-sans">
            <ExporterContainer request={request} exporterData={exporterData} productsData={productsData} isProfileOwner={isProfileOwner} />
            <Footer />
        </div>
    )
}



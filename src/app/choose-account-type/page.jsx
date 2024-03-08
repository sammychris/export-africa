'use client'
import { FaShoppingCart, FaShippingFast } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react'; // Import useState
import Button from '@/components/Button';



function ChooseAccountType() {
  const router = useRouter();
  
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isLoadingExporter, setIsLoadingExporter] = useState(false); 

  const handleAccountTypeSelection = async (role) => {
    role === 'user' && setIsLoadingUser(true);
    role === 'exporter' && setIsLoadingExporter(true);
      try {
        const { data } = await axios.put(`/api/account-type`, { role });
        if (data?.data?.role === 'exporter') return router.push('/exporter-onboarding?screen=1'); 
        return router.push('/buyer-onboarding?screen=1'); 
      } catch({response}) {
          console.log('Error Response: ', response);
          setIsLoadingUser(false);
          setIsLoadingExporter(false);
          
      }
  }

  return (
    <div className="container mx-auto max-w-screen-md p-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Are you a an Looking for an Exporter or you are one?</h1>
      <p className="mb-6">
         Help us tailor your experience by selecting your primary role.
      </p>

      <div className="flex flex-col space-y-4 items-center">
        <Button
          isLoading={isLoadingUser}
          onClick={() => handleAccountTypeSelection('user')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2"
        >
          <FaShoppingCart /> {"I'm looking for exporters/products"}
        </Button>
        <Button
          isLoading={isLoadingExporter}
          onClick={() => handleAccountTypeSelection('exporter')}
          className="bg-green-500 hover:bg-green-600 text-white  font-semibold py-3 px-6 rounded-full flex items-center gap-2">
          <FaShippingFast /> {"I'm an Exporter"}
        </Button>
      </div> 
    </div>
  );
}

export default ChooseAccountType;

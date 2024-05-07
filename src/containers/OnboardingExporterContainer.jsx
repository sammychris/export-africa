'use client'
import axios from 'axios';
import CompanyInfoForm from "@/components/CompanyInfoForm";
import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import ContactDetailsForm from '@/components/ContactDetailsForm';
import ProductCertificateForm from '@/components/ProductCertificateForm';
import VerifyIdentityForm from '@/components/VerifyIdentityForm';
import { updateFormData } from '@/lib/features/onboarding/onboardingSlice';
import Loading from '@/components/Loading';



const OnboardingExporterContainer = ({screen}) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { formData } = useAppSelector(state => state.onboarding);
    const [isLoading, setIsLoading] = useState(false);
    const [isPageLoading, setIsPageLoading] = useState(true); 
    const [currentScreen, setCurrentScreen] = useState(1); // Default start at screen 1
    const [status, setStatus] = useState({});
  
    useEffect(() => {
        fetchData();
        const initialScreen = parseInt(screen) || 1;
        setCurrentScreen(initialScreen);
    }, [screen, currentScreen]); 



    const fetchData = async () => {
        try {
            const {data} = await axios.get(`/api/exporters/user`);
            dispatch(updateFormData(data));
        } catch ({response}) { console.log('error resposne: ', response) } 
        finally {setIsPageLoading(false)}
    }
  
    const changeRoute = (screen) => {
        const url = screen > 4 ? 'verification-pending': 'exporter-onboarding?screen='+screen;
        router.push(url, undefined, { shallow: true });
    };
  
    const handleNextScreen = () => {
        setCurrentScreen((prevScreen) => {
            const newScreen = Math.min(prevScreen + 1, 5);
            changeRoute(newScreen);
            return newScreen;
        });
    };
    
    const handlePreviousScreen = () => {
        setCurrentScreen((prevScreen) => {
            const newScreen = Math.max(prevScreen - 1, 1);
            changeRoute(newScreen)
            return newScreen;
        });
    };    

    const handleSubmit = async (values, {setSubmitting}) => {
        setIsLoading(true); 
        try {
            const formDataApi = new FormData();
            if (values?.companyName) formDataApi.append('companyName', values.companyName);
            if (values?.description) formDataApi.append('description', values.description);
            if (values?.country) formDataApi.append('country', values.country);
            if (values?.state) formDataApi.append('state', values.state);
            if (values?.logo?.length && !values?.logo[0].changed) formDataApi.append('logo', values.logo[0].file);
            if (values?.contact?.email) formDataApi.append('contact.email', values.contact.email);
            if (values?.contact?.phone) formDataApi.append('contact.phone', values.contact.phone);
            if (values?.contact?.website) formDataApi.append('contact.website', values.contact.website);
            if (values?.socialLinks?.length) formDataApi.append(`socialLinks`, JSON.stringify(values.socialLinks));
            if (values?.productCategories?.length) formDataApi.append(`productCategories`, JSON.stringify(values.productCategories));
            if (values?.certifications?.length && !values?.certifications[0].changed) {
                values.certifications.forEach((imageObject, index) => {
                    imageObject = imageObject.changed ? JSON.stringify(imageObject) : imageObject;
                    formDataApi.append(`certifications[${index}]`, imageObject);
                });
            }
            if (values?.companyDocuments && !values?.companyDocuments.changed) formDataApi.append('companyDocuments', values.companyDocuments);
            if (values?.idDocument && !values?.idDocument.changed) formDataApi.append('idDocument', values.idDocument);
            if (values?.addressProof && !values?.addressProof.changed) formDataApi.append('addressProof', values.addressProof);

            const { data } = await axios.post(`/api/exporters/`, formDataApi, {
                headers: {'Content-Type': 'multipart/form-data'},
            });

            if (data.success) {
                status.type = "success";
                status.message = "Saved!";
                setStatus(status);
                dispatch(updateFormData(data));
                handleNextScreen();
            }

        } catch ({response}) {
            status.type = "error";
            status.message = response?.data?.error;
            setStatus(status);
            console.error("Error response:", response);
        } finally {
            setIsLoading(false);
            setSubmitting(false); // Important when using Formik!
        }
    }

    if (isPageLoading) return <Loading />
    return (
        <>
            {currentScreen === 1 &&  <div className="container mx-auto max-w-screen-md p-8"> {/* LinkedIn Content Width */}
                <h1 className="text-2xl font-bold mb-6">{`Let's Get Your Company Listed`}</h1>
                <CompanyInfoForm formData={formData} isLoading={isLoading} status={status} setStatus={setStatus} handleSubmit={handleSubmit} />
            </div>
            } 
            {currentScreen === 2 && (
                <div className="container mx-auto max-w-screen-md p-8"> 
                    <h1 className="text-2xl font-bold mb-6">How Can Buyers Reach You?</h1>
                    <ContactDetailsForm formData={formData} isLoading={isLoading} status={status} setStatus={setStatus} handleSubmit={handleSubmit} handlePreviousScreen={handlePreviousScreen}/>
                </div>
            )}
            {currentScreen === 3 && (
                <div className="container mx-auto max-w-screen-md p-8">
                    <h1 className="text-2xl font-bold mb-6">Products & Certifications</h1>
                    <ProductCertificateForm formData={formData} isLoading={isLoading} status={status} setStatus={setStatus} handleSubmit={handleSubmit} handlePreviousScreen={handlePreviousScreen}/>
                </div>
            )}
            {currentScreen === 4 && (
                <div className="container mx-auto max-w-screen-md p-8">
                    <h1 className="text-2xl font-bold mb-6">Proof of Legitimacy</h1>
                    <VerifyIdentityForm formData={formData} isLoading={isLoading} status={status} setStatus={setStatus} handleSubmit={handleSubmit} handlePreviousScreen={handlePreviousScreen}/>
                </div>
            )}
        </>
    )
}

export default OnboardingExporterContainer;

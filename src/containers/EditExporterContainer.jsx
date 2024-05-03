'use client'
import axios from 'axios';
import { useState } from 'react';
import CompanyInfoForm from '@/components/CompanyInfoForm';
import ContactDetailsForm from '@/components/ContactDetailsForm';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import ProductCertificateForm from '@/components/ProductCertificateForm';
import VerifyIdentityForm from '@/components/VerifyIdentityForm';
import TabNavigation from '@/components/TabNavigation';
import CloseButton from '@/components/CloseButton';
import { setCurrentExporter } from '@/lib/features/exporters/exportersSlice';

const EditExporterContainer = ({ exporterData, changeRoute }) => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false); 
    const [successMessage, setSuccessMessage] = useState('');
    const [activeTab, setActiveTab] = useState('company-info'); 
    const [status, setStatus] = useState({});
    const tabsData = [
        { label: 'Company Info', href: '#company-info', id: 'company-info' },
        { label: 'Contact Details', href: '#contact-details', id: 'contact-details' },
        { label: 'Products & Certifications', href: '#products-certs', id: 'products-certs' },
        { label: 'Identity', href: '#identity', id: 'identity' }
    ];

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
            if (values?.certifications?.length) {
                values.certifications.forEach((imageObject, index) => {
                  imageObject = imageObject.changed ? JSON.stringify(imageObject) : imageObject;
                  formDataApi.append(`certifications[${index}]`, imageObject);
                });
            }
            if (values?.companyDocuments && !values?.companyDocuments.changed) formDataApi.append('companyDocuments', values.companyDocuments);
            if (values?.idDocument && !values?.idDocument.changed) formDataApi.append('idDocument', values.idDocument);
            if (values?.addressProof && !values?.addressProof.changed) formDataApi.append('addressProof', values.addressProof);

            const {data} = await axios.put(`/api/exporters/${exporterData?._id}`, formDataApi, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set content type to handle file uploads
                },
            });

            if (data.success) {
                dispatch(setCurrentExporter(data.data));
                setSuccessMessage('Company Info updated!');
                
            }
        } catch (error) {
            alert('Failed! try again later')
            console.error('Submit error: ', error); 
        } finally {
            setIsLoading(false);
            setSubmitting(false); // Important when using Formik!
        }
    }
    return (
        <div className="container mx-auto max-w-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 relative">Edit Profile <CloseButton onClick={() => changeRoute('/exporters/my-profile')} /></h2> 
            <TabNavigation tabsData={tabsData} activeTab={activeTab} setActiveTab={setActiveTab}/>
            { activeTab === 'company-info' && <CompanyInfoForm formData={exporterData} handleSubmit={handleSubmit} isLoading={isLoading} status={status} setStatus={setStatus} successMessage={successMessage} />}
            { activeTab === 'contact-details' && <ContactDetailsForm formData={exporterData} handleSubmit={handleSubmit} isLoading={isLoading} status={status} setStatus={setStatus} />}
            { activeTab === 'products-certs' && <ProductCertificateForm formData={exporterData} handleSubmit={handleSubmit} isLoading={isLoading} status={status} setStatus={setStatus} />}
            { activeTab === 'identity' && <VerifyIdentityForm formData={exporterData} handleSubmit={handleSubmit} isLoading={isLoading} status={status} setStatus={setStatus} />}
        </div>
    );
};


export default EditExporterContainer;
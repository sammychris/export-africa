'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Link from 'next/link';
import YourImageUploadComponent from '@/components/ImageUploadComponent';

const initialValues = { 
    companyName: '', //  Prefill with  existing data 
    logo: null, // Assuming  pre-filled state if a logo exists
    location: '', 
    description: ''
};

const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Required'),
    // (More  validation as needed)
});

const CompanyInfoTab = () => {
    const [isLoading, setIsLoading] = useState(false); 
    const [successMessage, setSuccessMessage] = useState('');
    const [activeTab, setActiveTab] = useState('company-info'); 

    const handleSubmit = async (values, { setSubmitting }) => {
        setIsLoading(true); 
        try {
            // API call to submit form data  with fetched or stored values
            await updateCompanyInfo(values); // Replace with your  API call implementation
            setSuccessMessage('Company Info updated!');
        } catch (error) {
             console.error('Submit error:', error); 
             // Set an error message if desired
        } finally {
            setIsLoading(false);
            setSubmitting(false); // Important when using Formik!
        }
    };

    return (
        <div className="container mx-auto max-w-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2> 

            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" role="tablist">
                <li className="nav-item -mb-px mr-2 last:mr-0 flex-auto text-center">
                    <Link
                        href="#company-info"
                        onClick={(e) => { e.preventDefault(); setActiveTab('company-info'); }} 
                        className={`nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent ${activeTab === 'company-info' ? 'bg-gray-100 text-gray-800 border-b-2 border-blue-500' : ''}`}
                        role="tab" 
                    >
                    Company Info
                    </Link>
                </li>
                <li className="nav-item -mb-px mr-2 last:mr-0 flex-auto text-center">
                    <Link
                        href="#contact-details"
                        onClick={(e) => { e.preventDefault(); setActiveTab('company-info'); }} 
                        className={`nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent ${activeTab === 'company-info' ? 'active' : ''}`}
                        role="tab" 
                    >
                    Contact Details
                    </Link>
                </li>
                <li className="nav-item -mb-px mr-2 last:mr-0 flex-auto text-center">
                    <Link
                        href="#products-certs"
                        onClick={(e) => { e.preventDefault(); setActiveTab('company-info'); }} 
                        className={`nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent ${activeTab === 'company-info' ? 'active' : ''}`}
                        role="tab" 
                    >
                    Products & Certifications
                    </Link>
                </li>
                <li className="nav-item -mb-px mr-2 last:mr-0 flex-auto text-center">
                    <Link
                        href="#identity"
                        onClick={(e) => { e.preventDefault(); setActiveTab('company-info'); }} 
                        className={`nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent ${activeTab === 'company-info' ? 'active' : ''}`}
                        role="tab" 
                    >
                    Identity
                    </Link>
                </li>
            </ul>

        <div className="tab-content mt-4">
            <div id="company-info" className="tab-pane fade in active"> 
                <form id="company-info-form"> 
                    <div className="tab-pane fade show active" id="company-info"> 
                        {/* <h2 className="text-lg font-semibold mb-3">Company Info</h2> */}

                        <Formik 
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    {successMessage && <div className="success-message">{successMessage}</div>}
                                    <div className="mb-4"> 
                                        <label htmlFor="companyName" className="block text-gray-700 font-medium mb-1">Company Name</label>
                                        <Field 
                                            type="text" 
                                            id="companyName" 
                                            name="companyName" 
                                            className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        />
                                        <ErrorMessage name="companyName"> 
                                            {(errorMsg) => <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    {/*  Company Logo: Integrate your upload component. Adapt field name as needed */}
                                    <div className="mb-4">
                                        <label htmlFor="logo" className="block text-gray-700 font-medium mb-1">Company Logo</label>
                                        {/* <YourImageUploadComponent name="logo" />  */}
                                        <YourImageUploadComponent />
                                    </div>
                                    <div className="mb-4"> 
                                        <label htmlFor="location" className="block text-gray-700 font-medium mb-1">Location</label>
                                        <Field 
                                            type="text" 
                                            id="location" 
                                            name="location" 
                                            className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        />
                                        <ErrorMessage name="location" /> 
                                    </div>

                                    <div className="mb-4"> 
                                        <label htmlFor="description" className="block text-gray-700 font-medium mb-1">Brief Company Description</label>
                                        <Field 
                                            as="textarea" // For multi-line input
                                            id="description" 
                                            name="description" 
                                            rows="3"   
                                            className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        />
                                        <ErrorMessage name="description" /> 
                                    </div>
                                    {/* ... Input fields with Field, ErrorMessage (See below) ... */}
                                    <button type="submit" className="btn btn-primary mt-3" disabled={isSubmitting}>
                                        {isLoading ? 'Saving...' : 'Save Changes'}
                                    </button>
                                </Form>
                                )}
                            </Formik>
                        </div>
                    </form> 
                </div>
            </div> 
        </div>
    );
};


export default CompanyInfoTab;
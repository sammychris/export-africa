import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageUploadComponent from '@/components/ImageUploadComponent';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Button from './Button';
import AlertContainer from '@/containers/AlertContainer';

const initialValues = { 
    companyName: '', //  Prefill with  existing data 
    logo: null, // Assuming  pre-filled state if a logo exists
    country: '',
    state: '',
    description: ''
};

const validationSchema = Yup.object({
    companyName: Yup.string().required('Company name is required'),
    // location: Yup.string().required('Location is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    logo: Yup.mixed().required('Logo is required'),
    description: Yup.string().required('Company Description is required'),
});

const CompanyInfoForm = ({ formData, isLoading, status, setStatus, handleSubmit }) => {
    return (
        <div className="tab-content mt-4">
            <div id="company-info" className="tab-pane fade in active"> 
                    <div className="tab-pane fade show active" id="company-info"> 
                        <Formik 
                            initialValues={formData || initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, values, setFieldValue }) => {
                            return (
                                <Form className="bg-white p-6 rounded-lg shadow-md">
                                    {status.type && <AlertContainer handleClose={() => setStatus({})} type={status.type} isDismissible>{status.message}</AlertContainer>}
                                    <div className="mb-4">
                                        <label htmlFor="companyName"  className="block text-gray-700 font-medium mb-2">Company Name</label>
                                        <Field 
                                            type="text" 
                                            id="companyName" 
                                            name="companyName" 
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
                                        />
                                        <ErrorMessage name="companyName"> 
                                            {(errorMsg) => <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    {/*  Company Logo: Integrate your upload component. Adapt field name as needed */}
                                    <div className="mb-4">
                                        <label htmlFor="logo"  className="block text-gray-700 font-medium mb-2">Company Logo</label>
                                        <ImageUploadComponent images={values.logo} onChange={(imageList) => setFieldValue('logo', imageList)} />
                                        <ErrorMessage name="logo"> 
                                            {(errorMsg) => <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="mb-4"> 
                                        <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country</label>
                                        <CountryDropdown
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
                                            value={values.country}
                                            onChange={(val) => setFieldValue('country', val)}
                                        />
                                        <ErrorMessage name="country"> 
                                            {(errorMsg) => <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
                                        </ErrorMessage>
                                    </div>
                                    {values.country && (<div className="mb-4"> 
                                        <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                                        <RegionDropdown
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
                                            country={values.country}
                                            value={values.state}
                                            onChange={(val) => setFieldValue('state', val)}
                                        />
                                        <ErrorMessage name="state"> 
                                            {(errorMsg) => <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
                                        </ErrorMessage>
                                    </div>)}
                                    {/* <div className="mb-4"> 
                                        <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
                                        <Field 
                                            type="text" 
                                            id="location" 
                                            name="location" 
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
                                        />
                                        <ErrorMessage name="location"> 
                                            {(errorMsg) => <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
                                        </ErrorMessage>
                                    </div> */}

                                    <div className="mb-4"> 
                                        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Brief Company Description</label>
                                        <Field 
                                            as="textarea" // For multi-line input
                                            id="description" 
                                            name="description" 
                                            rows="3"   
                                            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
                                        />
                                        <ErrorMessage name="description"> 
                                            {(errorMsg) => <div className="text-red-500 text-sm mt-1">{errorMsg}</div>}
                                        </ErrorMessage>
                                    </div>
                                    <Button type="submit" isLoading={isLoading}>Save Changes</Button>
                                </Form>
                                )}
                            }</Formik>
                        </div>
                </div>
        </div>
    );
};


export default CompanyInfoForm;





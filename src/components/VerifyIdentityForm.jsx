import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FileUploader from './FileUploader'; // Assuming you keep FileUploader separate
import AlertContainer from '@/containers/AlertContainer';
import Button from './Button';


const validationSchema = Yup.object().shape({
    companyDocuments: Yup.mixed().required('Company documents are required'), 
    idDocument: Yup.mixed().required('ID document is required'),
    addressProof: Yup.mixed().required('Address proof is required'),
});

const VerifyIdentityForm = ({ formData, isLoading,  status, setStatus, handleSubmit, handlePreviousScreen}) => {
  return (
    <div className="tab-content mt-4">
      <div id="company-info" className="tab-pane fade in active"> 
        <Formik
          initialValues={formData || {
            companyDocuments: null,
            idDocument: null,
            addressProof: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="bg-white p-6 rounded-lg shadow-md">
               {status.type && <AlertContainer handleClose={() => setStatus({})} type={status.type} isDismissible>{status.message}</AlertContainer>}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Company Registration Documents:
                </label>
                <p className='ml-6 text-sm mb-2 text-gray-600'>Certificate of Incorporation (or CAC)</p>
                <Field name="companyDocuments">
                    {({ field, form }) => {
                    return <>
                        <FileUploader 
                            value={values.companyDocuments}
                            onChange={(files) => setFieldValue('companyDocuments', files)}
                        />
                        <ErrorMessage name="companyDocuments" component="div" className="text-red-500" />
                    </>}}
                </Field>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Authorized Signatory Identification:
                </label>
                <p className='ml-6 text-sm mb-2 text-gray-600'>{`Government-issued ID of the authorized signatory (voter's card, NIN, Int Passport, or Driver's Licensed)`}</p>
                <Field name="idDocument">
                    {({ field, form }) => <>
                        <FileUploader
                            value={values.idDocument}
                            onChange={(files) => setFieldValue('idDocument', files)}/>
                        <ErrorMessage name="idDocument" component="div" className="text-red-500" />
                    </>}
                </Field>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    {`Proof of house or company's address: `} 
                </label>
                <p className='ml-6 text-sm mb-2 text-gray-600'>Utility bill or Bank statement</p>
                <Field name="addressProof">
                    {({ field, form }) => <>
                        <FileUploader
                            value={values.addressProof}
                            onChange={(files) => setFieldValue('addressProof', files)}/>
                        <ErrorMessage name="addressProof" component="div" className="text-red-500" />
                    </>}
                </Field>
              </div>
              <div className="flex justify-start mt-6"> 
                  <button 
                    type="button" 
                    onClick={() => handlePreviousScreen()} // Function to handle going back
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md mr-2"
                  >
                    Previous
                  </button>
                  <Button type="submit" isLoading={isLoading}>Save Changes</Button>
                </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default VerifyIdentityForm;

                  
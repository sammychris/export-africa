import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select'; 
import FileUploader from '@/components/FileUploader';
import AlertContainer from '@/containers/AlertContainer';
import Button from './Button';

const categoryOptions = [
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'textiles', label: 'Textiles' },
  { value: 'electronics', label: 'Electronics' },
];

// Formik Validation Schema
const validationSchema = Yup.object({
  productCategories: Yup.array()
    .of(Yup.object().shape({
      value: Yup.string().required('Required'),
      label: Yup.string().required('Required'),
    }))
    .min(1, 'Select at least one category'), // Add category validation if needed
    certifications: Yup.array()
    .of(Yup.mixed().required('A file is required')) // Placeholder (adjust for real file validation)
});


function ProductCertificateForm({ formData, isLoading, status, setStatus, handleSubmit, handlePreviousScreen }) {
  return (
    <div className="tab-content mt-4">
      <div id="company-info" className="tab-pane fade in active">
        <div className="tab-pane fade show active" id="company-info">
          {/* Wrap your form in Formik  */}
          <Formik
            initialValues={formData || { productCategories: [], certifications: [] }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, errors, touched, values, isSubmitting }) => ( // Destructure necessary props
              <Form className="bg-white p-6 rounded-lg shadow-md">
                {status.type && <AlertContainer handleClose={() => setStatus({})} type={status.type} isDismissible>{status.message}</AlertContainer>}
                <div className="mb-4">
                  <label htmlFor="categories" className="block text-gray-700 font-medium mb-2">
                    Product Categories
                  </label>
                  <Field name="productCategories">
                    {({ field, form: { touched, errors } }) => {
                    return ( // Destructure form
                      <Select
                        {...field}
                        options={categoryOptions}
                        isMulti
                        placeholder="Select categories..."
                        className="basic-multi-select"
                        classNamePrefix="select"
                        // value={field.value} // Map Formik's value 
                        onChange={(selectedOptions) => setFieldValue('productCategories', selectedOptions)}
                        // onBlur={() => field.onBlur('value') } // Map Formik's onBlur
                        // isClearable // Add if needed
                      />
                    )}}
                  </Field>
                  <ErrorMessage name="productCategories" component="div" className="text-red-500" />
                </div>

                {/* Exporter's Certificates */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    {`Exporter's Certificates`}
                  </label>
                  <label className="block">Upload any relevant certifications or licenses</label>
                  <Field name="certifications">
                    {({ field, form }) => (
                      <FileUploader
                        value={form.values.certifications}
                        onChange={(files) => form.setFieldValue('certifications', files)}
                        multiple
                      />
                     )}
                  </Field>
                  <ErrorMessage name="certifications" component="div" className="text-red-500" />
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
    </div>
  );
}

export default ProductCertificateForm;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SocialLinkField from './SocialLinkField';
import AlertContainer from '@/containers/AlertContainer';
import Button from './Button';


const initialValues = {
  contact: {
    email: '',
    phone: '',
    website: '',
  },
    socialLinks: [],
  };

const validationSchema = Yup.object({
    contact: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      website: Yup.string().url('Invalid URL form'),
    }),
    socialLinks: Yup.array().of(
    Yup.object().shape({
        platform: Yup.string().required('Required'),
        url: Yup.string().url('Invalid URL format').required('Required'),
    })
    ),
});

const ContactDetailsForm = ({ formData, isLoading, status, setStatus, handleSubmit, handlePreviousScreen }) => (
  <Formik
    initialValues={formData || initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}>
    {({ errors, touched, values, setFieldValue, isSubmitting }) => ( // Destructure only what's directly needed
      <Form className="bg-white p-6 rounded-lg shadow-md">
        {status.type && <AlertContainer handleClose={() => setStatus({})} type={status.type} isDismissible>{status.message}</AlertContainer>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="contact.email"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
          />
          <ErrorMessage name="contact.email" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Phone
          </label>
          <Field
            type="phone"
            id="phone"
            name="contact.phone"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
          />
          <ErrorMessage name="contact.phone" component="div" className="text-red-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="website" className="block text-gray-700 font-medium mb-2">
            Website
          </label>
          <Field
            type="website"
            id="website"
            name="contact.website"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-blue-500"
          />
          <ErrorMessage name="contact.website" component="div" className="text-red-500" />
        </div>

        {/* Social Media Links */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Social Media Links
          </label>
          {values.socialLinks.map((link, index) => (
            <SocialLinkField
                key={index}
                index={index}
                name={`socialLinks[${index}]`}
                onChange={(field, value) => {
                    return setFieldValue(field.target.name, field.target.value) // *** Updated line 
                }}
                onRemove={(index) => {
                    const newLinks = [...values.socialLinks];
                    newLinks.splice(index, 1);
                    return setFieldValue('socialLinks', [...newLinks]);
                }}
            />
          ))}
          
            <button
                type="button"
                onClick={() => setFieldValue('socialLinks', [...values.socialLinks, { platform: '', url: '' }])}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
            >
                Add Social Link
            </button>
        </div>

        <div className="flex justify-start mt-6"> 
            <button 
                type="button" 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-md mr-2"
                onClick={() => handlePreviousScreen()}
            >
                Previous
            </button>
            <Button type="submit" isLoading={isLoading}>Save Changes</Button>
        </div>
      </Form>
    )}
  </Formik>
);

export default ContactDetailsForm;

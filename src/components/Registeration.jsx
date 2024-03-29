// RegistrationForm.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      preferences: {
        productCategories: '',
        preferredRegions: '',
        specificCountries: '',
      },
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      preferences: Yup.object({
        productCategories: Yup.string().required('Preferred Product Categories are required'),
        preferredRegions: Yup.string().required('Preferred Regions are required'),
        specificCountries: Yup.string().required('Specific Countries are required'),
      }),
    }),
    onSubmit: (values) => {
      // Your form submission logic here
      console.log(values);
    },
  });

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-neutral">
      <h2 className="text-2xl font-bold mb-4 text-deep-blue">User Registration</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-deep-blue">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-deep-blue"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-sm text-terracotta">{formik.errors.fullName}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-deep-blue">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-deep-blue"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-terracotta">{formik.errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-deep-blue">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-deep-blue"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-terracotta">{formik.errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="productCategories" className="block text-sm font-medium text-deep-blue">
            Preferred Product Categories
          </label>
          <input
            type="text"
            id="productCategories"
            name="preferences.productCategories"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.preferences.productCategories}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-deep-blue"
          />
          {formik.touched.preferences?.productCategories && formik.errors.preferences?.productCategories && (
            <p className="text-sm text-terracotta">{formik.errors.preferences.productCategories}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="preferredRegions" className="block text-sm font-medium text-deep-blue">
            Preferred Regions
          </label>
          <input
            type="text"
            id="preferredRegions"
            name="preferences.preferredRegions"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.preferences.preferredRegions}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-deep-blue"
          />
          {formik.touched.preferences?.preferredRegions && formik.errors.preferences?.preferredRegions && (
            <p className="text-sm text-terracotta">{formik.errors.preferences.preferredRegions}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="specificCountries" className="block text-sm font-medium text-deep-blue">
            Specific Countries
          </label>
          <input
            type="text"
            id="specificCountries"
            name="preferences.specificCountries"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.preferences.specificCountries}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-deep-blue"
          />
          {formik.touched.preferences?.specificCountries && formik.errors.preferences?.specificCountries && (
            <p className="text-sm text-terracotta">{formik.errors.preferences.specificCountries}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-deep-blue text-white p-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring focus:border-deep-blue"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;

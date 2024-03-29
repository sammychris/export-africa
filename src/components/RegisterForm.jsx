// RegisterForm.jsx
import AlertContainer from '@/containers/AlertContainer';
import React from 'react';
import Button from './Button';

const RegisterForm = ({ formik, isLoading, status, setStatus}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        {
          status.type &&
          <AlertContainer
            type={status.type}
            handleClose={() => setStatus({})}
            isDismissible
            >
            {status.message}
          </AlertContainer>
        }
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Signup Form Fields */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                formik.errors.firstName && formik.touched.firstName ? 'border-red-500' : 'focus:border-deep-blue'
              }`}
              required
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.firstName}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                formik.errors.lastName && formik.touched.lastName ? 'border-red-500' : 'focus:border-deep-blue'
              }`}
              required
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.lastName}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                formik.errors.email && formik.touched.email ? 'border-red-500' : 'focus:border-deep-blue'
              }`}
              required
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Additional signup fields */}
          {/* ... */}

          {/* Signup Password Fields */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type={formik.values.showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                formik.errors.password && formik.touched.password ? 'border-red-500' : 'focus:border-deep-blue'
              }`}
              required
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type={formik.values.showPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
                formik.errors.confirmPassword && formik.touched.confirmPassword
                  ? 'border-red-500'
                  : 'focus:border-deep-blue'
              }`}
              required
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</p>
            )}
          </div>

          {/* Signup additional elements can be added here */}
          <div className="mb-4 flex items-center">
            {/* <button
              type="submit"
              className="bg-deep-blue text-white py-2 px-4 rounded-md"
              disabled={formik.isSubmitting}>
              {isLoading ? 'Loading... ' : 'Sign Up'}
            </button> */}

            {/* <Button /> */}

            <Button isLoading={isLoading} color="deep-blue" type="submit">
              Sign Up
            </Button>
          </div>

          {/* Social Login Options */}
          {/* <div className="mb-4">
            <p className="text-gray-700 mb-2">Login with:</p>
            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Google</button>
              <button className="bg-indigo-700 text-white py-2 px-4 rounded-md">Facebook</button> */}
              {/* Add more social login buttons as needed */}
            {/* </div>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

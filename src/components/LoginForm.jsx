import React from 'react';
import Button from './Button';
import AlertContainer from '@/containers/AlertContainer';



const LoginForm = ({ formik, isLoading, status, setStatus }) => {
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
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Login Form Fields */}
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
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
              <button
                type="button"
                onClick={() => formik.setFieldValue('showPassword', !formik.values.showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {formik.values.showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
            )}
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-600">
              Remember Me
            </label>
          </div>

          <div className="mb-4 text-right">
            <a href="/forgot-password" className="text-deep-blue hover:underline">
              Forgot Password?
            </a>
          </div>

          <div className="mb-4 flex items-center">
            {/* <button type="submit" className="bg-deep-blue text-white py-2 px-4 rounded-md">
              Login */}
            {/* </button> */}
            <Button isLoading={isLoading} color="deep-blue" type="submit">
              Login
            </Button>
          </div>

          

          {/* Social Login Options */}
          {/* <div className="mb-4">
            <p className="text-gray-700 mb-2">Login with:</p>
            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Google</button>
              <button className="bg-indigo-700 text-white py-2 px-4 rounded-md">Facebook</button>
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

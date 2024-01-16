import React from 'react';

const LoginForm = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <div>
      <div className='flex justify-center h-screen items-center'>
        <form className='w-[568px] h-[491px] bg-white shadow-[0px_13px_26px_0px_rgba(0,0,0,0.10)] rounded-md' onSubmit={handleSubmit}>
          <h1 className='py-[30px] text-[#2B2F30] text-center text-2xl font-normal'>Login</h1>
          <hr />
          <div className='flex flex-col items-center'>
            <div className='w-[420px] pt-[35px]'>
              <label className='text-[#757575] text-base font-normal' htmlFor='email'>
                Email
              </label>
              <br />
              <input
                type='text'
                id='email'
                name='email'
                className='bg-[#F2F2F2] rounded-[3px] h-[40px] p-4 w-full my-2'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {(touched.email && errors.email) && <div className='text-[#DF5146] text-xs font-normal'>{errors.email}</div>}
            </div>
            <div className='w-[420px] pt-[35px]'>
              <label className='text-[#757575] text-base font-normal' htmlFor='password'>
                Password
              </label>
              <br />
              <input
                type='password'
                id='password'
                name='password'
                className='bg-[#F2F2F2] rounded-[3px] h-[40px] p-4 w-full my-2'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div className='text-[#DF5146] text-xs font-normal'>{errors.password}</div>
              )}
            </div>
            <div className='p-[50px]'>
              <button className='w-[125px] h-10 bg-[#5CBC9A] rounded-[3px] text-[#fff] hover:bg-[#4a967b]' type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Logging...' : 'Login'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

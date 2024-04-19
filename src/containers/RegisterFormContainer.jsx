// RegisterFormContainer.jsx
'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import RegisterForm from '@/components/RegisterForm';
import { register } from '@/apiServices/authApi';
import { useRouter } from 'next/navigation';
import EmailVerificationSent from '@/components/EmailVerificationSent';

const RegisterFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false); 
  const [status, setStatus] = useState({});
  const [ isRegistered, setRegistered ] = useState(false);
  const [ savedUser, setSavedUser ] = useState({});
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSubmit = async (values, {setSubmitting}) => {
      setIsLoading(true);
      const status = {};
      try {
          await register(values);
          status.type = "success";
          status.message = "Registration successful! Please check your email to verify your account.";
          setStatus(status);
          setTimeout(() => {
            setRegistered(true);
          }, 3000); 
      } catch ({response}) {
          status.type = "error";
          status.message = response?.data?.error;
          if (status.message === 'Internal Server Error') status.message = 'Registration failed. Please try again.'
          setStatus(status);
          setIsLoading(false);
          console.error('Error response:', response);
      } finally {
          setSavedUser(values);
          setSubmitting(false);
      }
  };

  const reSubmit = async () => {
    setIsLoading(true);
    const status = {};
    try {
        await register(savedUser);
        status.type = "success";
        status.message = "Verification email has been re-sent";
        setStatus(status);
    } catch ({response}) {
        status.type = "error";
        status.message = response?.data?.error;
        setStatus(status);
        console.error('Error response:', response);
    } finally {
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
        isRegistered
          ? <EmailVerificationSent reSubmit={reSubmit} savedUser={savedUser} status={status} setStatus={setStatus}/>
          : (<RegisterForm formik={formik} isLoading={isLoading} status={status} setStatus={setStatus}/>)
        
  );
};

export default RegisterFormContainer;

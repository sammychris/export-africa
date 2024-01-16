'use client'
import React, {useState} from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LoginForm from '@/components/LoginForm';
import { login } from '@/apiServices/authApi';


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginFormContainer = () => {
    const handleSubmit = async (values, {setSubmitting}) => {
        try {
            await login(values);
            alert("You've Successful Logged In")
            window.location.reload();
        } catch (error) {
            alert("Oops! No active account found with the given credentials")
            console.error('Error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
        >
            {(formikProps) => <LoginForm {...formikProps}/>}
        </Formik>
    );
};

export default LoginFormContainer;

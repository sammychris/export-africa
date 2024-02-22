'use client';
import React, {useState, useEffect} from 'react';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LoginForm from '@/components/LoginForm';
import {useRouter} from 'next/navigation';
import { login as credentialsLogin} from '@/apiServices/authApi';
import { authLogin } from '@/lib/features/auth/authSlice';


const initialValues = { email: '', password: '' };
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});


const LoginFormContainer = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({});
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector(state => state.auth);

    useEffect(() => {
      if (isAuthenticated) return router.push('/');
    }, [isAuthenticated, router]);
    

    const handleSubmit = async (values, {setSubmitting}) => {
      setIsLoading(true);
      const status = {};
      try {
          const {data} = await credentialsLogin(values);
          status.type = "success";
          status.message = "You've Successful Logged In";
          setStatus(status);
          dispatch(authLogin(data));
          validateUser(data.role);
      } catch ({response}) {
          status.type = "error";
          status.message = response?.data?.error;
          setStatus(status);
          setIsLoading(false);
          console.error('Error:', response.data);
      } finally {
          setSubmitting(false);
      }
    };

    const validateUser = (userRole) => {
      let page;
      if (userRole === 'exporter') {
        page = '/exporters/my-profile';
      } else if (userRole === 'user') {
        page = '/user/profile';
      } else if (userRole === 'admin') {
        page = '/admin';
      } else { 
        page = '/choose-account-type'; // Default redirection
      }
      window.location.href = page;
    }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return <LoginForm formik={formik} isLoading={isLoading} status={status} setStatus={setStatus}/>;
};

export default LoginFormContainer;


// undefined, { shallow: true }

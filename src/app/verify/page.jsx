'use client'
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks'
import { useRouter, useSearchParams } from 'next/navigation';
import { login as credentialsLogin} from '@/apiServices/authApi';
import { login as loginState, logout, setUserData } from '@/lib/features/auth/authSlice';
import AppLoader from '../loading';
import axios from 'axios';
import Link from 'next/link';

// Add styling imports as needed for loader

const VerifyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const oldToken = searchParams.get('token');
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, token } = useAppSelector(state => state.auth);

  const [isLoading, setIsLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState(''); // 'success', 'failed', 'expired'

  useEffect(() => {
    const verifyToken = async () => {
      if (!oldToken) return;

      try {
        setIsLoading(true);
        const {data} = await axios.get(`/api/auth/verify-token?token=${oldToken}`); 
        if (data.success) {
          setVerificationStatus('success');    
          dispatch(loginState(data));
          router.push('/choose-account-type');
        }

      } catch ({response}) {
          if(response.data.error === "alreadyVerified") {
            setVerificationStatus('alreadyVerified');  
          } else if (response.data.error === 'Token expired.') {
            setVerificationStatus('expired');  
          } else {
            setVerificationStatus('failed');
          }
          console.log("error respsonse: ", {response})
      } finally {
        setIsLoading(false);
      }
    };

    verifyToken();
  }, [dispatch, oldToken, router]); 

  const handleResend = async () => {
     // ... API call to trigger the regeneration of the verification email
     // Update UI  (a brief confirmation message perhaps) 
  };

  if(isLoading) return <AppLoader />
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md"> {/* Adjust as per LinkedIn styling */}

        {!isLoading && verificationStatus === 'success' && (
          <div>
            <h1 className='text-2xl font-semibold text-center'>Verification Successful!</h1>
            <p className="text-center">Redirecting...</p> 
          </div>
        )}

        {!isLoading && verificationStatus === 'alreadyVerified' && (
          <div>
            <h1 className='text-2xl font-semibold text-center'>User Already Verified!</h1>
            <p className="text-center">Your account is already verified. Please <Link href="/login" className='text-blue-500'>log in here</Link>.</p>
          </div>
        )}

        {!isLoading && (verificationStatus === 'failed' || verificationStatus === 'expired' ) && (
          <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-semibold text-center'>Verification Failed</h1> 

            {verificationStatus === 'expired' && (
                <p className="text-center">
                    Your verification link has expired. Please request a new one.
                </p>
            )}

            {verificationStatus === 'failed' || !verificationStatus && (
                <p className="text-center">
                    An error occurred. Please try again later or contact support if the issue persists.
                </p>
            )}

            <button className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 mt-2' onClick={handleResend}>
              Resend Verification Email
            </button>
          </div>
        )} 

      </div>
    </div>
  );
};

export default VerifyPage;

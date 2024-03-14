import AlertContainer from '@/containers/AlertContainer';
import { useState, useEffect } from 'react';

const EmailVerificationSent = ({reSubmit, savedUser, status, setStatus}) => {
    const [countdown, setCountdown] = useState(30); // Initial resend timer - 30 seconds
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    useEffect(() => {
        const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
        
        if (countdown === 0) {
            setIsResendDisabled(false);
        }
        return () => clearInterval(timer);
    }, [countdown]);

    const handleResend = async () => {
        await reSubmit();
        setCountdown(30);
        setIsResendDisabled(true);
    };
    return (
        <div class="container mx-auto flex flex-col items-center py-12">
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
            <h1 class="text-3xl font-bold mb-4">Please check your email for a verification link.!</h1>
            <p class="text-gray-600 mb-6">{`We've sent a verification email to ${savedUser?.email}. Click the link to activate your account.`}</p>
            <div class="bg-gray-100 border border-gray-300 text-gray-700 p-4 rounded-md mb-6">
            <p>{`Don't see it? Check your spam folder. Still no luck? `}
                <button 
                    onClick={handleResend} 
                    disabled={isResendDisabled}
                    class={!isResendDisabled? "text-blue-600 hover:underline":""}
                >
                    Resend Verification Email { isResendDisabled && `(after ${countdown} seconds)`}   
                </button>
            </p>
            </div>
        </div>
    )
}

export default EmailVerificationSent;
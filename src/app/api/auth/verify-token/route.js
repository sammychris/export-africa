'use server'
import { setAuthCookie, verifyToken } from '@/lib/autheticate';
import connectDB from '@/utils/db';
import { findOne, createUser } from '@/lib/userHelpers';


connectDB();

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const oldToken = searchParams.get('token');

    // Verify the token
    const { decodedToken, success, error } = await verifyToken(oldToken); 

    // // Check if the user is authenticated
    if (!success) return Response.json({ success: false, error }, { status: 401 });

    const { firstName, lastName, email, password } = decodedToken;

    // Check if the email is already registered
    const existingUser = await findOne({ email });
    if (existingUser) {
      return Response.json({ success: false, message: 'This account has already been verified.', error: 'alreadyVerified' }, {
        status: 409,
      });
    }

    const newUser = await createUser({ firstName, lastName, email, password });

    await setAuthCookie(newUser._id, newUser.role); // storing token to cookie
  
    return Response.json({ success: true, token, message: 'User verified successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}

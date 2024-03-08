import bcrypt from 'bcrypt';
import connectDB from '@/utils/db';
import { findOne } from '@/lib/userHelpers';
import { generateAuthToken } from '@/lib/autheticate';
import { sendVerificationEmail } from '@/utils/sendMail'; 

connectDB();

export async function POST(request) {
  try {
    const { firstName, lastName, email, password } = await request.json();

    // Check if the email is already registered
    const existingUser = await findOne({ email });

    if (existingUser) {
      return Response.json({ success: false, error: 'Email already registered' }, {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password securely

    const token = await generateAuthToken({ firstName, lastName, email, password: hashedPassword }, '15m');

    await sendVerificationEmail(email, token);

    return Response.json({ success: true, message: 'Verification email sent. Please check your inbox.' }, {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: 'Internal Server Error' }, {
      status: 500,
    });
  }
}

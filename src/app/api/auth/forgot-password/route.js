import { findOne } from '@/lib/userHelpers'
import { createResetPasswordToken, sendPasswordResetEmail } from '@/lib/auth'; // Assuming auth functions are in a separate file

export default async function POST(req) {
  const { email } = req.body;

  try {
    // Validate email (e.g., check for required field, valid email format)
    const user = await findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = await createResetPasswordToken(user);
    await sendPasswordResetEmail(user, resetToken);

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to initiate password reset' });
  }
}

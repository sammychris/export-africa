import { verifyCredentials, setAuthCookie } from '@/lib/autheticate';
import connectDB from '@/utils/db';

connectDB();

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Authenticate user
    const user = await verifyCredentials(email, password);

    if (user.error) {
      return Response.json({ success: false, error: user.error }, {
        status: user.status,
      });
    }

    await setAuthCookie(user._id, user.role); // storing token to cookie

    return Response.json({ success: true, data: { userId: user._id, role: user.role } }, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: 'Internal Server Error' }, {
      status: 500,
    });
  }
}

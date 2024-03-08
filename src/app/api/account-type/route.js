'use server'
import connectDB from '@/utils/db';
import { updateUser } from '@/lib/userHelpers';
import { isAuthenticated } from '@/lib/autheticate';


connectDB();

export async function PUT(request) {
    try {
        const authResult = await isAuthenticated(request);
        if (!authResult.authenticated){
          return Response.json({ success: false, error: authResult.error}, {status: authResult.status})
        }
        const data = await request.json();
        const updatedUser = await updateUser(authResult?.userId, data);

        return Response.json({ success: true, data: updatedUser, message: 'Profile Updated' }, {
            status: 201,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' }, {
            status: 500,
        });
    }
}

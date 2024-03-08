// Inside your Next.js API route handler
import { isAuthenticated } from '@/lib/autheticate';

export async function GET(request) {
    try {
        const authData = await isAuthenticated(request);
        if(!authData.authenticated) {
            return Response.json({ success: false, error: 'Not authenticated' }, {
                status: 401,
            });
        }
        return Response.json({ success: true, data: authData }, {
            status: 200,
        });
    } 
    catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' }, {
            status: 500,
        });
    }
}

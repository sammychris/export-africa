
import connectDB from '@/utils/db';
import { findExporterByUserId }from '@/lib/exporterHelpers';
import { isAuthenticated } from '@/lib/autheticate';


connectDB();



export async function GET(request) {
    try {
        const authResult = await isAuthenticated(request);
        if (!authResult.authenticated){
            return Response.json({ success: false, error: authResult.error}, {status: authResult.status})
        }

        const exporter = await findExporterByUserId(authResult.userId);
        if (!exporter) {
            return Response.json({ success: false, error: 'No exporter profile found for this user' }, {
                status: 404,
            });
        }

        const isProfileOwner = true;
        return Response.json({ success: true, data: exporter, isProfileOwner }, {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return Response.json({ success: false, error: 'Internal Server Error' }, {
        status: 500,
        });
    }
}

  
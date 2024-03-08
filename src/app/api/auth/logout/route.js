import { removeAuthCookie } from "@/lib/autheticate";


export async function GET() {
    try {
        await removeAuthCookie();
        return Response.json({ success: true, message: 'Logged out successfully' }, {
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

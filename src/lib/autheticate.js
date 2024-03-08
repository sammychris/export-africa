// utils/authenticate/authorize.js
import bcrypt from 'bcrypt'; // Assuming bcrypt for password hashing
import { findOne } from '@/lib/userHelpers';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { findExporterByUserId } from './exporterHelpers';


export async function isAuthenticated(req, options = {}) {
    const cookie = req.cookies.get('authToken')
    const authHeader = req.headers.get('authorization');
  
    const token = authHeader && authHeader.split(' ')[1] || cookie?.value;

    if (!token) {
        return { authenticated: false, error: 'Unauthorized', status: 401 }; 
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 

         // Basic Auth Check
        if (!decoded.userId) { 
            return { authenticated: false, error: 'Unauthorized', status: 401 }; 
        }

        // Admin Bypass 
        if (decoded.role === 'admin') {
            return { authenticated: true, userId: decoded.userId, role: decoded.role }
        }

        // Ownership Check (if required)
        if (options.requireOwnership && options.resourceId) { // Updated
            const profile = await findExporterByUserId(decoded.userId).select('_id'); // find profile by logged user id...
            if (profile && profile._id.toString() !== options.resourceId) { // check if profileId is equal with the other id.
                return { authenticated: false, error: 'Forbidden', status: 403 }; 
            }
        }

        return { authenticated: true, userId: decoded.userId, role: decoded.role }; // All checks passed (for non-admins) 
    } catch (error) {
        return { authenticated: false, error: 'Unauthorized', status: 401 }; 
    }
}


export async function setAuthCookie(userId, role, expiresIn = '1h') {
  const cookiesList = cookies(); 
  const token = await generateAuthToken({ userId, role }, expiresIn);

  cookiesList.set('authToken', token, {
    httpOnly: true, 
    secure: true,
    path: '/', 
  });
}

export async function removeAuthCookie() {
    const cookiesList = cookies(); // I assume you have a way to access and manipulate cookies
    cookiesList.delete('authToken', { path: '/' }); 
}
  

export function getAuthToken() {
    const cookieStore = cookies();
    const tokenValue = cookieStore.get('authToken').value;
    if (!tokenValue) { 
        throw new Error('Missing authentication token');
    }
    return tokenValue;  
}
  




export function authorizeRole(user, requiredRole) {
    if (!user || user.role !== requiredRole) {
      return { success: false, error: 'Unauthorized', status: 403 };
    }
    return { success: true };
}


export async function generateAuthToken(data, timer) {
    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: timer });
}


export async function verifyCredentials(email, password) {
    const user = await findOne({ email });

    if (!user) return { error: 'User not found', status: 404 };; // User not found
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
        return user; // Credentials match
    } else {
        return { error: 'Invalid password', status: 401 };
    }
}

  
export async function verifyToken(token){
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        return { success: true, decodedToken };
    } catch (error) {
        if (error.name === 'TokenExpiredError') { 
            return { success: false, error: 'Token expired.' };
          } else {
            return { success: false, error: 'Invalid token'};
          }
    }
}

  

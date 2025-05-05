import { NextRequest } from 'next/server';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import prisma from './prisma';
import { SECRET_KEY } from './constants';

interface TokenData {
  username: string;
  expirationTime: number;
}

interface AuthResult {
  isAuthenticated: boolean;
  username?: string;
  isAdmin?: boolean;
  error?: string;
}

// Password verification function for NextAuth
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Password hashing function for creating users
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// Legacy functions (can be removed once migration is complete)
export function parseToken(token: string): TokenData | null {
  try {
    console.log('Parsing token:', token.substring(0, 15) + '...');
    
    const parts = token.split(':');
    if (parts.length < 3) {
      console.log('Invalid token format: Not enough parts, found', parts.length);
      return null;
    }
    
    const signature = parts.pop()!;
    const username = parts[0];
    const expirationTimeStr = parts[1];
    
    if (!username || !expirationTimeStr) {
      console.log('Invalid token data: Missing username or expiration');
      return null;
    }
    
    const expirationTime = parseInt(expirationTimeStr, 10);
    if (isNaN(expirationTime)) {
      console.log('Invalid token expiration time');
      return null;
    }
    
    const data = `${username}:${expirationTimeStr}`;
    
    // Check if token is expired
    const now = Date.now();
    if (now > expirationTime) {
      console.log(`Token expired: Current time=${now}, expiration=${expirationTime}`);
      return null;
    }
    
    // Verify signature
    const hmac = crypto.createHmac('sha256', SECRET_KEY);
    const expectedSignature = hmac.update(data).digest('hex');
    
    console.log('Expected signature:', expectedSignature.substring(0, 10) + '...');
    console.log('Actual signature:', signature.substring(0, 10) + '...');
    
    if (signature !== expectedSignature) {
      console.log('Invalid token signature');
      return null;
    }
    
    console.log(`Token valid for user: ${username}`);
    return {
      username,
      expirationTime
    };
  } catch (error) {
    console.error('Error parsing token:', error);
    return null;
  }
}

export async function verifyAuth(request: NextRequest): Promise<AuthResult> {
  try {
    // Get the auth token from cookies
    const cookieHeader = request.headers.get('cookie');
    console.log('Cookie header present:', cookieHeader ? 'Yes' : 'No');
    
    const token = request.cookies.get('admin-auth-token')?.value;
    
    // Manual cookie parsing as a fallback
    if (!token && cookieHeader) {
      console.log('Attempting manual cookie parsing...');
      const cookies = cookieHeader.split(';').map(c => c.trim());
      const authCookie = cookies.find(c => c.startsWith('admin-auth-token='));
      
      if (authCookie) {
        const manualToken = authCookie.substring('admin-auth-token='.length);
        console.log('Found token via manual parsing');
        
        const tokenData = parseToken(manualToken);
        if (tokenData) {
          // Get user from database
          const user = await prisma.user.findUnique({
            where: { username: tokenData.username }
          });
          
          if (user) {
            return {
              isAuthenticated: true,
              username: user.username,
              isAdmin: user.isAdmin
            };
          }
        }
      }
    }
    
    if (!token) {
      return { isAuthenticated: false, error: 'No auth token' };
    }
    
    const tokenData = parseToken(token);
    
    if (!tokenData) {
      return { isAuthenticated: false, error: 'Invalid token' };
    }
    
    // Get user from database
    const user = await prisma.user.findUnique({
      where: { username: tokenData.username }
    });
    
    if (!user) {
      return { isAuthenticated: false, error: 'User not found' };
    }
    
    return {
      isAuthenticated: true,
      username: user.username,
      isAdmin: user.isAdmin
    };
  } catch (error) {
    console.error('Auth verification error:', error);
    return { isAuthenticated: false, error: 'Authentication failed' };
  }
}

/**
 * Check if the user has admin permissions
 * @param request - Next.js request object
 * @returns Boolean indicating whether user has admin permissions
 */
export async function checkAdminPermission(request: NextRequest): Promise<boolean> {
  const authResult = await verifyAuth(request);
  return authResult.isAuthenticated && authResult.isAdmin === true;
}

/**
 * Reset any persistent authentication state flags
 * This can be used when troubleshooting auth issues
 */
export function resetAuthState(): void {
  // This function will be imported by components that need to reset auth state
  // It's a hook for components to reset their own state variables
  
  // Note: Individual components should implement their own reset logic
  // by importing and calling this function
  console.log('Auth state reset requested');
} 
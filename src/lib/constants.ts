import crypto from 'crypto';

// Generate a consistent secret key for the application session
export const SECRET_KEY = process.env.JWT_SECRET_KEY!; 
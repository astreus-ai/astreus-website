import bcrypt from 'bcryptjs';

// Security level (10-12 is ideal)
const SALT_ROUNDS = 10;

/**
 * Hashes the given password
 * @param password - Password to be hashed
 * @returns Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(password, salt);
}

/**
 * Checks if the given password matches the hash
 * @param password - Password to check
 * @param hashedPassword - Hashed password
 * @returns Whether the password matches
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
} 
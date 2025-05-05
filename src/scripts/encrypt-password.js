#!/usr/bin/env node

import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Security level (10-12 is ideal, matching the auth system)
const SALT_ROUNDS = 10;

// Function to encrypt password
async function encryptPassword(password) {
  if (!password) {
    console.error('Error: Password is required');
    console.log('Usage: node encrypt-password.js YOUR_PASSWORD');
    process.exit(1);
  }

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);
    
    console.log('\n--- Encrypted Password ---');
    console.log(hashedPassword);
    console.log('\nStore this value securely in your admin system.');
    
    // Optionally save to a file (commented out by default)
    /*
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const outputDir = path.join(__dirname, '../../.secure');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(
      path.join(outputDir, 'encrypted-password.txt'),
      hashedPassword,
      'utf8'
    );
    console.log(`Password hash saved to ${path.join(outputDir, 'encrypted-password.txt')}`);
    */
    
    return hashedPassword;
  } catch (error) {
    console.error('Error encrypting password:', error.message);
    process.exit(1);
  }
}

// Get password from command line argument
const password = process.argv[2];
// Execute and handle the promise
encryptPassword(password).catch(err => {
  console.error('Encryption failed:', err);
  process.exit(1);
}); 
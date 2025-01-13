const crypto = require('crypto');

// Generate a random 32-byte (256-bit) key
const key = crypto.randomBytes(32);

// Convert to base64 format for storing in .env
const base64Key = key.toString('base64');

console.log('Your AES-256 Key (save this in your .env file as ENCRYPTION_KEY):');
console.log(base64Key);
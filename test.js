const { encrypt, decrypt } = require('./script');

// Test payload
const testPayload = {
  userId: 123,
  username: 'testuser',
  role: 'user'
};

try {
  // Encrypt the payload to get a token
  const token = encrypt(testPayload);
  console.log('Generated JWT Token:', token);
  
  // Decrypt the token to get back the payload
  const decryptedPayload = decrypt(token);
  console.log('Decrypted Payload:', decryptedPayload);
  
  // Verify the decrypted payload matches the original
  const isMatch = JSON.stringify(decryptedPayload) === JSON.stringify({
    ...testPayload,
    iat: decryptedPayload.iat // JWT adds an 'iat' (issued at) field
  });
  
  if (isMatch) {
    console.log('Success');
  } else {
    console.log('Failed: Decrypted payload does not match original');
  }
} catch (error) {
  console.error('Error:', error.message);
}
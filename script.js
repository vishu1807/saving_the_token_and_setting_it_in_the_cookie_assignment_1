const jwt = require('jsonwebtoken');

// Secret key for signing the token
const SECRET_KEY = 'jwt_secret_key_for_lab';

const encrypt = (payload) => {
  // encrypt the payload and return token
  return jwt.sign(payload, SECRET_KEY);
}

const decrypt = (token) => {
  // return decoded payload
  return jwt.verify(token, SECRET_KEY);
}

module.exports = {
  encrypt,
  decrypt
}
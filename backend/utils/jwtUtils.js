const jwt = require('jsonwebtoken');

const generateToken = (userId, roles) => {
  return jwt.sign({ userId, roles }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };

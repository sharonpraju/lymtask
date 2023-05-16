const mongoose = require('mongoose');

const users = new mongoose.Schema({
  name: { type: 'string', required: true },
  email: { type: 'string', required: true, unique: true },
  password: { type: 'string', required: true },
  type: { type: 'string', required: true },
  phone: { type: 'string', required: true },
  country: { type: 'string', required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('users', users);
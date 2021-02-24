const mongoose = require('mongoose');

const cyberSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  secCert: String,
  pentesting: String,
  renew: String,
  simulate: String,
});

const cyber = mongoose.model('cyber', cyberSchema);

module.exports = cyber;

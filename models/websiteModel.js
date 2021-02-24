const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  pages: Number,
  form: String,
  cert: String,
  domainHosting: String,
  emails: String,
  langs: Number,
});

const Website = mongoose.model('websites', websiteSchema);

module.exports = Website;

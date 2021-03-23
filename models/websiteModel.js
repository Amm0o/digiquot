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
  createdAt: {
    type: Date,
    default: Date.now(), // This returns the date current date in mili seconds but mongo converts it into readable human format!
  },
});

const Website = mongoose.model('websites', websiteSchema);

module.exports = Website;

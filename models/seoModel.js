const mongoose = require('mongoose');

const seoSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  revision: String,
  improvement: String,
  contentCreation: String,
  langs: Number,
});

const seo = mongoose.model('seo', seoSchema);

module.exports = seo;

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
  createdAt: {
    type: Date,
    default: Date.now(), // This returns the date current date in mili seconds but mongo converts it into readable human format!
  },
  priceAgency: String,
  priceFree: String,
});

const seo = mongoose.model('seo', seoSchema);

module.exports = seo;

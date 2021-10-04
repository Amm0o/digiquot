const mongoose = require('mongoose');

const onlineStoreSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
  form: String,
  cert: String,
  domainHosting: String,
  emails: String,
  langs: String,
  payment: String,
  billing: String,
  createdAt: {
    type: Date,
    default: Date.now(), // This returns the date current date in mili seconds but mongo converts it into readable human format!
  },
  priceAgency: String,
  priceFree: String,
  sentTo: [String],
});

const onlineStore = mongoose.model('onlinestores', onlineStoreSchema);

module.exports = onlineStore;

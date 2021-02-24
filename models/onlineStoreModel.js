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
});

const onlineStore = mongoose.model('onlinestores', onlineStoreSchema);

module.exports = onlineStore;

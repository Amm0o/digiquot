const { name } = require('ejs');
const agency = require('../models/agencyModel');

exports.createAgency = (name, email, pt, br, uk, au, es, pol, usa, uae) => {
  const agencyObj = {
    name: name,
    email: email,
    pt: pt,
    br: br,
    uk: uk,
    au: au,
    es: es,
    pol: pol,
    usa: usa,
    uae: uae,
  };
  const newAgency = agency.create(agencyObj);
};

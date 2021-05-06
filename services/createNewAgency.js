const agency = require('../models/agencyModel');

exports.createAgency = (name, email, countries, services) => {
  const agencyObj = {
    name: name,
    email: email,
    bannedCountries: countries,
    bannedServices: services,
  };
  const newAgency = agency.create(agencyObj);
};

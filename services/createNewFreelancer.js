const freelancer = require('../models/freeLancerModel');

exports.createFreelancer = (name, email, countries, services) => {
  const freelancerObj = {
    name: name,
    email: email,
    bannedCountries: countries,
    bannedServices: services,
  };
  const newFreelancer = freelancer.create(freelancerObj);
};

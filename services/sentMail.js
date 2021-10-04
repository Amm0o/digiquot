const { all } = require('../app');
const agency = require('../models/agencyModel');
const freelancer = require('../models/freeLancerModel');

exports.sentMail = async (country, service) => {
  const agencyEmails = await agency.find({});
  const freeEmails = await freelancer.find({});

  let emailArrAgency = [];
  agencyEmails.forEach(async element => {
    // Check for bans
    if (
      !element.bannedServices.includes(service) ||
      !element.bannedCountries.includes(country)
    ) {
      emailArrAgency.push(element.email);
      console.log(element.email);
    }
  });

  let emailArrFree = [];
  freeEmails.forEach(async element => {
    if (
      !element.bannedServices.includes(service) ||
      !element.bannedCountries.includes(country)
    ) {
      console.log(element.bannedServices.includes('Portugal'));
      emailArrFree.push(element.email);
    }
  });

  return emailArrFree.concat(emailArrAgency);
};

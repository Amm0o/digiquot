const Website = require('../models/websiteModel');
const Logotipo = require('../models/logoModel');
const onlineStore = require('../models/onlineStoreModel');
const socialNetwork = require('../models/socialNetworksModel');
const seo = require('../models/seoModel');
const googleAds = require('../models/googleAdsModel');
const cyber = require('../models/cyberModel');
const agency = require('../models/agencyModel');
const freelancer = require('../models/freeLancerModel');
const Email = require('../services/mailer');
const sentMails = require('../services/sentMail');

async function sendEmails(inComingService, free, age, service, countrie) {
  // Agency emails
  if (inComingService.email) {
    if (age > 0) {
      // Get all agencies
      const emails = await agency.find({});

      emails.forEach(async element => {
        // Get Current agency
        const email = await element;

        // Check for bans
        if (
          email.bannedServices.includes(service) ||
          email.bannedCountries.includes(countrie)
        ) {
          return;
        } else {
          // Send email
          await new Email(
            email.email,
            service,
            inComingService
          ).sendNewSimulation();
        }
      });
    }
    // Freelancer Emails
    if (free > 0) {
      const emailsFree = await freelancer.find({});
      emailsFree.forEach(async element => {
        // Get current Freelancer
        const email = await element;

        // Check for bans
        if (
          email.bannedServices.includes(service) ||
          email.bannedCountries.includes(countrie)
        ) {
          return;
        } else {
          // Send the email
          await new Email(
            email.email,
            service,
            inComingService
          ).sendNewSimulationFree();
        }
      });
    }
  }
}

exports.addService = async (req, res) => {
  // Website
  console.log('I got a request! 😎');
  console.log(req.body);
  if (req.params.service === 'Website') {
    let inComingService = {
      country: req.body.country,
      name: req.body.client.name,
      phone: +req.body.client.phone,
      email: req.body.client.email,
      message: req.body.client.message,
      pages: +req.body.website.pages,
      form: req.body.website.form,
      cert: req.body.website.cert,
      domainHosting: req.body.website.domainHosting,
      emails: req.body.website.emails,
      langs: +req.body.website.langs,
      priceAgency: req.body.agency.cost,
      priceFree: req.body.freelancer.cost,
      sentTo: await sentMails.sentMail(req.body.country, req.body.service),
    };

    try {
      const newWebSite = await Website.create(inComingService);

      res.status(201).json({
        status: 'success',
        data: newWebSite,
      });
      // Send Mail Agency || Freelancer && Client
      sendEmails(
        inComingService,
        req.body.freelancer.quant,
        req.body.agency.quant,
        req.body.service,
        req.body.country
      );
      console.log(newWebSite);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'failed',
        message: 'Invalid Data sent!🖕',
      });
    }
  } else if (req.params.service === 'Logotipo') {
    // Logo
    let inComingService = {
      country: req.body.country,
      name: req.body.client.name,
      phone: +req.body.client.phone,
      email: req.body.client.email,
      message: req.body.client.message,
      tipologia: req.body.logo.tipologia,
      priceAgency: req.body.agency.cost,
      priceFree: req.body.freelancer.cost,
      sentTo: await sentMails.sentMail(req.body.country, req.body.service),
    };

    try {
      const newLogotipo = await Logotipo.create(inComingService);
      res.status(201).json({
        status: 'success',
        data: newLogotipo,
      });
      console.log(newLogotipo);
      // Send Mail
      sendEmails(
        inComingService,
        req.body.freelancer.quant,
        req.body.agency.quant,
        req.body.service,
        'Logotipo'
      );
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'failed',
        message: 'Invalid Data sent!🖕',
      });
    }
  } else if (req.params.service === 'Online Store') {
    // Online Store
    let inComingService = {
      country: req.body.country,
      name: req.body.client.name,
      phone: +req.body.client.phone,
      email: req.body.client.email,
      message: req.body.client.message,
      form: req.body.onlineStore.form,
      cert: req.body.onlineStore.cert,
      domainHosting: req.body.onlineStore.domainHosting,
      emails: req.body.onlineStore.emails,
      langs: +req.body.onlineStore.langs,
      payment: req.body.onlineStore.payment,
      billing: req.body.onlineStore.billing,
      priceAgency: req.body.agency.cost,
      priceFree: req.body.freelancer.cost,
      sentTo: await sentMails.sentMail(req.body.country, req.body.service),
    };
    try {
      const newOnlineStore = await onlineStore.create(inComingService);
      res.status(201).json({
        status: 'success',
        data: newOnlineStore,
      });
      // Send Mail
      sendEmails(
        inComingService,
        req.body.freelancer.quant,
        req.body.agency.quant,
        req.body.service,
        req.body.country
      );
      console.log(newOnlineStore);
      const arr = [
        'angelo.oliveira@pelicanbay.pt',
        'angelo.oliveira@cyber-security.pt',
      ];
      // Send Mail
      // sendMail.OnlineStore(inComingService, arr);
      // End Send Mail
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'failed',
        message: 'Invalid Data sent!🖕',
      });
    }
  } else if (req.params.service === 'Social Networks') {
    // Social Networks
    let inComingService = {
      country: req.body.country,
      name: req.body.client.name,
      phone: +req.body.client.phone,
      email: req.body.client.email,
      message: req.body.client.message,
      socialNetworks: +req.body.socialNetwork.socialNetworks,
      posts: +req.body.socialNetwork.posts,
      interaction: req.body.socialNetwork.interaction,
      publicityManagment: req.body.socialNetwork.publicityManagment,
      priceAgency: req.body.agency.cost,
      priceFree: req.body.freelancer.cost,
      sentTo: await sentMails.sentMail(req.body.country, req.body.service),
    };
    try {
      const newSocialNetwork = await socialNetwork.create(inComingService);
      res.status(201).json({
        status: 'success',
        data: newSocialNetwork,
      });
      // Send Mail
      sendEmails(
        inComingService,
        req.body.freelancer.quant,
        req.body.agency.quant,
        req.body.service,
        req.body.country
      );
      console.log(newSocialNetwork);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'failed',
        message: 'Invalid Data sent!🖕',
      });
    }
  } else if (req.params.service === 'Google SEO') {
    // Google Seo
    let inComingService = {
      country: req.body.country,
      name: req.body.client.name,
      phone: +req.body.client.phone,
      email: req.body.client.email,
      message: req.body.client.message,
      revision: req.body.seo.revision,
      improvement: req.body.seo.improvement,
      contentCreation: req.body.seo.contentCreation,
      langs: +req.body.seo.langs,
      priceAgency: req.body.agency.cost,
      priceFree: req.body.freelancer.cost,
      sentTo: await sentMails.sentMail(req.body.country, req.body.service),
    };
    try {
      const newGoogleSeo = await seo.create(inComingService);
      res.status(201).json({
        status: 'success',
        data: newGoogleSeo,
      });
      // Send Mail
      sendEmails(
        inComingService,
        req.body.freelancer.quant,
        req.body.agency.quant,
        req.body.service,
        req.body.country
      );
      console.log(newGoogleSeo);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'failed',
        message: 'Invalid Data sent!🖕',
      });
    }
  } else if (req.params.service === 'Google Ads') {
    // Google ads
    let inComingService = {
      country: req.body.country,
      name: req.body.client.name,
      phone: +req.body.client.phone,
      email: req.body.client.email,
      message: req.body.client.message,
      countries: +req.body.googleAds.countries,
      management: req.body.googleAds.management,
      reports: req.body.googleAds.reports,
      priceAgency: req.body.agency.cost,
      priceFree: req.body.freelancer.cost,
      sentTo: await sentMails.sentMail(req.body.country, req.body.service),
    };
    try {
      const newGoogleAds = await googleAds.create(inComingService);
      res.status(201).json({
        status: 'success',
        data: newGoogleAds,
      });
      // Send Mail
      sendEmails(
        inComingService,
        req.body.freelancer.quant,
        req.body.agency.quant,
        req.body.service,
        req.body.country
      );
      console.log(newGoogleAds);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'failed',
        message: 'Invalid Data sent!🖕',
      });
    }
  } else if (req.params.service === 'Cyber Security') {
    // Cyber Security
    let inComingService = {
      country: req.body.country,
      name: req.body.client.name,
      phone: +req.body.client.phone,
      email: req.body.client.email,
      message: req.body.client.message,
      secCert: req.body.cyber.secCert,
      pentesting: req.body.cyber.pentesting,
      renew: req.body.cyber.renew,
      simulate: req.body.cyber.simulate,
      priceAgency: req.body.agency.cost,
      priceFree: req.body.freelancer.cost,
      sentTo: await sentMails.sentMail(req.body.country, req.body.service),
    };
    try {
      const newCyber = await cyber.create(inComingService);
      res.status(201).json({
        status: 'success',
        data: newCyber,
      });
      // Send Mail
      sendEmails(
        inComingService,
        req.body.freelancer.quant,
        req.body.agency.quant,
        req.body.service,
        req.body.country
      );
      console.log(newCyber);
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: 'failed',
        message: 'Invalid Data sent!🖕',
      });
    }
  }
};

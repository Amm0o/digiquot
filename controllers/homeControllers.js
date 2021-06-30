const { contacts } = require('./contactController');
const emailer = require('../services/mailer');
// HOME ROUTE
exports.homePage = (req, res) => {
  // sendEmail.mailer("This is a test");
  res.render('index');
};

exports.terms = (req, res) => {
  res.render('terms');
};

exports.termsPt = (req, res) => {
  res.render('termsPt');
};

exports.sendContact = async (req, res) => {
  const contact = req.body;
  try {
    res.status(201).json({
      status: 'success',
      data: contact,
    });
    console.log(contact);
    await new emailer('support@digiquot.com', 'NOTHING', contact).newContact();
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'failed',
      message: 'Invalid Data sent!🖕',
    });
  }
};

const mailer = require('./mailer');

exports.Logotipo = (data, receivers) => {
  const message = `<h1>New Logo Lead</h1>
    <ul style="list-style: none;">
    <li>Name: ${data.name}<li>
    <li>Phone: ${data.phone}<li>
    <li>Email: ${data.email}<li>
    <li>Message: ${data.message}<li>
    <li>Tipologia: ${data.tipologia}<li>
    </ul>
    `;
  // Send Email
  receivers.forEach(element => {
    mailer.mailer(message, element, 'New Logo Lead');
  });
};

exports.Website = (data, receivers) => {
  const message = `<h1>New Logo Lead</h1>
  <ul style="list-style: none;">
  <li>Name: ${data.name}<li>
  <li>Phone: ${data.phone}<li>
  <li>Email: ${data.email}<li>
  <li>Message: ${data.message}<li>
  <li>Pages: ${data.pages}<li>
  <li>Form: ${data.form}<li>
  <li>Cert: ${data.cert}<li>
  <li>Domains and Hosting: ${data.domainHosting}<li>
  <li>Dedicated Emails: ${data.emails}<li>
  <li>How many Languages: ${data.langs}<li>
  </ul>
      `;
  // Send Email
  receivers.forEach(element => {
    mailer.mailer(message, element, 'New Website Lead');
  });
};

exports.OnlineStore = (data, receivers) => {
  const message = `<h1>New Logo Lead</h1>
    <ul style="list-style: none;">
    <li>Name: ${data.name}<li>
    <li>Phone: ${data.phone}<li>
    <li>Email: ${data.email}<li>
    <li>Message: ${data.message}<li>
    <li>Form: ${data.form}<li>
    <li>Cert: ${data.cert}<li>
    <li>Domains and Hosting: ${data.domainHosting}<li>
    <li>Dedicated Emails: ${data.emails}<li>
    <li>How many Languages: ${data.langs}<li>
    <li>Payment Methods: ${data.payment}<li>
    <li>Billing System: ${data.billing}<li>
    </ul>
        `;
  // Send Email
  receivers.forEach(element => {
    mailer.mailer(message, element, 'New Online Store Lead');
  });
};

const mailer = require('./mailer');

const strings = {
  portuguese: {
    thanks: 'Obrigado Pela sua confiança!',
    abaixo: 'Abaixo encontra a sua simulação.',
  },
  english: {
    thanks: 'Thank you for your trust!',
    abaixo: 'You can find your simulation bellow.',
  },
};
const style = `    <style>
.h1 {
    text-align: center;
    color: white;
}
.infoField{
    text-align:center;
    color: white;
}
.x_img {
  width 100%; 
  display: flex; 
  justify-content: center;
  margin: 0 48%;
}
.container {
  background: rgb(86,171,47);
  background: linear-gradient(90deg, rgba(86,171,47,1) 0%, rgba(168,224,99,1) 100%);

}
</style>`;

// Logo Email!
exports.Logotipo = (data, receiver, country) => {
  let message;
  if (country === 'Portugal' || country === 'Brazil') {
    message = `
    <style>
        ${style}
    </style>
    <div class="container"> 
    <div class="x_img"><img style="margin: 0 48%" src="http://62.171.144.213:3000/imgs/Digiquot_white.png"></div>
    <h1  class="h1" style="font-weight: bold; text-align: center; color: white; font-size: 18px; margin-bottom: 5px">${strings.portuguese.thanks}</h1>
    <h1  class="h1" style="font-weight: 400; text-align: center; color: white; font-size: 15px; margin: 0px">${strings.portuguese.abaixo}</h1>
    <div class="infoField">
    <h2 style="text-align: center">Info:</h2>
    <div> Name: ${data.name}</div>
    <div style="margin-bottom: 5px" class="infoField">Phone: ${data.phone}</div>
    <div class="infoField">Email: ${data.email}</div>
    <div class="infoField" style="width: 100%;">Message: <p style="margin: 1% 20%">${data.message}</p> </div>
    <div class="infoField">Tipologia: ${data.tipologia}</div>
    </div>
    `;
  } else {
    message = `  
    <h1 style="padding-bottom: 1rem;">Digiquot</h1>
    <h1 style="font-weight: bold">${strings.english.thanks}</h1>
    <h1 style="font-weight: bold">${strings.english.abaixo}</h1>
    <h3 style="text-align: center">Info:</h1>
    <div>Name: ${data.name}<div>
    <div>Phone: ${data.phone}<div>
    <div>Email: ${data.email}<div>
    <div>Message: ${data.message}<div>
    <div>Tipologia: ${data.tipologia}<div>
    `;
  }
  // Send Email

  mailer.mailer(message, receiver, 'Your Simulation');
};

exports.Website = (data, receiver) => {
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

  mailer.mailer(message, receiver, 'New Website Lead');
};

exports.OnlineStore = (data, receiver) => {
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
  mailer.mailer(message, receiver, 'New Online Store Lead');
};

const nodemailer = require('nodemailer');
const ejs = require('ejs');
const htmlToText = require('html-to-text');

// new Email(data).sendNewLead();
// new Email(data).sendNewSimulation();

module.exports = class Email {
  constructor(user, service, data) {
    this.to = user;
    this.data = data;
    this.service = service;
    this.from = 'Digiquot <sender@pelicanbay.pt>';
  }

  newTransport() {
    return nodemailer.createTransport({
      host: 'mail.pelicanbay.pt',
      port: 587,
      secure: false,
      auth: {
        user: 'sender@pelicanbay.pt',
        pass: 'ZDOGbSzxuPy1sdEPC8sV',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  // Send the actual Email!😃
  async send(template, subject) {
    // 1) Render the HTML for the email based on a ejs template
    const html = await ejs.renderFile(
      `${__dirname}/../views/emails/${template}.ejs`,
      { data: this.data, service: this.service }
    );
    // 2) Define the email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html: html,
      text: htmlToText.fromString(html),
    };

    // 3) Create a Transport and send the email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendNewSimulation() {
    await this.send('newSimulation', `New ${this.service} Lead`);
  }
  async sendNewSimulationClient() {
    await this.send('clientSimulation', `Digiquot Simulation`);
  }
};

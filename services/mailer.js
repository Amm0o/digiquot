const nodemailer = require('nodemailer');

exports.mailer = (data, receiver, subject) => {
  const transporter = nodemailer.createTransport({
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

  let message = {
    from: 'sender@pelicanbay.pt',
    to: receiver,
    subject: subject,
    html: data,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const agency = require('./models/agencyModel');
const freelancer = require('./models/freeLancerModel');
const createFreelancer = require('./services/createNewFreelancer');
const createAgency = require('./services/createNewAgency');
const sentMails = require('./services/sentMail');

dotenv.config({ path: './config.env' });

const dev = false;
const mongoString = dev
  ? process.env.LOCAL_DATABASE
  : process.env.PROD_DATABASE;

mongoose
  .connect(mongoString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

// const test = async () => {
//   const test = await freelancer.find({});
//   console.log(test[0].bannedCountries);
// };

// test();

// createFreelancer.createFreelancer(
//   'angelo',
//   'angelo.oliveira@cyber-experts.pt',
//   ['Logotipo'],
//   ['Potugal']
// );
// createAgency.createAgency('angelo', 'angelo.oliveira@pelicanbay.pt', [], []);
// createAgency.createAgency(
//   'hello',
//   'hello@projectantonio.pt',
//   ['Poland'],
//   ['Google SEO', 'Cyber Security']
// );
// 1) Start the server

const port = 3000;

sentMails.sentMail().then(x => {
  console.log(x);
});

app.listen(port, () => {
  console.log('Server running on port 3000 😄');
});

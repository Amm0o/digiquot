const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const agency = require('./models/agencyModel');
const freelancer = require('./models/freeLancerModel');
const createFreelancer = require('./services/createNewFreelancer');
const createAgency = require('./services/createNewAgency');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.LOCAL_DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

const test = async () => {
  const test = await freelancer.find({});
  console.log(test[0].bannedCountries);
};

test();

// createFreelancer.createFreelancer(
//   'Angelo2',
//   'angelo.oliveira@cyber-security.pt'
//   // ['Portugal'],
//   // ['Logotipo']
// );
// createAgency.createAgency('angelo', 'angelo.oliveira@pelicanbay.pt', [], []);
createAgency.createAgency(
  'hello',
  'hello@projectantonio.pt',
  ['Poland'],
  ['Google SEO', 'Cyber Security']
);
// 1) Start the server
const port = 3000;

app.listen(port, () => {
  console.log('Server running on port 3000 😄');
});

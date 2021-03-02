const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const agency = require('./models/agencyModel');
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

// createFreelancer.createFreelancer(
//   'Joao Leite',
//   'joao.leite@pelicanbay.pt',
//   true
// );
// createAgency.createAgency('Joao Leite', 'joao.leite@pelicanbay.pt', true);
// 1) Start the server
const port = 3000;

app.listen(port, () => {
  console.log('Server running on port 3000 😄');
});

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const simulatorRouter = require('./routes/simulatorRoutes');
const homeRouter = require('./routes/homeRoutes');
const path = require('path');
const i18n = require('i18n-express');
const app = express();

app.use(
  i18n({
    translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
    siteLangs: ['en', 'es', 'pt'],
    textsVarName: 'translation',
  })
);

// Adding Common Middlewares
app.set('view engine', 'ejs');
app.use(express.json({ limit: '2mb' }));
app.use(express.static('public'));
app.use(morgan('dev'));
// Adding Router middlware
app.use('/api/v1/service', simulatorRouter);
app.use('/', homeRouter);

module.exports = app;

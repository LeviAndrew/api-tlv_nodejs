/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

// Habilita o CORS para todas as origens// Configuração do CORS
app.use(cors());

app.use(express.json());
app.use(router);

module.exports = app;
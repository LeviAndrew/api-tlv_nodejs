/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const app = require('./app');

require('dotenv').config();

const API_PORT = process.env.API_PORT || 3000; // PORTA LOCAL DA API

app.listen(API_PORT, () => console.log(`Server rodando na porta ${API_PORT}!`));
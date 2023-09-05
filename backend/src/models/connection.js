/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
require('dotenv').config();

// Conexão com o MySQL
// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//     host: process.env.PG_HOST,
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     database: process.env.PG_DB
// });

// Conexão com PostgreSQL
const {Pool} = require('pg');

const connection = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    port: process.env.PG_PORT,
    ssl: {
      // Defina o modo de segurança SSL desejado aqui
      // Valores possíveis: 'disable', 'require', 'verify-ca', 'verify-full'
        require: true, // Define o sslmode como 'require'
        rejectUnauthorized: false // Use esta opção para evitar o erro de rejeição de certificado não autorizado (ver abaixo)
    }
});

module.exports = connection;
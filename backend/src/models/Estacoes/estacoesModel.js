/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const connection = require('../connection');

const getEstacoes = async (usina) => {
    const client = await connection.connect();
    try {
        const estacoes = await connection.query(`SELECT * FROM ${usina.toLowerCase()}_estacoes`); // criar um get para cada usina
        return estacoes.rows;
    } finally {
        client.release(); // Libere a conexão de volta para o pool
    }
};

module.exports = {
    getEstacoes
};
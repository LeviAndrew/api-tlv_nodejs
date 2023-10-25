/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const connection = require('../connection'); // MySQL

const getAll = async () => {
    await connection.connect();
    const usina = await connection.query('SELECT * FROM usinas');
    return usina.rows;
};

const getUsina = async (usina) => {
    const client = await connection.connect();
    try {
        const estacoes = await client.query(`SELECT * FROM usinas WHERE e3_label = '${usina}'`);
        return estacoes.rows;
    } finally {
        client.release(); // Libere a conexão de volta para o pool
    }
};

module.exports = {
    getUsina,
    getAll
};
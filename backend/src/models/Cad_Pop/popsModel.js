/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const connection = require('../connection');

const getPops = async (usina) => {
    const client = await connection.connect();
    try {
        console.log(`Conectou com o BD: ${usina}`);
        const pops = await connection.query(`SELECT * FROM ${usina.toLowerCase()}_cad_pop`);
        console.log(`Realizou a query pro BD: ${usina}`);
        return pops.rows;
    } finally {
        client.release(); // Libere a conexão de volta para o pool
        console.log(`Encerrou conexão com o BD: ${usina}`);
    }
};

const getUser = async (username, password) => {
    // console.log("getUser: ", username, password);
    // const pops = await connection.query(`SELECT * FROM ${usina.toLowerCase()}_cad_pop`);
    // const pops = await connection.query(`SELECT * FROM cad_pop`);
    if (username == "levi" && password == "123") return true;
    else return false;
};

module.exports = {
    getPops,
    getUser
};
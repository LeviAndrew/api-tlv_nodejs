/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const connection = require('../connection');

const getPops = async (usina) => {
    await connection.connect();
    const pops = await connection.query(`SELECT * FROM ${usina.toLowerCase()}_cad_pop`);
    // const pops = await connection.query(`SELECT * FROM cad_pop`);
    return pops.rows;
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
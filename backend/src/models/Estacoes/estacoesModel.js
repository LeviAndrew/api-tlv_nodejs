/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const connection = require('../connection');

// const getAll = async () => {
//     await connection.connect();
//     const estacoes = await connection.query('SELECT * FROM uhit_estacoes'); // criar um get para cada usina
//     return estacoes.rows;
// };

const getEstacoes = async (usina) => {
    await connection.connect();
    const estacoes = await connection.query(`SELECT * FROM ${usina.toLowerCase()}_estacoes`); // criar um get para cada usina
    return estacoes.rows;
};

// const createEstacao = async (estacao) => {
//     const { descrp, label, lat, lng, stsPing, tensao, umid, temp, stsBat, stsNobrk, stsPnl, timestamp, almAcss, almAlim, almAudio, almCmd, almCom, almHdw, usina } = estacao, query = 'INSERT INTO estacoes(descrp, label, lat, lng, stsPing, tensao, umid, temp, stsBat, stsNobrk, stsPnl, timestamp, almAcss, almAlim, almAudio, almCmd, almCom, almHdw, usina) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

//     const createdEstacao = await connection.query(query, [descrp, label, lat, lng, stsPing, tensao, umid, temp, stsBat, stsNobrk, stsPnl, timestamp, almAcss, almAlim, almAudio, almCmd, almCom, almHdw, usina]);

//     return {insertId: createdEstacao[0].insertId};
// };

// const updateEstacao = async (id, estacao) => {
//     const { descrp, label } = estacao;
//     const query = 'UPDATE uhit_estacoes SET descrp = ?, label = ? WHERE id = ?';

//     const updatedEstacao = await connection.query(query, [descrp, label, id]);

//     return updatedEstacao[0];
// };

// const deleteEstacao = async (id) => {
//     const removedEstacao = await connection.query('DELETE FROM uhit_estacoes WHERE id = ?', [id]);

//     return removedEstacao;
// };

module.exports = {
    // getAll,
    getEstacoes,
    // createEstacao,
    // deleteEstacao,
    // updateEstacao
};
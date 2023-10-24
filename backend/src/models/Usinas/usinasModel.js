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
        console.log(`Conectou com o BD: ${usina}`);
        const estacoes = await client.query(`SELECT * FROM usinas WHERE e3_label = '${usina}'`);
        console.log(`Realizou a query pro BD: ${usina}`);
        return estacoes.rows;
    } finally {
        client.release(); // Libere a conexão de volta para o pool
        console.log(`Encerrou conexão com o BD: ${usina}`);
    }
};

// const createUsina = async (usina) => {
//     const { descrp, zoom, lat, lng } = usina, query = 'INSERT INTO usinas(descrp, zoom, lat, lng) VALUES (?, ?, ?)';

//     const createdUsina = await connection.query(query, [descrp, zoom, lat, lng]);

//     return {insertId: createdUsina[0].insertId};
// };

// const updateUsina = async (id, usina) => {
//     const { descrp, zoom, lat, lng } = usina || {descrp: "UH", zoom: 0, lat: 0, lng: 0};
//     const query = 'UPDATE usinas SET descrp = ?, zoom = ?, lat = ?, lng = ? WHERE id = ?';

//     const updatedUsina = await connection.query(query, [descrp, zoom, lat, lng, id]);

//     return updatedUsina[0];
// };

// const deleteUsina = async (id) => {
//     const removedUsina = await connection.query('DELETE FROM usinas WHERE id = ?', [id]);

//     return removedUsina;
// };

module.exports = {
    getUsina,
    getAll,
    // createUsina,
    // deleteUsina,
    // updateUsina
};
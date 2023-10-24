/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const estacoesModel = require('../../models/Estacoes/estacoesModel');

// const getAll = async (_req, res) => {
//     const estacoes = await estacoesModel.getAll();
//     return res.status(200).json({estacoes: estacoes});
// };

const getEstacoes = async (req, res) => {
    const { usina } = req.params;
    console.log(`Buscando dados das estações da usina de ${usina}`);
    const estacoes = await estacoesModel.getEstacoes(usina);
    return res.status(200).json({estacoes: estacoes});
};

// const createEstacao = async (req, res) => {
//     const createdEstacao = await estacoesModel.createEstacao(req.body);
//     return res.status(201).json(createdEstacao);
// };

// const updateEstacao = async (req, res) => {
//     const { id } = req.params;
//     await estacoesModel.updateEstacao(id, req.body);
//     return res.status(204).json();
// };

// const deleteEstacao = async (req, res) => {
//     const { id } = req.params;
//     await estacoesModel.deleteEstacao(id);
//     return res.status(204).json();
// };

module.exports = {
    // getAll,
    getEstacoes,
    // createEstacao,
    // updateEstacao,
    // deleteEstacao
};
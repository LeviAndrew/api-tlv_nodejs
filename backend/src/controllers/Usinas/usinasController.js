/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const usinasModel = require('../../models/Usinas/usinasModel');

const getAll = async (_req, res) => {
    const usinas = await usinasModel.getAll();
    return res.status(200).json({usina: usinas});
};

const getUsina = async (req, res) => {
    const { usina } = req.params;
    const usinas = await usinasModel.getUsina(usina);
    return res.status(200).json({usina: usinas[0]});
};

// const createUsina = async (req, res) => {
//     const createdUsina = await usinasModel.createUsina(req.body);
//     return res.status(201).json(createdUsina);
// };

// const updateUsina = async (req, res) => {
//     const { id } = req.params;
//     const usina = req.body;
//     const updatedUsina = await usinasModel.updateUsina(id, usina);
//     return res.status(204).json(updatedUsina);
// };

// const deleteUsina = async (req, res) => {
//     const { id } = req.params;
//     await usinasModel.deleteUsina(id);
//     return res.status(204).json();
// };

module.exports = {
    getUsina,
    getAll,
    // createUsina,
    // updateUsina,
    // deleteUsina
};
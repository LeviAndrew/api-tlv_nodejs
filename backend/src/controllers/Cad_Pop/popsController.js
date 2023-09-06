/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const popsModel = require('../../models/Cad_Pop/popsModel');

const getPops = async (req, res) => {
    const { usina } = req.params;
    const pops = await popsModel.getPops(usina);
    return res.status(200).json({pops: pops});
};

const createLogin = async (req, res) => {
    // console.log("teste: ", req.body);
    const { username, password } = req.body;
    const user = await popsModel.getUser(username, password);
    // console.log("passou aqui: ", user);
    return res.status(200).json({authenticated: user});
};

const testGetApi = async (_req, res) => {
    console.log("testGetApi: A Api está rodando...");
    return res.status(200).json({test: true});
};

module.exports = {
    getPops,
    createLogin,
    testGetApi
};
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const validadeBodyCreate = (req, res, next) => {
    const { body } = req;

    if (body.title === undefined || body.title === '') {
        return res.status(400).json({ message: 'O título é obrigatório!' });
    }

    next();
};

const validadeBodyUpdate = (req, res, next) => {
    const { body } = req;

    if ((body.title === undefined || body.title === '') && (body.status === undefined || body.status === '')) {
        return res.status(400).json({ message: 'Envie pelo menos um campo para atualização!' });
    }

    next();
};

module.exports = {
    validadeBodyCreate,
    validadeBodyUpdate
}
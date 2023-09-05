/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const validadeBodyCreate = (req, res, next) => {
    const { body } = req;

    if (body.endereco === undefined || body.endereco === '') {
        return res.status(400).json({ message: 'O endereço é obrigatório!' });
    }

    if (body.postal_code === undefined || body.postal_code === '') {
        return res.status(400).json({ message: 'O CEP é obrigatório!' });
    }

    next();
};

const validadeBodyUpdate = (req, res, next) => {
    const { body } = req;

    if ((body.endereco === undefined || body.endereco === '') && (body.postal_code === undefined || body.postal_code === '')) {
        return res.status(400).json({ message: 'Envie pelo menos um campo para atualização!' });
    }

    next();
};

module.exports = {
    validadeBodyCreate,
    validadeBodyUpdate
}
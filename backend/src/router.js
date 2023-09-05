/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const express = require('express');
const usinasController = require('./controllers/Usinas/usinasController');
// const usinasMiddleware = require('./middlewares/Usinas/usinasMiddleware');
const estacoesController = require('./controllers/Estacoes/estacoesController');
// const estacoesMiddleware = require('./middlewares/Estacoes/estacoesMiddleware');
const popsController = require('./controllers/Cad_Pop/popsController');

const router = express.Router();

// Para a tabela usinas
router.get('/usinas', usinasController.getAll);
router.get('/usinas/:usina', usinasController.getUsina);
// router.post('/usinas', usinasController.createUsina);
// router.put('/usinas/:id', usinasController.updateUsina);
// router.delete('/usinas/:id', usinasController.deleteUsina);

// Para a tabela estacoes
// router.get('/estacoes', estacoesController.getAll);
router.get('/estacoes/:usina', estacoesController.getEstacoes);
// router.post('/estacoes', estacoesController.createEstacao);
// router.put('/estacoes/:id', estacoesController.updateEstacao);
// router.delete('/estacoes/:id', estacoesController.deleteEstacao);

// Para a tabela de cadastro populacional
router.get('/cad_pop/:usina', popsController.getPops);

// Login geral
router.post('/login', popsController.createLogin);

module.exports = router;
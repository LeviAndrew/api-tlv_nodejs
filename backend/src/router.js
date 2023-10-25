/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const express = require('express');
const usinasController = require('./controllers/Usinas/usinasController');
const estacoesController = require('./controllers/Estacoes/estacoesController');
const popsController = require('./controllers/Cad_Pop/popsController');

const router = express.Router();

// Para a tabela usinas
router.get('/usinas', usinasController.getAll);
router.get('/usinas/:usina', usinasController.getUsina);
// Para a tabela estacoes
router.get('/estacoes/:usina', estacoesController.getEstacoes);

// Para a tabela de cadastro populacional
router.get('/cad_pop/:usina', popsController.getPops);

// Login geral
router.post('/login', popsController.createLogin);

// Teste API sem Postgree
router.get('/teste', popsController.testGetApi);

module.exports = router;
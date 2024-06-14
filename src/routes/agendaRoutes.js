const express = require('express');
const router  = express.Router();
const agendaController = require('../controller/agendaController');

router.get('/', agendaController.indexView);
router.get('/login', agendaController.loginContaView);
//router.get('/login_conta', agendaController.loginConta);
router.get('/criar_conta', agendaController.criarContaView);
router.get('/agenda', agendaController.agendaView);
router.post('/cadastrar_contato', agendaController.cadastrarContato);

module.exports = router;
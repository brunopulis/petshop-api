const { Router } = require('express');
const animaisController = require('../controllers/animaisController');

const router = Router();

// GET - Listar todos os animais
router.get('/', animaisController.listarAnimais);

// POST - Criar novo animal

// GET (por ID) - Buscar animal específico

// PUT - Substituir animal (todos os campos)

// PATCH - Atualizar animal parcialmente

// DELETE - Deletar animal


module.exports = router;
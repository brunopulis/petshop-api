const { Router } = require('express');
const animaisController = require('../controllers/animaisController');

const router = Router();

// GET - Listar todos os animais

// URL final: /api/v1 + /animais + /animais
// router.get('/animais', animaisController.listarAnimais);
router.get('/', animaisController.listarAnimais);

// POST - Criar novo animal
router.post('/', animaisController.criarAnimal);

// GET (por ID) - Buscar animal específico
router.get('/:id', animaisController.buscarAnimal);

// PUT - Substituir animal (todos os campos)
router.put('/:id', animaisController.atualizarAnimalCompleto);

// PATCH - Atualizar animal parcialmente
router.put('/:id', animaisController.atualizarAnimalParcial);

// DELETE - Deletar animal
router.delete('/:id', animaisController.deletarAnimal);

module.exports = router;
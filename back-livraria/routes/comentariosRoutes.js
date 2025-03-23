const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentariosController');

router.post('/', comentariosController.create);
router.get('/', comentariosController.getAll);
router.get('/:id', comentariosController.getById);
router.put('/:id', comentariosController.update);
router.delete('/:id', comentariosController.delete);

module.exports = router;
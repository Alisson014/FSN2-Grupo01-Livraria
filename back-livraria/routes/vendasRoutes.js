const express = require('express');
const router = express.Router();
const vendasController = require('../controllers/vendasController');

router.post('/', vendasController.create);
router.get('/', vendasController.getAll);
router.get('/:id', vendasController.getById);
router.put('/:id', vendasController.update);
router.delete('/:id', vendasController.delete);

module.exports = router;
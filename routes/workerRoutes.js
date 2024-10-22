const express = require('express');
const {
  createworker,
  getAllworkers,
  getworkerById,
  updateworker,
  deleteworker
} = require('../controllers/workerController');

const router = express.Router();

router.post('/', createworker); // Crear nuevo trabajador
router.get('/', getAllworkers); // Obtener todos los trabajadores
router.get('/:id', getworkerById); // Obtener por ID
router.put('/:id', updateworker); // Actualizar trabajador
router.delete('/:id', deleteworker); // Borrar empleado

module.exports = router;

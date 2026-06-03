const express = require('express');
const router = express.Router();
const hechizoController = require('../controllers/hechizosController');
const requireAuth = require('../middleware/requireAuth');

// Rutas para los hechizos
// Lectura abierta; crear/editar/borrar exigen sesión iniciada.
router.get('/', hechizoController.getHechizos);
router.get('/:id', hechizoController.getHechizoById);
router.post('/', requireAuth, hechizoController.createHechizo);
router.put('/:id', requireAuth, hechizoController.updateHechizo);
router.delete('/:id', requireAuth, hechizoController.deleteHechizo);


module.exports = router;

import express from 'express';
import ProprietarioController from '../controllers/proprietario.controller.js';

const router = express.Router();

router.post('/', ProprietarioController.createProprietario);
router.get('/', ProprietarioController.getProprietarios);
router.get('/', ProprietarioController.getProprietario);

export default router;

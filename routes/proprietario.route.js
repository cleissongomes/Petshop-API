import express from 'express';
import ProprietarioController from '../controllers/proprietario.controller.js';

const router = express.Router();

router.post('/', ProprietarioController.createProprietario);

export default router;

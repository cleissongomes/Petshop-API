import express from 'express';
import AnimalController from '../controllers/animal.controller.js';

const router = express.Router();

router.post('/', AnimalController.createAnimal);
router.get('/', AnimalController.getAnimais);
router.get('/', AnimalController.getAnimal);
router.put('/', AnimalController.updateAnimal);
router.delete('/', AnimalController.deleteAnimal);

export default router;

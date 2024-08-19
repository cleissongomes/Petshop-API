import AnimalService from '../services/animal.service.js';

async function createAnimal(err, req, res, next) {
  try {
    let animal = req.body;
    if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
      throw Error('Nome e tipo e Proprietario_id são obrigatórios.');
    }
    animal = await AnimalService.createAnimal(animal);
    res.send(animal);
    logger.info(`POST /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function getAnimais(err, req, res, next) {
  try {
    res.send(await AnimalService.getAnimais());
    logger.info('GET /animais');
  } catch (err) {
    next(err);
  }
}

async function getAnimal(err, req, res, next) {
  try {
    res.send(await AnimalService.getAnimal(req.params.id));
    logger.info('GET /animais/:id');
  } catch (err) {
    next(err);
  }
}

async function updateAnimal(err, req, res, next) {
  try {
    let animal = req.body;
    if (
      !animal.animal_id ||
      !animal.nome ||
      !animal.tipo ||
      !animal.proprietario_id
    ) {
      throw Error('Animal_id, Nome e Tipo e Proprietario_id são obrigatórios.');
    }
    animal = await AnimalService.updateAnimal(animal);
    res.send(animal);
    logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteAnimal(err, req, res, next) {
  try {
    await AnimalService.deleteAnimal(req.params.id);
    res.send('O cliente foi excluído com sucesso!');
    logger.info('DELETE /client');
  } catch (err) {
    next(err);
  }
}

export default {
  createAnimal,
  getAnimais,
  getAnimal,
  updateAnimal,
  deleteAnimal,
};

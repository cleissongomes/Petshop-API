import AnimalRepository from '../repositories/animal.repository.js';
import ProprietarioRepository from '../repositories/proprietario.repository.js';

async function createAnimal(animal) {
  if (await ProprietarioRepository.getProprietario(animail.proprietario_id)) {
    return await AnimalRepository.insertAnimal(animal);
  }
  throw new Error('O proprietario_id informado não existe.');
}

async function getAnimais() {
  return await AnimalRepository.getAnimais();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function updateAnimal(animal) {
  if (await ProprietarioRepository.getProprietario(animail.proprietario_id)) {
    return await AnimalRepository.updateAnimal(animal);
  }
  throw new Error('O proprietario_id informado não existe.');
}

async function deleteAnimal(id) {
  await AnimalRepository.deleteAnimal(id);
}

export default {
  createAnimal,
  getAnimais,
  getAnimal,
  updateAnimal,
  deleteAnimal,
};

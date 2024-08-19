import AnimalRepository from '../repositories/animal.repository.js';

async function createAnimal(animal) {
  return await AnimalRepository.insertAnimal(animal);
}

async function getAnimais() {
  return await AnimalRepository.getAnimais();
}

async function getAnimal(id) {
  return await AnimalRepository.getAnimal(id);
}

async function updateAnimal(animal) {
  return await AnimalRepository.updateAnimal(animal);
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

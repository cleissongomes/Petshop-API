import ProprietarioRepository from '../repositories/proprietario.repository.js';

async function createProprietario(proprietario) {
  return await ProprietarioRepository.insertProprietario(proprietario);
}

async function getproprietarios() {
  return await ProprietarioRepository.getProprietarios();
}

export default {
  createProprietario,
  getproprietarios,
};

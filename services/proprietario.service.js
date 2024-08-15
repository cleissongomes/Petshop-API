import ProprietarioRepository from '../repositories/proprietario.repository.js';

async function createProprietario(proprietario) {
  return await ProprietarioRepository.insertProprietario(proprietario);
}

export default {
  createProprietario,
};

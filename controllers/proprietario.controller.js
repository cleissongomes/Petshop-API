import ProprietarioService from '../services/proprietario.service.js';

async function createProprietario(err, req, res, next) {
  try {
    let proprietario = req.body;
    if (!proprietario.nome || !proprietario.telefone) {
      throw Error('Nome e Telefone são obrigatórios.');
    }
    proprietario = await ProprietarioService.createProprietario(proprietario);
    res.send(proprietario);
    logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (err) {
    next(err);
  }
}

async function getProprietarios(err, req, res, next) {
  try {
    res.send(await ProprietarioService.getproprietarios());
    logger.info('GET /proprietarios');
  } catch (err) {
    next(err);
  }
}

async function getProprietario(err, req, res, next) {
  try {
    res.send(await ProprietarioService.getproprietario(req.params.id));
    logger.info('GET /proprietarios/:id');
  } catch (err) {
    next(err);
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
};

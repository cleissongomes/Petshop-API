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
    res.send(await ProprietarioService.getProprietarios());
    logger.info('GET /proprietarios');
  } catch (err) {
    next(err);
  }
}

async function getProprietario(err, req, res, next) {
  try {
    res.send(await ProprietarioService.getProprietario(req.params.id));
    logger.info('GET /proprietarios/:id');
  } catch (err) {
    next(err);
  }
}

async function updateProprietario(err, req, res, next) {
  try {
    let proprietario = req.body;
    if (
      !proprietario.proprietario_id ||
      !proprietario.nome ||
      !proprietario.telefone
    ) {
      throw Error('Proprietario_id, Nome e Telefone são obrigatórios.');
    }
    proprietario = await ProprietarioService.updateProprietario(proprietario);
    res.send(proprietario);
    logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteProprietario(err, req, res, next) {
  try {
    await ProprietarioService.deleteProprietario(req.params.id);
    res.send('O cliente foi excluído com sucesso!');
    logger.info('DELETE /client');
  } catch (err) {
    next(err);
  }
}

export default {
  createProprietario,
  getProprietarios,
  getProprietario,
  updateProprietario,
  deleteProprietario,
};

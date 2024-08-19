import connect from './db.js';

async function insertAnimal(Animal) {
  const conn = await connect();
  try {
    const sql =
      'INSERT INTO Animais (nome, tipo, proprietario_id) VALUES($1, $2, $3) RETURNING*';
    const values = [Animal.nome, Animal.tipo, Animal.proprietario_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimais() {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM Animais');
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query('SELECT * FROM Animais WHERE Animal_id = $1', [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateAnimal(Animal) {
  const conn = await connect();
  try {
    const sql =
      'UPDATE Animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE Animal_id = $4 RETURNING *';
    const values = [Animal.nome, Animal.tipo, Animal.proprietario_id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteAnimal(id) {
  const conn = await connect();
  try {
    const res = await conn.query('DELETE FROM Animais WHERE Animal_id = $1', [
      id,
    ]);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

export default {
  insertAnimal,
  getAnimais,
  getAnimal,
  updateAnimal,
  deleteAnimal,
};

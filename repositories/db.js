import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      'postgres://ovvsdgid:X5s_n7BLFcEPl-wSFDS4EHTvs_Tm4zAm@isilo.db.elephantsql.com/ovvsdgid',
  });
  global.connection = pool;
  return pool.connect();
}

export default connect;

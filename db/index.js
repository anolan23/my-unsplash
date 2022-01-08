const { Pool } = require('pg');
const { user, host, database, password, port } = require('./config.js');
const options = {
  user,
  host,
  database,
  password,
  port,
};

const pool = new Pool(options);

module.exports = {
  query(text, params) {
    return pool.query(text, params);
  },
};

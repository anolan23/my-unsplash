const { Pool } = require('pg');
const { user, host, database, password, port } = require('./config.js');

const pool = new Pool({
  user,
  host,
  database,
  password,
  port,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query(text, params) {
    return pool.query(text, params);
  },
};

const { Pool } = require('pg');
const pool = new Pool({
  user: 'aaron',
  host: 'localhost',
  database: 'my-unsplash',
  password: '',
  port: 5432,
});

module.exports = {
  query(text, params) {
    return pool.query(text, params);
  },
};

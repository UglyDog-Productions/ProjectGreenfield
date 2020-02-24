const Pool = require('pg').Pool;
// connection information
const pool = new Pool({
  user: 'robgonzalez-pita',
  host: 'localhost',
  database: 'productoverview',
  password: 'password',
  port: 5432,
});

module.exports = pool;

const pool = require('../db/config.js');

const getProductList = async (request, response) => {
  const query = {
    name: 'fetch-productList',
    text: 'select * FROM product ORDER BY id ASC LIMIT $1;',
    values: [50],
  };

  pool
    .query(query)
    .then((res) => response.status(200).send(res.rows))
    .catch((e) => console.error(e.stack));
};

module.exports = getProductList;

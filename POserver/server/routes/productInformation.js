const pool = require('../db/config.js');

const getProductInformation = async (request, response) => {
  const query = {
    name: 'fetch-productInformation',
    text:
      'SELECT product.id, name, slogan, description, category, default_price, feature, value FROM product INNER JOIN features ON features.style_id = product.id WHERE product.id = $1;',
    values: [request.params.product_id],
  };
  pool
    .query(query)
    .then((res) =>
      response.status(200).send({
        id: res.rows[0].id,
        name: res.rows[0].name,
        slogan: res.rows[0].slogan,
        description: res.rows[0].description,
        category: res.rows[0].category,
        default_price: res.rows[0].default_price,
        features: res.rows.map((el) => ({
          feature: el.feature,
          value: el.value,
        })),
      }),
    )
    .catch((e) => console.error(e.stack));
};

module.exports = getProductInformation;

const pool = require('../db/config.js');

const getProductStylesPlayground = async (request, response) => {
  const query = {
    name: 'fetch-styles',
    text:
      'SELECT product_id, styles.style_id, name, original_price, sale_price, default_style, photos.thumbnail_url, photos.url, skus.size, skus.quantity FROM styles LEFT JOIN photos ON photos.style_id = styles.style_id LEFT JOIN skus ON skus.style_id = styles.style_id WHERE styles.product_id = $1 ORDER BY style_id;',
    values: [request.params.product_id],
  };

  pool
    .query(query)
    .then((res) => {
      response.status(200).json(getStyles(res.rows));
    })
    .catch((e) => console.error(e.stack));
};

module.exports = getProductStylesPlayground;

const getStyles = function(styles) {
  let finalValue = {};
  finalValue.product_id = styles[0].product_id;
  finalValue.results = [];
  let returnValue = {};
  styles.map((element, index) => {
    if (!returnValue[element.style_id]) {
      returnValue[element.style_id] = {
        style_id: element.style_id,
        name: element.name,
        original_price: element.original_price,
        sale_price: element.sale_price,
        'default?': element.default_style,
        photos: [],
        skus: {},
      };
    }
  });
  let photos = {};
  styles.map((element, index) => {
    if (!photos[element.url]) {
      photos[element.url] = true;
      returnValue[element.style_id]['photos'].push({
        url: element.url,
        thumbnail_url: element.thumbnail_url,
      });
    }
  });
  let skus = {};
  styles.map((element, index) => {
    if (!skus[element.size]) {
      returnValue[element.style_id]['skus'][element.size] = element.quantity;
    }
  });
  for (let key in returnValue) {
    finalValue.results.push(returnValue[key]);
  }
  return finalValue;
};

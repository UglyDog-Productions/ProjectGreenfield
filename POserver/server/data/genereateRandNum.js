'use strict';

const faker = require('faker');

function generateRandNum(userContext, events, next) {
  // const num = faker.fake({{random.number(1000);
  const num = faker.random.number(100);
  userContext.vars.num = num;
  return next();
}
// console.log(generateRandNum());

module.exports = generateRandNum;

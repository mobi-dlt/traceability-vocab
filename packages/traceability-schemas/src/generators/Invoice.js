const faker = require('faker');

const getInvoice = () => {
  const example = {
    '@context': ['https://dlt.mobi/mobility'],
    type: 'Invoice',
    identifier: `IN-${faker.random.number()}`,

  };
  return example;
};

module.exports = { getInvoice };

const faker = require('faker');
const { getEntity } = require('./Entity');
const { getPostalAddress } = require('./PostalAddress');

faker.seed(22);

const { getProduct } = require('./Product');

const getQPInbond = () => {
  const product = getProduct();
  delete product['@context'];
  product.name = 'Crude Oil Barrel';
  product.description = 'Heavy Sour Dilbit';
  const originAddress = getPostalAddress();
  const deliveryAddress = getPostalAddress();
  const carrier = getEntity();
  const recipient = getEntity();

  const example = {
    '@context': ['https://w3id.org/traceability/v1'],
    type: 'QPInbond',
    inBondNumber: '123456789',
    irsNumber: '12345678-01',
    inBondType: 'IT (61)',
    portOfEntry: 'Superior, WI, USA',
    carrier,
    recipient,
    shipment: {
      type: 'DeliveryParcel',
      originAddress,
      deliveryAddress,
      deliveryMethod: 'pipeline',
    },
    billOfLadingNumber: '123456789',
    expectedDeliveryDate: '2020-10-20',
    valuePerItem: faker.random.number({ min: 1000, max: 9999 }).toString(),
    totalOrderValue: faker.random.number({ min: 10000, max: 99999 }).toString(),
    product,
  };
  return example;
};

module.exports = { getQPInbond };

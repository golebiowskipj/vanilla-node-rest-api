let products = require("../data/products");
const { v4: uuidv4 } = require("uuid");

const { writeDataToFile } = require("../utils");

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { ...product, id: uuidv4() };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter((p) => p.id !== id);
    writeDataToFile("./data/products.json", products);
    resolve();
  });
}

function update(id, data) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...data };
    writeDataToFile("./data/products.json", products);
    resolve(products[index]);
  });
}

module.exports = {
  create,
  findAll,
  findById,
  remove,
  update,
};

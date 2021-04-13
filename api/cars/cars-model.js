const db = require('../../data/db-config');

const getAll = () => {
  return db("cars");
}

const getById = car_id => {
  return db("cars").where({ car_id }).first();
}

const create = () => {
  // DO YOUR MAGIC
}


module.exports = {
  getAll,
  getById,
  create
}
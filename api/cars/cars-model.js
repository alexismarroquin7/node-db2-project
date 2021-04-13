const db = require('../../data/db-config');

const getAll = () => {
  return db("cars");
}

const getById = car_id => {
  return db("cars").where({ car_id }).first();
}

const create = async ({ vin, make, model, mileage, title, transmission }) => {
  const [ id ] = await db('cars').insert({ vin, make, model, mileage, title, transmission });
  return getById(id);
}


module.exports = {
  getAll,
  getById,
  create
}
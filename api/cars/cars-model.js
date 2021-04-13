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

const updateById = async (car_id, { vin, make, model, mileage, title, transmission }) => {
  await db('cars').where({ car_id }).update({ vin, make, model, mileage, title, transmission });
  return getById(car_id);
}

const deleteById = async car_id => {
  const deletedCar = await getById(car_id);
  await db('cars').where({ car_id }).delete();
  return deletedCar;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}
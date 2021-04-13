const vinValidator = require('vin-validator');
const Car = require('./cars-model');

const checkCarId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const car = await Car.getById(id);
    if(car){
      req.car = car;
      next();
    } else {
      res.status(404).json({ message: `car with id ${id} is not found` });
    }
  } catch (err) {
    next(err);
  }

}

const checkCarPayload = (req, res, next) => {
  
}

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body;
  const isValidVin = vinValidator.validate(vin);

  if(isValidVin){
    next();
  } else {
    res.status(400).json({ message: `vin ${vin} is invalid` });
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    const sameVinList = cars.filter(car => car.vin === req.body.vin);
    if(sameVinList.length === 0){
      next();
    } else {
      res.status(400).json({ message: `vin ${req.body.vin} already exists` });
    }
  } catch(err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
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
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
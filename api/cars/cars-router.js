const Car = require('./cars-model');
const mw = require('./cars-middleware');
const router = require("express").Router();

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.status(200).json(cars);
  } catch(err) {
    next(err)
  }
});

router.get('/:id', mw.checkCarId, (req, res, next) => {
  try {
    res.status(200).json(req.car);
  } catch (err) {
    next(err);
  }
});

router.post('/', mw.checkCarPayload, mw.checkVinNumberValid, mw.checkVinNumberUnique, async (req, res, next) => {
  const car = req.body;
  try {
    const newCar = await Car.create(car);
    res.status(201).json(newCar);
  } catch(err) {
    next(err);
  }
});

router.put('/:id', mw.checkCarId, mw.checkCarPayload, mw.checkVinNumberValid, mw.checkVinNumberUnique, async (req, res, next) => {
  const { id } = req.params;
  const car = req.body;

  try {
    const updatedCar = await Car.updateById(id, car);
    res.status(200).json(updatedCar);
  } catch(err) {
    next(err);
  }
});

router.delete('/:id', mw.checkCarId, async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCar = await Car.deleteById(id);
    res.status(200).json(deletedCar);
  } catch(err) {
    next(err) 
  }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;
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

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;
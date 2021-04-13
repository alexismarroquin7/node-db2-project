const Car = require('./cars-model');
const router = require("express").Router();

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.getAll();
    res.status(200).json(cars);
  } catch(err) {
    next(err)
  }
});

router.get('/:id', (req, res) => {
  
});

router.post('/', (req, res) => {
  
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;
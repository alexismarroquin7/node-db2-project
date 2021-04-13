const router = require("express").Router();

router.get('/', (req, res) => {
  
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
const { Router } = require('express');

// endpoints
const animaisRouter = require('./animais');
const router = Router();

// http://localhost:3000/api/v1/animais
router.use('/animais', animaisRouter); 

module.exports = router;
const { Router } = require('express');
const animaisRouter = require('./animais');
const router = Router();

router.use('/animais', animaisRouter); 

module.exports = router;
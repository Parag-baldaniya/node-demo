const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../configs/swagger');

router.use('/', swaggerUi.serve);
router.use('/', swaggerUi.setup(swaggerDocument));

module.exports = router;
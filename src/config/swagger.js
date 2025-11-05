const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
};

module.exports = setupSwagger;

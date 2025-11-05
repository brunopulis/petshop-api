const express = require('express');
const routes = require('./routes');
const setupSwagger = require('./config/swagger');

const app = express();
const PORT = 3000;

app.use(express.json());

setupSwagger(app);

// Routes
app.use('/api/v1/', routes);

// Health Route
app.get('/health', (req, res) => {
  res.status(200).send('API Petshop rodando!');
});

// http://localhost:3000/api/v1/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Documentação Swagger em http://localhost:${PORT}/api-docs`);
});

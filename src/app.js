const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/v1', routes);

// Health Route
app.get('/health', (req, res) => {
  res.status(200).send('API Petshop rodando!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
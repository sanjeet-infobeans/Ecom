const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'data', file), 'utf-8'));
}

app.get('/api/users', (req, res) => {
  res.json(readJson('users.json'));
});

app.get('/api/categories', (req, res) => {
  res.json(readJson('categories.json'));
});

app.get('/api/products', (req, res) => {
  res.json(readJson('products.json'));
});

app.listen(PORT, () => {
  console.log(`Backend API server running on http://localhost:${PORT}`);
}); 
const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com',
};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ORIGIN || '*');
  next();
});

app.get('/users', async (req, res) => {
  try {
    const result = await axios.get('/users', config);
    res.send(result.data);
  } catch (error) {
    res.status(400).send('Error while fetching general info');
  }
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


const express = require('express');
const cors = require('cors');

const useGraphql = require('./graphql');
const logger = require('./middlewares/logger');

const createApp = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Hola mi server en express');
  });

  app.use(logger);
  
  await useGraphql(app);
  

  return app;
}

module.exports = createApp;

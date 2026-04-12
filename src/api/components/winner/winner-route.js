const express = require('express');
const { getWinners } = require('../../../controllers/winner.controller');

module.exports = (app) => {
  const router = express.Router();

  app.use('/winners', router);

  router.get('/', getWinners);
};

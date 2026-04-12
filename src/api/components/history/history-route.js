const express = require('express');
const { getHistory } = require('../../../controllers/history.controller');

module.exports = (app) => {
  const router = express.Router();

  app.use('/history', router);

  router.get('/', getHistory);
};

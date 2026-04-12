const express = require('express');
const { gacha } = require('../../../controllers/gacha.controller');

module.exports = (app) => {
  const router = express.Router();

  app.use('/gacha', router);

  router.post('/', gacha);
};

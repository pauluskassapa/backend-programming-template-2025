const express = require('express');
const { getRewards } = require('../../../controllers/reward.controller');

module.exports = (app) => {
  const router = express.Router();

  app.use('/rewards', router);

  router.get('/', getRewards);
};

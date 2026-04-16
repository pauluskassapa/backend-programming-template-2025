const express = require('express');
const { getRewards } = require('../../../controllers/kontrol.hadiah');

module.exports = (app) => {
  const router = express.Router();

  app.use('/rewards', router);

  router.get('/', getRewards);
};

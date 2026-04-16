const express = require('express');
const { getWinners } = require('../../../controllers/kontrol.pemenang');

module.exports = (app) => {
  const router = express.Router();

  app.use('/winners', router);

  router.get('/', getWinners);
};

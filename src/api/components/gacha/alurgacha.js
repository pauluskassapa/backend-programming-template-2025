const express = require('express');
const { gacha } = require('../../../controllers/kontrol.gacha');

module.exports = (app) => {
  const router = express.Router();

  app.use('/gacha', router);

  router.post('/', gacha);
};

const express = require('express');
const { getHistory } = require('../../../controllers/kontrol.riwayat');

module.exports = (app) => {
  const router = express.Router();

  app.use('/history', router);

  router.get('/', getHistory);
};

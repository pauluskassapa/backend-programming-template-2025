const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/aluruser');
const gacha = require('./components/gacha/alurgacha');

const history = require('./components/history/alurriwayat');
const reward = require('./components/reward/alurhadiah');
const winner = require('./components/winner/alurpemenang');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  gacha(app);

  history(app);
  reward(app);
  winner(app);

  return app;
};

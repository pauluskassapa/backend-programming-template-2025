const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const gacha = require('./components/gacha/gacha-route');

const history = require('./components/history/history-route');
const reward = require('./components/reward/reward-route');
const winner = require('./components/winner/winner-route');

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

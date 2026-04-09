const express = require('express');
const router = express.Router();
const controller = require('./gacha.controller');

router.post('/', controller.gacha);

module.exports = router;

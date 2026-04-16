const express = require('express');

const router = express.Router();
const { gacha } = require('../controllers/kontrol.gacha');

router.post('/', gacha);

module.exports = router;

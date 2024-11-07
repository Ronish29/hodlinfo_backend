const express = require('express');
const { fetchAndStore, topCryptos } = require('../controllers/Crypto');
const router = express.Router();

router.post('/fetch-and-store',fetchAndStore);
router.get('/top-cryptos',topCryptos);

module.exports = router;
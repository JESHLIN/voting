// In routes/webtoons.js
const express = require('express');
const Webtoon = require('../models/Webtoon');
const router = express.Router();

// Get all webtoons
router.get('/', async (req, res) => {
  try {
    const webtoons = await Webtoon.find();
    res.json(webtoons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

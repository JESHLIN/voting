const mongoose = require('mongoose');

const WebtoonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  votes: {
    manhwa: { type: Number, default: 0 },
    anime: { type: Number, default: 0 },
  },
});

module.exports = mongoose.model('Webtoon', WebtoonSchema);

const mongoose = require('mongoose');

const prizeSchema = new mongoose.Schema({
  name: String,
  quota: Number,
  claimed: { type: Number, default: 0 },
});

module.exports = mongoose.model('Prize', prizeSchema);

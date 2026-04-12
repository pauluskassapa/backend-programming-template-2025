const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quota: { type: Number, required: true },
  claimed: { type: Number, default: 0 },
});

module.exports = mongoose.model('Reward', rewardSchema);

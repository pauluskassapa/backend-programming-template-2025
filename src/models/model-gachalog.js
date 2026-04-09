const mongoose = require('mongoose');

const gachaLogSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  prize: String,
  is_win: Boolean,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('GachaLog', gachaLogSchema);

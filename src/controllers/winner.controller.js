const Gacha = require('../models/gacha.model');

function maskName(name) {
  return name
    .split(' ')
    .map((word) => {
      if (word.length <= 2) return '*'.repeat(word.length);
      return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
    })
    .join(' ');
}

exports.getWinners = async (req, res) => {
  try {
    const winners = await Gacha.find({ reward: { $ne: null } });

    const result = winners.map((w) => ({
      user: maskName(w.user),
      reward: w.reward,
    }));

    res.json({
      data: result,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const Reward = require('../models/reward.model');

exports.getRewards = async (req, res) => {
  try {
    const rewards = await Reward.find();

    const result = rewards.map((r) => ({
      name: r.name,
      quota: r.quota,
      remaining: r.quota - r.claimed,
    }));

    res.json({ data: result });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

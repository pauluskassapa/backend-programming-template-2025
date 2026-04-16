const Gacha = require('../models/modelgacha');

exports.getHistory = async (req, res) => {
  try {
    const { user } = req.query;

    if (!user) {
      return res.status(400).json({ message: 'User is required' });
    }

    const history = await Gacha.find({ user });

    res.json({
      data: history,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

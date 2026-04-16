const Gacha = require('../models/modelgacha');
const Reward = require('../models/modelhadiah');

exports.gacha = async (req, res) => {
  try {
    const { user } = req.body;

    if (!user) {
      return res.status(400).json({ message: 'User is required' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const count = await Gacha.countDocuments({
      user,
      createdAt: { $gte: today },
    });

    if (count >= 5) {
      return res.status(400).json({
        message: 'Limit gacha hari ini sudah habis',
      });
    }

    const rewards = await Reward.find({
      $expr: { $lt: ['$claimed', '$quota'] },
    });

    if (rewards.length === 0) {
      await Gacha.create({ user, reward: null });

      return res.json({
        message: 'Tidak mendapatkan hadiah',
      });
    }

    const random = rewards[Math.floor(Math.random() * rewards.length)];

    random.claimed += 1;
    await random.save();

    await Gacha.create({
      user,
      reward: random.name,
    });

    return res.json({
      message: `Selamat! Kamu mendapatkan ${random.name}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

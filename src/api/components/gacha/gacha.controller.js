const gachaService = require('./gacha.service');

exports.gacha = async (req, res) => {
  try {
    const { user_id, name } = req.body;

    const result = await gachaService.playGacha(user_id, name);

    return res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

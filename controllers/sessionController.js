const { Session } = require('../models');

exports.createSession = async (req, res) => {
  try {
    const session = await Session.create(req.body);
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSessionByUserId = async (req, res) => {
  try {
    const session = await Session.findOne({ where: { userId: req.params.userId } });
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (session) {
      await session.destroy();
      res.status(204).json({ message: "Session supprimée" });
    } else {
      res.status(404).json({ message: "Session non trouvée" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const jwt = require('jsonwebtoken');
const { Admin } = require('../models');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide.' });
    }

    // Ajout de l'utilisateur décodé dans la requête
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;

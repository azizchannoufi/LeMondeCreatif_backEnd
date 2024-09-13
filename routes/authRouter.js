const { authMiddleware } = require('../middlewares/authMiddleware');

app.get('/protected-route', authMiddleware, (req, res) => {
  res.json({ message: 'Accès accordé à la route protégée' });
});

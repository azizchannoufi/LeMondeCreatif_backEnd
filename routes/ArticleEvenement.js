const express = require('express');
const {
  createArticleEvenement,
  getArticleEvenements,
  getArticleEvenementById,
  updateArticleEvenement,
  deleteArticleEvenement
} = require('../controllers/ArticleEvenmentC');

const router = express.Router();

// Créer une nouvelle relation Article-Événement
router.post('/', createArticleEvenement);

// Obtenir toutes les relations Article-Événement
router.get('/', getArticleEvenements);

// Obtenir une relation Article-Événement par ID
router.get('/:id', getArticleEvenementById);

// Mettre à jour une relation Article-Événement par ID
router.put('/:id', updateArticleEvenement);

// Supprimer une relation Article-Événement par ID
router.delete('/:id', deleteArticleEvenement);

module.exports = router;

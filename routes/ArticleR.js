const express = require('express');
const {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  getNewArticle
} = require('../controllers/ArticleC');

const router = express.Router();

// Créer un article
router.post('/', createArticle);

// Lire tous les articles
router.get('/', getArticles);

// Lire un article par ID
router.get('/byid/:id', getArticleById);

// Lire les 6 dernier article
router.get('/lastArticle',getNewArticle)

// Mettre à jour un article
router.put('/:id', updateArticle);

// Supprimer un article
router.delete('/:id', deleteArticle);

module.exports = router;

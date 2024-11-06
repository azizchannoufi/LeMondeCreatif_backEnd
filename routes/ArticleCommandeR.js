const express = require('express');
const {
  createArticleCommande,
  getArticleCommandes,
  getArticleCommandeById,
  updateArticleCommande,
  deleteArticleCommande
} = require('../controllers/ArticleCommandeC');

const router = express.Router();

// Créer une relation Article-Commande
router.post('/', createArticleCommande);

// Lire toutes les relations Article-Commande
router.get('/', getArticleCommandes);

// Lire une relation Article-Commande par ID
router.get('/:id', getArticleCommandeById);

// Mettre à jour une relation Article-Commande
router.put('/:id', updateArticleCommande);

// Supprimer une relation Article-Commande
router.delete('/:id', deleteArticleCommande);

module.exports = router;

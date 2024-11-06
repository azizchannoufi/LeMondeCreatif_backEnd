const express = require('express');
const {
  createCategorie,
  getCategories,
  getCategorieById,
  updateCategorie,
  deleteCategorie
} = require('../controllers/CategorieC');

const router = express.Router();

// Créer une catégorie
router.post('/', createCategorie);

// Lire toutes les catégories
router.get('/', getCategories);

// Lire une catégorie par ID
router.get('/:id', getCategorieById);

// Mettre à jour une catégorie
router.put('/:id', updateCategorie);

// Supprimer une catégorie
router.delete('/:id', deleteCategorie);

module.exports = router;

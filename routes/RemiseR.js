const express = require('express');
const {
  createRemise,
  getRemises,
  getRemiseById,
  updateRemise,
  deleteRemise
} = require('../controllers/RemiseC');

const router = express.Router();

// Créer une remise
router.post('/', createRemise);

// Lire toutes les remises
router.get('/', getRemises);

// Lire une remise par ID
router.get('/:id', getRemiseById);

// Mettre à jour une remise
router.put('/:id', updateRemise);

// Supprimer une remise
router.delete('/:id', deleteRemise);

module.exports = router;

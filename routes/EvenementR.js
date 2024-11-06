const express = require('express');
const {
  createEvenement,
  getEvenements,
  getEvenementById,
  updateEvenement,
  deleteEvenement
} = require('../controllers/EvenementC');

const router = express.Router();

// Créer un événement
router.post('/', createEvenement);

// Lire tous les événements
router.get('/', getEvenements);

// Lire un événement par ID
router.get('/:id', getEvenementById);

// Mettre à jour un événement
router.put('/:id', updateEvenement);

// Supprimer un événement
router.delete('/:id', deleteEvenement);

module.exports = router;

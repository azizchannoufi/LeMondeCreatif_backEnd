const express = require('express');
const {
  createCommande,
  getCommandes,
  getCommandeById,
  updateCommande,
  deleteCommande,
  getCommandeAdmin
} = require('../controllers/CommandeC');

const router = express.Router();

// Créer une commande
router.post('/', createCommande);

// Lire toutes les commandes
router.get('/', getCommandes);

// Lire toutes les commandes pour l'admin
router.get('/admin', getCommandeAdmin);

// Lire une commande par ID
router.get('/:id', getCommandeById);

// Mettre à jour une commande
router.put('/:id', updateCommande);

// Supprimer une commande
router.delete('/:id', deleteCommande);

module.exports = router;

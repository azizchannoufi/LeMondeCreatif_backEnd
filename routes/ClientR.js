const express = require('express');
const {
  createClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient
} = require('../controllers/ClientC');

const router = express.Router();

// Créer un client
router.post('/', createClient);

// Lire tous les clients
router.get('/', getClients);

// Lire un client par ID
router.get('/:id', getClientById);

// Mettre à jour un client
router.put('/:id', updateClient);

// Supprimer un client
router.delete('/:id', deleteClient);

module.exports = router;

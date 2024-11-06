const express = require('express');
const {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
} = require('../controllers/adminController');

const router = express.Router();

// Créer un administrateur
router.post('/', createAdmin);

// Lire tous les administrateurs
router.get('/', getAdmins);

// Lire un administrateur par ID
router.get('/:id', getAdminById);

// Mettre à jour un administrateur
router.put('/:id', updateAdmin);

// Supprimer un administrateur
router.delete('/:id', deleteAdmin);

module.exports = router;

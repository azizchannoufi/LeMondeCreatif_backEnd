const express = require('express');
const {
  createPack,
  getPacks,
  getPackById,
  updatePack,
  deletePack,
  getNewPacks
} = require('../controllers/PackC');  // Assurez-vous que le chemin du contrôleur est correct

const router = express.Router();

// Créer un nouveau pack
router.post('/', createPack);

// Obtenir tous les packs
router.get('/', getPacks);

// Obtenir un pack par ID
router.get('/:id', getPackById);

// Mettre à jour un pack par ID
router.put('/:id', updatePack);

// Supprimer un pack par ID
router.delete('/:id', deletePack);

// Obtenir les nouveaux packs (si nécessaire)
router.get('/new', getNewPacks);

module.exports = router;

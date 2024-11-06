const express = require('express');
const {
  createPromoCode,
  getPromoCodes,
  getPromoCodeById,
  updatePromoCode,
  deletePromoCode
} = require('../controllers/PromoCodeC');

const router = express.Router();

// Créer un code promo
router.post('/', createPromoCode);

// Lire tous les codes promo
router.get('/', getPromoCodes);

// Lire un code promo par ID
router.get('/:id', getPromoCodeById);

// Mettre à jour un code promo
router.put('/:id', updatePromoCode);

// Supprimer un code promo
router.delete('/:id', deletePromoCode);

module.exports = router;

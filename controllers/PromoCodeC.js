const { PromoCode } = require('../models/PromoCode');

// Création d'un code promo
const createPromoCode = async (req, res) => {
  try {
    const promoCode = await PromoCode.create(req.body);
    res.status(201).json(promoCode);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du code promo', error });
  }
};

// Récupérer tous les codes promo
const getPromoCodes = async (req, res) => {
  try {
    const promoCodes = await PromoCode.findAll();
    res.status(200).json(promoCodes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des codes promo', error });
  }
};

// Récupérer un code promo par ID
const getPromoCodeById = async (req, res) => {
  try {
    const promoCode = await PromoCode.findByPk(req.params.id);
    if (promoCode) {
      res.status(200).json(promoCode);
    } else {
      res.status(404).json({ message: 'Code promo non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du code promo', error });
  }
};

// Mettre à jour un code promo
const updatePromoCode = async (req, res) => {
  try {
    const promoCode = await PromoCode.findByPk(req.params.id);
    if (promoCode) {
      await promoCode.update(req.body);
      res.status(200).json(promoCode);
    } else {
      res.status(404).json({ message: 'Code promo non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du code promo', error });
  }
};

// Supprimer un code promo
const deletePromoCode = async (req, res) => {
  try {
    const promoCode = await PromoCode.findByPk(req.params.id);
    if (promoCode) {
      await promoCode.destroy();
      res.status(200).json({ message: 'Code promo supprimé' });
    } else {
      res.status(404).json({ message: 'Code promo non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du code promo', error });
  }
};

module.exports = { createPromoCode, getPromoCodes, getPromoCodeById, updatePromoCode, deletePromoCode };

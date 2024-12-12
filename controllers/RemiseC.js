const  Remise  = require('../models/Remise');

// Création d'une remise
const createRemise = async (req, res) => {
  try {
    const remise = await Remise.create(req.body);
    res.status(201).json(remise);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la remise', error });
  }
};

// Récupérer toutes les remises
const getRemises = async (req, res) => {
  try {
    const remises = await Remise.findAll();
    res.status(200).json(remises);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des remises', error });
  }
};

// Récupérer une remise par ID
const getRemiseById = async (req, res) => {
  try {
    const remise = await Remise.findByPk(req.params.id);
    if (remise) {
      res.status(200).json(remise);
    } else {
      res.status(404).json({ message: 'Remise non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la remise', error });
  }
};

// Mettre à jour une remise
const updateRemise = async (req, res) => {
  try {
    const remise = await Remise.findByPk(req.params.id);
    if (remise) {
      await remise.update(req.body);
      res.status(200).json(remise);
    } else {
      res.status(404).json({ message: 'Remise non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la remise', error });
  }
};

// Supprimer une remise
const deleteRemise = async (req, res) => {
  try {
    const remise = await Remise.findByPk(req.params.id);
    if (remise) {
      await remise.destroy();
      res.status(200).json({ message: 'Remise supprimée' });
    } else {
      res.status(404).json({ message: 'Remise non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la remise', error });
  }
};

module.exports = { createRemise, getRemises, getRemiseById, updateRemise, deleteRemise };

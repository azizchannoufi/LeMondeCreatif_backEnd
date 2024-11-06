const { Evenement } = require('../models/Evenement');

// Création d'un événement
const createEvenement = async (req, res) => {
  try {
    const evenement = await Evenement.create(req.body);
    res.status(201).json(evenement);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'événement', error });
  }
};

// Récupérer tous les événements
const getEvenements = async (req, res) => {
  try {
    const evenements = await Evenement.findAll();
    res.status(200).json(evenements);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des événements', error });
  }
};

// Récupérer un événement par ID
const getEvenementById = async (req, res) => {
  try {
    const evenement = await Evenement.findByPk(req.params.id);
    if (evenement) {
      res.status(200).json(evenement);
    } else {
      res.status(404).json({ message: 'Événement non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'événement', error });
  }
};

// Mettre à jour un événement
const updateEvenement = async (req, res) => {
  try {
    const evenement = await Evenement.findByPk(req.params.id);
    if (evenement) {
      await evenement.update(req.body);
      res.status(200).json(evenement);
    } else {
      res.status(404).json({ message: 'Événement non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'événement', error });
  }
};

// Supprimer un événement
const deleteEvenement = async (req, res) => {
  try {
    const evenement = await Evenement.findByPk(req.params.id);
    if (evenement) {
      await evenement.destroy();
      res.status(200).json({ message: 'Événement supprimé' });
    } else {
      res.status(404).json({ message: 'Événement non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'événement', error });
  }
};

module.exports = { createEvenement, getEvenements, getEvenementById, updateEvenement, deleteEvenement };

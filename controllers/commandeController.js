const { Commande } = require('../models');

// Créer une commande
exports.createCommande = async (req, res) => {
  try {
    const commande = await Commande.create(req.body);
    res.status(201).json(commande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lire toutes les commandes
exports.getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.findAll();
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lire une commande par ID
exports.getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findByPk(req.params.id);
    if (commande) {
      res.status(200).json(commande);
    } else {
      res.status(404).json({ message: "Commande non trouvée" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une commande
exports.updateCommande = async (req, res) => {
  try {
    const commande = await Commande.findByPk(req.params.id);
    if (commande) {
      await commande.update(req.body);
      res.status(200).json(commande);
    } else {
      res.status(404).json({ message: "Commande non trouvée" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une commande
exports.deleteCommande = async (req, res) => {
  try {
    const commande = await Commande.findByPk(req.params.id);
    if (commande) {
      await commande.destroy();
      res.status(204).json({ message: "Commande supprimée" });
    } else {
      res.status(404).json({ message: "Commande non trouvée" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

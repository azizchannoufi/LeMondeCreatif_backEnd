const { Favori } = require('../models');

// Ajouter un produit aux favoris
exports.addFavori = async (req, res) => {
  try {
    const favori = await Favori.create(req.body);
    res.status(201).json(favori);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lire tous les favoris
exports.getAllFavoris = async (req, res) => {
  try {
    const favoris = await Favori.findAll();
    res.status(200).json(favoris);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un produit des favoris
exports.deleteFavori = async (req, res) => {
  try {
    const favori = await Favori.findByPk(req.params.id);
    if (favori) {
      await favori.destroy();
      res.status(204).json({ message: "Favori supprimé" });
    } else {
      res.status(404).json({ message: "Favori non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

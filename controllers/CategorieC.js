const { Categorie } = require('../models/Categorie');

// Création d'une catégorie
const createCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.create(req.body);
    res.status(201).json(categorie);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la catégorie', error });
  }
};

// Récupérer toutes les catégories
const getCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des catégories', error });
  }
};

// Récupérer une catégorie par ID
const getCategorieById = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (categorie) {
      res.status(200).json(categorie);
    } else {
      res.status(404).json({ message: 'Catégorie non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la catégorie', error });
  }
};

// Mettre à jour une catégorie
const updateCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (categorie) {
      await categorie.update(req.body);
      res.status(200).json(categorie);
    } else {
      res.status(404).json({ message: 'Catégorie non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la catégorie', error });
  }
};

// Supprimer une catégorie
const deleteCategorie = async (req, res) => {
  try {
    const categorie = await Categorie.findByPk(req.params.id);
    if (categorie) {
      await categorie.destroy();
      res.status(200).json({ message: 'Catégorie supprimée' });
    } else {
      res.status(404).json({ message: 'Catégorie non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la catégorie', error });
  }
};

module.exports = { createCategorie, getCategories, getCategorieById, updateCategorie, deleteCategorie };
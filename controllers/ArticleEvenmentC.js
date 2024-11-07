const ArticleEvenement = require('../models/ArticleEvenement');

// Créer une relation entre un article et un événement
const createArticleEvenement = async (req, res) => {
  try {
    const { idArticle, idEvenement } = req.body;
    const articleEvenement = await ArticleEvenement.create({ idArticle, idEvenement });
    res.status(201).json(articleEvenement);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la création de la relation Article-Événement" });
  }
};

// Obtenir toutes les relations Article-Événement
const getArticleEvenements = async (req, res) => {
  try {
    const articleEvenements = await ArticleEvenement.findAll();
    res.status(200).json(articleEvenements);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des relations Article-Événement" });
  }
};

// Obtenir une relation Article-Événement par ID
const getArticleEvenementById = async (req, res) => {
  try {
    const { id } = req.params;
    const articleEvenement = await ArticleEvenement.findByPk(id);
    if (!articleEvenement) {
      return res.status(404).json({ error: "Relation Article-Événement non trouvée" });
    }
    res.status(200).json(articleEvenement);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération de la relation Article-Événement" });
  }
};

// Mettre à jour une relation Article-Événement par ID
const updateArticleEvenement = async (req, res) => {
  try {
    const { id } = req.params;
    const { idArticle, idEvenement } = req.body;
    const articleEvenement = await ArticleEvenement.findByPk(id);
    if (!articleEvenement) {
      return res.status(404).json({ error: "Relation Article-Événement non trouvée" });
    }
    await articleEvenement.update({ idArticle, idEvenement });
    res.status(200).json(articleEvenement);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour de la relation Article-Événement" });
  }
};

// Supprimer une relation Article-Événement par ID
const deleteArticleEvenement = async (req, res) => {
  try {
    const { id } = req.params;
    const articleEvenement = await ArticleEvenement.findByPk(id);
    if (!articleEvenement) {
      return res.status(404).json({ error: "Relation Article-Événement non trouvée" });
    }
    await articleEvenement.destroy();
    res.status(200).json({ message: "Relation Article-Événement supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression de la relation Article-Événement" });
  }
};

module.exports = {
  createArticleEvenement,
  getArticleEvenements,
  getArticleEvenementById,
  updateArticleEvenement,
  deleteArticleEvenement
};

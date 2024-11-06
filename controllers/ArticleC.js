const { Article } = require('../models/Article');

// Création d'un article
const createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'article', error });
  }
};

// Récupérer tous les articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des articles', error });
  }
};

// Récupérer un article par ID
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404).json({ message: 'Article non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'article', error });
  }
};

// Mettre à jour un article
const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (article) {
      await article.update(req.body);
      res.status(200).json(article);
    } else {
      res.status(404).json({ message: 'Article non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'article', error });
  }
};

// Supprimer un article
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (article) {
      await article.destroy();
      res.status(200).json({ message: 'Article supprimé' });
    } else {
      res.status(404).json({ message: 'Article non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'article', error });
  }
};

module.exports = { createArticle, getArticles, getArticleById, updateArticle, deleteArticle };

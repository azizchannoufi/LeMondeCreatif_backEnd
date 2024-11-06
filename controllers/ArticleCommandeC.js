const { ArticleCommande } = require('../models/ArticleCommande');

// Création d'un enregistrement ArticleCommande
const createArticleCommande = async (req, res) => {
  try {
    const articleCommande = await ArticleCommande.create(req.body);
    res.status(201).json(articleCommande);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'article commande', error });
  }
};

// Récupérer tous les enregistrements ArticleCommande
const getArticleCommandes = async (req, res) => {
  try {
    const articleCommandes = await ArticleCommande.findAll();
    res.status(200).json(articleCommandes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des articles commandes', error });
  }
};

// Récupérer un enregistrement ArticleCommande par ID
const getArticleCommandeById = async (req, res) => {
  try {
    const articleCommande = await ArticleCommande.findByPk(req.params.id);
    if (articleCommande) {
      res.status(200).json(articleCommande);
    } else {
      res.status(404).json({ message: 'Article commande non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'article commande', error });
  }
};

// Mettre à jour un enregistrement ArticleCommande
const updateArticleCommande = async (req, res) => {
  try {
    const articleCommande = await ArticleCommande.findByPk(req.params.id);
    if (articleCommande) {
      await articleCommande.update(req.body);
      res.status(200).json(articleCommande);
    } else {
      res.status(404).json({ message: 'Article commande non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'article commande', error });
  }
};

// Supprimer un enregistrement ArticleCommande
const deleteArticleCommande = async (req, res) => {
  try {
    const articleCommande = await ArticleCommande.findByPk(req.params.id);
    if (articleCommande) {
      await articleCommande.destroy();
      res.status(200).json({ message: 'Article commande supprimé' });
    } else {
      res.status(404).json({ message: 'Article commande non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'article commande', error });
  }
};

module.exports = { createArticleCommande, getArticleCommandes, getArticleCommandeById, updateArticleCommande, deleteArticleCommande };

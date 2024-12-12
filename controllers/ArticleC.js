const  Article  = require('../models/Article');
const Categorie =require('../models/Categorie')
const ImageArticle = require('../models/ImageArticle')
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

// Récupérer les 6 derniers articles ajoutés
const getNewArticle = async (req, res) => {
    try {
      const articles = await Article.findAll({
        order: [['id', 'DESC']],
        limit: 6
      });
      res.status(200).json(articles);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération des nouveaux articles', error });
    }
  };

  const getarticlesAdmin = async (req, res) => {
    try {
      // Récupérer tous les articles sans inclure directement la catégorie
      const articles = await Article.findAll();
  
      // Pour chaque article, récupérer la catégorie et les images associées
      const articlesWithDetails = await Promise.all(
        articles.map(async (article) => {
          // Récupérer la catégorie associée
          const categorie = await Categorie.findByPk(article.idCategorie);
  
          // Récupérer les images associées
          const images = await ImageArticle.findAll({
            where: { articleId: article.id },
            attributes: ['imageUrl', 'publicId'],
          });
  
          // Retourner l'article avec son nom de catégorie et ses images
          return {
            ...article.toJSON(),
            categorieNom: categorie ? categorie.nom : null, // Nom de la catégorie ou null
            images: images || [], // Images ou tableau vide
          };
        })
      );
  
      // Retourner la liste des articles avec leurs catégories et images
      res.status(200).json(articlesWithDetails);
    } catch (e) {
      res.status(500).json({
        message: 'Erreur lors de la récupération des articles',
        erreur: e.message,
      });
    }
  };

  const UpdateRemiseAll=async()=>{
    
  }
  

module.exports = { createArticle, getArticles, getArticleById, updateArticle, deleteArticle,getNewArticle,getarticlesAdmin };

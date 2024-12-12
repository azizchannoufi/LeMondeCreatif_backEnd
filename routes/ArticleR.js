const express = require('express');
const {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  getNewArticle,
  getarticlesAdmin
} = require('../controllers/ArticleC');
const  {
  uploadArticleImages
}= require('../Middleware/Cloudinary')

const router = express.Router();

// Créer un article
router.post('/', createArticle);
router .post('/upload',uploadArticleImages)
// Lire tous les articles
router.get('/', getArticles);

// Lire un article par ID
router.get('/byid/:id', getArticleById);

// Lire les 6 dernier article
router.get('/lastArticle',getNewArticle)
router.get('/adminArticle',getarticlesAdmin)

// Mettre à jour un article
router.put('/:id', updateArticle);

// Supprimer un article
router.delete('/:id', deleteArticle);

module.exports = router;

const express = require('express');
const {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
  getNewArticle,
  getarticlesAdmin,
  UpdateRemiseAll,
  getStatutRemise,
  getArticlesByCategAdmin
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

// lire la status de remise
router.get('/remiseart/:id', getStatutRemise);

// lire la status de remise
router.get('/artcateg/:id', getArticlesByCategAdmin);

// Lire un article par ID
router.get('/byid/:id', getArticleById);

// Lire les 6 dernier article
router.get('/lastArticle',getNewArticle)
router.get('/adminArticle',getarticlesAdmin)

// Mettre à jour un article
router.put('/:id', updateArticle);
//mettre a jour le remise 
router.put('/remise/:id',UpdateRemiseAll);
// Supprimer un article
router.delete('/:id', deleteArticle);

module.exports = router;

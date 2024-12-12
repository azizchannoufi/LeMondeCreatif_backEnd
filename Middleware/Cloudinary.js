const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // Charger les variables d'environnement
const { where } = require('sequelize');
const Article = require('../models/Article');
const ImageArticle = require('../models/ImageArticle');
// Configuration de Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Fonction d'upload
// Upload d'images
exports.uploadArticleImages = async (req, res) => {
    const { articleId, files } = req.body; // "files" est un tableau contenant des chaînes Base64
  
    // if (!articleId || !files || !Array.isArray(files) || files.length === 0) {
    //   return res.status(400).json({ error: 'Article ID et fichiers sont requis.' });
    // }
  
    try {
      // Vérifiez si l'article existe
      const article = await Article.findByPk(articleId); 
      if (!article) {
        return res.status(404).json({ error: 'Article introuvable.' });
      }
  
      // Téléverser les fichiers vers Cloudinary
      const uploadedImages = await Promise.all(
        files.map(async (fileBase64) => {
          try {
            const result = await cloudinary.uploader.upload(fileBase64, {
              folder: 'e-commerce',
            });
            return {
              imageUrl: result.secure_url,
              publicId: result.public_id,
              articleId,
            };
          } catch (uploadError) {
            console.error('Erreur de téléversement:', uploadError);
            throw new Error('Erreur de téléversement.');
          }
        })
      );
  
      // Sauvegarder les images dans la base de données
      await ImageArticle.bulkCreate(uploadedImages);
  
      res.status(201).json({
        message: 'Images téléchargées avec succès.',
        images: uploadedImages,
      });
    } catch (error) {
      console.error('Erreur lors de l\'upload:', error);
      res.status(500).json({ error: 'Erreur interne du serveur.' });
    }
  };
  
  exports.updateArticleImage = async (req, res) => {
    const { imageId } = req.params;
    const { file } = req;
  
    try {
      const image = await ImageArticle.findByPk(imageId);
  
      if (!image) {
        return res.status(404).json({ error: 'Image introuvable.' });
      }
  
      // Supprimer l'ancienne image de Cloudinary
      await cloudinary.uploader.destroy(image.publicId);
  
      // Uploader la nouvelle image
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'e-commerce'
      });
  
      // Mettre à jour les informations dans la base de données
      image.imageUrl = result.secure_url;
      image.publicId = result.public_id;
      await image.save();
  
      res.status(200).json({ message: 'Image mise à jour avec succès.', image });
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      res.status(500).json({ error: 'Erreur interne du serveur.' });
    }
  };
  
exports.deleteArticleImage = async (req, res) => {
    const { imageId } = req.params;
  
    try {
      const image = await ImageArticle.findByPk(imageId);
  
      if (!image) {
        return res.status(404).json({ error: 'Image introuvable.' });
      }
  
      // Suppression de Cloudinary
      await cloudinary.uploader.destroy(image.publicId);
  
      // Suppression de la base de données
      await image.destroy();
  
      res.status(200).json({ message: 'Image supprimée avec succès.' });
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      res.status(500).json({ error: 'Erreur interne du serveur.' });
    }
  };
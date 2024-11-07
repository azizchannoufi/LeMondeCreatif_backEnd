const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

// Définition du modèle ArticleEvenement pour la relation plusieurs-à-plusieurs entre Article et Evenement
const ArticleEvenement = sequelize.define('ArticleEvenement', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idArticle: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Articles', // Nom du modèle associé (doit correspondre à celui dans votre base de données)
      key: 'id'
    }
  },
  idEvenement: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Evenements', // Nom du modèle associé
      key: 'id'
    }
  },
}, {
  timestamps: true 
});

module.exports = ArticleEvenement;

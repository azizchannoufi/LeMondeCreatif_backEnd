const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');
const Commande = require('./Commande'); // Importer le modèle Commande
const Article = require('./Article');   // Importer le modèle Article

const ArticleCommande = sequelize.define('ArticleCommande', {
    id: {
        type: DataTypes.INTEGER,  // Utilisation d'un identifiant de type entier
        primaryKey: true,         // Définir 'id' comme clé primaire
        autoIncrement: true       // Auto-incrémentation de l'ID
      },
  quantite: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  idCommande: {
    type: DataTypes.INTEGER,
    references: {
      model: Commande, // Référence au modèle Commande
      key: 'id'        // Colonne à référencer
    },
    allowNull: false
  },
  idArticle: {
    type: DataTypes.INTEGER,
    references: {
      model: Article,  // Référence au modèle Article
      key: 'id'        // Colonne à référencer
    },
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = ArticleCommande;

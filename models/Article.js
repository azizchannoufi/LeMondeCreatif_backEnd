const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');
const categorie=require('./Categorie')
const Article = sequelize.define('Article', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  prix: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  old_prix: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  prix_remise: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  enremise:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  totalEvaluations: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  moyenneEvaluation: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0
  },
  packId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'packs',
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  },
  idCategorie: {  // Nouveau champ pour la catégorie
    type: DataTypes.INTEGER,
    allowNull: true, // Peut être null si certains articles n'ont pas de catégorie
    references: {
      model: categorie, // Assurez-vous que le nom correspond à votre table des catégories
      key: 'id'
    },
    onDelete: 'SET NULL',  // Si une catégorie est supprimée, la valeur de idCategorie sera mise à NULL
    onUpdate: 'CASCADE'
  }
}, {
  timestamps: true
});

module.exports = Article;

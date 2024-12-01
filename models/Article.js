const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

const Article = sequelize.define('Article', {
  id: {
    type: DataTypes.INTEGER,  // Utilisation d'un identifiant de type entier
    primaryKey: true,         // Définir 'id' comme clé primaire
    autoIncrement: true       // Auto-incrémentation de l'ID
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
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  enRemise: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  pourcentageRemise: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  },
  totalEvaluations: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0 // Par défaut, aucun avis n'est donné.
  },
  moyenneEvaluation: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0.0 // Par défaut, la note moyenne est 0.
  },
  packId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'packs', // Vérifiez que ce nom correspond au nom réel de la table
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
}, {
  timestamps: true
});

module.exports = Article;

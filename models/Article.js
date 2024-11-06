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
  }
}, {
  timestamps: true
});

module.exports = Article;

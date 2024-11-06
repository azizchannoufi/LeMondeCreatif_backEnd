const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

const Categorie = sequelize.define('Categorie', {
  id: {
    type: DataTypes.INTEGER,  // Utilisation d'un identifiant de type entier
    primaryKey: true,         // Définir 'id' comme clé primaire
    autoIncrement: true       // Auto-incrémentation de l'ID
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Categorie;

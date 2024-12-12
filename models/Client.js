const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,  // Utilisation d'un identifiant de type entier
        primaryKey: true,         // Définir 'id' comme clé primaire
        autoIncrement: true       // Auto-incrémentation de l'ID
      },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  motDePasse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true
});

module.exports = Client;

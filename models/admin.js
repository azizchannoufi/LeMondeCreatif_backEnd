const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.INTEGER,  // Utilisation d'un identifiant de type entier
        primaryKey: true,         // Définir 'id' comme clé primaire
        autoIncrement: true       // Auto-incrémentation de l'ID
      },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  motDePasse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.STRING, 
    allowNull: true
  },
  adresseEmailPro: {
    type: DataTypes.STRING,
    allowNull: true
  },
  adresse: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true
});

module.exports = Admin;

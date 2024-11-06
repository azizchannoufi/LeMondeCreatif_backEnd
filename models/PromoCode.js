const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

const PromoCode = sequelize.define('PromoCode', {
    id: {
        type: DataTypes.INTEGER,  // Utilisation d'un identifiant de type entier
        primaryKey: true,         // Définir 'id' comme clé primaire
        autoIncrement: true       // Auto-incrémentation de l'ID
      },
  code: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  remise: {
    type: DataTypes.FLOAT,
    allowNull: false // Pourcentage de réduction
  }
}, {
  timestamps: true
});

module.exports = PromoCode;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

const Commande = sequelize.define('Commande', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // Ajoutez cette ligne pour auto-incrémenter la clé primaire
  },
  modeLivraison: {
    type: DataTypes.STRING,
    allowNull: false // Peut être "domicile" ou "poste"
  },
  dateCommande: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true
});

module.exports = Commande;
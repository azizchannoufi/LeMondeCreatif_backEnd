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
  modePayment: {
    type: DataTypes.STRING,
    allowNull: false // Peut être "domicile" ou "poste"
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false // Peut être "domicile" ou "poste"
  },
  dateCommande: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false // Peut être "domicile" ou "poste"
  },
  idClient: {
    type: DataTypes.INTEGER,
    allowNull: false // Peut être "domicile" ou "poste"
  }
}, {
  timestamps: true
});

module.exports = Commande;

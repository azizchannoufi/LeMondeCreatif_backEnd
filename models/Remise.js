const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

const Remise= sequelize.define('Remise', {
  id: {
    type: DataTypes.INTEGER,  // Utilisez DataTypes.UUID si vous préférez des identifiants uniques universels
    primaryKey: true,         // Définit ce champ comme clé primaire
    autoIncrement: true       // Auto-incrémentation pour générer un nouvel ID automatiquement
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false          // Assurez-vous que le titre est obligatoire
  },
  date_debut:{
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  date_fin:{
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  status:{
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'inactive'
  },
  pourcentageRemise: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  },
}, {
  tableName: 'remises',    // Assurez-vous que la table porte le nom correct dans la base de données
  timestamps: true            // Permet la gestion des timestamps (createdAt, updatedAt)
});

module.exports = Remise;

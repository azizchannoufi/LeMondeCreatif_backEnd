const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

const Evenement = sequelize.define('Evenement', {
  id: {
    type: DataTypes.INTEGER,  // Utilisez DataTypes.UUID si vous préférez des identifiants uniques universels
    primaryKey: true,         // Définit ce champ comme clé primaire
    autoIncrement: true       // Auto-incrémentation pour générer un nouvel ID automatiquement
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false          // Assurez-vous que le titre est obligatoire
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true           // La colonne 'image' est optionnelle
  }
}, {
  tableName: 'evenements',    // Assurez-vous que la table porte le nom correct dans la base de données
  timestamps: true            // Permet la gestion des timestamps (createdAt, updatedAt)
});

module.exports = Evenement;

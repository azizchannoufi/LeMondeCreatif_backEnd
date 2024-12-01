const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');

const Pack = sequelize.define('Pack', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    }
  }, {
    tableName: 'packs', // Nom explicite pour la table
    timestamps: true
  });
  

module.exports = Pack;

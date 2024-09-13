const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // configuration sequelize

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  material: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_url: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  stock_quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: true // Active les colonnes created_at et updated_at
});

module.exports = Product;

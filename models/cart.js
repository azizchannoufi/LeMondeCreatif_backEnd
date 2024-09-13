const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Cart extends Model {}

Cart.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Cart',
  timestamps: true
});

module.exports = Cart;

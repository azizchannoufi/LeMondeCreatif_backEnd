const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class OrderItems extends Model {}

OrderItems.init({
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'OrderItems',
  timestamps: true
});

module.exports = OrderItems;

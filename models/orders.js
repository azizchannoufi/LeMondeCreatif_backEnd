const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Orders extends Model {}

Orders.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Orders',
  timestamps: true
});

module.exports = Orders;

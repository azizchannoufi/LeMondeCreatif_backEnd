const { DataTypes } = require('sequelize');
const sequelize = require('../config/ConfigDatabase');
const Article = require('./Article');

const ImageArticle = sequelize.define('ImageArticle', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publicId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  articleId: {
    type: DataTypes.INTEGER,
    references: {
      model: Article,
      key: 'id'
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
}, {
  timestamps: true
});



module.exports = ImageArticle;

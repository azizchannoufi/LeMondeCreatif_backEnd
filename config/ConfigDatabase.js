// const relation = require('../models/Relations.js')
const Sequelize = require("sequelize");

// Configuration de la connexion à la base de données
const sequelize = new Sequelize("le_monde_creatif", "root", "407000", {
    dialect: "mysql",
    host: "localhost",
  });
  
// Vérification de la connexion
sequelize.authenticate()
  .then(() => console.log("Connexion réussie à la base de données."))
  .catch(err => console.error("Impossible de se connecter à la base de données :", err));

  module.exports = sequelize;
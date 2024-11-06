const sequelize = require('../config/ConfigDatabase');
const Client = require('./Client');
const Article = require('./Article');
const Categorie = require('./Categorie');
const Commande = require('./Commande');
const ArticleCommande = require('./ArticleCommande');
const Evenement = require('./Evenement');
const Admin = require('./admin');
const PromoCode = require('./PromoCode');

// Définition des relations

// Client et Commande (Un client peut passer plusieurs commandes)
Client.hasMany(Commande, { foreignKey: 'idClient' });
Commande.belongsTo(Client, { foreignKey: 'idClient' });

// Article et Categorie (Un article appartient à une catégorie)
Categorie.hasMany(Article, { foreignKey: 'idCategorie' });
Article.belongsTo(Categorie, { foreignKey: 'idCategorie' });

// Commande et Article (Relation plusieurs-à-plusieurs via ArticleCommande)
Commande.belongsToMany(Article, { through: ArticleCommande, foreignKey: 'idCommande' });
Article.belongsToMany(Commande, { through: ArticleCommande, foreignKey: 'idArticle' });

// Article et Evenement (Relation plusieurs-à-plusieurs)
Evenement.belongsToMany(Article, { through: 'ArticleEvenement', foreignKey: 'idEvenement' });
Article.belongsToMany(Evenement, { through: 'ArticleEvenement', foreignKey: 'idArticle' });

// PromoCode et Commande (Une commande peut utiliser un code promo)
PromoCode.hasMany(Commande, { foreignKey: 'idPromoCode' });
Commande.belongsTo(PromoCode, { foreignKey: 'idPromoCode' });

// Synchronisation avec la base de données
// const initConfigDatabase = async () => {
//   try {
//     await sequelize.sync({ alter: true }); // force: true pour recréer les tables à chaque exécution (en dev)
//     console.log("La base de données et les tables ont été créées !");
//   } catch (error) {
//     console.error("Erreur lors de la création de la base de données :", error);
//   }
// };

initConfigDatabase();

module.exports = {
  Client,
  Article,
  Categorie,
  Commande,
  ArticleCommande,
  Evenement,
  Admin,
  PromoCode
};

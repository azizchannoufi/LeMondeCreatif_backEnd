const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/ConfigDatabase'); // Configuration de la base de données
const cors = require('cors');

// require('./models/Relation'); // Initialisation des tables et des relations

const app = express();
// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Synchronisation de la base de données
// sequelize.sync({ force: false })
//   .then(() => console.log("La base de données est synchronisée"))
//   .catch(err => console.error("Erreur de synchronisation de la base de données :", err));

// Import des routes (à ajouter dans un dossier séparé, ex. './routes')
const clientRoutes = require('./routes/ClientR');
const articleRoutes = require('./routes/ArticleR');
const categorieRoutes = require('./routes/CategoriesR');
const commandeRoutes = require('./routes/CommandeR');
const adminRoutes = require('./routes/AdminR');
const promoCodeRoutes = require('./routes/PromoCodeR');
const evenementRoutes = require('./routes/EvenementR');

// Utilisation des routes
app.use('/api/clients', clientRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/categories', categorieRoutes);
app.use('/api/commandes', commandeRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/promocodes', promoCodeRoutes);
app.use('/api/evenements', evenementRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;

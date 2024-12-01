const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/ConfigDatabase'); // Configuration de la base de données
const cors = require('cors');
// const models = require('./models/Relation'); // Import des modèles et des relations

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Fonction pour initialiser la base de données et démarrer le serveur
const startServer = async () => {
  try {
    // await models.initConfigDatabase(); // Initialisation de la base de données
    console.log('Base de données initialisée avec succès.');

    // Import des routes
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
    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur le port ${PORT}`);
    });
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données ou du serveur :', error);
    process.exit(1); // Arrêter l'application en cas d'erreur critique
  }
};

// Appeler la fonction pour démarrer le serveur
startServer();

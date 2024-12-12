const Commande  = require('../models/Commande');
const  Client  = require('../models/Client');
// Création d'une commande
const createCommande = async (req, res) => {
  try {
    const commande = await Commande.create(req.body);
    res.status(201).json(commande);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la commande', error });
  }
};

// Récupérer toutes les commandes
const getCommandes = async (req, res) => {
  try {
    const commandes = await Commande.findAll();
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des commandes', error });
  }
};

// Récupérer une commande par ID
const getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findByPk(req.params.id);
    if (commande) {
      res.status(200).json(commande);
    } else {
      res.status(404).json({ message: 'Commande non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la commande', error });
  }
};

// Mettre à jour une commande
const updateCommande = async (req, res) => {
  try {
    const commande = await Commande.findByPk(req.params.id);
    if (commande) {
      await commande.update(req.body);
      res.status(200).json(commande);
    } else {
      res.status(404).json({ message: 'Commande non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la commande', error });
  }
};

// Supprimer une commande
const deleteCommande = async (req, res) => {
  try {
    const commande = await Commande.findByPk(req.params.id);
    if (commande) {
      await commande.destroy();
      res.status(200).json({ message: 'Commande supprimée' });
    } else {
      res.status(404).json({ message: 'Commande non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la commande', error });
  }
};

const getCommandeAdmin = async (req, res) => {
  try {
    // Récupérer toutes les commandes
    const commandes = await Commande.findAll();
    
    if (commandes.length === 0) {
      return res.status(404).json({ message: 'Aucune commande trouvée' });
    }

    // Récupérer les informations du client pour chaque commande
    const commandesAvecClient = [];

    for (const commande of commandes) {
      // Trouver le client associé à cette commande
      const client = await Client.findByPk(commande.idClient);
      
      if (client) {
        const fullname=client.nom+" "+client.prenom
        // Ajouter les informations du client à la commande
        commandesAvecClient.push({
          ...commande.toJSON(), // Convertir la commande en objet JSON
          fullname
        });
      }
    }

    // Retourner la réponse avec les commandes et les informations des clients
    res.status(200).json(commandesAvecClient);
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erreur lors de la récupération des commandes' });
  }
};

module.exports = { createCommande, getCommandes, getCommandeById, updateCommande, deleteCommande, getCommandeAdmin };

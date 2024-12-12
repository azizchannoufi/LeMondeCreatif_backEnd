const  Client  = require('../models/Client');

// Création d'un client
const createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du client', error });
  }
};

// Récupérer tous les clients
const getClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des clients', error });
  }
};

// Récupérer un client par ID
const getClientById = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (client) {
      res.status(200).json(client);
    } else {
      res.status(404).json({ message: 'Client non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du client', error });
  }
};

// Mettre à jour un client
const updateClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (client) {
      await client.update(req.body);
      res.status(200).json(client);
    } else {
      res.status(404).json({ message: 'Client non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du client', error });
  }
};

// Supprimer un client
const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (client) {
      await client.destroy();
      res.status(200).json({ message: 'Client supprimé' });
    } else {
      res.status(404).json({ message: 'Client non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du client', error });
  }
};

module.exports = { createClient, getClients, getClientById, updateClient, deleteClient };

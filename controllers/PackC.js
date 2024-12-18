const Pack = require('../models/Pack');

// Création d'un pack
const createPack = async (req, res) => {
  try {
    const pack = await Pack.create(req.body);
    res.status(201).json(pack);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du pack', error });
  }
};

// Récupérer tous les packs
const getPacks = async (req, res) => {
  try {
    const packs = await Pack.findAll();
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des packs', error });
  }
};

// Récupérer un pack par ID
const getPackById = async (req, res) => {
  try {
    const pack = await Pack.findByPk(req.params.id);
    if (pack) {
      res.status(200).json(pack);
    } else {
      res.status(404).json({ message: 'Pack non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du pack', error });
  }
};

// Mettre à jour un pack
const updatePack = async (req, res) => {
  try {
    const pack = await Pack.findByPk(req.params.id);
    if (pack) {
      await pack.update(req.body);
      res.status(200).json(pack);
    } else {
      res.status(404).json({ message: 'Pack non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du pack', error });
  }
};

// Supprimer un pack
const deletePack = async (req, res) => {
  try {
    const pack = await Pack.findByPk(req.params.id);
    if (pack) {
      await pack.destroy();
      res.status(200).json({ message: 'Pack supprimé' });
    } else {
      res.status(404).json({ message: 'Pack non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du pack', error });
  }
};

// Récupérer les 6 derniers packs ajoutés
const getNewPacks = async (req, res) => {
  try {
    const packs = await Pack.findAll({
      order: [['id', 'DESC']],
      limit: 6
    });
    res.status(200).json(packs);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des nouveaux packs', error });
  }
};



module.exports = { 
  createPack, 
  getPacks, 
  getPackById, 
  updatePack, 
  deletePack, 
  getNewPacks 
};

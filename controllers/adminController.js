const { Admin } = require('../models/admin');

// Création d'un administrateur
const createAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'administrateur', error });
  }
};

// Récupérer tous les administrateurs
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des administrateurs', error });
  }
};

// Récupérer un administrateur par ID
const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (admin) {
      res.status(200).json(admin);
    } else {
      res.status(404).json({ message: 'Administrateur non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'administrateur', error });
  }
};

// Mettre à jour un administrateur
const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (admin) {
      await admin.update(req.body);
      res.status(200).json(admin);
    } else {
      res.status(404).json({ message: 'Administrateur non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'administrateur', error });
  }
};

// Supprimer un administrateur
const deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (admin) {
      await admin.destroy();
      res.status(200).json({ message: 'Administrateur supprimé' });
    } else {
      res.status(404).json({ message: 'Administrateur non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'administrateur', error });
  }
};

module.exports = { createAdmin, getAdmins, getAdminById, updateAdmin, deleteAdmin };

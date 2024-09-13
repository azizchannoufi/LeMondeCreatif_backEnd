const { Cart } = require('../models');

exports.createCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ where: { userId: req.params.userId } });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (cart) {
      await cart.update(req.body);
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Cart non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (cart) {
      await cart.destroy();
      res.status(204).json({ message: "Cart supprimé" });
    } else {
      res.status(404).json({ message: "Cart non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

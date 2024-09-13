const { Orders } = require('../models');

exports.createOrder = async (req, res) => {
  try {
    const order = await Orders.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    if (order) {
      await order.update(req.body);
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    if (order) {
      await order.destroy();
      res.status(204).json({ message: "Order supprimé" });
    } else {
      res.status(404).json({ message: "Order non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

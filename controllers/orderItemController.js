const { OrderItems } = require('../models');

exports.createOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItems.create(req.body);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOrderItemsByOrderId = async (req, res) => {
  try {
    const orderItems = await OrderItems.findAll({ where: { orderId: req.params.orderId } });
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItems.findByPk(req.params.id);
    if (orderItem) {
      await orderItem.update(req.body);
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ message: "Order Item non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItems.findByPk(req.params.id);
    if (orderItem) {
      await orderItem.destroy();
      res.status(204).json({ message: "Order Item supprimé" });
    } else {
      res.status(404).json({ message: "Order Item non trouvé" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

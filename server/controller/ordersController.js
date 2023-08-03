const { default: mongoose } = require("mongoose");
const Order = require("../model/order");

const placeOrder = async (req, res) => {
  try {
    const orderData = req.body;
    orderData.userId = req.user.userId;
    orderData.userName = req.user.name;
    const data = await Order.create(orderData);
    res.status(201).json({ data });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOrders = async (req, res) => {
  try {
    const id = req.params.id;
    const orderData = await Order.find({
      kitchenId: new mongoose.Types.ObjectId(id),
    });
    return res.status(200).json(orderData);
  } catch (error) {}
};

module.exports = { placeOrder, getOrders };

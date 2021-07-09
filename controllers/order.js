 const Order = require("../Models/orderSchema");

exports.updateOrders = (req, res) => {
  const { RestaurantId, userId, items, amount, time } = req.body;

  const orderData = new Order({
    RestaurantId: RestaurantId,
    userId: userId,
    items: items,
    amount: amount,
    time: time,
  })

  orderData.save()
    .then((response) =>
      res.status(200).json({
        message: "Order Data Updated",
        updatedData: response,
      })
    )
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getOrders = (req, res) => {
  Order.find()
    .then((response) =>
      res.status(200).json({
        message: "Orders History data has been fetched",
        orderHistory: response,
      })
    )
    .catch((err) => res.status(500).json({ error: err }));
};

const Order = require("../models/orders.model");

const addOrder = async (orderDetail) => {
  try {
    const order = new Order(orderDetail);
    const data = await order.save();
    return { message: "Order created successfully", data: data._id };
  } catch (error) {
    console.error("Error in saving data", error);
    throw new Error("Error saving order");
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found!" });
    }
    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Random generation of order every time
const randomInsertionData = async () => {
  const orderStatus = ["Ordered", "Preparing", "Deliver", "On the way"];

  const schema = {
    customer: `Customer ${Math.floor(Math.random() * 100)}`,
    product: `Product ${Math.floor(Math.random() * 500)}`,
    status: orderStatus[Math.floor(Math.random() * orderStatus.length)],
    timestamp: new Date(),
  };

  try {
    await addOrder(schema);
    console.log("New order added successfully");
  } catch (error) {
    console.error("Error in adding random order", error);
  }
};

// Set an interval to insert a random order every 10 seconds
// setInterval(() => {
//   randomInsertionData();
// }, 10000);

module.exports = { getAllOrders };

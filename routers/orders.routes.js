const express = require("express");
const { getAllOrders } = require("../controllers/orders.controller");

const route = express.Router();

route.get("/orders/get", getAllOrders);

module.exports = route;

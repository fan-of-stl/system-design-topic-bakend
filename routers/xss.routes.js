const express = require("express");
const login = require("../controllers/xss.controller");


const route = express.Router();

route.post("/login", login);

module.exports = route;

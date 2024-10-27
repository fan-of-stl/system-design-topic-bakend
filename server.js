const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require('cors')

const countryRoutes = require("./routers/country-dropdown.route");
const orderRoutes = require('./routers/orders.routes')
const xssRoutes = require('./routers/xss.routes')
dotenv.config();

const connectDB = require("./config/db");
const serverSentEvent = require("./controllers/sse.controller");

const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors())

// parse application/json
server.use(bodyParser.json());

connectDB();

server.use("/api", countryRoutes);
server.use('/api', orderRoutes)
server.use('/xss', xssRoutes)
server.get('/events', serverSentEvent)
server.use("/", (req, res) => {
  res.status(200).send("Hello i'm working well");
});

const PORT = process.env.PORT || 8081;

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

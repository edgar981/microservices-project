const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("./planets", router);

server.use("*", (req, res) => {
    res.status(404).send("Not found");
});

module.exports = server;
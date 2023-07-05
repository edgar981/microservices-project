const mongoose = require("mongoose");
const {MONGODB_URI} = require("../config/envs")

const connection = mongoose.createConnection(MONGODB_URI);

Character.find().populate("films", ["_id", "title"]).then(res => console.log(res[0]));

module.exports = {
    Character: connection.model("Character", require("./schemas/characterSchema")),
    Film: connection.model("Film", require("./schemas/filmSchema")),
    Planet: connection.model("Planet", require("./schemas/planetSchema")),
}
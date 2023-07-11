const server = require("./src/server");
const { Character } = require("./src/database");

// Character.list().then(res => console.log(res));

const PORT = 8004;

server.listen(PORT, ()=> {
    console.log(`Database service listening on port ${PORT}`);
})
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes');

const app = express();


var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

const db = require("./models");
db.sequelize.sync();

// Caso precise alterar campos no banco de dados use
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo, aplicação funcionando :)." });
});


//porta que ele vai escutar as requisições
const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
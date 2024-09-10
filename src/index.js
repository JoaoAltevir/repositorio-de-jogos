const express = require("express");
const app = express();
const port = 3000;
const estudioRouter = require("./routes/estudioRouter.js");
const generoRouter = require("./routes/generoRouter.js");
const publicadoraRouter = require("./routes/publicadoraRouter.js");
const jogoRouter = require("./routes/jogoRouter.js");

app.use(express.json());

app.use("/estudio", estudioRouter);
app.use("/genero", generoRouter);
app.use("/publicadora", publicadoraRouter);
app.use("/jogo", jogoRouter);

app.listen(port, () => {
    console.log(`listening on ${port} port`);
});
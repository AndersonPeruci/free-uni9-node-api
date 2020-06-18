const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());  

//Iniciando o DB
mongoose.connect("mongodb+srv://root:6mj0W4rGMMIqyWcK@fabossi-website-7jcsx.mongodb.net/Fabossi-website", { useNewUrlParser: true });
requireDir("./src/models");

//const Product = mongoose.model("Product");  

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
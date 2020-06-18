const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

//Criando a primeira rota
routes.get("/contacts", ProductController.index);
routes.get("/contacts/:id", ProductController.show)
routes.post("/contacts", ProductController.store);
routes.put("/contacts/:id", ProductController.update);
routes.delete("/contacts/:id", ProductController.destroy);

module.exports = routes;
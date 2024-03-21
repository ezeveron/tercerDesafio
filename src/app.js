

import express from "express";
import handlebars from "express-handlebars";

import __dirname from "./utils.js";
import { ProductManager } from "./ProductManager.js";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views",`${__dirname}/views`);
app.set("view engine", "handlebars");

const UM = new ProductManager();

app.get("/api/products", (req, res) => {
    res.send(UM.GetAllProduct());
});

app.post("/api/products", (req, res) => {
    const response = UM.CreateProduct(req.body);
    res.status(201).send(response);
});

//View endpoint
app.get("/", (req, res) => {
    res.render(
        "index",
        {
            title: "Coderhouse"
        }
    )
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
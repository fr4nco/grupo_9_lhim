const express = require('express');
const path = require('path');
const app = express();

const routesProducts = require( "./src/routes/products.js" );
const routesMain = require( "./src/routes/main.js" )


app.set("view engine", "ejs");

app.set("views", "./src/views")

app.use( "/" , routesMain);

app.use( "/products", routesProducts );

app.use(express.static(path.join(__dirname, "./public")));


app.listen(3030, () =>
    console.log("Listo! servidor con Express"));
    
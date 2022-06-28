const express = require('express');
const path = require('path');
const app = express();
const methodOverride =  require('method-override');

const routesProducts = require( "./src/routes/products.js" );
const routesMain = require( "./src/routes/main.js" );
const routesUsers = require( "./src/routes/users.js");

app.use(express.static(path.join(__dirname, './public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));


app.set("view engine", "ejs");
app.set("views", "./src/views");    

app.use( "/" , routesMain);
app.use( "/products", routesProducts );
app.use( "/users", routesUsers);


app.listen(3030, () =>
    console.log("Listo! servidor con Express"));

    module.exports = app;
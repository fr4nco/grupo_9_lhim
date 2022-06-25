const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override'); 

const routesProducts = require( "./src/routes/products.js" );
const routesMain = require( "./src/routes/main.js" )
const routesUsers = require( "./src/routes/users.js")


app.set("view engine", "ejs");

app.set("views", "./src/views");    

app.use( "/" , routesMain);

app.use( "/products", routesProducts );

app.use( "/users", routesUsers);

app.use(express.static(path.join(__dirname, "./public")));

app.use(methodOverride('_method'));


app.listen(3030, () =>
    console.log("Listo! servidor con Express"));
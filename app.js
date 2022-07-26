const express = require('express');
const path = require('path');
const app = express();
const methodOverride =  require('method-override');
const session =  require('express-session');

const routesProducts = require( "./src/routes/products" );
const routesMain = require( "./src/routes/main" );
const routesUsers = require( "./src/routes/users");
const { Sequelize } = require('sequelize');

app.use(express.static(path.join(__dirname, './public'))); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({secret:"ok!", resave: false, saveUninitialized: false}));


app.set("view engine", "ejs");
app.set("views", "./src/views"); 
app.set("puerto", process.env.PORT || 3030);


app.use( "/" , routesMain);
app.use( "/products", routesProducts );
app.use( "/users", routesUsers);


app.listen(app.get("puerto"), ()=>
    console.log("Listo! servidor con Express"));



    module.exports = app;

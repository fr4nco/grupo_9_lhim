const express = require( "express" )
const path = require( "path" )
const fs = require ( "fs" );

// Agregar JSON de USUARIOS aca y luego inluir el metodo parse para convertirlo en JS
// Agregar const products = JSON.parse(fs.readFileSync(NOMBRE DEL ARRCHIVO ESCRITO ARRIBA, 'utf-8'));

const controller = 

{
    index: (req, res ) => {
        res.render( "index" )
    }
,


    
    register: (req, res) => {
        res.render( "register" )
    }

,



    login: (req, res) => {
        res.render( "login" )
    }



}

module.exports = controller;
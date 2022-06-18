const express = require( "express" )
const path = require( "path" )
const fs = require ( "fs" );

// Agregar JSON de PRODUCTOS aca y luego inluir el metodo parse para convertirlo en JS
// Agregar const products = JSON.parse(fs.readFileSync(NOMBRE DEL ARRCHIVO ESCRITO ARRIBA, 'utf-8'));


const controller = {

    index: (req, res) => {
        res.render("product")
    }

,

    productCart: (req, res) => {
        res.render("productCart")
    }

,

    productDetail: (req, res) => {
        res.render("productDetail")
    }

,

    productAdd: (req, res) => {
        res.render("add")
    }

,

    productsEdit: (req, res) => {
        res.render("edit")
    }

}


module.exports = controller
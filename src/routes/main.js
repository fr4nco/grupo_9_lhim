const express = require( "express" );
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index")
});

router.get("/register", (req, res) => {
    res.render("register")
});

router.get("/login", (req, res) => {
    res.render("login")
});

router.get("/productCart", (req, res) => {
    res.render("productCart")
});

router.get("/productDetail", (req, res) => {
    res.render("productDetail")
});

router.get("/add", (req, res) => {
    res.render("add")
});


router.get("/edit", (req, res) => {
    res.render("edit")
});


module.exports = router;
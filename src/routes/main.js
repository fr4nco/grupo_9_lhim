const express = require( "express" );
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"))
});

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/register.html"))
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"))
});

router.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/productCart.html"))
});

router.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/productDetail.html"))
});

module.exports = router;
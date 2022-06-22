const express = require( "express" );
const router = express.Router();
const productsControllers = require( "../controllers/productsControllers" )


router.get("/", productsControllers.index)

router.get("/productCart", productsControllers.productCart)

router.get("/productDetail", productsControllers.productDetail)

router.get("/add", productsControllers.productAdd)

router.get("/edit", productsControllers.productsEdit)

module.exports = router
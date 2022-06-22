const express = require( "express" );
const router = express.Router();
const productsControllers = require( "../controllers/productsControllers" )


//router.get("/", productsControllers.index)

//router.get("/productCart", productsControllers.productCart)

//router.get("/productDetail", productsControllers.productDetail)

//router.get("/add", productsControllers.productAdd)

//router.get("/edit", productsControllers.productsEdit)

//module.exports = router

// **** Controller Require ****
//const productsController = require('../controllers/productsController');

/* GET ALL PRODUCTS */ 
router.get('/', productsController.index); 

/* CREATE ONE PRODUCT */ 
router.get('/add', productsController.create); 
router.post('/store', productsController.store); 

/* GET ONE PRODUCT */ 
router.get('/detail/:id', productsController.detail); 

/* GET ONE CATEGORY */ 
router.get('/category/:name', productsController.category); 

/* EDIT ONE PRODUCT */ 
router.get('/edit/:id', productsController.edit); 
router.put('/update/:id', productsController.update); 

/* DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy);


module.exports = router;
const express = require( "express" );
const router = express.Router();
const productsController = require("../controllers/productsControllers");


/* GET ALL PRODUCTS */ 
router.get('/', productsController.index); 

/* CREATE ONE PRODUCT */ 
router.get('/add', productsController.create); 
router.post('/store', productsController.store); 

/* GET ONE PRODUCT */ 
router.get('/detail/:id', productsController.detail); 

/* GET ONE CATEGORY */ 
router.get('/people/:name', productsController.people); 

/* EDIT ONE PRODUCT */ 
router.get('/edit/:id', productsController.edit); 
router.put('/update/:id', productsController.update); 

/* DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy);

/* SEARCH PRODUCTS */ 
router.get('/search/:name', productsController.search); 



module.exports = router;
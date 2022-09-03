const express = require( "express" );
const { check } = require("express-validator");
const router = express.Router();
const productsController = require("../controllers/productsControllers");
const uploadFile = require('../middlewares/uploadImage');


/* GET ALL PRODUCTS */ 
router.get('/', productsController.index); 

/* CREATE ONE PRODUCT */ 
router.get('/add', productsController.create); 
router.post('/add',uploadFile.single('foto'), productsController.store);


router.get('/detail/:id', productsController.detail); 


router.get('/people/:name', productsController.people); 

router.get('/edit/:id', productsController.edit); 
router.put('/update/:id',uploadFile.single('foto'), productsController.update); 

router.delete('/delete/:id', productsController.destroy);

module.exports = router;
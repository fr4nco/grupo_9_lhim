const express = require( "express" );
const { check } = require("express-validator");
const router = express.Router();
const productsController = require("../controllers/productsControllers");
const uploadFile = require('../middlewares/uploadImage');
const productApi = require("../controllers/api/productApi.js")


router.get('/', productsController.index); 

router.get('/add', productsController.create); 
router.post('/add',uploadFile.single('foto'), productsController.store);

router.get('/detail/:id', productsController.detail); 

router.get('/people/:name', productsController.people); 

router.get('/search', productsController.search); 

router.get('/edit/:id', productsController.edit); 
router.put('/update/:id',uploadFile.single('foto'), productsController.update); 

router.delete('/delete/:id', productsController.destroy);

router.get("/api", productApi.detail)

module.exports = router;
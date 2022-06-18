const express = require( "express" );
const path = require('path');
const router = express.Router();
const mainControllers = require( "../controllers/mainControllers")

router.get("/", mainControllers.index);

router.get("/register", mainControllers.register);

router.get("/login", mainControllers.login);


module.exports = router;
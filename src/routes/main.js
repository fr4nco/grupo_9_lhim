const express = require( "express" );
const router = express.Router();
const mainControllers = require( "../controllers/mainControllers")

router.get("/", mainControllers.index);

router.get("/register", mainControllers.register);

router.get("/login", mainControllers.login);

router.get("/about", mainControllers.about);


module.exports = router;
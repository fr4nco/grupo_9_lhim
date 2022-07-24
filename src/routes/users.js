const express = require( "express" );
const router = express.Router();
const path = require( "path" )
const multer = require ( "multer" )
const usersControllers = require( "../controllers/usersControllers.js")
const upload = require( "../middlewares/users/usersmd.js" )


router.get("/register", usersControllers.register);

router.post( "/register", upload.single( "avatar" ), usersControllers.createNewUser);

router.get("/login", usersControllers.login);

module.exports = router;
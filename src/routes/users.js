const express = require( "express" );
const router = express.Router();
const usersControllers = require( "../controllers/usersControllers.js")

//const fileUpload = require ('../middlewares/users/usersmd')

/* router.get("/", usersControllers.???);

router.get("/userprofile", usersControllers.???); */

router.get("/register", usersControllers.register);

router.post( "/register", usersControllers.createNewUser);

router.get("/login", usersControllers.login);

module.exports = router;
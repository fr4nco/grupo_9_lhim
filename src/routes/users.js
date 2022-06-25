const express = require( "express" );
const router = express.Router();
const usersControllers = require( "../controllers/usersControllers.js")

/* router.get("/", usersControllers.???);

router.get("/userprofile", usersControllers.???); */

router.get("/register", usersControllers.register);
router.post( "/reguster", usersControllers.registerPost)

router.get("/login", usersControllers.login);

module.exports = router;
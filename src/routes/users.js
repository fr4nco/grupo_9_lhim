const express = require( "express" );
const router = express.Router();
const usersControllers = require( "../controllers/userControllers")

router.get("/", usersControllers.???);

router.get("/userprofile", usersControllers.???);

module.exports = router;
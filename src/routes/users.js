const express = require( "express" );
const router = express.Router();
const path = require( "path" )
const multer = require ( "multer" )
const usersControllers = require( "../controllers/usersControllers.js");
const authMiddleware = require( "../middlewares/users/authMiddleware.js");
const guestMiddleware = require( "../middlewares/users/guestMiddleware.js");
const upload= require("../middlewares/users/usersmd.js");
/*
const diskStorage = multer.diskStorage (
    {
        destination: (req, file, cb) => {
	let folder = '../grupo_9_lhim/public/images/users'
	cb (null, folder)

},
	filename: (req, file, cb) => {
		let avatarName = "avatar" + Date.now() + path.extname(file.originalname)
    	cb(null, avatarName)
	}
})
;
*/
//const upload = multer ({storage: diskStorage});

router.get("/register", guestMiddleware, usersControllers.register);

router.post( "/register", upload.single( "avatar" ), usersControllers.createNewUser);

router.get("/login",guestMiddleware, usersControllers.login);

router.post("/login", usersControllers.loginProcess);

router.get("/profile", authMiddleware, usersControllers.profile);

router.get("/logout", authMiddleware, usersControllers.logout);

router.get("/users", usersControllers.users);

module.exports = router;
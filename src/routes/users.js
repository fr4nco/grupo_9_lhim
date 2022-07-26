const express = require( "express" );
const router = express.Router();
const path = require( "path" )
const multer = require ( "multer" )
<<<<<<< HEAD
const usersControllers = require( "../controllers/usersControllers.js");
const authMiddleware = require( "../middlewares/users/authMiddleware.js");
const guestMiddleware = require( "../middlewares/users/guestMiddleware.js");


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

const upload = multer ({storage: diskStorage});

router.get("/register", guestMiddleware, usersControllers.register);
=======
const usersControllers = require( "../controllers/usersControllers.js")
const upload = require( "../middlewares/users/usersmd.js" )


router.get("/register", usersControllers.register);
>>>>>>> f9dad29f2b8b729fda9ee0c3565094cd2366aebf

router.post( "/register", upload.single( "avatar" ), usersControllers.createNewUser);

router.get("/login",guestMiddleware, usersControllers.login);

router.get("/profile", authMiddleware, usersControllers.profile);

router.get("/logout", authMiddleware, usersControllers.logout);

module.exports = router;
const express = require( "express" );
const router = express.Router();
const path = require( "path" );
const multer = require ( "multer" );
const usersControllers = require( "../controllers/usersControllers.js");
const authMiddleware = require( "../middlewares/users/authMiddleware.js");
const guestMiddleware = require( "../middlewares/users/guestMiddleware.js");
const upload= require("../middlewares/users/usersmd.js");

//Validacion de registro de back/end//
const {body} = require('express-validator');
const validateRegisterForm = [
    body('firstname').notEmpty().withMessage('Debes completar tu nombre').bail(),
    body('firstname').isLength({min:2}).withMessage('Tu nombre debe tener al menos 2 letras'),
    body('lastname').notEmpty().withMessage('Debes completar tu apellido').bail(),
    body('lastname').isLength({min:2}).withMessage('Tu apellido debe tener al menos 2 letras'),
    body('email').notEmpty().withMessage('Debes completar tu mail').bail(),
    body('email').isEmail().withMessage('Debes completar un emal válido').bail(),
    //body('email').no debe estar repetido...//
    body('contrasena').notEmpty().withMessage('Debes completar una contraseña').bail(),
    body('contrasena').isLength({min:8}).withMessage('Tu contraseña de tener al menos 8 caracteres'),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif'];

        if (!file) {
            throw new Error ('Debe subir una imagen');   
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)) {
                throw new Error ('Las extensiones de imágenes permitidas son ${acceptedExtensions.join(', ')}'); 
            }
        }
    })
]

router.get("/register", guestMiddleware, usersControllers.register);

router.post( "/register", upload.single( "avatar" ), validateRegisterForm, usersControllers.createNewUser);

router.get("/login",guestMiddleware, usersControllers.login);

router.post("/login", usersControllers.loginProcess);

router.get("/profile/:id", usersControllers.profile);

router.get("/logout", authMiddleware, usersControllers.logout);

router.get("/users", usersControllers.users);


module.exports = router;
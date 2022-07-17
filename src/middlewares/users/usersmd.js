const express = require ('express');
const path = require ('path');
const multer = require ('multer');

const multerDiskStorage = ({destination: (req, file, cb) => {
	let folder = path.join(__dirname, '../public/images/users' )
	cb (null, folder)
},
	filename: (req, file, cb) => {
		let avatarName = "avatar" + Date.now() + path.extname(file.originalname)
    	cb(null, avatarName)
	}
})
;

const upload = multer ({storage: multerDiskStorage});

module.exports = upload


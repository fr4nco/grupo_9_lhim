const express = require ('express');
const path = require ('path');
const multer = require ('multer');

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

module.exports = upload


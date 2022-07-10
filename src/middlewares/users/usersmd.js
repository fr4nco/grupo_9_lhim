const express = require ('express');
const path = require ('path');
const multer = require ('multer');

const storage = multer.diskStorage ({destination: (req, file, cb) => {
	cb (null, '../public/images/users')
},
	filename: (req, file, cb) => {
    	cb(null, file.fieldname + 'avatar' + Date.now())
	}
})
;

const upload = multer ({storage: storage});

module.exports = storage


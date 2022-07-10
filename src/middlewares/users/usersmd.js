const express = require ('express');
const path = require ('path');
const multer = require ('multer');

const storage = multer.diskStorage ({destination: (req, file, cb) => {
	cb (null, '../public/images/users/defaultavatar.jpeg')
},
	filename: (req, file, cb) => {
    	cb(null, file.fieldname + 'avatar' + Date.now())
	}
})
;

module.exports = storage


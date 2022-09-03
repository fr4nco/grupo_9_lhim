const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const controller = {
	index: (req, res) => {

		console.log("hola");

		db.producto.findAll({
			include: ["categoria"]
		}).then(productos => {
			res.render('index', {producto})
		});

<<<<<<< HEAD
=======
		res.render( "index" )


>>>>>>> 096c93a91d257fdc85465f49719b5b02dfe7d19d
	},
	login: (req, res) => {
		res.render('login');
	},

	register: (req, res) => {
		res.render('register');
	},

	about: (req, res) => {
		res.render('about');
	}
};

module.exports = controller;

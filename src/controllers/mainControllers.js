const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const controller = {
	index: (req, res) => {

		db.producto.findAll({
			include: ["categoria"],
			where: {
				descuento: {
					[Op.gt]: 0
				  }
			}
		}).then(productos => {
			res.render('index', {productos})
		});

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

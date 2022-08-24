const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const controller = {
	index: (req, res) => {

		// db.categoria.findAll().then(function(data){
		// 	console.log(data);
		// });

		db.producto.findAll().then(function(data){
			console.log(data);
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
	},

	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;

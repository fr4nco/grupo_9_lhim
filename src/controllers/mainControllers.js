const fs = require('fs');
const path = require('path');
const { off } = require('process'); 

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {

		const offers = products.filter(function (product) {

			return product.discount > 0;

		});


		res.render('index', { offers, toThousand });

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

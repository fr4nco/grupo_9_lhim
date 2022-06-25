const fs = require('fs');
const path = require('path');
const { off } = require('process');

const usersList = require( "../data/usersDataBase.json");

const usersFilePath = path.join(__dirname, '../data/clientesDataBase.json');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	login: (req, res) => {
		res.render('login');
	},

	register: (req, res) => {
		res.render('register');
	}

}






module.exports = controller
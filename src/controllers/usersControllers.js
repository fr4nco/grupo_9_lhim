const fs = require('fs');
const path = require('path');
const { off } = require('process');

const usersList = require( "../data/usersDataBase.json");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const usersList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	login: (req, res) => {
		res.render('login');
	},

	register: (req, res) => {
		res.render('register');
	},

	registerPost: {

		const newUser = [];

		let id = usersList.id;
		let firstName = usersList.firsName;
		let lastName = usersList.lastName;
		let eMail = usersList.email;
		let password = usersList.password;
		let role = usersList.role;
		let gender = usersList.gender;

		



	}

	



}






module.exports = controller
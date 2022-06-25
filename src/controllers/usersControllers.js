const fs = require('fs');
const path = require('path');
const { off } = require('process');

const usersList = require( "../data/usersDataBase.json");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	login: (req, res) => {
		res.render('login');
	},

	register: (req, res) => {
		res.render('register');
	},

	
    // Create User -  Method to store
	createNewUser: (req, res) => {

		let newUser = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
		
		let newUserData = {

			id: newUser.length + 1,
			firstname: req.body.firstname,
            lastname: req.body.lastname,
		    email: req.body.email,
		    password: req.body.password,
		    role: req.body.role,
		    gender: req.body.gender,
			
		};

		newUser.push(newUserData);

		fs.writeFileSync(usersFilePath, JSON.stringify(userLists), { encoding: 'utf-8' });

		res.redirect('/');

	},

}


module.exports = controller
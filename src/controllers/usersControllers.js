const fs = require('fs');
const path = require('path');
const { off } = require('process');

const usersList = require( "../data/usersDataBase.json");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

// const multer = require ('multer');

// const usersmd = require('../middlewares/users/usersmd');


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

		let userList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
		
		const id=userList.length + 1;
			
			let firstname= req.body.firstname;
            let lastname= req.body.lastname;
		    let email= req.body.email;
		    let password= req.body.password;
		    let birthdate= req.body.date;
		    let gender= req.body.gender;
			let avatar= req.file.avatar;
			
			let newUser = {
				id: id,
				firstname: firstname,
				lastname: lastname,
				email: email,
				password: password,
				birthdate: birthdate,
				gender: gender,
				avatar: avatar
			};

		userList.push(newUser);

		fs.writeFileSync(usersFilePath, JSON.stringify(userList), { encoding: 'utf-8' });

		res.redirect('/');

	},

}


module.exports = controller
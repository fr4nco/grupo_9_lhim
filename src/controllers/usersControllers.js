const fs = require('fs');
const path = require('path');
const { off } = require('process');
const bcrypt = require("bcryptjs");

const usersList = require( "../data/usersDataBase.json");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	login: (req, res) => {
		res.render('login');
	},

	loginProcess: (req, res) => {

		const userToLogin = users.filter(function (user) {

			return user.email === req.body.email;

		});

		console.log(userToLogin);
		console.log(userToLogin[0].password);
		console.log(req.body.contrasena);

		let isOkPassword = bcrypt.compareSync(req.body.contrasena, userToLogin[0].password);
	
		console.log(isOkPassword);

		if(isOkPassword) {

			console.log("ok");
		
			return res.send ('ok') // o cualquier otra acción si es correcto

		} 
	},

	register: (req, res) => {
		res.render('register');
	},
	

	profile: (req, res) => {
		res.render('profile');
	},
	
	users: (req, res) => {

		res.render('users', { users });

	},

	logout: (req, res) => {
		req.session.destroy();
		return res.redirect("./");
	},

	
    // Create User -  Method to store
	createNewUser: (req, res) => {

		let userList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
		
		const id=userList.length + 1;
			
			let firstname= req.body.firstname;
            let lastname= req.body.lastname;
		    let email= req.body.email;
		    let password= bcrypt.hashSync(req.body.contrasena, 10)
		    let birthdate= req.body.birthdate;
		    let gender= req.body.gender;
			let avatar= req.file ? req.file.filename : 'defaultavatar.jpg'
			
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

	//Acá iría la funcionalidad de login

}


module.exports = controller
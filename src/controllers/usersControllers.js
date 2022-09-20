const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { Console } = require('console');
const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator');

const controller = {

	login: (req, res) => {
		res.render('login');
	},

	loginProcess: (req, res) => {

		let correo = req.body.email;

		db.usuario.findAll({ 
			include: ["rol"] 
		}, {
			where: {
				correo: correo
			}
		})
			.then(resultado => {

				if (resultado.length > 0) {

					console.log(""+req.body.contrasena +" - "+resultado[0].contrasena);

					let ok = bcrypt.compareSync(req.body.contrasena, resultado[0].contrasena);

					if (ok) {

						console.log("ok");

					} else {
						console.log("no se ecnontró la contraseña");
					}

				}

			});

	},

	register: (req, res) => {
		res.render('register');
	},


	profile: (req, res) => {
		let id = +req.params.id;

		db.usuario.findByPk(id,
			{
				include: ["rol"]
			})
			.then(resultado => {
				res.render("profile", { resultado })
			});
	},

	users: (req, res) => {


		db.usuario.findAll(
			{
				include: ["rol"]
			}
		).then(usuarios => {
			res.render("users", { usuarios });
		});

	},

	logout: (req, res) => {
		req.session.destroy();
		return res.redirect("./");
	},

	destroy: function (req,res) {
        let idp = req.params.id;
        db.usuario
        .destroy({where: {idusuario: idp}, force: true}) 
        .then(()=>{
            return res.redirect('/')})
        .catch(error => res.send(error))
    

	},


	edit: (req, res) => {
		let id = +req.params.id;

		let roles = db.rol.findAll();

		console.log(roles);

		let usuario = db.usuario.findByPk(id,
			{
				include: ["rol"]
			});

		Promise
			.all([roles, usuario])
			.then(([todoRoles, resUsuario]) => {

				return res.render(path.resolve(__dirname, "..", "views", "editarUsuario"), { todoRoles, resUsuario });
			})
			.catch(error => res.send(error))

	},

	update: (req, res) => {

		let usuarioId = req.params.id;
		console.log(req);
		db.usuario
			.update(
				{
					nombre: req.body.nombre
				},
				{
					where: { idUsuario: usuarioId }
				}).then(() => {
					return res.redirect('/')
				});;

	},

	createNewUser: (req, res) => {

		const errors = validationResult(req);
		if (!errors.isEmpty) {
			res.render('register', {
				mensajesError: errors.mapped(),
				oldData: req.body
			})
		}


		//let userList = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

		let userList = db.usuario

		/*const id= 1;
			
			let firstname= req.body.firstname;
			let lastname= req.body.lastname;
			let email= req.body.email;
			let password= bcrypt.hashSync(req.body.contrasena, 10)
			let birthdate= req.body.birthdate;
			let gender= req.body.gender;
			let avatar= req.file ? req.file.filename : 'defaultavatar.jpg'

			let newUser = {
				idUsuario: id,
				nombre: firstname,
				apellido: lastname,
				correo: email,
				contrasena: password,
				fechaNac: birthdate,
				hombre: gender,
				foto: avatar
			}; */

		db.usuario

			.create({

				nombre: req.body.firstname,
				apellido: req.body.lastname,
				correo: req.body.email,
				contrasena: bcrypt.hashSync(req.body.contrasena, 10),
				fechaNac: req.body.birthdate,
				hombre: req.body.gender,
				foto: req.file ? req.file.filename : 'defaultavatar.jpg',
				fkRol: 2

			}
			)

		//userList.push(newUser);

		//userList.create(newUser)

		//fs.writeFileSync(usersFilePath, JSON.stringify(userList), { encoding: 'utf-8' });

		res.redirect('/');

	},

	//Acá iría la funcionalidad de login

}


module.exports = controller
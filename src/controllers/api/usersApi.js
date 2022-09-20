const { off } = require('process');
const bcrypt = require("bcryptjs");
const db = require('../../database/models/index')
const {op} = require('sequelize');
const { rmSync } = require('fs');


const controller = {


    users: (req, res) => {
		
		db.usuario.findAll({attributes: ['idUsuario','nombre', 'apellido', 'correo']})
		.then(usuarios => {
			return res.status(200).json({
				total: usuarios.length,
				data: usuarios, 
				status: 200
			})
		})
		
    },


	userSelected: (req, res) => {

		let id = +req.params.id;

		db.usuario.findByPk(id,
			{attributes: ['idUsuario', 'nombre', 'apellido','correo','fechaNac', 'foto']
			})
			.then(resultado => {
				res.json(resultado)
			});
	//falta url para mostarar la imagen de perfil
}

}

module.exports = controller

const { off } = require('process');
const bcrypt = require("bcryptjs");
const db = require('../../database/models/index')
const {op} = require('sequelize');


const controller = {

    users: (req, res) => {


        db.usuario.findAll(
			{
				include: ["rol"]
			}
		).then(usuarios => {
					res.json(usuarios)
				});

    },

	userSelected: (req, res) => {

		let id = +req.params.id;

		db.usuario.findByPk(id,
			{
				//include: ["apellido", "correo"]
			})
			.then(resultado => {
				res.json(resultado)
			});
	
}

}

module.exports = controller

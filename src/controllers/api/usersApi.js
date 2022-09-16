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

    }

        
}

module.exports = controller

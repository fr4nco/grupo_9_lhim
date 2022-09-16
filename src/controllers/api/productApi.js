const fs = require('fs');
const path = require('path');
const { off } = require('process');
const bcrypt = require("bcryptjs");
const db = require('../../database/models/index')
const {op} = require('sequelize');

const controller = {

    detail: (req, res) => {

		/*let id = +req.params.id;

		db.producto.findByPk(id,
			{
				include: ["categoria", "tipopersona", "talle"]
			})
			.then(resultado => {
				res.json(resultado)
			});
            */

        db.producto.findAll(
                {
                    
                }
            ).then(productos => {
                        res.json(productos)
                    });
	},

}

module.exports = controller
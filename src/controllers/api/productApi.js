const fs = require('fs');
const path = require('path');
const { off } = require('process');
const bcrypt = require("bcryptjs");
const db = require('../../database/models/index')
const {op} = require('sequelize');

const controller = {

	allProducts: (req, res) => {
		db.producto.findAll ({attributes: ['idProducto', 'nombreProducto', 'descripcion', 'precio', 'fkCategoria', 'imagen', 'descuento']})
		.then(productos => {
			return res.status(200).json({
				total: productos.length,
				data: productos,
				/*detailUser: ruta hacie users*/
				status: 200
			})
		})
	},

    productSelected: (req, res) => {

		let id = +req.params.id;

		db.producto.findByPk(id,
			{attributes: ['idProducto', 'nombreProducto', 'descripcion', 'precio', 'fkCategoria', 'imagen', 'descuento']
			})
			.then(producto => {
				res.json(producto)
			});

       
	},

}

module.exports = controller
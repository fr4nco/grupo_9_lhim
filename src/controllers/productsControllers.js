const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { Console } = require('console');

const controller = {

	index: (req, res) => {
		res.render('products', { products, toThousand });
	},

	detail: (req, res) => {

		let id = +req.params.id;

		db.producto.findByPk(id,
			{
				include: ["categoria", "tipopersona", "talle"]
			})
			.then(resultado => {
				res.render("productDetail", { resultado })
			});
	},


	people: (req, res) => {

		const titulo = req.params.name;

		db.tipopersona.findAll({
			where: {
				persona: titulo
			}
		})
			.then(resultado => {

				db.producto.findAll({
					where: {
						fkTipoPersona: resultado[0].idtipo
					}

				}).then(productos => {
					res.render("products", { productos, titulo });
				})
			});

	},

	create: (req, res) => {
		let cats = db.categoria.findAll();
		let talles = db.talle.findAll();
		let tipoper = db.tipopersona.findAll();

		Promise
			.all([cats, talles, tipoper])
			.then(([allcats, alltalles, alltp]) => {
				return res.render(path.resolve(__dirname, "..", "views", "add"), { allcats, alltalles, alltp })
			})
			.catch(error => res.send(error))


	},

	store: (req, res) => {

		db.producto
			.create(
				{
					nombreProducto: req.body.nombre,
					precio: req.body.precio,
					fkTipoPersona: req.body.person,
					fkCategoria: req.body.categoria,
					imagen: req.file ? req.file.foto : 'defaultavatar.jpg',
					descripcion: req.body.descripcion,
					descuento: req.body.descuento
				}
			)
			.then(resultado => {


				if (resultado.idProducto > 0) {

					db.talle.findAll()
						.then(talles => {

							let cantidadTalles= req.body.cantidad;

							talles.forEach(function (tt) {

								if (cantidadTalles[tt.idTalle] > 0) {

									db.productotalle
										.create(
											{
												fkTalle: tt.idTalle,
												fkProducto: resultado.idProducto,
												cantidad: cantidadTalles[tt.idTalle]
											}
										)
								}

							});

						});
				}

			})
			.then(() => {

				return res.redirect('/')
			})
			.catch(error => res.send(error));



	},

	edit: (req, res) => {

		const id = +req.params.id;

		let cats = db.categoria.findAll();
		let talles = db.talle.findAll();
		let tipoper = db.tipopersona.findAll();

		let producto = db.producto.findByPk(id,
			{
				include: ["categoria", "tipopersona", "talle"]
			});

		Promise
			.all([cats, talles, tipoper, producto])
			.then(([allcats, alltalles, alltp, resProducto]) => {

				return res.render(path.resolve(__dirname, "..", "views", "edit"), { allcats, alltalles, alltp, resProducto });
			})
			.catch(error => res.send(error))

	},

	update: (req, res) => {

		let productoId = req.params.id;
		db.producto
			.update(
				{
					nombreProducto: req.body.nombre,
					precio: req.body.precio,
					fkTipoPersona: req.body.person,
					fkCategoria: req.body.categoria,
					imagen: req.file.filename,
					descripcion: req.body.descripcion,
					descuento: req.body.descuento
				},
				{
					where: { idProducto: productoId }
				})
			.then((resultado) => {

				let cantidad = req.body.cantidad;

				db.talle.findAll().then((resultadoTalles) => {

					resultadoTalles.forEach(function (tt) {

						db.productotalle
							.update(
								{
									cantidad: cantidad[tt.idTalle]
								},
								{
									where: {
										fkProducto: productoId,
										fkTalle: tt.idTalle
									}
								})

					});
				}).then(() => {

					return res.redirect('/')
				});

			});

	},

	search: (req, res) => {

		const titulo = req.query.buscar;

		db.producto.findAll({
			where: {
				nombreProducto: {
					[Op.like]: "%"+titulo+"%"
				  }
			}

		}).then(productos => {
			res.render("products", { productos, titulo });
		});

	},

	destroy: function (req,res) {
        let idp = req.params.id;
        db.producto
        .destroy({where: {idProducto: idp}, force: true}) 
        .then(()=>{
            return res.redirect('/')})
        .catch(error => res.send(error)) 
    }
};

module.exports = controller;
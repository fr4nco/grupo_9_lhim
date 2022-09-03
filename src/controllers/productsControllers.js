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

		const persona = req.params.name;

		db.tipopersona.findAll({
			where: {
				persona: persona
			}
		})
			.then(resultado => {
				
				db.producto.findAll({
					where: {
						fkTipoPersona: resultado[0].idtipo
					}
					
				}).then(productos =>{
					res.render("products", { productos, persona });
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

	// Create -  Method to store
	store: (req, res) => {

		db.producto
			.create(
				{
					nombreProducto: req.body.nombre,
					precio: req.body.precio,
					fkTipoPersona: req.body.person,
					fkCategoria: req.body.categoria,
					imagen: req.file.filename,
					descripcion: req.body.descripcion
				}
			)
			.then(resultado => {


				if (resultado.idProducto > 0) {

					db.productotalle
						.create(
							{
								fkTalle: req.body.talle,
								fkProducto: resultado.idProducto,
								cantidad: req.body.cantidad
							}
						)
						.then(() => {
							return res.redirect('/')
						})
						.catch(error => res.send(error))

				}
			})
			.catch(error => res.send(error));



	},

	edit: (req, res) => {

		const id = +req.params.id;

		const sizes = ["s", "m", "l"];
		const people = ["hombres", "mujeres", "niños"];
		const categories = ["remeras", "shorts", "championes"];

		let productDetail = products.filter(function (product) {

			return product.id === id;

		});

		productDetail = productDetail[0];

		res.render('edit', { title: productDetail.name, productToEdit: productDetail, sizes, people, categories });

	},

	update: (req, res) => {

		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		console.log(req.body);
		const id = +req.params.id;

		let name = req.body.nombre;
		let price = req.body.precio;
		let discount = req.body.descuento;
		let amount = req.body.cantidad;
		let size = req.body.talle;
		let person = req.body.person;
		let category = req.body.categoria;
		let image = [req.file.filename];
		let description = req.body.descripcion;


		let editProduct = {

			id: id,
			name: name,
			price: price,
			discount: discount,
			amount: amount,
			size: size,
			person: person,
			category: category,
			image: image,
			description: description

		};

		for (let i in products) {

			if (products[i].id === id) {

				products[i] = editProduct;
				break;

			}

		}

		fs.writeFileSync(productsFilePath, JSON.stringify(products), { encoding: 'utf-8' });
		res.redirect('/');

	},

	search: (req, res) => {

		const buscar = req.params.buscar;

				db.producto.findAll({
					where: {
						nombreProducto: buscar
					}
					
				}).then(productos =>{
					res.render("products", { productos, persona });
				});

	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {

		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		const id = +req.params.id;

		let productDestroyed = products.filter(function (product) {

			return product.id !== id;

		});

		console.log(productDestroyed);

		fs.writeFileSync(productsFilePath, JSON.stringify(productDestroyed), { encoding: 'utf-8' });
		res.redirect('/');

	}
};

module.exports = controller;
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');



const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { products, toThousand });
	},

	// Detail - Detail from one product
	detail: (req, res) => {

		const id = +req.params.id;


		let percent;

		var productDetail = products.filter(function (product) {

			return product.id === id;

		});


		const sameCategories = products.filter(function (product) {

		return product.category === productDetail[0].category && product.person===productDetail[0].person;

		});

		productDetail = productDetail[0];
		percent = (productDetail.discount < 10) ? '0.0' + productDetail.discount : '0.' + productDetail.discount;

		productDetail.totalPrice = productDetail.price - (productDetail.price * parseFloat(percent));

		res.render('productDetail', { title: productDetail.name, productDetail, sameCategories, toThousand });

	},

	
	people: (req, res) => {

		const person = req.params.name;

		console.log(person);

		const productsCategory = products.filter(function (product) {

			return product.person === person;

		});

		res.render('products', { productsCategory,person });

	},

	// Create - Form to create
	create: (req, res) => {
		let cats = db.categoria.findAll();
        let talles = db.talle.findAll();
		let tipoper = db.tipopersona.findAll();
		console.log("ok");
        
        Promise
        .all([cats, talles,tipoper])
        .then(([allcats, alltalles, alltp]) => {
            return res.render(path.resolve(__dirname, "..", "views",  "add"), {allcats, alltalles, alltp})})
        .catch(error => res.send(error))


	},

	// Create -  Method to store
	store: (req, res) => {

		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let id= products.length + 1;
		let name= req.body.nombre;
		let price= req.body.precio;
		let discount= req.body.descuento;
		let amount= req.body.cantidad;
		let size = req.body.talle;
		let person = req.body.person;
		let category= req.body.categoria;
		let image= [req.file.filename];
		let description= req.body.descripcion;
		
		let newProduct = {

			id: products.length + 1,
			name: name,
			price: price,
			discount: discount,
			amount: amount,
			size : size,
			person : person,
			category: category,
			image: image,
			description: description

		};

		products.push(newProduct);

		fs.writeFileSync(productsFilePath, JSON.stringify(products), { encoding: 'utf-8' });

		res.redirect('/');

	},

	// Update - Form to edit
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
		const id= +req.params.id;

		let name= req.body.nombre;
		let price= req.body.precio;
		let discount= req.body.descuento;
		let amount= req.body.cantidad;
		let size = req.body.talle;
		let person = req.body.person;
		let category= req.body.categoria;
		let image= [req.file.filename];
		let description= req.body.descripcion;

	
		let editProduct = {

			id: id,
			name: name,
			price: price,
			discount: discount,
			amount: amount,
			size : size,
			person : person,
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

		const person = req.params.buscar;

		const productsCategory = products.filter(function (product) {

			return product.person === person;

		});

		res.render('products', { productsCategory,person });

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
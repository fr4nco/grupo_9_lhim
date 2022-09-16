const fs = require('fs');
const path = require('path');
const { off } = require('process');
const bcrypt = require("bcryptjs");
const db = require('../../database/models/index')
const {op} = require('sequelize');


const controller = {

    users: (req, res) => {

        //let respuesta = []
        
        //let datos = db.usuario.findAll()

       

    
        
        db.usuario.findAll(
			{
				include: ["rol"]
			}
		).then(usuarios => {
					res.json(usuarios)
				});

        

        

        
    }

        /*User.findAll({
            attributes: ['id', 'age'],
            where: {active: true}
            })*/

		/*db.usuario.findAll(
			{
				include: ["rol"]
			}
		).then(usuarios => {
					res.render("users", { usuarios });
				});*/

}

module.exports = controller

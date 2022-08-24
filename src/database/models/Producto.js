module.exports = (sequelize, dataTypes) => {
    let alias = 'producto';
    let cols = {
        idProducto: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        }, 
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombreProducto: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.TEXT(),
            allowNull: true
        },
        precio: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        fkTipoPersona: {
            type: dataTypes.INTEGER(),
            allowNull: false,
            references: {
                model: "tipopersona",
                key: "idtipo"
              }
        },
        fkCategoria: {
            type: dataTypes.INTEGER(),
            allowNull: false,
            references: {
                model: "categoria", 
                key: 'idcategoria'
              }
        },
        imagen: {
            type: dataTypes.STRING(200),
            allowNull: true
        }
    };
    let config = {
         timestamps: false,
         createdAt: 'created_at',
         updatedAt: 'updated_at',
         deletedAt: false,
         freezeTableName: true
    };
    const producto = sequelize.define(alias, cols, config); 

    producto.associate = function (models) {
        
        models.categoria.hasMany(models.producto, {
            foreignKey: 'fkCategoria'
        });

        models.producto.belongsTo(models.categoria);

    };
    
    return producto;
};
module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductoTalle'; 
    let cols = {
        idpt: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        fkTalle: {
            type: dataTypes.INTEGER(11),
            references: {
                model: models.Talle, 
                key: 'idTalle'
              }
        },
        fkProducto: {
            type: dataTypes.INTEGER(11),
            references: {
                model: Producto, 
                key: 'idProducto'
              }
        },
        cantidad:{
            type: dataTypes.INTEGER(11),
            allowNull: false 
        }
    };
     let config = {
    //     timestamps: true,
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at',
    //     deletedAt: false
     }
    const ProductoTalle = sequelize.define(alias,cols,config);

    ProductoTalle.associate = function (models) {
            Producto.belongsToMany(models.Talle, { through: models.ProductoTalle });
            Talle.belongsToMany(models.Producto, { through: models.ProductoTalle });
        }
    
        return ProductoTalle;
    };
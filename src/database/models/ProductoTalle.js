module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductoTalle'; 
    let cols = {
        idpt: {
            type: dataTypes.INT(11),
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        fkTalle: {
            type: dataTypes.INT(11),
            references: {
                model: Talle, 
                key: 'idTalle'
              }
        },
        fkProducto: {
            type: dataTypes.INT(11),
            references: {
                model: Producto, 
                key: 'idProducto'
              }
        },
        cantidad:{
            type: dataTypes.INT(11),
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
        Producto.belongsToMany(models.ProductoTalle, { 
            as: "Prodcuto",
            foreignKey: "fkTipoPersona"
        });

        Producto.belongsTo(models.TipoPersona);
    }

    return TipoPersona
};
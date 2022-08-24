module.exports = (sequelize, dataTypes) => {
    let alias = 'productotalle'; 
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
                model: "talle", 
                key: 'idTalle'
              }
        },
        fkProducto: {
            type: dataTypes.INTEGER(11),
            references: {
                model: "producto", 
                key: 'idProducto'
              }
        },
        cantidad:{
            type: dataTypes.INTEGER(11),
            allowNull: false 
        }
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
       deletedAt: false,
       freezeTableName: true
   };
    const productotalle = sequelize.define(alias,cols,config);

    productotalle.associate = function (models) {
        models.producto.belongsToMany(models.talle, { through: models.productotalle });
        models.talle.belongsToMany(models.producto, { through: models.productotalle });
    }

    return productotalle;
};
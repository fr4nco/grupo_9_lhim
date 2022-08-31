module.exports = (sequelize, dataTypes) => {
    let alias = 'producto';
    let cols = {
        idProducto: {
            type: dataTypes.INTEGER,
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
        fkTipoPersona:  dataTypes.INTEGER,
        fkCategoria: dataTypes.INTEGER,
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
        

        producto.belongsTo(models.categoria, {
            as: "categoria",
            foreignKey:"fkCategoria"
        });

        producto.belongsTo(models.tipopersona, {
            as:"tipopersona",
            foreignKey: "fkTipoPersona"
        });

        producto.belongsToMany(models.talle, {
            as: "talle",
            through: 'productotalle',
            foreignKey: 'fkProducto',
            otherKey: 'fkTalle',
            timestamps: false
        });
    }
  

    
    return producto;
};
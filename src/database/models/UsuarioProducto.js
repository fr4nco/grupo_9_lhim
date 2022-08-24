module.exports = (sequelize, dataTypes) => {
    let alias = 'usuarioproducto'; 
    let cols = {
        idup: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP
        fkProducto: {
            type: dataTypes.INTEGER(11),
            references: {
                model: "producto", 
                key: 'idProducto'
              }
        },
        fkUsuario: {
            type: dataTypes.INTEGER(11),
            references: {
                model: "usuario", 
                key: 'idUsuario'
              }
        },
        
        cantidad:{
            type: dataTypes.INTEGER(11),
            allowNull: false 
        },
        fkTalle: {
            type: dataTypes.INTEGER(11),
            references: {
                model: "talle", 
                key: 'idProducto'
              }
        },
        fecha: {
            type: dataTypes.DATE()
        },
        valorUnidad: {
            type: dataTypes.DECIMAL(11)
        },
        comprado: {
            type: dataTypes.TINYINT(1)
        }
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
       deletedAt: false,
       freezeTableName: true
   };
    const usuarioproducto = sequelize.define(alias,cols,config);

    usuarioproducto.associate = function (models) {
        models.producto.belongsToMany(models.usuario, { through: models.usuarioproducto });
        models.usuario.belongsToMany(models.producto, { through: models.usuarioproducto })
    }

    return usuarioproducto;
};
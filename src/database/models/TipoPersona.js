module.exports = (sequelize, dataTypes) => {
    let alias = 'TipoPersona'; 
    let cols = {
        idTipoPersona: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        TipoPersona: {
            type: dataTypes.STRING(70),
            allowNull: false
        }
    };
     let config = {
    //     timestamps: true,
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at',
    //     deletedAt: false
     }
    const TipoPersona = sequelize.define(alias,cols,config);

    TipoPersona.associate = function (models) {
        TipoPersona.hasMany(models.Producto, { 
            as: "Prodcuto",
            foreignKey: "fkTipoPersona"
        });

        Producto.belongsTo(models.TipoPersona);
    }

    return TipoPersona
};
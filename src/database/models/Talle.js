module.exports = (sequelize, dataTypes) => {
    let alias = 'Talle'; 
    let cols = {
        idTalle: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        talle: {
            type: dataTypes.STRING(20),
            allowNull: false
        }
    };
     let config = {
    //     timestamps: true,
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at',
    //     deletedAt: false
     }
    const Talle = sequelize.define(alias,cols,config);

    Talle.associate = function (models) {
        Talle.hasMany(models.ProductoTalle, { 
            as: "ProductoTalle",
            foreignKey: "fkTalle"
        });

    }

    return Talle;
};
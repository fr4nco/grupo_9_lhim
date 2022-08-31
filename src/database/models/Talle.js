module.exports = (sequelize, dataTypes) => {
    let alias = 'talle'; 
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
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
       deletedAt: false,
       freezeTableName: true
   };
    const talle = sequelize.define(alias,cols,config);

    talle.associate = function (models) {
        

        talle.belongsToMany(models.producto, {
            as: "producto",
            through: 'productotalle',
            foreignKey: 'fkTalle',
            otherKey: 'fkProducto',
            timestamps: false
        })

    }

    return talle;
};
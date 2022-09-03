module.exports = (sequelize, dataTypes) => {
    let alias = 'productotalle'; 
    let cols = {
        idpt: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        fkTalle: dataTypes.INTEGER(11),
        fkProducto: dataTypes.INTEGER(11),
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

    return productotalle;
};
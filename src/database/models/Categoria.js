module.exports = (sequelize, dataTypes) => {
    let alias = 'categoria'; 
    let cols = {
        idcategoria: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        categoria: {
            type: dataTypes.STRING(200),
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
    const categoria = sequelize.define(alias,cols,config);

    categoria.associate = function (models) {
        
        categoria.hasMany(models.producto, {
            as: "producto",
            foreignKey: "fkCategoria"
        });
    }

    return categoria;
};
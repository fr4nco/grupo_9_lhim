module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria'; 
    let cols = {
        idcategoria: {
            type: dataTypes.INT(11),
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
    //     timestamps: true,
    //     createdAt: 'created_at',
    //     updatedAt: 'updated_at',
    //     deletedAt: false
     }
    const Categoria = sequelize.define(alias,cols,config);

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto, { 
            as: "Producto",
            foreignKey: "fkCategoria"
        });

        Producto.belongsTo(models.Categoria);
    }

    return Categoria
};
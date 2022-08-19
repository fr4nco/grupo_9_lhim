module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        idProducto: {
            type: dataTypes.INTEGER(11).UNSIGNED,
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
        fkTipoPersona: {
            type: dataTypes.INTEGER(),
            allowNull: false
        },
        fkCategoria: {
            type: dataTypes.INTEGER(),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(200),
            allowNull: true
        }
    };
    let config = {
        // timestamps: true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    };
    const Producto = sequelize.define(alias, cols, config); 

    Producto.associate = function (models) {
        Actor.belongsToMany(models.Categoria, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "movies",
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }

    return Producto;
};
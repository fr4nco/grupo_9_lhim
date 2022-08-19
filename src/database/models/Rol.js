module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol'; 
    let cols = {
        idrol: {
            type: dataTypes.INT(11),
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        rol: {
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
    const Rol = sequelize.define(alias,cols,config);

    Rol.associate = function (models) {
        Rol.hasMany(models.Usuario, { 
            as: "Usuario",
            foreignKey: "fkRol"
        });

        Usuario.belongsTo(models.Rol);
    }

    return Rol
};
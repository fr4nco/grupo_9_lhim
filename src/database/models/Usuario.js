module.exports = (sequelize, dataTypes) => {
    let alias = "usuario";
    let cols = {
        idUsuario: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        fechaNac: {
            type: dataTypes.DATE(),
            allowNull: false
        },
        correo: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        contrasena: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        foto: {
            type: dataTypes.STRING(100)
        }
        ,
        fkRol: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: "rol", 
                key: 'idrol'
              }
        },
        hombre: {
            type: dataTypes.TINYINT(4)
            
        }

    };


    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
       deletedAt: false,
       freezeTableName: true
   };
    const usuario = sequelize.define(alias, cols, config); 

    usuario.associate = function (models) {

    usuario.belongsTo(models.rol, {
        as: "rol",
        foreignKey:"fkRol"
    });
    }
    return usuario;
};
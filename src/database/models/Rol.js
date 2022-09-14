module.exports = (sequelize, dataTypes) => {
    let alias = 'rol'; 
    let cols = {
        idrol: {
            type: dataTypes.INTEGER(11),
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
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
       deletedAt: false,
       freezeTableName: true
   };
    const rol = sequelize.define(alias,cols,config);

    rol.associate = function (models) {
        
        rol.hasMany(models.usuario, {
            as: "usuario",
            foreignKey: "fkRol"
        });
    }


    return rol;
};
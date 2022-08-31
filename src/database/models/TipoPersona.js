module.exports = (sequelize, dataTypes) => {
    let alias = 'tipopersona';
    let cols = {
        idtipo: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        persona: {
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
    const tipopersona = sequelize.define(alias, cols, config);

    tipopersona.associate = function (models) {
        
        tipopersona.hasMany(models.producto, {
            as: "producto",
            foreignKey: "fkTipoPersona"
        });

    }

    return tipopersona;
};
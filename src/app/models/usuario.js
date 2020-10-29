import DataTypes, { Model } from "sequelize";

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        login: DataTypes.STRING,
        senha: DataTypes.STRING,
        email: DataTypes.STRING
      },
      {
        sequelize
      }
    );

    return Usuario;
  }

  static associate(models) {
    this.hasOne(models.TipoUsuario, {
      as: "tipo",
      foreignKey: "id"
    });
  }
}

export default Usuario;

import DataTypes, { Model } from "sequelize";

class TipoUsuario extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: DataTypes.STRING
      },
      {
        sequelize
      }
    );

    return TipoUsuario;
  }

  static associate(models) {}
}

export default TipoUsuario;

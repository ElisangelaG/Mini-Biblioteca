import DataTypes, { Model } from "sequelize";

class TipoObra extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: DataTypes.STRING
      },
      {
        sequelize
      }
    );

    return TipoObra;
  }

  static associate(models) {}
}

export default TipoObra;

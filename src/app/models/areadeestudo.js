import DataTypes, { Model } from "sequelize";

class AreaDeEstudo extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: DataTypes.STRING
      },
      {
        sequelize
      }
    );

    return AreaDeEstudo;
  }

  static associate(models) {}
}

export default AreaDeEstudo;

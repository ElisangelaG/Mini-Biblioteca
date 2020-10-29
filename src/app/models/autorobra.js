import DataTypes, { Model } from "sequelize";

class AutorObras extends Model {
  static init(sequelize) {
    super.init(
      {
        autorId: DataTypes.INTEGER,
        obraId: DataTypes.INTEGER
      },
      {
        sequelize
      }
    );

    return AutorObras;
  }

  static associate(models) {}
}

export default AutorObras;

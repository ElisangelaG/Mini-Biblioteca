import DataTypes, { Model } from "sequelize";

class AutorObras extends Model {
  static init(sequelize) {
    super.init(
      {
        autor_id: DataTypes.INTEGER,
        obra_id: DataTypes.INTEGER
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

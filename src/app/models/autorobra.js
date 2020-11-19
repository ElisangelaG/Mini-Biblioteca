import DataTypes, { Model } from "sequelize";

class AutorObra extends Model {
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

    return AutorObra;
  }

  static associate(models) {}
}

export default AutorObra;

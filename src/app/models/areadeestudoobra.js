import DataTypes, { Model } from "sequelize";

class AreaDeEstudoObra extends Model {
  static init(sequelize) {
    super.init(
      {
        area_de_estudo_id: DataTypes.INTEGER,
        obra_id: DataTypes.INTEGER
      },
      {
        sequelize
      }
    );

    return AreaDeEstudoObra;
  }

  static associate(models) {}
}

export default AreaDeEstudoObra;

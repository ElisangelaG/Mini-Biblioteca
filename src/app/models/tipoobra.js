import DataTypes, { Model } from "sequelize";
import Obra from "./obra";

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

  static associate(models) {
      this.hasMany(Obra)
  }
}

export default TipoObra;
